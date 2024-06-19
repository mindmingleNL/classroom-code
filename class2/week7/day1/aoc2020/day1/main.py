import time

inputFromFile = open("./input.txt", "r")

inputs = []
for line in inputFromFile:
    inputs.append(int(line.strip()))


def findSolution(numbers):
    target = 2020
    for i in numbers:
        for j in numbers:
            for x in numbers:
                if i + j + x == 2020:
                    print(i * j * x)
                    return
            # if (target - i - j) in inputs:
            #     print(i * j * (target - i - j))
            #     return

        # for j in numbers:
        #     if i + j == 2020:
        #         print(i * j)
        #         return


start = time.time()
findSolution(inputs)
end = time.time()
print("The time of execution of above program is :", (end - start) * 10**3, "ms")
