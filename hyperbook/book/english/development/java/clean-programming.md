---
name: Clean programming style
index: 3
---

# Clean programming style

Maybe some of you have already experienced
that you got a piece of program code from an acquaintance
that you simply do not understand.
Often, after some time,
you even no longer understand your own lines of code.
Mostly, this is not due to complicated algorithms,
but to a poor programming style.
Therefore, there are so‑called style guides for all programming languages,
i.e., rules for the structure of source texts.

The *Java Code Conventions* are the best‑known style guide for Java,
coming from its developers.
This guide aims to introduce them a little.

## General document structure

-   No line should be longer than 80 characters.
    Especially in times of large widescreen monitors,
    this is probably one of the most difficult rules of all.
    However, you have to assume
    that not everyone who wants to read the code
    has a similarly wide screen.
    Furthermore, the font size for printing
    is usually set so that at most 80 characters fit in one line.

-   In a class, the global variables should always appear first,
    then the constructors,
    and finally the methods.

-   Class names should be written in *CamelCase*,
    i.e., each partial word is written with a capital letter
    (e.g., `GameHandler`).

-   For variable and method names, *lower CamelCase* is used,
    where only the first partial word begins with a lowercase letter
    (e.g., `myPlayer`).

-   Identifier names for constants use only uppercase letters
    (e.g., `int NUMBER_OF_PLAYERS = 2;`).

-   Each line should contain only one statement.

## Braces and formatting rules

Basically, every loop body and every `if` statement should be enclosed in braces,
even if it contains only one command.
The opening brace is placed at the end of the line
(*Kernighan & Ritchie style*, or *K&R style*).
The code in the body is indented.
The closing brace is placed on the first line that is no longer indented.

```java
    for (int i = 0; i < 110; i++) {
         x = x + 2;
         ...
    }
```

In an if statement, the corresponding `else` is written
directly after the closing brace:

```java
    if (condition) {
         ...
    } else {
         ...
    }
```

Multiple nested `if` statements are collapsed:

```java
    if (condition) {
         ...
    } else if (condition2) {
         ...
    } else if (condition3) {
         ...
    } else {
         ...
    }
```

## The switch statement

In a `switch`, the following form should be maintained:

```java
    switch (variable) {
    case 1 :
        ...
        /* falls through */
    case 2 :
        ...
        break;
    case 3 :
        ...
        break;
    default :
        ...
        break;
    }
```

If a `case` does not jump out of the `switch`,
this should be indicated by a comment.
If a `default` is used, it is written as the last clause.
