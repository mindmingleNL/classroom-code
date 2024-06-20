fileInput = open("./input.txt", "r")

inputs = []

for line in fileInput:
    split1 = line.strip().split(": ")  # ['1-3 a', ' abcde']
    min_max = split1[0].split(" ")[0]
    min = int(min_max.split("-")[0])
    max = int(min_max.split("-")[1])
    check_letter = split1[0].split(" ")[1]
    password = split1[1]
    inputs.append({"min": min, "max": max, "check": check_letter, "password": password})

# print(inputs)

correct = 0
for input in inputs:
    fp = input["password"][input["min"] - 1] == input["check"]
    sp = input["password"][input["max"] - 1] == input["check"]
    if (fp and not sp) or (sp and not fp):
        print(input["password"])
        correct += 1

print(correct)
