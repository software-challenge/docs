---
name: Prepare computer player for submission
index: 3
---

# Prepare computer player for submission

So that the [competition system](/grundlagen/contest) can work with the [computer player](/grundlagen/player),
it must be packaged as an executable program in a ZIP archive.

Depending on the programming language in which the player was developed,
different steps are necessary.

:::alert{info}
As a rule, the player template contains all the necessary instructions for packaging.
:::

### Official player templates

#### Java
Instructions for packaging the computer player can be found in the
[Readme](https://github.com/software-challenge/backend/blob/main/player/configuration/README.md)
of the player template, and in addition there is a
[guide for submitting the computer player](java/Anleitung-Abgabe) in the documentation.

#### Python
Instructions for this can be found in the [documentation](python/spieler-abgeben.md).

<!--
- [Rust Client](https://github.com/simoncreates/socha) as [Cargo Crate](https://crates.io/crates/socha)
- [C#](https://github.com/jnccd/socha-client-csharp/blob/master/README.md)
- [C++](https://github.com/Estugon/sc-penguins-cpp/blob/main/README.md)
- [Python](https://github.com/FalconsSky/socha-python-client/blob/master/README.md)
- [Swift](https://github.com/matthesjh/sc23-swift-client/blob/main/README.md)
- [Ruby](https://github.com/software-challenge/client-ruby/blob/main/README.md)
-->
<!-- For the current season there are no unofficial player templates yet. -->

## General information about the upload

Uploading the player in the competition system is described in detail
under [Competition System->Computer Player](grundlagen/contest#computerspieler).

The computer player is executed in a Docker container,
which determines the available libraries and programs.
The available container templates can be viewed in the player upload form in the competition system,
and offer among others Java, Python, Ruby, Node.js, Swift, .NET,
often in several versions.

## Other programming languages

For computer players in another programming language,
the ZIP archive must contain a shell script
with precise instructions for starting the computer player.
This must be selected as the main file
after uploading in the competition system.

Please note that parameters are passed to this script by the competition system,
which must be forwarded to your program.
These parameters are at least the host and port of the game server
as well as the reservation number of the game that the computer player should join.
A call therefore looks roughly like this
(if `start.sh` is set as the main file):

    start.sh -h gameserver -p 13050 -r 590e5e6f-cf93-488e-a12d-5c194ecf95c2

The parameters follow the
[GNU Getopt conventions](https://www.gnu.org/software/libc/manual/html_node/Argument-Syntax.html#Argument-Syntax).
This means that the three parameters can be passed in any order
and as a short or long version.
The following variant must therefore also be able to be processed correctly by your program:

    start.sh --reservation 590e5e6f-cf93-488e-a12d-5c194ecf95c2 --host gameserver --port 13050

The graphical interface also calls your program with these parameters.
Your program will therefore only be started correctly by the graphical interface
if it processes the parameters correctly.

For most programming languages there are libraries
that can process the command line parameters according to this scheme,
so you don't necessarily have to implement this function yourself.

Furthermore, it is important to specify the interpreter in the first line of the script,
since the script is not called by a shell.
A `start.sh` script therefore looks roughly like this:

    #!/bin/sh
    chmod +x main_program_filename
    ./main_program_filename "$@"

-   Script is to be interpreted by `/bin/sh`, so it is a simple shell script.
-   With `chmod +x` the binary file is made executable (this is necessary because the executable attribute is not stored in a ZIP archive).
-   The binary file is called and all parameters that the script received are passed on (`"$@"`).

The `start.sh` must be encoded in UTF-8 and with UNIX (LF) line endings.
Other encodings will lead to errors during execution on the server.
In Notepad++ the encoding can be easily adjusted in the `Encoding` tab,
the line endings under `Edit > EOL conversion`.

For compiled languages, the computer players must be compiled for 64-bit Linux,
for interpreted languages a suitable interpreter must be available on the competition system.
Furthermore, dependencies such as used libraries must be available
or provided along with the submission.

## Technical data for the execution of the computer players

In all games played on the competition system,
the computer players run on the servers of the competition system.

|                  |                                                   |
|------------------|---------------------------------------------------|
| Operating system:| 64 Bit Linux                                      |
| Processor:       | One thread of an [Intel Xeon E5-2620 v4, 2.1 GHz](https://ark.intel.com/de/products/92986/Intel-Xeon-Processor-E5-2620-v4-20M-Cache-2_10-GHz) |
| Memory:          | 1.5 GB                                            |

### The matches

Each match consists of six games,
with the right to the first move alternating.

The move time is limited to two seconds for each move.
The above hardware serves as a reference for the computing time.
Each computer player is executed on its own virtual machine
with the specifications below.

If a player makes an invalid move or exceeds the maximum move time,
that player loses.
In all other cases, the game is played to the end according to the game rules
and the winner is determined.

### Log output

The computer players run in the competition system without a graphical interface,
so they cannot display windows or similar.
A computer player's attempt to do so anyway
will likely cause the computer player to crash.

However, the computer players can write text to the two
standard output streams "stdout" and "stderr".
These outputs can then be found in the log files,
which are available via the competition system after a game has finished.

### Reading data

Access to the internet is not possible.
Writing to the hard disk is possible,
but data written in previous games cannot be accessed.