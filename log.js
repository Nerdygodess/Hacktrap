// Simulating dynamic log entries
const logsList = document.getElementById('logs-list');

// Sample log entries
const logMessages = [
    "System initialized. Monitoring for threats...",
    "New attack detected: SQL Injection attempt.",
    "Malware blocked: Trojan Horse detected.",
    "Threat level increased: Medium.",
    "System health is at 80%.",
    "New vulnerability detected in honeypot configuration.",
    "New attack detected: Brute Force login attempt.",
    "Threat level decreased: Low. System stabilized.",
    "Network intrusion attempt blocked: IP 192.168.1.100.",
    "Attack detected from suspicious IP: 10.0.0.5. Blocking access.",
    "Alert triggered: Unusual traffic detected from IP 172.16.5.22."
];

// Function to add log entries to the logs list
function generateLog(logMessage) {
    const timestamp = new Date().toLocaleTimeString();
    const logItem = document.createElement('li');
    logItem.innerHTML = `<span>[${timestamp}]</span> ${logMessage}`;
    logsList.appendChild(logItem);
}

// Automatically generate a log every 5 seconds (simulate log activity)
setInterval(() => {
    const randomLog = logMessages[Math.floor(Math.random() * logMessages.length)];
    generateLog(randomLog);
}, 5000);

// Load some initial logs on page load
window.onload = () => {
    // Populate with a few logs initially
    logMessages.slice(0, 5).forEach(logMessage => generateLog(logMessage));
};
function addLog(logMessage) {
    const timestamp = new Date().toLocaleTimeString();
    const logItem = document.createElement('li');
    logItem.innerHTML = `<span>[${timestamp}]</span> <strong>HackTrap:</strong> ${logMessage}`;
    logsList.appendChild(logItem);
}
