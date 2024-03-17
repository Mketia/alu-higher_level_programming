#!/usr/bin/python3
"""Defines a function for JSON file writing"""
import json


def save_to_json_file(my_obj, filename):
    """Write an ibject to text file using JSON representation."""
    with open(filename, "w") as f:
        json.dump(my_obj, f)
