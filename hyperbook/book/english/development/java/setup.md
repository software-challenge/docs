---
name: Setting up the development environment
index: 4
---

# Setting up the (Java) development environment

The task of a development environment (IDE) is to support the programmer
in their work.
In addition to the editor,
it offers many tools that make developing your own programs much easier.
Two major representatives of development environments are Eclipse and IntelliJ.

**Note:** Before taking care of setting up the development environment,
[Java must definitely be installed](installation-von-java).

## Obtaining the player template

The player template is already a finished computer player.
You can use the source code to program your own player.
You can get the player template in the
[download area of the Software-Challenge](https://software-challenge.de/dokumentation-und-material).
You need the version *as source code*.

## Setting up Eclipse

#### Windows

The easiest way to install Eclipse on Windows is using the Eclipse Installer.
This is well explained on the [Eclipse website](https://www.eclipse.org/downloads/packages/installer).

#### Debian (Linux)

On Debian‑based distributions, installation is very easy with `snap`.
```shell
$ sudo snap install eclipse --classic
```

#### Arch (Linux)

With an Arch distribution, Eclipse can also be installed easily with `snap`.
However, `snap` is often not installed yet.
```shell
$ sudo pacman -S snapd
$ sudo systemctl enable --now snapd.socket
$ sudo ln -s /var/lib/snapd/snap /snap
$ sudo snap install eclipse --classic
```

### Integrating the player template into Eclipse

![Import player template into Eclipse](/images/eclipse_import_project.jpg)

1.  Download the player template (from our website under general documentation).

2.  Extract the downloaded zip.

3.  Run the batch file `gradlew` in the extracted folder.
    It is possible that Windows Defender objects
    because the application tries to download Gradle.
    If this is the case, click on "More information"
    and then on "Run anyway".
    If everything worked,
    a new folder named `.gradle` should have appeared in the directory.

4.  Now open Eclipse and go to the top left:
    1.  File
    2.  Import...
    3.  Gradle
    4.  Existing Gradle Project
    5.  Next>

5.  Now select the extracted folder of the player template
    under "Project root directory" and click "Next>".

6.  Here you need to pay attention to a few things:
    1.  Tick "Override workspace settings" at the top left.
    2.  Under "Gradle distribution", select "Specific Gradle version"
        and specify version 6.9.1.
    3.  Under "Advanced Options", check "Java home"
        to see if the folder of the JDK (Java Development Kit) is specified,
        and note that you can only use JDKs of versions 11‑15.
    4.  Click "Next>" again at the bottom.

7.  This step may take a moment.
    If everything was successful,
    "CONFIGURE SUCCESSFUL" appears in the console at the bottom.
    If it worked, click "Finish".
    If not, check the Gradle version and the JDK version
    specified in the previous step.

### Starting the player template from Eclipse

You can start the player template
by right‑clicking on the file `Starter.java` in the Project Explorer
and then selecting "Run As" → "Java Application".

:::alert{info}
For the player template to start successfully,
the [game server](/grundlagen/server) must be running
and waiting for a connection.
:::

## Setting up IntelliJ

To install IntelliJ, follow these steps:

1.  Go to the [IntelliJ website](https://www.jetbrains.com/idea/download/?section=windows)
    and download IntelliJ Community (can be found at the bottom of the website).

2.  Once this is done, run the downloaded `.exe` file
    and an installer opens.

3.  After selecting where the program should be saved,
    you get to a menu called "Installation Options". Here, select:
    1.  Add "Open Folder as Project"
    2.  .java
    3.  .gradle

4.  In the next menu, select "Install".

5.  When the installation process is finished, click "Finish".

### Integrating the player template into IntelliJ

1.  Download the player template (from our website under general documentation).

2.  Extract the downloaded zip.

3.  Click on "Open"
    (either in the start menu next to "New Project"
    or top left via the options menu if you are already in a project).

4.  Now select the extracted folder and click on "Trust Project".

5.  After the import, select the hammer symbol at the bottom left.
    If everything worked, "BUILD SUCCESSFUL" appears in the console.
    If that is not the case, do the following:

    1.  Go to the options at the top left (the symbol with the four lines).
    2.  Click on "File" and select "Project Structure" there.
    3.  Now select version 11 under "SDK" (Software Development Kit)
        and set the "Language Level" to "SDK Default" at the very top of the menu.
    4.  Now click "Apply" and close the menu.
    5.  If you have followed all steps,
        go back to the hammer symbol at the bottom left
        and click on the refresh symbol or on "Sync Gradle Project"
        when you hover the mouse over the button.

## Further links

-   [Homepage of the Eclipse IDE](http://www.eclipse.org)
-   [Homepage of the IntelliJ IDE](https://www.jetbrains.com/de-de/idea/)
