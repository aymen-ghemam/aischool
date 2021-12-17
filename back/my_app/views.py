from flask import Flask, json, request, jsonify
from flask_restful import Api, Resource
from flask_cors import CORS, cross_origin

from my_app import app
from my_app import models
from my_app.exceptions import *

api = Api(app)
CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)
app.config['CORS_HEADERS'] = 'Content-Type'

userObj = models.User()

class user(Resource):
    def post(self):

        try:
            identified, value = userObj.login(request.json["email"], request.json["password"])
        except IDNotFoundError as e:
            return jsonify({"IDError" : "ID not Found Error"})
        else:
            if (identified):
                return jsonify({"Success" : value})
            else:
                return jsonify({"passwordError": "password incorect"})
api.add_resource(user, '/user')


if __name__ == "__main__":
    app.run()
