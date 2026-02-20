---
name: Using IntelliJ
index: 5
---

# Using IntelliJ

If you haven't worked with an integrated development environment before,
the view may be frighteningly confusing.
However, once you have engaged with it a bit more intensively,
you won't want to miss the operating comfort of such a developer tool.

This article introduces the most important components
of the IntelliJ development environment.

Compared to Eclipse, IntelliJ is the more modern IDE with more features,
which is why we would recommend it for beginners.

## The Interface

![Overview of the most important windows in IntelliJ](/images/java/intellij_important.png)

### Project Tool Window

The Project Tool Window is located by default on the left edge.
In it you see the folder structure and all files contained in the project.
If you double-click a file,
this file is opened in the editor.
With a right-click on a file or directory, you get many options
with which you can edit the selected object.

### Editor

The editor is the large area in the middle of the IntelliJ window.
At the top edge is the tab bar,
which contains all open files.

### Problems

The Problems window is not open by default.
To open it,
you have to press the button for it (circle with ! in the middle)
at the bottom left in the Tool Window Bar.
Here, both programming errors and warnings are displayed.

With a double-click on an entry,
the cursor in the editor jumps to the corresponding line of code
that contains the error or warning.

### Console

The Console is not immediately visible,
but only appears after the first program has been executed.
Alternatively, you can also open the Console
at the bottom left in the Tool Window Bar.

All system outputs are displayed in the Console.
If an error (exception) is thrown,
you can click on the blue underlined part of the error message
to get to the corresponding line in the program code.

### Gradle Tool Window

The Gradle Tool Window can be opened
by clicking on the elephant symbol on the right edge.
It contains information about the Gradle project
and also, under the "Tasks" tab, various Gradle commands.
With a double-click on a command
or with a right-click and then left-click on "Run",
a command can be executed.
Here are some important functions:
- Under "build" is the build command,
  with which you can create a jar from the project
  that can then be uploaded to the contest system.
- Under "application" is the run command,
  which is another way to start the player.

## Starting programs

1. To create a run configuration for starting the player template,
   you first have to click on the current build setting in the Run/Debug widget (default "Current File")
   and in the dropdown menu that then opens, click on "Edit Configurations".

![intellij run configurations](/images/java/build1.png)

2. If no run configuration exists yet,
   you can create it either by clicking on the "+" at the top left
   or by clicking on "Add new ..." in the window that opens.

   In the window that opens, the following settings must be made
   in order to start the Software-Challenge GUI from within IntelliJ.

    1. The Build tool must be set to Gradle.
    2. In the next window, you have to check whether the project has been correctly "read in".
    3. Under the heading "Run", "run" must be written in the input field.
    4. "Apply" or "Ok" saves the entries.

![intellij run configurations](/images/java/build2.png)

3. Afterwards, the newly created configuration is selected
   in the Run/Debug widget
   and you can start the player by clicking on the start symbol (green triangle).

![intellij run configurations](/images/java/build3.png)

## Keyboard shortcuts

IntelliJ IDEA also offers numerous key combinations
with which functions can be called up faster.
The most important shortcuts are listed in the following table:

| Action | Effect |
| ------- | ------- |
| Shift+F10 | Executes the last executed file again |
| Cursor on variable, class or method name, then Shift+F6 | Renames all occurrences of the name in the whole project |
| Alt+Enter | Shows suggestions for improvement or repair when the cursor is on an error or warning |
| Ctrl+Alt+I | Indents the selected text cleanly |
| Ctrl+/ | Comments in or out the marked lines |
| Cursor on variable, method or class name, then Ctrl+B | Jumps to the definition of the variable, method or class |
| Variable or class name partially entered, then Ctrl+Space | IntelliJ provides suggestions for completion |
| Type `sout`, then Tab or Enter | Generates `System.out.println` |
| Type `fori`, then Tab or Enter | Generates the following `for` loop: ```for (int i = 0; i < ; i++) {}``` |
| Type `ifn`, then Tab or Enter | IntelliJ generates an `if` structure |

**Note:** On macOS, the **Command (⌘)** key is used instead of the **Ctrl** key.