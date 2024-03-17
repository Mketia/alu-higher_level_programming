#!/usr/bin/python3
"""Defines a function for appending file."""


def append_write(filename="", text=""):
    """Appends a string to the end of a UTF8 text file.

    Args:
        filename (str): The filename to append to.
        text (str): The string to be appended to the file.
    Returns:
        The number of appended characters.
    """
    with open(filename, "a", encoding="utf-8") as f:
        return f.write(text)
