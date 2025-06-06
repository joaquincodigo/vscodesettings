import os
import glob
import shutil
import cv2
import tkinter as tk
from tkinter import messagebox
from PIL import Image, ImageTk

# Create folders if they don't exist
if not os.path.exists('keep'):
    os.makedirs('keep')
if not os.path.exists('discard'):
    os.makedirs('discard')

# Get all image files in the current directory
images = glob.glob('*.jpg') + glob.glob('*.png') + glob.glob('*.jpeg')
index = 0

def show_images():
    # if index >= len(images) - 1:
    #     messagebox.showinfo("Finished", "Classifying is finished.")
    #     root.destroy()
    #     return
    
    img1 = cv2.imread(images[index])
    img2 = cv2.imread(images[index + 1])

    img1 = cv2.cvtColor(img1, cv2.COLOR_BGR2RGB)
    img2 = cv2.cvtColor(img2, cv2.COLOR_BGR2RGB)

    # Resize images to fit within 280x280 while maintaining aspect ratio
    img1 = Image.fromarray(img1)
    img2 = Image.fromarray(img2)

    img1.thumbnail((280, 280), Image.LANCZOS)
    img2.thumbnail((280, 280), Image.LANCZOS)

    # Create new images with white background
    new_img1 = Image.new("RGB", (280, 280), (255, 255, 255))
    new_img2 = Image.new("RGB", (280, 280), (255, 255, 255))

    # Paste resized images into new images with centering
    new_img1.paste(img1, ((280 - img1.width) // 2, (280 - img1.height) // 2))
    new_img2.paste(img2, ((280 - img2.width) // 2, (280 - img2.height) // 2))

    # Convert images to PhotoImage to display in tkinter
    photo1 = ImageTk.PhotoImage(new_img1)
    photo2 = ImageTk.PhotoImage(new_img2)

    # Update canvas with the new images
    canvas_left.create_image(0, 0, anchor=tk.NW, image=photo1)
    canvas_right.create_image(0, 0, anchor=tk.NW, image=photo2)

    # Keeping references to prevent garbage collection
    canvas_left.image = photo1
    canvas_right.image = photo2

def keep_left(event):
    shutil.move(images[index], 'keep/' + os.path.basename(images[index]))
    shutil.move(images[index + 1], 'discard/' + os.path.basename(images[index + 1]))
    next_images()

def keep_right(event):
    shutil.move(images[index], 'discard/' + os.path.basename(images[index]))
    shutil.move(images[index + 1], 'keep/' + os.path.basename(images[index + 1]))
    next_images()

def discard_all():
    shutil.move(images[index], 'discard/' + os.path.basename(images[index]))
    shutil.move(images[index + 1], 'discard/' + os.path.basename(images[index + 1]))
    next_images()

def keep_both():
    shutil.move(images[index], 'keep/' + os.path.basename(images[index]))
    shutil.move(images[index + 1], 'keep/' + os.path.basename(images[index + 1]))
    next_images()

def next_images():
    global index
    index += 2
    show_images()

# Create the main window
root = tk.Tk()
root.title('Image Classifier')

# Set window size to 1640x640
root.geometry('1640x640')

# Canvas widgets for displaying images
canvas_left = tk.Canvas(root, width=280, height=280)
canvas_right = tk.Canvas(root, width=280, height=280)

# Positioning the canvas widgets with a gap of 30 pixels between them
canvas_left.grid(row=0, column=0, padx=(10, 5), pady=10)
canvas_right.grid(row=0, column=1, padx=(5, 10), pady=10)

# Binding events to left and right canvas clicks
canvas_left.bind("<Button-1>", keep_left)
canvas_right.bind("<Button-1>", keep_right)

# Frame for buttons
button_frame = tk.Frame(root)
button_frame.grid(row=1, column=0, columnspan=2, pady=10)

# Buttons for actions
keep_both_button = tk.Button(button_frame, text="Keep Both", command=keep_both)
keep_both_button.pack(side='left', padx=20)

discard_all_button = tk.Button(button_frame, text="Discard All", command=discard_all)
discard_all_button.pack(side='right', padx=20)

# Initial display of images
show_images()

# Allow resizing of the window
root.mainloop()
