// ==========================================
// Language Dictionary
// ==========================================
const translations = {
    ar: {
        app_title: "نظام الطاقة البيزوإلكتريك",
        nav_energy: "الطاقة",
        nav_simulation: "المحاكاة",
        nav_info: "معلومات",
        street_id_title: "معرف الشارع الحالي",
        street_name: "شارع المركز الطلابي، جامعة الموصل",
        battery_level: "الطاقة المخزنة (البطارية)",
        current_voltage: "الفولتية الحالية",
        current_amp: "التيار المتولد",
        light_control: "التحكم بالإضاءة الذكية",
        light_on: "مضاء",
        light_off: "مطفأ",
        sim_title: "محاكاة المشروع التفاعلية",
        sim_desc: "قم بمحاكاة حركة المشاة وعمليات الشحن لمعرفة مقدار الطاقة المنتجة والمستهلكة.",
        sim_walking: "المشاة (توليد طاقة)",
        sim_charging: "شحن الهواتف (استهلاك)",
        total_energy: "الطاقة الإجمالية (واط)",
        sim_status_text: "حالة النظام",
        info_title: "عن مشروع الطاقة المستدامة",
        info_desc_1: "مشروع مبتكر يهدف إلى استغلال الطاقة الحركية المهدورة من حركة أقدام المشاة داخل جامعة الموصل باستخدام تقنية (Piezoelectric) وتحويلها إلى طاقة كهربائية مستدامة.",
        faq_title: "أسئلة شائعة (Q&A)",
        q1: "ما هي الفائدة من هذا المشروع؟",
        a1: "توفير مصدر طاقة نظيف غير منقطع لإضاءة ممرات الجامعة وشحن الأجهزة المحمولة للطلبة، إضافة إلى نشر ثقافة الاستدامة.",
        q2: "كيف تعمل تقنية البيزوالكتريك؟",
        a2: "عندما يضغط الشخص بقدمه على الأرضيات المجهزة، يتولد ضغط ميكانيكي على بلورات البيزوالكتريك التي تنتج فرق جهد كهربائي.",
        q3: "كم عدد الأقراص المستخدمة في النموذج؟",
        a3: "يحتوي النموذج على 30 قرصاً موزعة بشكل مدروس لتغطية الطريق، تولد فولتية تتراوح بين 3 إلى 15 فولت لكل ضغطة بتيار يقدر بـ 0.04 أمبير، ويتم جمعها لشحن بطاريات الليثيوم.",
        footer_text: "تم التطوير لبحث علمي أكاديمي - جامعة الموصل © 2026",
        sim_status_charging: "جاري الشحن/الاستهلاك",
        sim_status_generating: "جاري توليد الطاقة",
        sim_status_stable: "مستقر",
        chart_24h_title: "تباين الطاقة خلال 24 ساعة",
        chart_demo_mode: "وضع العرض التجريبي",
        chart_legend_generated: "الطاقة المولدة (mWh)",
        chart_legend_battery: "شحن البطارية (%)",
        chart_legend_voltage: "الفولتية (V)",
        chart_note: "القيم الحقيقية ستُعرض تلقائياً عند توصيل النظام بالخادم",
        stat_steps: "خطوات اليوم",
        stat_energy_today: "طاقة اليوم (mWh)",
        stat_peak: "ساعة الذروة",
        stat_co2: "CO₂ موفّر (g)",
        kn_discs: "قرص بيزوإلكتريك",
        kn_voltage: "فولت / ضغطة",
        kn_current: "أمبير / ضغطة",
        kn_efficiency: "كفاءة النظام",
        kn_lifespan: "سنوات تشغيل",
        kn_daily_steps: "خطوة يومياً",
        how_works_title: "كيف يعمل النظام؟",
        tl1_title: "الضغط الميكانيكي",
        tl1_desc: "يضغط الطالب على بلاطة مجهزة بأقراص بيزوإلكتريك أثناء المشي عبر الممر",
        tl2_title: "توليد الكهرباء",
        tl2_desc: "تتحول الطاقة الميكانيكية إلى فولتية كهربائية متناوبة عبر تأثير البيزوإلكتريك المباشر",
        tl3_title: "التقويم والتنظيم",
        tl3_desc: "دائرة Full-Bridge Rectifier تحوّل التيار المتناوب إلى مستمر ثم منظم جهد يثبّته عند 5V",
        tl4_title: "التخزين والاستخدام",
        tl4_desc: "تُشحن بطاريات الليثيوم أيون 3.7V وتُستخدم لإضاءة ممرات الجامعة ليلاً",
        components_title: "مكونات النظام",
        comp1_name: "أقراص PZT-5A",
        comp1_desc: "30 قرص بيزوإلكتريك موزعة بشكل مدروس",
        comp2_name: "دائرة التقويم",
        comp2_desc: "Full-Bridge Rectifier لتحويل AC إلى DC",
        comp3_name: "منظم الجهد LM7805",
        comp3_desc: "يثبّت الجهد الخارج عند 5V بثبات",
        comp4_name: "بطاريات Li-Ion 3.7V",
        comp4_desc: "تخزن الطاقة المتولدة للاستخدام الليلي",
        comp5_name: "وحدة ESP32",
        comp5_desc: "معالجة البيانات والاتصال اللاسلكي",
        comp6_name: "Socket.io Wi-Fi",
        comp6_desc: "إرسال البيانات اللحظية للوحة التحكم",
        q4: "ما هي كفاءة النظام الكلية؟",
        a4: "تبلغ الكفاءة الكلية حوالي 60–70% بعد تحسين دوائر التقويم والتنظيم. مع حركة 1000 خطوة يومياً يمكن توليد ما يكفي لتشغيل 3–5 مصابيح LED لعدة ساعات.",
        q5: "هل يمكن توسيع النظام مستقبلاً؟",
        a5: "نعم، التصميم قابل للتوسع. يمكن تركيب البلاطات في مداخل المباني الرئيسية والمسارات الأكثر ازدحاماً لمضاعفة الطاقة المولدة عشرات المرات.",
        q6: "ما العمر التشغيلي للأقراص؟",
        a6: "تتحمل أقراص PZT-5A أكثر من 10 مليون دورة ضغط، ما يعني عمراً تشغيلياً يتجاوز 10 سنوات في ظروف الاستخدام الجامعي.",
        q7: "ما الأثر البيئي للمشروع؟",
        a7: "يُسهم المشروع في خفض البصمة الكربونية للجامعة؛ كل 1 kWh من الطاقة البيزوإلكترية يعوّض نحو 500 غرام من انبعاثات CO₂ مقارنةً بالكهرباء التقليدية.",
        esp_connected: "متصل (ESP32)",
        esp_disconnected: "غير متصل (ESP32)"
    },
    en: {
        app_title: "Piezoelectric Energy System",
        nav_energy: "Energy",
        nav_simulation: "Simulation",
        nav_info: "Information",
        street_id_title: "Current Street ID",
        street_name: "Student Center St, University of Mosul",
        battery_level: "Stored Energy (Battery)",
        current_voltage: "Current Voltage",
        current_amp: "Generated Current",
        light_control: "Smart Lighting Control",
        light_on: "ON",
        light_off: "OFF",
        sim_title: "Interactive Simulation",
        sim_desc: "Simulate pedestrian traffic and mobile charging to visualize energy generation and consumption.",
        sim_walking: "Pedestrians (Generate Energy)",
        sim_charging: "Phone Charging (Consume)",
        total_energy: "Total Energy (Watts)",
        sim_status_text: "System Status",
        info_title: "About Sustainable Energy Project",
        info_desc_1: "An innovative project aiming to harvest wasted kinetic energy from pedestrians in the University of Mosul using Piezoelectric technology, converting it into sustainable electricity.",
        faq_title: "Frequently Asked Questions (Q&A)",
        q1: "What are the benefits of this project?",
        a1: "Providing uninterruptible clean power to light university walkways and charge students' mobile devices, while promoting sustainability.",
        q2: "How does Piezoelectric tech work?",
        a2: "When pressure is applied to the embedded tiles, mechanical stress alters the piezoelectric crystals, generating an electrical potential difference.",
        q3: "How many discs are used in the model?",
        a3: "The layout uses 30 discs optimally spaced along the road. Each step generates 3-15V and around 0.04A. The resulting power is harvested into lithium batteries.",
        footer_text: "Developed for Academic Research - University of Mosul © 2026",
        sim_status_charging: "Consuming Power",
        sim_status_generating: "Generating Power",
        sim_status_stable: "Stable",
        chart_24h_title: "24-Hour Energy Variation",
        chart_demo_mode: "Demo Mode",
        chart_legend_generated: "Generated Energy (mWh)",
        chart_legend_battery: "Battery Charge (%)",
        chart_legend_voltage: "Voltage (V)",
        chart_note: "Real values will be displayed automatically when connected to server",
        stat_steps: "Steps Today",
        stat_energy_today: "Energy Today (mWh)",
        stat_peak: "Peak Hour",
        stat_co2: "CO₂ Saved (g)",
        kn_discs: "Piezoelectric Discs",
        kn_voltage: "Volts / Step",
        kn_current: "Amps / Step",
        kn_efficiency: "System Efficiency",
        kn_lifespan: "Years Lifespan",
        kn_daily_steps: "Daily Steps",
        how_works_title: "How does it work?",
        tl1_title: "Mechanical Pressure",
        tl1_desc: "Student steps on a tile equipped with piezo discs",
        tl2_title: "Electricity Generation",
        tl2_desc: "Mechanical energy converts to AC voltage via direct piezoelectric effect",
        tl3_title: "Rectification & Regulation",
        tl3_desc: "Full-Bridge Rectifier converts AC to DC, then a regulator stabilizes it at 5V",
        tl4_title: "Storage & Usage",
        tl4_desc: "Li-ion 3.7V batteries are charged and used to light walkways at night",
        components_title: "System Components",
        comp1_name: "PZT-5A Discs",
        comp1_desc: "30 properly distributed piezo discs",
        comp2_name: "Rectifier Circuit",
        comp2_desc: "Full-Bridge Rectifier to convert AC to DC",
        comp3_name: "LM7805 Regulator",
        comp3_desc: "Stabilizes output voltage at 5V",
        comp4_name: "Li-Ion 3.7V Batteries",
        comp4_desc: "Store generated energy for night use",
        comp5_name: "ESP32 Module",
        comp5_desc: "Data processing and wireless communication",
        comp6_name: "Socket.io Wi-Fi",
        comp6_desc: "Send real-time data to dashboard",
        q4: "What is the overall system efficiency?",
        a4: "The overall efficiency is about 60-70%. With 1000 steps daily, it can power 3-5 LED lights for several hours.",
        q5: "Can the system be expanded?",
        a5: "Yes, the design is scalable. Tiles can be installed at main entrances and crowded paths to multiply energy generation.",
        q6: "What is the lifespan of the discs?",
        a6: "PZT-5A discs can withstand over 10 million compression cycles, meaning a lifespan of over 10 years in university usage.",
        q7: "What is the environmental impact?",
        a7: "It helps reduce the university's carbon footprint; every 1 kWh of piezo energy offsets ~500g of CO₂ emissions.",
        esp_connected: "Connected (ESP)",
        esp_disconnected: "Disconnected (ESP)"
    }
};

let currentLang = 'ar';

// ==========================================
// Initialization & Socket.io handling
// ==========================================
// Connect to real-time server (if running)
const socket = (typeof io !== 'undefined') ? io() : null;

document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    initThemeToggle();
    initLangToggle();
    initAccordion();
    initDemoChart();

});

let myChart = null;
function initDemoChart() {
    const ctx = document.getElementById('energy24hChart');
    if (!ctx) return;

    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'],
            datasets: [
                {
                    label: 'Generated Energy (mWh)',
                    data: [10, 5, 20, 150, 230, 200, 80, 40],
                    borderColor: '#4ade80',
                    backgroundColor: 'rgba(74, 222, 128, 0.1)',
                    tension: 0.4,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: { grid: { color: 'rgba(255,255,255,0.05)' } },
                x: { grid: { color: 'rgba(255,255,255,0.05)' } }
            }
        }
    });
}

function initAccordion() {
    const toggles = document.querySelectorAll('.acc-toggle');
    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const item = toggle.parentElement;
            item.classList.toggle('active');
            const arrow = toggle.querySelector('.acc-arrow');
            if (item.classList.contains('active')) {
                arrow.style.transform = 'rotate(180deg)';
            } else {
                arrow.style.transform = 'rotate(0deg)';
            }
        });
    });
}

// ==========================================
// Web Sockets logic for ESP32 real integration
// ==========================================
if (socket) {
    socket.on('updateState', (state) => {
        // Only update UI if we are looking at real data (not heavy simulation override)
        document.getElementById('batteryPercent').innerText = state.batteryPercent;
        document.getElementById('batteryBar').style.width = state.batteryPercent + '%';
        document.getElementById('voltageValue').innerText = state.voltage.toFixed(2);
        document.getElementById('currentValue').innerText = state.current.toFixed(2);

        const espBadge = document.getElementById('espStatusBadge');
        const espText = document.getElementById('espStatusText');
        if (espBadge && espText) {
            if (state.espConnected) {
                espBadge.classList.remove('disconnected');
                espBadge.classList.add('connected');
                espText.innerText = translations[currentLang].esp_connected;
            } else {
                espBadge.classList.remove('connected');
                espBadge.classList.add('disconnected');
                espText.innerText = translations[currentLang].esp_disconnected;
            }
        }

        const lightSwitch = document.getElementById('lightSwitch');
        lightSwitch.checked = state.lightStatus;
        updateLightText(state.lightStatus);
    });

    document.getElementById('lightSwitch').addEventListener('change', (e) => {
        const isChecked = e.target.checked;
        updateLightText(isChecked);
        socket.emit('toggle_light', isChecked);
    });
} else {
    // No server connected fallback
    document.getElementById('lightSwitch').addEventListener('change', (e) => {
        updateLightText(e.target.checked);
    });
}

function updateLightText(isOn) {
    const el = document.getElementById('lightStatusText');
    if (isOn) {
        el.innerText = translations[currentLang].light_on;
        el.style.color = 'var(--primary-color)';
    } else {
        el.innerText = translations[currentLang].light_off;
        el.style.color = 'inherit';
    }
}

// ==========================================
// UI Functions (Tabs, Theme, Language)
// ==========================================
function initTabs() {
    const btns = document.querySelectorAll('.nav-btn');
    const contents = document.querySelectorAll('.tab-content');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const target = document.getElementById(btn.getAttribute('data-target'));
            target.classList.add('active');
        });
    });
}

function initThemeToggle() {
    const btn = document.getElementById('themeToggle');
    const body = document.getElementById('bodyId');
    const icon = btn.querySelector('i');

    btn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            icon.classList.replace('fa-sun', 'fa-moon');
        } else {
            icon.classList.replace('fa-moon', 'fa-sun');
        }
    });
}

function initLangToggle() {
    const btn = document.getElementById('langToggle');
    btn.addEventListener('click', () => {
        currentLang = currentLang === 'ar' ? 'en' : 'ar';

        // Update DOM direction
        document.documentElement.lang = currentLang;
        document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

        // Update Button text
        btn.innerHTML = currentLang === 'ar' ? '<i class="fa-solid fa-language"></i> EN' : '<i class="fa-solid fa-language"></i> AR';

        // Apply translations
        document.querySelectorAll('[data-lang]').forEach(el => {
            const key = el.getAttribute('data-lang');
            if (translations[currentLang][key]) {
                el.innerText = translations[currentLang][key];
            }
        });

        // Retrigger dynamic states to fit language
        updateLightText(document.getElementById('lightSwitch').checked);
    });
}


