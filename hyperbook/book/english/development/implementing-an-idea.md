---
name: Implement an idea
index: 2
---

# Implement an idea

You have played several games
and come up with a good strategy.
With that, you have already done an important part of the work,
but somehow you still have to teach
the :t[computer player]{#player} to play according to this strategy.

Using a small task,
we want to show how you can formally describe an idea
and translate it into a program.
We assume that we have a stack of cards that needs to be sorted.

## Prerequisites

-   any number of playing cards
-   an order in which the playing cards should be sorted

### Formalize the idea

First, the idea must be formally described.
Often you can first describe how you would proceed as a human.

1.  Go through the stack and remember the position
    where the smallest card is located.
2.  Swap the position of the smallest card
    with the bottom card in the stack.
3.  The smallest card is now in the correct position.
4.  Repeat the steps for the remaining stack
    (without the sorted cards).

### Implement the idea

After you have formally written down your idea,
it can be easily translated into a program:

#### Java

```java
/**
 * The array a[] symbolizes the stack of unsorted cards.
 * A number always stands for a specific card.
 * A smaller number means that it is a smaller card.
 *
 * start indicates the position where the remaining stack begins
 * (at the beginning: start = 0)
 */
public static void sortiere(int[] a, int start) {
    // Position of the smallest card
    int pos = start;

    // Go through the array and remember the position of the smallest card
    for (int i = start+1; i < a.length; i++) {
        // If a smaller card was found...
        if (a[i] < a[pos]) {

            // ... remember the new position
            pos = i;
        }
    }

    // Swap the smallest card with the first card of the remaining stack
    int temp = a[start]; // remember the first card
    a[start] = a[pos];   // bring the smallest card to the front
    a[pos] = temp;       // write the remembered card into the middle of the stack

    // If there is still a remaining stack, it should be sorted further
    if (start < a.length) {
        sortiere(a, start+1);
    }
}
```

#### Python

```python
# The list a symbolizes the stack of unsorted cards represented as numbers.
# A number always stands for a specific card.
# A smaller number means that it is a smaller card.
#
# start indicates the position where the remaining stack begins
# (at the beginning: start = 0)
# 
# Note: in Python, data types do not have to be specified explicitly,
# but it may help during development.
def sortiere(a: list[int], start: int):
    # Position of the smallest card
    pos = start
    
    # Go through the list and remember the position of the smallest card
    for i in range(start + 1, len(a)):
        # If a smaller card was found...
        if a[i] < a[pos]:

            # ... remember the new position
            pos = i;

    # Swap the smallest card with the first card of the remaining stack
    temp = a[start];        # remember the first card
    a[start] = a[pos];      # bring the smallest card to the front (sorted area)
    a[pos] = temp;          # write the remembered card into the middle of the stack

    # If there is still a remaining stack, it should be sorted further,
    # otherwise return the sorted list
    if start < len(a) - 1:
        return sortiere(a, start+1);
    else:
        return a
```

## Further links

Here we have implemented the sorting algorithm [Selection Sort](https://en.wikipedia.org/wiki/Selection_sort)
recursively.
