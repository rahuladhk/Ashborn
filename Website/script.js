async function driverInfo() {
    const output = document.getElementById("output");
    const outputStatus = document.getElementById("output-status");

    outputStatus.textContent = "Loading...";

    output.innerHTML = `
        <p>Getting wireless driver information...</p>
    `;

    try {
        const response = await fetch(
            "http://127.0.0.1:5000/driver-details"
        );

        const result = await response.json();

        if (result.success) {
            output.innerHTML = `
                <pre>${result.data}</pre>
            `;

            outputStatus.textContent = "Driver information loaded";
        } else {
            output.innerHTML = `
                <p>Unable to get driver information.</p>
            `;

            outputStatus.textContent = "Error";
        }

    } catch (error) {
        output.innerHTML = `
            <p>
                Unable to connect to the Python application.
                Make sure the Python server is running.
            </p>
        `;

        outputStatus.textContent = "Connection failed";

        console.error(error);
    }
}