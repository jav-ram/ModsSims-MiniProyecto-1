import numpy as np
import matplotlib.pyplot as plt
from matplotlib.ticker import PercentFormatter
import sys
import random
import math
import time

G1MOD = math.pow(2, 35) - 1
G1MULTIPLIER = math.pow(5, 5)
G2MOD = math.pow(2, 31) - 1
G2MULTIPLIER = math.pow(7, 5)


def memoize(f, seed):
    memo = {}
    memo[0] = seed

    def helper(x):
        if x not in memo:
            memo[x] = f(x)
        return memo[x]
    return helper


def generator1(x):
    return (G1MULTIPLIER * gen1(x-1)) % G1MOD


def generator2(x):
    return (G2MULTIPLIER * gen1(x-1)) % G2MOD

if __name__ == "__main__":
    iterations = sys.argv[1]
    # get seed based on time
    seed1 = (time.time() * 1000) % G1MOD
    seed2 = (time.time() * 1000) % G2MOD
    # normal random
    normal = np.random.rand(int(iterations))
    # first generator random
    gen1 = memoize(generator1, int(seed1))
    g1 = np.array([gen1(i) for i in range(int(iterations))]) / G1MOD
    # second generator randoms
    gen2 = memoize(generator2, int(seed2))
    g2 = np.array([gen2(i) for i in range(int(iterations))]) / G2MOD

    # Start plot
    plt.figure(1)
    plt.title('Math.random')
    plt.hist(normal, weights=np.ones(len(normal)) / len(normal))
    plt.gca().yaxis.set_major_formatter(PercentFormatter(1))
    plt.figure(2)
    plt.title('First Generator')
    plt.hist(g1, weights=np.ones(len(g1)) / len(g1))
    plt.gca().yaxis.set_major_formatter(PercentFormatter(1))
    plt.figure(3)
    plt.title('Second Generator')
    plt.hist(g2, weights=np.ones(len(g2)) / len(g2))
    plt.gca().yaxis.set_major_formatter(PercentFormatter(1))
    plt.show()
