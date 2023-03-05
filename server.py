from flask import Flask

# create a server instance
app = Flask(__name__)

@app.route('/')
def index():
    return "Print hi"

if __name__ == '__main__':
    #get the react?
    app.run(host="0.0.0.0", port=2023, debug=True)
