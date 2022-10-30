import random
SPACED:bool = True

def double(i):
    l = []
    for a in i:
        l.append(int(a) * 2)
    return l[::2]

def doubleplusone(i):
    l = []
    for a in i:
        l.append(int(a))
    return l[1::2]

def luhn(i):
    l = []
    for f in i:
        l.append(f)

    _a = []

    for n in double(l):
        if n > 9:
            _a.append(n - 9)
        else:
            _a.append(n)

    if str(sum(_a) + sum(doubleplusone(l))).endswith('0'):
        if SPACED:  return [True, ' '.join([i[q:q + 4] for q in range(0, len(i), 4)])]
        else: return [True, i]
    else: return False

def numOfGens(i:int):
    for n in range(i):
        u = luhn(str(random.randint(1e15, 1e16)))
        if u != False:
            print(u[1])

if __name__ == "__main__":
    numOfGens(100)
