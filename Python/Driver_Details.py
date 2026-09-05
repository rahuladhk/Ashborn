import subprocess

def driver_details():
    result = subprocess.run(
        ['netsh', 'wlan', 'show', 'driver'],
        capture_output=True,
        text=True
    )

    return result.stdout