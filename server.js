const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const cors = require('cors');
const os = require('os');

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// Serve frontend static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Health check endpoint for Railway
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Main variables to store current state
let systemState = {
  voltage: 0.0,
  current: 0.0,
  batteryPercent: 0,
  lightStatus: false, // 5V light output
  nightMode: false, // From IR sensors / ambient light
  espConnected: false // Track ESP32 connection status
};

// Handle WebSocket connections
io.on('connection', (socket) => {
  console.log(`New client connected: ${socket.id}`);

  // Send current state to newly connected client
  socket.emit('updateState', systemState);

  // ESP32 sends updated sensor data
  socket.on('esp_data', (data) => {
    systemState = { ...systemState, ...data };
    systemState.espConnected = true; // Ensure it's marked connected if sending data
    // Broadcast updated state to all web clients
    io.emit('updateState', systemState);
  });

  // ESP32 explicitly registers on connection
  socket.on('register_esp', () => {
    systemState.espConnected = true;
    console.log(`ESP32 Registered: ${socket.id}`);
    io.emit('updateState', systemState);
    
    socket.on('disconnect', () => {
      systemState.espConnected = false;
      console.log('ESP32 Disconnected');
      io.emit('updateState', systemState);
    });
  });

  // Web App sends command to ESP32 (e.g., force toggle light)
  socket.on('toggle_light', (status) => {
    systemState.lightStatus = status;
    // Broadcast command to ESP32
    io.emit('command', { type: 'light', value: status });
    // Update all clients with new state
    io.emit('updateState', systemState);
  });

  socket.on('disconnect', () => {
    console.log(`Client disconnected: ${socket.id}`);
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
  
  // Print local IP addresses for easy ESP32 configuration
  const interfaces = os.networkInterfaces();
  console.log('\n--- Network IPs for ESP32 Firmware ---');
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        console.log(` -> ${iface.address} (${name})`);
      }
    }
  }
  console.log('----------------------------------------\n');
});
