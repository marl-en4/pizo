# PiezoPower Server — نظام الطاقة البيزوإلكتريك

Real-time IoT server connecting ESP32 hardware to a web dashboard using Socket.io.

## 🚀 Deploy on Railway

This project is ready to deploy on [Railway](https://railway.app).

### Steps:
1. Push this `server/` folder to a GitHub repository
2. Go to [railway.app](https://railway.app) → **New Project** → **Deploy from GitHub Repo**
3. Select your repository
4. Railway will auto-detect Node.js and use `npm start`
5. After deploy, copy the Railway URL (e.g. `https://your-app.up.railway.app`)

## 🔧 Update ESP32 Firmware

After deploying, update the ESP32 firmware with the Railway URL:

```cpp
// In esp32/main.ino — replace with your Railway URL:
const char* serverHost = "your-app.up.railway.app";
const int serverPort = 80;  // Railway uses port 80 externally
```

## 📁 Project Structure

```
server/
├── server.js          ← Main Node.js + Socket.io server
├── package.json       ← Dependencies & start script
├── railway.json       ← Railway deployment configuration
├── .gitignore         ← Excludes node_modules
└── public/
    ├── index.html     ← Main dashboard
    ├── simulation.html← Interactive simulation page
    ├── styles.css     ← Glassmorphism UI styles
    └── app.js         ← Frontend Socket.io + Chart.js logic
```

## 🛠 Local Development

```bash
cd server
npm install
npm start
# → Open http://localhost:3000
```

## 🔌 Socket.io Events

| Event | Direction | Description |
|-------|-----------|-------------|
| `register_esp` | ESP32 → Server | ESP32 announces connection |
| `esp_data` | ESP32 → Server | Sends voltage, current, battery data |
| `updateState` | Server → All | Broadcasts system state to all clients |
| `toggle_light` | Dashboard → Server | Toggle smart light command |
| `command` | Server → ESP32 | Relays light toggle to ESP32 |

## ⚙️ Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `3000` | Server port (Railway sets this automatically) |
