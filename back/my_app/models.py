import os
import json

from my_app.exceptions import *

class User:

    def __init__(self, json_path="data.json"):
        self.users = self.load_users(json_path)

    def load_users(self, file_path):
        """take path of json file and return list of users"""
        with open(file_path, 'r') as file:
            json_data = json.load(file)

        print(json_data)

        return json_data

    def login(self, identifiant, password, by_email=True):
        if by_email:
            # check email
            user = self.check_email(identifiant)
        else:
            # check matricule
            user = self.check_matricule(identifiant)

        # check password
        if user["password"] == password:
            return True, user
        else:
            return False, False

    def check_email(self, email):
        for user in self.users:
            if user["email"] == email:
                return user
        raise IDNotFoundError()

    def check_matricule(self, matricule):
        for user in self.users:
            if user["matricule"] == matricule:
                return user
        raise IDNotFoundError()
