---
name: Using Eclipse
index: 6
---

# Using Eclipse

If you haven't worked with an integrated development environment before,
the view may be frighteningly confusing.
However, once you have engaged with it a bit more intensively,
you won't want to miss the operating comfort of such a developer tool.
This article introduces the most important components
of the Eclipse development environment.

## The Interface

![Overview of the most important windows in Eclipse](/images/eclipse_desktop.jpg)

### Package Explorer

The Package Explorer is located on the left edge.
It manages all imported projects.
If you double-click a file in the Package Explorer,
it is displayed in the editor.
With a right-click on a file or directory,
you get many options with which you can edit the selected object.

### Editor

The editor is the large area in the middle of the Eclipse window.
At the top edge is the tab bar,
which contains all open files.

### Outline

On the right edge of the screen is the Outline.
It shows all variables and methods of the class
that is currently open in the editor.
With a double-click on an entry,
the cursor in the editor jumps to the corresponding place in the code.

### Problems

The Problems tab is located in the window
visible at the bottom edge of the screen.
Here, both programming errors and warnings are displayed.
With a double-click on an entry,
the cursor in the editor jumps to the corresponding line of code.

### Console

The Console is not immediately visible,
but only appears after the first program has been executed.
All system outputs are displayed in the Console.
If an error (exception) is thrown,
you can click on it to get to the corresponding line in the program code.

## Starting programs

**Dialog to change the program's startup settings**

![eclipse run configurations](/images/eclipse_run-configurations.jpg)

You can start a program
by right-clicking on the file with the Main method in the Package Explorer
and then selecting "Run As" → "Java Application".

In the menu, under "Run" → "Run Configurations",
you can specify options in the "Arguments" tab.

## Keyboard shortcuts

Eclipse knows many key combinations
with which some Eclipse functions can be called faster.
The most important shortcuts can be found in the following table:

| Action                                                              | Effect                                                                                                                                       |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Ctrl+Shift+F11                                                      | Executes the last executed Java file again                                                                                                   |
| Cursor on variable, class or method name, then Alt+Ctrl+R           | Renames all occurrences of the name in the whole project                                                                                     |
| Ctrl+F1                                                             | If you use this key combination over an error or warning, Eclipse gives you suggestions for improvement or repair                            |
| Ctrl+I                                                              | Indents the selected text cleanly                                                                                                            |
| Ctrl+F7                                                             | Comments in or out the marked lines                                                                                                          |
| Cursor on variable, method or class name, then F3                   | The cursor jumps to the place where the variable or class was defined                                                                        |
| Variable or class name partially entered, then Ctrl+Space           | Eclipse provides suggestions for completion                                                                                                  |
| Type `syso`, then Ctrl+Space                                        | Generates `System.out.println`                                                                                                               |
| Type `for`, then Ctrl+Space                                         | Eclipse provides a selection of various `for` loops                                                                                          |
| Type `if`, then Ctrl+Space                                          | Provides a selection of `if` dialogs                                                                                                         |

**Note:** On Mac OS X, the Apple key is usually used instead of the Ctrl key.