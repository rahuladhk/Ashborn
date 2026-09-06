import subprocess

def stop_hotspot():
    result = subprocess.run(
        ['StopH.bat'],
        capture_output=True,
        text=True,
        shell=True
    )

    return result.stdout + result.stderr