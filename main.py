import random
import math

def integral(f):
    def aproximation(iteration):
        cumalative = 0
        for i in range(0, iteration):
            cumalative = cumalative + f(random.random())
        return cumalative / iteration
    return aproximation

def cuarta(x):
    up = math.exp(-(1/x -1) ** 2)
    down = x ** 2
    return 2 * up / down

print(integral(cuarta)(100000))