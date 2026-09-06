async function stopHotspot() {
    console.log("stopHotspot() was called");

    const output = document.getElementById("output");
    const outputStatus = document.getElementById("output-status");

    outputStatus.textContent = "Stopping...";
    output.innerHTML = "<p>Stopping Windows hotspot...</p>";

    try {
        console.log("Trying to connect to Flask...");

        const response = await fetch(
            "http://127.0.0.1:5000/Stop-Hotspot"
        );

        console.log("Response received:", response);

        const result = await response.json();

        console.log("Python result:", result);

        output.innerHTML = `<pre>${result.data}</pre>`;
        outputStatus.textContent = "Hotspot stopped";

    } catch (error) {
        console.error("ERROR:", error);

        output.innerHTML = `
            <p>Unable to connect to Python application.</p>
        `;

        outputStatus.textContent = "Connection failed";
    }
}

async function driverInfo() {
    console.log("driverInfo() was called");

    const output = document.getElementById("output");
    const outputStatus = document.getElementById("output-status");

    outputStatus.textContent = "Loading...";
    output.innerHTML = "<p>Connecting to Python...</p>";

    try {
        console.log("Trying to connect to Flask...");

        const response = await fetch(
            "http://127.0.0.1:5000/driver-details"
        );

        console.log("Response received:", response);

        const result = await response.json();

        console.log("Python result:", result);

        output.innerHTML = `<pre>${result.data}</pre>`;
        outputStatus.textContent = "Driver information loaded";

    } catch (error) {
        console.error("ERROR:", error);

        output.innerHTML = `
            <p>Unable to connect to Python application.</p>
        `;

        outputStatus.textContent = "Connection failed";
    }
}

async function systeminfo() {
    console.log("systeminfo() was called");

    const output = document.getElementById("output");
    const outputStatus = document.getElementById("output-status");

    outputStatus.textContent = "Loading...";
    output.innerHTML = "<p>Connecting to Python...</p>";

    try {
        console.log("Trying to connect to Flask...");

        const response = await fetch(
            "http://127.0.0.1:5000/System-info"
        );

        console.log("Response received:", response);

        const result = await response.json();

        console.log("Python result:", result);

        output.innerHTML = `<pre>${result.data}</pre>`;
        outputStatus.textContent = "System information loaded";

    } catch (error) {
        console.error("ERROR:", error);

        output.innerHTML = `
            <p>Unable to connect to Python application.</p>
        `;

        outputStatus.textContent = "Connection failed";
    }
}

async function ipConfigurations() {
    const output = document.getElementById("output");
    const outputStatus = document.getElementById("output-status");

    outputStatus.textContent = "Loading...";
    output.innerHTML = "<p>Getting IP configuration...</p>";

    try {
        const response = await fetch(
            "http://127.0.0.1:5000/ipconfig"
        );

        const result = await response.json();

        output.innerHTML = `<pre>${result.data}</pre>`;
        outputStatus.textContent = "IP configuration loaded";

    } catch (error) {
        console.error(error);

        output.innerHTML =
            "<p>Unable to connect to Python application.</p>";

        outputStatus.textContent = "Connection failed";
    }
}

async function saved_networks() {
    const output = document.getElementById("output");
    const outputStatus = document.getElementById("output-status");

    outputStatus.textContent = "Loading...";
    output.innerHTML = "<p>Getting Saved Networks...</p>";

    try {
        const response = await fetch(
            "http://127.0.0.1:5000/saved-networks"
        );

        const result = await response.json();

        output.innerHTML = `<pre>${result.data}</pre>`;
        outputStatus.textContent = "Saved Networks loaded";

    } catch (error) {
        console.error(error);

        output.innerHTML =
            "<p>Unable to connect to Python application.</p>";

        outputStatus.textContent = "Connection failed";
    }
}

function scrollToOutput() {
    const outputSection = document.querySelector(".output-section");

    if (outputSection) {
        outputSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}