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
    if index >= len(images) - 1:
        messagebox.showinfo("Finished", "Classifying is finished.")
        root.destroy()
        return
    
    img1 = cv2.imread(images[index])
    img2 = cv2.imread(images[index + 1])

    img1 = cv2.cvtColor(img1, cv2.COLOR_BGR2RGB)
    img2 = cv2.cvtColor(img2, cv2.COLOR_BGR2RGB)

    # Resize images to 600x600 while maintaining aspect ratio and padding with white color
    img1 = Image.fromarray(img1)
    img2 = Image.fromarray(img2)

    img1.thumbnail((600, 600), Image.LANCZOS)
    img2.thumbnail((600, 600), Image.LANCZOS)

    new_img1 = Image.new("RGB", (600, 600), (255, 255, 255))
    new_img2 = Image.new("RGB", (600, 600), (255, 255, 255))
    new_img1.paste(img1, ((600 - img1.width), (600 - img1.height)))
    new_img2.paste(img2, ((600 - img2.width), (600 - img2.height)))

    photo1 = ImageTk.PhotoImage(new_img1)
    photo2 = ImageTk.PhotoImage(new_img2)

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

root = tk.Tk()
root.geometry('640, 640')
root.resizable(False, False)  # Disable window resizing

canvas_left = tk.Canvas(root, width=600, height=600)
canvas_right = tk.Canvas(root, width=600, height=600)
canvas_left.grid(row=0, column=0, padx=10, pady=10)
canvas_right.grid(row=0, column=1, padx=10, pady=10)

canvas_left.bind("<Button-1>", keep_left)
canvas_right.bind("<Button-1>", keep_right)

button_frame = tk.Frame(root)
button_frame.grid(row=1, column=0, columnspan=2, pady=10)

keep_both_button = tk.Button(button_frame, text="Keep Both", command=keep_both)
keep_both_button.pack(side='left', padx=20)

discard_all_button = tk.Button(button_frame, text="Discard All", command=discard_all)
discard_all_button.pack(side='right', padx=20)

show_images()

root.mainloop()
