inputFromFile = open("./input.txt", "r")

inputs = []
for line in inputFromFile:
    inputs.append(int(line.strip()))

# Here starts your problem
print(inputs)
