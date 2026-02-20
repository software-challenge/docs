---
name: Extending the player template
index: 6
---

# Extending the player template

To make the start into programming a computer player
for the Software‑Challenge with Python as easy as possible,
we provide a template for this purpose.
There you will find a basic structure that is needed
to communicate with the game server
and to be able to implement your own tactics in the future.

## Downloading the template

How to find the template for the current season
and download it to your own computer
has already been explained [here](/entwicklung/python/getting-started#projekt-erstellen)
in the documentation.

## Understanding the player template

Here is an image of the player template
for the game Piranhas 2026 (as of September 2025),
to explain the basic building blocks in every template:

![Player template](/images/python/vorlage.png)

1. A large block of imports from standard packages
   and classes of the Python interface.
   Most of them are not used yet,
   but are useful in the future,
   or directly show what is provided by us.
2. The main class for the player's logic
   with the attribute `game_state`,
   which is intended for the current game state.
   From this, all necessary information about the game board
   for the current move can be read.
3. `calculate_move()`: Probably the most important method.
   It is called when the game server requests a move
   from the computer player.
   Here you can calculate the best move,
   or call functions needed for that.
   For the computer player to send a move to the server,
   the corresponding move must be returned by this method.
   Currently, a random move is selected from the possible ones and played.
4. `on_update()`: Another method
   that is triggered by an event from the server.
   It receives a new game state as a parameter
   and stores this object in the aforementioned attribute of the class.
5. Starts the computer player
   and passes an object of the class
   with the programmed logic to it.

## Contents of the interface

For all classes, methods, and attributes
that are contained in the Python interface
and with which you can work,
there is a separate [documentation](https://socha-python-client.readthedocs.io/de/latest/autoapi/socha/_socha/index.html)
that also provides an explanation of the functionality,
parameters, and other useful information.