fileInput = open("./input.txt", "r")

inputs = []

for line in fileInput:
    # 1-3 a: abcde
    # ranges, check, password = line.strip().split(" ")
    # minR, maxR = [int(range) for range in ranges.split("-")]
    # check = check.replace(":", "")

    split1 = line.strip().split(": ")  # ['1-3 a', ' abcde']
    min_max = split1[0].split(" ")[0]
    min = int(min_max.split("-")[0])
    max = int(min_max.split("-")[1])
    check_letter = split1[0].split(" ")[1]
    password = split1[1]
    inputs.append({"min": min, "max": max, "check": check_letter, "password": password})

print(inputs)
