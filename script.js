const output = document.getElementById("output");
const outputStatus = document.getElementById("output-status");


function showOutput(message, status = "Completed") {

    outputStatus.textContent = status;

    output.innerHTML = "";

    const text = document.createElement("pre");
    text.textContent = message;

    output.appendChild(text);
}


/* =========================
   START HOTSPOT
========================= */

function startHotspot() {

    showOutput(
        "Starting Windows Hotspot...\n\nPlease wait...",
        "Running..."
    );

    // Python backend will be connected here
}


/* =========================
   STOP HOTSPOT
========================= */

function stopHotspot() {

    showOutput(
        "Stopping Windows Hotspot...\n\nPlease wait...",
        "Running..."
    );

    // Python backend will be connected here
}


/* =========================
   DRIVER INFORMATION
========================= */

function driverInfo() {

    showOutput(
        "Retrieving wireless driver information...\n\nPlease wait...",
        "Running..."
    );

    // Python backend will be connected here
}