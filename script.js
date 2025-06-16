// Fake "live" data updates
setInterval(() => {
    document.getElementById('attacks').textContent = 
        Math.floor(Math.random() * 100);
    document.getElementById('hackers').textContent = 
        Math.floor(Math.random() * 20);
    
    const threats = ["LOW", "MEDIUM", "HIGH"];
    document.getElementById('threat').textContent = 
        threats[Math.floor(Math.random() * 3)];
    
    // Add fake logs
    const logs = [
        "⚠️ Suspicious login attempt from 192.168.1.45",
        "🚨 Brute-force attack detected on /admin",
        "🛡️ Blocked SQL injection from 45.67.89.12",
        "🔒 IP 34.56.78.90 added to blacklist"
    ];
    const randomLog = logs[Math.floor(Math.random() * logs.length)];
    const logEntry = document.createElement("li");
    logEntry.textContent = `[${new Date().toLocaleTimeString()}] ${randomLog}`;
    document.getElementById('logs').prepend(logEntry);
    
    // Keep logs from growing infinitely
    if (document.getElementById('logs').children.length > 8) {
        document.getElementById('logs').lastChild.remove();
    }
}, 3000);