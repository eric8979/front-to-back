from flask import Flask
from flask import request

app = Flask(__name__)

# API
@app.route("/")
def index():
    nums = request.args
    if ('num1' in nums) and ('num2' in nums):
        res = int(nums['num1']) * int(nums['num2'])
        return str(res)
    return "No Valid Input"

