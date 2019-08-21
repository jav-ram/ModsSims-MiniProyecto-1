import random
import math

G1MOD = math.pow(2,35) - 1
G1MULTIPLIER = math.pow(5,5)
G2MOD = math.pow(2,31) - 1
G2MULTIPLIER = math.pow(7,5)

def memoize(f):
  memo = {}
  def helper(x):
    if x not in memo:            
      memo[x] = f(x)
    return memo[x]
  return helper

def generator(mult, mod, x):
  return (mult * x) % mod

gen1 = memoize(lambda x: generator(mult=G1MULTIPLIER, mod=G1MOD, x=x))
gen2 = memoize(lambda x: generator(mult=G2MULTIPLIER, mod=G2MOD, x=x))

if __name__ == "__main__":
  print(gen1(444548))