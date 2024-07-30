from flask import Flask, jsonify
from pymongo import MongoClient

app = Flask(__name__)

# MongoDB connection details
MONGO_URI = "mongodb://localhost:27017/"
DB_NAME = "flightstatusDB"

client = MongoClient(MONGO_URI)
db = client[DB_NAME]
collection = db["flights"]

@app.route('/', methods=['GET'])
def home():
    return "Welcome to the Flight Status API"

@app.route('/flights', methods=['GET'])
def get_flights():
    flights = list(collection.find({}, {'_id': 0}))
    return jsonify(flights)

if __name__ == '__main__':
    app.run(debug=True)
