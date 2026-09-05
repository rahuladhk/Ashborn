from flask import Flask, jsonify
from flask_cors import CORS
from Driver_Details import driver_details

app = Flask(__name__)

CORS(app)

@app.route('/driver-details')
def get_driver_details():
    result = driver_details()

    return jsonify({
        "success": True,
        "data": result
    })

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000)