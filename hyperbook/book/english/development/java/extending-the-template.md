---
name: Extending the player template
index: 7
---

# Extending the player template

In the version of the Java player template
from the Software-Challenge website,
a strategy is already implemented: the RandomLogic.
However, you can also add any number of your own strategies.
All methods needed for this can be found [here](Methoden\all.md).

## Creating a new strategy

The easiest way is to modify the `Logic` class of the player template.
Alternatively, you can also copy it and rename it
(replace all occurrences of `Logic` with the new class name).
For completeness, here is the procedure
for a completely new class:

-   Create a new class (e.g., `MyLogic`)
    that implements the interface `IGameHandler`:

```java
    public class MyLogic implements IGameHandler {
        private GameState gameState;
```

-   Implement the 4 interface methods:

```java
    public void onGameOver(GameResult data) {
        // Nothing needs to be done here
    }

    @Override
    public void onError(String error) {
        // Nothing needs to be done here
        this.player = player;
    }

    @Override
    public void onUpdate(GameState gameState) {
        // A new game state, i.e., something has happened.
        // Therefore update the gameState.
        this.gameState = gameState;
    }

    @Override
    public Move calculateMove() {
        // I am supposed to make a move
        Move move;
        // ... Here you need to put the logic that finds a move.
        return move;
    }
```

Now the strategy can be implemented
in the `calculateMove` method
(or in your own classes that are used there).
