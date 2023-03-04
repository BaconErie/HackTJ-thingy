import pymongo
from pymongo import MongoClient

cluster = MongoClient("mongodb+srv://hacktj-data.sylqexe.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority")
db = cluster["hackTJ-data"]
collection = db["Users"]

collection.insert_one({"name":"medha", "predicted-time":"60", "actual-time":"20"})