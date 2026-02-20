---
name: Game Server
index: 2
---

# The Game Server

The two [computer players](/grundlagen/player) do not communicate directly with each other,
but play through an intermediary: the game server.
This ensures, on the one hand,
that you cannot annoy your opponent with invalid messages,
and on the other hand,
the game server ensures that the opponents adhere to the game rules.

The game server is directly integrated into the [competition system](/grundlagen/contest),
so that all tournament games are played in compliance with the rules.
To test your own computer player,
there is a version of the game server with a graphical interface,
available in the [download area of the website](https://software-challenge.de/dokumentation-und-material).
This allows you to follow the game well
and even play along as a human.

## Preparing the system and starting the game server

The only requirement is
the [installation of a Java runtime environment](/entwicklung/java/installation-von-java),
that at least the runtime environment for Java 11 is installed on the computer.

After successful installation, you can start the graphical server
by double-clicking on the `software-challenge-gui` file.

## The program interface

The program interface consists of a menu bar at the top
and the playing area below it.

Under the first menu item (symbol of the Software-Challenge)
you will find all basic actions.

### Creating a new game

Start a new game by clicking on "Start new game":

![Dialog for a new game](/images/game-creation.png)

In this window, the players who are to take part in the game are selected.
For each player, there are the following options:

- **Text input field**: Here you can enter a name for each player,
  which will then be displayed in the game.

- **Player type**: You can choose between 4 different player types:

    - *Human*
A human player who plays via the program interface.

    - *Example computer player*
A computer player that is integrated into the server.

    - *Computer player started by GUI*
A computer player in the form of a separate program
that is automatically started by the server when the game starts.

    - *Manually started computer player*
A computer player in the form of a separate program
that must be started manually by the user.

After entering the required values,
the game can be created using the lower button "Create".

### The game board interface

![The game board interface (here with the game "Hey, Thanks for the Fish!")](/images/spiele/penguins/penguins_spielfeld.png "Game board")

On the game board, the actual game,
the moves, and other information important for the game are displayed.
Here, the human player also makes their moves.

The controls differ depending on the game and game situation.
The control bar at the bottom allows you to influence the game flow.

## Game replays

<!-- TODO own replay section in glossary -->

Game replays or replay files are recorded past games
that you can watch again as often as you like,
for example, to analyze an error of your own player
or to improve a strategy.

Currently, replay files are automatically saved
in the subfolder "replays" of the current directory when the program starts.

<!--
The customization options for saving mentioned below are still being implemented.

~To save the current game as a replay,
click on the icon at the far bottom right in the game area.
Then you can specify a file name and save location.~
-->

To load a saved replay, use the
"Load replay" entry in the left point of the menu bar.
After selecting a file, you can play the saved game
or go through it step by step.

### Reproducing a game situation

This functionality is still missing in the new GUI
and will soon be available there in a simpler way.

If an erroneous behavior of the computer player
only occurs in a specific situation in a game,
it can often be desirable
to replay this situation again in order to improve the computer player in a targeted manner.

This is currently only possible in a somewhat complicated way.
Here is a step‑by‑step guide:

1.  Download the relevant replay from the competition system (.xml.gz file).

2.  Unpack the replay to obtain an .xml file.

3.  Start the server and create a new game.
    Choose the computer player that is to be tested for this game situation.
    This player must be started as player 1 and is then the first to move.
    The opponent can then be any computer player or even a human.

4.  Tick "Load game from file".
    Select the corresponding replay via "Choose file"
    and specify the move from which to start.
    Then start the game.

5.  The game should now be exactly in the situation
    in which the erroneous behavior occurred.
    The player whose turn it is now is always the red player.
    If the blue player was actually supposed to be next,
    the colors of the players are swapped.

6.  Now the next move can be requested from the player
    and controlled via debugging
    to see where the player behaved incorrectly.
    Caution: If further moves are requested,
    the behavior may deviate from the normal game course,
    because not all data for the game may be present in the XML.

## Automatic games: The test server

Once you have programmed a basically functioning computer player,
it makes sense to confront it with many different game situations.
This allows you to discover errors and assess the playing strength of the computer player.
For such test runs, a test server and test client are provided.

The test server has no graphical interface and runs,
in contrast to the server with a graphical interface (port 13050),
by default on port 13051.
Here's how to use it:

1.  Download the test server from the download page.

2.  Unpack the downloaded archive.

3.  Open a command line environment
    (terminal; on Windows cmd or PowerShell)
    in the directory of the unpacked archive.

4.  Start the test server on port 13051
    with the included `./start.sh` (Linux/macOS) or `.\start.bat` script
    or the corresponding command:

        java -Dfile.encoding=UTF-8 -Dlogback.configurationFile=logback.xml -jar server.jar --port 13051

5.  Start the computer players in further command line environments on port 13051
    (by default the option `--port 13051`).
    The computer players automatically connect to the test server and play a game.
    Afterwards, the computer players should terminate automatically.

6.  To play further test games, start the computer players again.
    The test server does not need to be restarted.

It is possible to load and test a specific game situation
instead of a randomly generated complete game plan.
The game situation must first be created
as described under [Reproducing a game situation](grundlagen/server#spielsituation-nachstellen).
Then the file can be loaded with the argument `--loadGameFile`
and optionally a move can be specified with `--turn`.

```sh
java -Dfile.encoding=UTF-8 -Dlogback.configurationFile=logback.xml -jar server.jar --port 13051 --loadGameFile ./replay.xml --turn 10
```

### Saving a replay

If the server is started without a graphical interface,
`--saveReplay` can be given
so that a replay is saved under "./replays" at the end of each game.

      java -Dfile.encoding=UTF-8 -Dlogback.configurationFile=logback.xml -jar server.jar --port 13051 --saveReplay true


### Unexpected timeouts (soft timeout)

With the option `--no-timeout`,
timeouts can be disabled for all players.
Alternatively, for created reservations,
they can be set individually for each player via the XML protocol.

If you let the test server run for some time
to conduct a larger number of test games,
it can happen that computer players are disqualified by the server due to timeouts (soft timeout).
This happens even though the move was sent to the server
within the allowed move time
(depending on the game, but always two seconds so far).
The [garbage collector](/faq#garbage-collector) of the Java Virtual Machine can trigger this behavior.
It pauses the application to free memory that is no longer used.
If the server is paused at an inopportune moment,
it does not notice the arrival of the move from the computer player in time
and then disqualifies it.
To make this problem occur as rarely as possible,
the following parameters have proven useful when starting the server:

On Linux and macOS:
```sh
java -Dfile.encoding=UTF-8 \
     -Dlogback.configurationFile=logback.xml \
     -server \
     -XX:MaxGCPauseMillis=100 \
     -XX:GCPauseIntervalMillis=2050 \
     -XX:+UseConcMarkSweepGC -XX:+CMSParallelRemarkEnabled \
     -XX:+UseCMSInitiatingOccupancyOnly -XX:CMSInitiatingOccupancyFraction=70 \
     -XX:+ScavengeBeforeFullGC -XX:+CMSScavengeBeforeRemark \
     -jar server.jar --port 13051
```

On Windows
(differs only in the way the long command is split across multiple lines):
```sh
java -Dfile.encoding=UTF-8 ^
     -Dlogback.configurationFile=logback.xml ^
     -server ^
     -XX:MaxGCPauseMillis=100 ^
     -XX:GCPauseIntervalMillis=2050 ^
     -XX:+UseConcMarkSweepGC -XX:+CMSParallelRemarkEnabled ^
     -XX:+UseCMSInitiatingOccupancyOnly -XX:CMSInitiatingOccupancyFraction=70 ^
     -XX:+ScavengeBeforeFullGC -XX:+CMSScavengeBeforeRemark ^
     -jar server.jar --port 13051
```

To further improve the behavior of the garbage collector,
you can also create a log file about the garbage collector's activities
using the options
`-XX:+PrintGCDateStamps -XX:+PrintGC -XX:+PrintGCDetails -Xloggc:"path_to_gc.log"`.
In it, you can see exactly when it ran and for how long.
You can then change the settings and test whether the behavior improves.

Configuring the garbage collector is not a panacea
and can lead to new problems that you should be prepared for.
These include increased resource consumption and instability of the application.

A list of possibly useful parameters for computer players can be found at
https://stackoverflow.com/questions/48989515/java-garbage-collector-time-limit.

### Mass tests with the TestClient

Mass tests with your own computer player can be very useful,
for example, to test its strength against an earlier version.
For this purpose, a TestClient is provided in each season from version XX.1.0.

The TestClient lets two computer players compete against each other
for a number of games,
with the starting order alternating,
so that an even number of games makes sense.
It informs about the progress
and finally evaluates the points achieved.

The TestClient must be called from the terminal with the corresponding arguments.
These are explained in more detail in the examples.

On Linux and macOS:
```sh
    java -jar -Dlogback.configurationFile=logback-tests.xml test-client.jar \
        --tests 4 \
        --name1 "displayName1" \
        --player1 "./player1.jar" \
        --name2 "displayName2" \
        --player2 "./player2.jar" \
        --start-server \
        --port 13051
```

On Windows
(differs only in the way the long command is split across multiple lines):
```cmd
    java -jar -Dlogback.configurationFile=logback-tests.xml test-client.jar ^
        --tests 4 ^
        --name1 "displayName1" ^
        --player1 "./player1.jar" ^
        --name2 "displayName2" ^
        --player2 "./player2.jar" ^
        --start-server ^
        --port 13051
```
The TestClient can also connect to an already running server,
but when specifying the argument `--start-server`, it simply starts one itself.
The following error message occurs if the server was started on a port that is already in use:
```
    Could not start server on port 13050
    java.net.BindException: Address already in use
```

#### Arguments of the TestClient

| Attribute         | Default value (type)                            | Description                                                                                                                         |
|-------------------|-------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| `--tests`         | 100 (`int`)                                     | Number of tests to be played                                                                                                        |
| `--player1`       | "./defaultplayer.jar" (file path)               | First computer player                                                                                                               |
| `--player2`       | "./defaultplayer.jar" (file path)               | Second computer player                                                                                                              |
| `--name1`         | "player1" (`String`)                            | Name of the first player                                                                                                            |
| `--name2`         | "player2" (`String`)                            | Name of the second player                                                                                                           |
| `--no-timeout`    | false (`bool`)                                  | Disable disqualification by timeouts. Can be set independently for both players with `--no-timeout1` or `--no-timeout2`.           |
| `--start-server`  | false (`bool`)                                  | Start a server on the specified port before starting the clients.                                                                  |
| `--server`        | 'server.jar' from the classpath (file path)     | Specify a particular server to be started for the tests.                                                                           |
| `--port`          | 13050 / 13051 (`int`)                           | The port on which the server runs.                                                                                                 |
| `--host`          | localhost (IP)                                  | The address on which the server runs.                                                                                              |
| `--loglevel`      | INFO - according to logback-tests.xml (Level)   | Sets the log level to obtain detailed or more compact outputs.                                                                     |

Boolean parameters are considered true as soon as they are specified.
A value after the parameter has no effect.

For arguments that are not specified,
the default values from the table are used.
The data is output after each game based on rounded values.
The TestClient terminates itself after all games have been played.

The results of the games are summed up by the server
for the respective player names, even over several starts of the TestClient.
The results are only reset when the server is restarted.
Therefore, after changing the players, make sure to restart the server
or use different player names.

The results of the games are summed up by the server
for the respective player names,
even over several starts of the TestClient.
The results are only reset
when the server is restarted.
So after changing the players,
make sure to restart the server or use different player names.
In the future, the TestClient should count the points independently of the server.
