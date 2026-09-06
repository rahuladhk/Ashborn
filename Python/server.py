from flask import Flask, jsonify
from flask_cors import CORS
from Core import systeminfo, ipconfig, stop_hotspot, driver_details, saved_networks

app = Flask(__name__)

CORS(app)

@app.route('/driver-details')
def get_driver_details():
    result = driver_details()

    return jsonify({
        "success": True,
        "data": result
    })
    
@app.route('/Stop-Hotspot')
def get_stop_Hotspot():
    result = stop_hotspot()

    return jsonify({
        "success": True,
        "data": result
    })

@app.route('/System-info')
def get_systeminfo():
    result = systeminfo()

    return jsonify({
        "success": True,
        "data": result
    })

@app.route('/ipconfig')
def get_ipconfig():
    result = ipconfig()

    return jsonify({
        "success": True,
        "data": result
    })

@app.route('/saved-networks')
def get_saved_networks():
    result = saved_networks()

    return jsonify({
        "success": True,
        "data": result
    })

print(app.url_map)

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000)