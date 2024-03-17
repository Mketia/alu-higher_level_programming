#!/usr/bin/python3
"""Defines a Python function for class-to-JSON"""


def class_to_json(obj):
    """Return the dictionary representation of a simple data structure"""
    return obj.__dict__
