sheep = 5
cow = 10
chicken = False

# function double(x) {return x * 2}


def double(x):
    return x * 2


# if not chicken and cow > 6:
#     print("Chicken is")

# print(double(8))

students = ["Brandon", "Mark", "Trang", "Nargiz", "Swen", "Yoeran"]
grades = [12, 728, 1823, 1, 234]

# List Comprehensions

## Map -> changes every element of a list
## students.map(student => return `Hey ${student}`)

mapResult = [f"Hoi {student}" for student in students]
print(mapResult)

doubleGrades = [grade * 2 for grade in grades]
print(doubleGrades)

## Filter

filterResult = [student for student in students if len(student) < 5]
print(filterResult)

## MapFilter
print([f"Hoi {student}" for student in students if len(student) < 5])

# for bla in students:
#     print("Hello", bla)

# for (let i = 0; i < students.length; i++) {
#   const currentThing = students[i]
# }

# print(students[2])
# print(students / 5)

student = {
    "name": "Brandon",
    "class": 2,
    "country": "The Netherlands",
    "city": "Rotterdam",
    "fun": True,
}

# print(student["class"])


# students = ["Brandon", "Mark", "Trang", "Nargiz", "Swen", "Yoeran"]
# studentsDif = {0: "Brandon", 1: "Mark", 2: "Trang", 3: "Nargiz", 4: "Swen", 5: "Yoeran"}

# print(students[1:2])
# print(studentsDif[1:2])
