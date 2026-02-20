---
name: Clean programming style in Python
index: 4
---

# Clean programming style in Python

When you program on a project for a longer time,
it is especially important to maintain a good structure.
It may have happened to one or the other
that you have read someone else's program code
that you simply do not understand.
More often than not,
this is not because it is incredibly difficult,
but simply because it is cumbersome to read.
A very similar phenomenon can also occur
when looking at your own program
if it is written in a messy way.

For this purpose, most programming languages have so‑called *style guides*,
in which rules for the structure of the program text are written.

For Python, this is the [PEP8 Style Guide](https://peps.python.org/pep-0008/),
which is extremely worth reading,
but is also just as detailed,
so that the most important points are named below:

## General rules

It will probably be noticeable
that for some of the rules there are still several ways to implement something.
In doing so, you can choose what is most appealing.
What is important then is only to stay consistent
and, if necessary, to coordinate with co‑programmers.

### Indentation

For indentations in the program text, 4 spaces should be used.
Lines that use a line break,
e.g., when many function parameters are used,
should be clearly separated from the rest of the code by indentation.
For this, the arguments can either be split
and those found in a new line are indented to the appropriate level
of the first argument.
Alternatively, you can also write all arguments in the following lines,
which are then indented by the usual depth or even more.
The closing parenthesis is as usual at the end or on a new line,
but then at the same level as the first character of the line:

```python
def a_function(arg_one, arg_two, arg_three, 
               arg_four):
    return "Software-Challenge"

result = a_function(
    "Hello", "World", 
    "Competition", "Test123")

test = a_function(
    "String1", "String2",
    "String3", "String4"
)

my_list = [
    1, 2, 3,
    4, 5, 6
]
```

There would also be the possibility of using *Tab* for indentations,
but spaces are preferred.

### Whitespace

"Whitespace" refers to, for example, spaces, tabs, and blank lines,
i.e., parts of the text where nothing stands.
To make the program more readable,
these should definitely be used,
but only in the right places.

#### Spaces

Spaces are used in expressions,
just as is known from the English language.
That means, especially after commas or other "punctuation marks"
and between operands of comparison operations and arithmetic operators.
Explicitly **no** extra whitespace should be used in these situations:

-   Inside parentheses, to separate the content from the parentheses:

```python
# Correct:
spam(ham[1], {eggs: 2})

# Wrong:
spam( ham[ 1 ], { eggs: 2 } )
```

-   *Before* commas, colons, and semicolons:

```python
# Correct:
if x == 4: print(x, y); x, y = y, x

# Wrong:
if x == 4 : print(x , y) ; x , y = y , x
```

-   Immediately before parentheses of a function call or a list indexing:

```python
# Correct:
spam(1)
book["string"] = my_list[0]

# Wrong:
spam (1)
book ["string"] = my_list [0]
```

-   Lots of whitespace before variable assignments to align them to the same level:

```python
# Correct:
x = 0
y = 1
long_variable = 2

# Wrong:
x             = 0
y             = 1
long_variable = 2
```

#### Blank lines

Blank lines can also contribute to clarity,
by separating certain parts from others in terms of content,
as in a running text.

Functions and classes that are defined globally
can be surrounded by two blank lines
to clearly separate them from the rest.
Methods defined inside a class,
however, are separated by only one blank line.

Extra blank lines can sometimes also be used
to better separate groups of related functions.
If a series of one‑liners belong together,
blank lines can be omitted here entirely.
Within functions,
isolated blank lines can also indicate logically related sections.

### Line length

No line in the program should exceed a length of 80 characters.
This also contributes to readability.
In the past, the screen width was often a limiting factor,
today you can usually have two different program files open side by side,
where of course no line should exceed the width of the editor.

### Identifiers

Identifiers are, so to speak, names for variables,
functions, classes, and much more.
To give names to these things,
there are many different styles,
and here are the most important ones listed:

- `b` (single lowercase letter)
  
- `B` (single uppercase letter)

- `lowercase` (words in lowercase)

- `lowercase_with_underscores` (multiple lowercase words separated by underscores - also called *snake_case*)

- `UPPERCASE` (words in uppercase)

- `UPPERCASE_WITH_UNDERSCORES` (multiple uppercase words separated by underscores)

- `CapitalizedWords` (multiple words with capital first letters - also called *CamelCase*)

Certain letters such as l (lowercase el),
I (uppercase eye), or O (uppercase oh)
should not be used for reasons of risk of confusion.
Furthermore, only characters from the
[ASCII format](https://en.wikipedia.org/wiki/ASCII) are intended,
that means especially no umlauts and also no ß.

Now that you know all this,
different kinds of identifiers are named as follows:

-   Functions and variables in snake_case format
-   Classes, on the other hand, usually in CamelCase
-   Constants that you define, completely uppercase with underscores

Furthermore, it makes a lot of sense
to give your identifiers proper names
that do not, as is common in mathematics,
consist of only one letter,
but briefly explain the meaning of the object.
Single letters can, however, be used as variables for iterators:

```python
# Correct:
word_list = ["Software-Challenge", "Test"]
letter_count = 22

for w in word_list:
    print(w)

# Wrong:
x = ["Software-Challenge", "Test"]
y = 22

for z in x:
    print(z)
```

### Comments

Last but not least,
comments are perhaps the most important thing in clean programming work
to make code more understandable.
At the same time, they only add value
if they are also written correctly:

-   All comments actually describe what is happening.
    An incorrect description is worse than none at all.
    When updating the code,
    the comments should therefore also be adjusted.

-   A comment consists of one or more complete sentences.
    This includes, as usual, especially upper‑ and lower‑case,
    the use of punctuation marks,
    and specifically in programming,
    that identifiers are written **exactly** as they are in the code.

-   Comments are usually written as *block comments*.
    These refer to the following section of code
    and are indented to the same level as it.

-   Comments can also be written on the same line behind the code
    with enough distance,
    even if they are often rather distracting and unnecessary there.

-   To start a comment in Python, the `#` character is used.
    This is followed by a space
    and then the text you want to write.

-   When writing a comment,
    care must also be taken not to simply retell
    what is obviously happening in the code,
    but what the part of the program accomplishes.

A few examples of comments:

```python
# Correct:
# Create a 4x4 2‑dimensional list that contains the element 0 at each position.
# This represents a map of the game.
game_map = [[0] * 4 for i in range(4)]

# Wrong:
# make a list
game_map = [[0] * 4 for i in range(4)]
```

```python
# Correct:
x += 100        # Use a higher weighting.

# Wrong:
x += 100        # increase x
```