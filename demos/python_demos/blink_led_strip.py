from blinkt import set_pixel, show
from random import randint
from time import sleep

print("Program starting for blinkt...")

while True:

    for pixel in range(8):
        print("Setting next LED strip sequence")
        r = randint(0, 255)
        g = randint(0, 255)
        b = randint(0, 255)
        set_pixel(pixel, r, g, b)
        show()
        sleep(5)
        
    for pixel in range(8):
        print("Switching off next LED strip sequence")
        r = randint(0, 255)
        g = randint(0, 255)
        b = randint(0, 255)
        set_pixel(pixel, 0, 0, 0)
        show()
        sleep(5)


        

