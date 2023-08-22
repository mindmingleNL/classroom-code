# Advent of Code 2022 - day 1 part 1


# Add values together until you see an empty line
# if you see an empty line start counting again

# /n

# Problem 1: recognize the empty line
# Solution 1: A empty line is equal to the empty string (after .strip())

with open("input_test.txt", "r") as input_file:
    # Claim: if it's a newline,
    # stripped wil be equal to the empty string
    highest_value = 0
    current_value = 0
    for line in input_file:
        stripped = line.strip()
        if stripped != "":
            current_value = current_value + int(stripped)
        else:
            current_value = 0
        if highest_value < current_value:
            highest_value = current_value
    print(highest_value)
