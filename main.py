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
    up = math.exp(-(1/x - 1) ** 2)
    down = x ** 2
    return 2 * up / down


def quinta(v):
    x, y = v
    up = math.exp(-((1/x) - 1)*(1 + y))
    down = x**2
    return ((1/x) - 1) * up / down

first = integral(cuarta, 1)

print("# 1")
print("------------")
print()

print("100: " + str(first(100)))
print("10000: " + str(first(10000)))
print("1000000: " + str(first(1000000)))

print()
print("# 2")
print("------------")
print()

second = integral(quinta, 2)

print("100: " + str(second(100)))
print("10000: " + str(second(10000)))
print("1000000: " + str(second(1000000)))
