import subprocess
import re

def systeminfo():
    result = subprocess.run(
        ['systeminfo'],
        capture_output=True,
        text=True
    )

    return result.stdout

def ipconfig():
    result = subprocess.run(
        ['ipconfig', '/all'],
        capture_output=True,
        text=True
    )

    return result.stdout

def stop_hotspot():
    result = subprocess.run(
        ['StopH.bat'],
        capture_output=True,
        text=True,
        shell=True
    )

    return result.stdout + result.stderr

def driver_details():
    result = subprocess.run(
        ['netsh', 'wlan', 'show', 'driver'],
        capture_output=True,
        text=True
    )

    return result.stdout

def saved_networks():
    net=subprocess.run(['netsh', 'wlan', 'show', 'profiles'], capture_output=True).stdout.decode()
    names=re.findall('All User Profile     : (.*)\r', net)
    result=''
    for ssid in names:
        profiles=subprocess.run(['netsh', 'wlan', 'show', 'profiles', ssid, 'key=clear'], capture_output=True).stdout.decode()
        key=re.findall('Key Content            : (.*)\r', profiles)
        if len(key)>0:
            result+='SSID          : '+ssid+ '\n'
            result+='Password      : '+key[0]+'\n\n'
        else:
            result+="SSID          : "+ssid+'\n'
            result+="Password      : "+"None"+'\n\n'
            
    return result