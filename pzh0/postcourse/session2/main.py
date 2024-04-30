def volgende(n: int):
    yield n + 1
    yield n + 2


def mijn_range(n: int):
    current = 0
    while current < n:
        yield current
        current = current + 1


for i in mijn_range(10):
    print(i)


# mijn_generator = volgende(2)

# print(next(mijn_generator))

# print("IK DOE LEKKER ANDER WERK")
# print(next(mijn_generator))
