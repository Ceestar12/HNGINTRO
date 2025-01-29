function updateTime() {
    const utcTime = new Date().toUTCString();
    document.getElementById("utc-time").textContent = utcTime;
}

setInterval(updateTime, 1000);
updateTime();
