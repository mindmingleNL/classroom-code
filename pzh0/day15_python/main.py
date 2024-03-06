# longer_words = [word for word in words if len(word) >= 4]
words = ["bike", "car", "tree", "sun", "environment", "cat", "public", "transport", "eco"]

# numbers = [1, 2, 3, 4, 5]
# even_numbers = list(filter(lambda num: num % 2 == 0, numbers))
# print(even_numbers) # Output: [2, 4]

short_words = list(filter(lambda word: len(word) >= 4, words))
lc_short_words = [word for word in words if len(word) >= 4]

print(short_words)
print(lc_short_words)

def greet(name: str) -> str:
    return f"Hello, {name}!"

print(greet(42))
