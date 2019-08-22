import random
import math

def integral(f, d):
    def aproximation(iteration):
        cumalative = 0
        vars = [0] * d
        for i in range(0, iteration):
            for i in range(0, len(vars)):
                vars[i] = random.random()
            cumalative = cumalative + f(tuple(vars))
        return cumalative / iteration
    return aproximation

def cuarta(v):
    (x, ) = v
    up = math.exp(-(1/x -1) ** 2)
    down = x ** 2
    return 2 * up / down

def quinta(v):
    x, y = v
    up = math.exp(-((1/x) - 1)*(1 + y))
    down = x**2
    return ((1/x) - 1) * up / down

print(integral(cuarta, 1)(100000))

print(integral(quinta, 2)(1000000))