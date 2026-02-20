---
name: Getting Started
index: 3
---

# Getting Started

So that you don't have to start from scratch,
a basic code base is provided.
It imports the most important functions
of the installed socha package and uses them
to implement a simple but already playable logic.
Currently, however, this template only returns random moves
to the [game server](/grundlagen/server).

## Creating the project

Everything starts with a folder on your computer
that can be named completely according to your wishes.
From now on, all files for the computer player
will be placed in this folder.

A player template can be downloaded completely
from the [GitHub repository](https://github.com/software-challenge/player_python/blob/master/logic.py)
of the socha package into the folder you just created.

By default, this file is named `logic.py`,
and it should be named exactly that for your own bot.
The reason for this is our configuration of the competition system,
which does not recognize other file names when executing.

## Visual Studio Code interface

If you have never worked with such a development environment before,
the first view might seem quite confusing.
But once you engage with the software for a longer time,
it quickly becomes easier
and you won't want to miss the modern tools.
Therefore, this section provides an explanation
of the most important components that Visual Studio Code has to offer:

![VS Code interface](/images/python/vs-code.png)

### File Explorer

In the file/project explorer on the left side,
which is accessible via the highlighted button,
all subfolders and files of the folder opened with Visual Studio Code are displayed.
With a right-click on a file/folder,
a detailed dropdown menu opens with functions
such as rename and copy,
as you know them from the system explorer.

To open the folder of the computer player,
there are two simple ways:

1.  Click on "File" at the top
    and then select the corresponding folder under "Open Folder".
2.  Right-click the folder in the system file explorer
    and select "Open with Code".

(This only works if this option was selected during VS Code installation.)

### Tabs

When you open a file from the explorer,
a new tab with this file is created in the row at the top.
Similar to internet browsers,
you have quick access to the files you are currently working on.

### Editor

The heart of a development environment.
Here in the middle, the actual code is written.
You can also create multiple editor areas side by side
by dragging and dropping individual tabs
to, for example, the right edge of the editor.

### Terminal

The terminal in the lower area is not permanently visible
but can be opened via the "Terminal" button
and then "New Terminal" (at the top of the screen).
Or you can wait until you
[start the Python script](#start-the-script),
which will automatically open the terminal.

In the terminal, all kinds of commands can be executed,
such as starting a Python program,
but also package management with pip is possible via it.
Here, outputs of Python's `print()` function
as well as error messages from the program are displayed.
Ultimately, it is the same terminal application
as the one provided by the system.
So you could also use that one if you prefer.

### Python version

When you have a Python script open,
you can see at the bottom right
that Visual Studio Code has recognized the programming language
and which version of the Python interpreter VS Code is using.
This should actually be detected automatically,
provided the Python installation was successful before.
By clicking on the version,
a pop-up also opens at the top of the screen
where you have the option to manually select
an installed Python version.

### Start the script

The play button at the top right
does exactly what you think:

The VS Code terminal opens
and the currently open script is executed.

### Extensions

This area was already used
during the installation of the Python extension.
Via this, various packages and add-ons for VS Code can be loaded.
These include, above all:
- Support for other programming languages
- Extensions to work with other software (e.g., remote servers)
- Themes that change the design

Therefore, the Visual Studio Code in the screenshot
probably looks a bit different
than the freshly installed version.
