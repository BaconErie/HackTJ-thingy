from flask import Flask
from is_blocked import is_blocked

app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello world!'

@app.route('/is_blocked')
def is_blocked_route():
    # is_blocked([LIST OF CATEGORY STRINGS], url)