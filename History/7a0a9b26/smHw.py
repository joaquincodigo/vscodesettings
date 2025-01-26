import os


def insert_lines(input_string, file_path):
  
    # Define the lines to insert
    lines_to_insert = [
        "<br/>",
        "<hr/>",
        "<br/>",
        f"<{input_string} />"
    ]

    # Read the contents of the file
    with open(file_path, 'r') as file:
        lines = file.readlines()

    # Find the index of the line containing "{/* Insertion Point */}"
    insertion_index = None
    for i, line in enumerate(lines):
        if "{/* Insertion Point */}" in line:
            insertion_index = i
            break

    if insertion_index is not None:
        # Insert the lines above the insertion point
        for line in reversed(lines_to_insert):
            lines.insert(insertion_index, line + '\n')

        # Write the updated contents back to the file
        with open(file_path, 'w') as file:
            file.writelines(lines)
        print("Lines inserted successfully.")
    else:
        print("Insertion point not found in the file.")


def create_jsx_file(input_string):
    # Determine the path for the new JSX file
    current_directory = os.getcwd()
    jsx_file_path = os.path.join(current_directory, f"{input_string}.jsx")

    # Create the contents of the JSX file
    jsx_content = f"""
import React from 'react';

function {input_string}() {{
  return (
    <div className="{input_string}">
      <p>Hello, I'm {input_string}</p>
    </div>
  );
}}

export default {input_string};
"""

    # Write the contents to the new JSX file
    with open(jsx_file_path, 'w') as jsx_file:
        jsx_file.write(jsx_content)
    print(f"JSX file '{input_string}.jsx' created successfully.")


def add_first_import(input_string, file_path):
    # Read the contents of the file
    with open(file_path, 'r') as file:
        lines = file.readlines()

    # Insert the new import statement as the first line
    new_import = f"import {input_string} from './{input_string}';\n"
    lines.insert(0, new_import)

    # Write the updated contents back to the file
    with open(file_path, 'w') as file:
        file.writelines(lines)
    print("First import statement added successfully.")


def main():
    # Ask the user for input string
    input_string = input("Enter the string to insert and create JSX file: ")

    # Path to the file
    file_path = r"C:\Users\NI\Desktop\portfolioperesonal\portfolio\counter\src\index.js"

    # Add first import statement to index.js
    add_first_import(input_string, file_path)

    # Insert lines into the file
    insert_lines(input_string, file_path)

    # Create JSX file for the new React component
    create_jsx_file(input_string)


if __name__ == "__main__":
    main()
