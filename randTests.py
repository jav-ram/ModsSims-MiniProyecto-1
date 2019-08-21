import numpy as np
import matplotlib.pyplot as plt
import sys
import random
import math

G1MOD = math.pow(2,35) - 1
G1MULTIPLIER = math.pow(5,5)
G2MOD = math.pow(2,31) - 1
G2MULTIPLIER = math.pow(7,5)

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

def test_generator(generator, iterations):
  for i in range(iterations):
    generator(i)

if __name__ == "__main__":
  iterations = sys.argv[1]
  seed = sys.argv[2]
  # normal random
  normal = np.random.rand(int(iterations))
  # first generator random
  gen1 = memoize(generator1, int(seed))
  g1 = np.array([gen1(i) for i in range(int(iterations))]) / G1MOD
  # second generator randoms
  gen2 = memoize(generator2, int(seed))
  g2 = np.array([gen2(i) for i in range(int(iterations))]) / G2MOD

  # Start plot
  plt.figure(1)
  plt.title('Math.random')
  plt.hist(normal)
  plt.figure(2)
  plt.title('First Generator')
  g1plot = plt.hist(g1)
  plt.figure(3)
  plt.title('Second Generator')
  g2plot = plt.hist(g2)
  plt.show()