import pymongo
from pymongo import MongoClient

cluster = MongoClient("mongodb+srv://hacktj:dgShcYfHzFwWA1R7@infocluster.elt8tj3.mongodb.net/?retryWrites=true&w=majority")
db = cluster["InfoCluster"]
collection = db["Users"]

collection.insert_one({"name":"medha", "predicted-time":"60", "actual-time":"20"})