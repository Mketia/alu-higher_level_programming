#!/usr/bin/python3
"""Defines a function for file-writing"""


def write_file(filename="", text=""):
    """Write a string to UTF8 text file.

    Args:
        filename (str) : The name of the file to write.
        text (str): The text to write to the file.
    Returns:
        The number of written characters.
    """
    with open(filename, "w", encoding="utf-8") as f:
        return f.write(text)
