# a = ["a", "b", "c", "d"]
# len(a)
# a[len(a)- 1]
input_from_file = open("./input.txt", "r")

grid = [line.strip() for line in input_from_file]


map_width = len(grid[0])
map_heigth = len(grid) - 1


slopes = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]]

results = []

for slope in slopes:
    row = 0
    col = 0
    trees = 0
    while True:
        row = row + slope[1]
        if row > map_heigth:
            break

        col = col + slope[0]
        if col > map_width - 1:
            col = col - map_width

        if grid[row][col] == "#":
            trees += 1
    results.append(trees)

start = 1
for result in results:
    start = start * result
print(start)
