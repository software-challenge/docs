---
name: Export player for submission
index: 8
---

# Prepare computer player for submission (Guide for exporting from the IDE for Java)

Below you will find instructions
for exporting your computer player from the development environment,
in order to upload it to the competition system.

## Basics
For Java, exporting the project works via Gradle.
The Gradle task "shadowJar" is used for this.
How exactly this looks like is described below for Eclipse and IntelliJ.

## Eclipse
To perform the export in Eclipse,
you must open the Gradle Tasks view.
There are two ways to do this:

1. The first way to open the view
   is the Gradle symbol (elephant) on the left edge.
   It may be that the symbol is hard to see in dark mode.

2. If the symbol cannot be found,
   the view can also be opened
   by going to Window/Show view/Other.../Gradle/Gradle Tasks at the top
   and then double-clicking on it or selecting it and clicking "open" at the bottom.

When the Gradle Tasks are open, the following steps must be carried out:

1. Open the folder with the name of the project.
   This is by default "player-*game abbreviation*-src"

   >If there is an X on that folder,
    the Gradle tasks must be reloaded once.
    This is done by the button "Refresh Tasks for all Projects"
    (top right on the window edge).

2. Open the folder named "shadow"

3. In the "shadow" folder there is a task called shadowJar.
   A double click starts the export.

The export is saved in the project's folder.
The name of this jar is by default "game abbreviation_year_client"
but can be changed arbitrarily after the export.
You can also adjust the name before the export
by opening "build.gradle.kts" in the project
and changing the "archiveBaseName" under "tasks.shadowJar".

## IntelliJ
To perform the export in IntelliJ,
you must open the Gradle Tasks view.
This is done by clicking on the Gradle symbol (elephant) on the right edge.
Now the Gradle task can be executed in different ways.
Both variants are explained below:

1. The short variant via the console:
   1. Click on the console symbol (Execute Gradle Task)
   2. In the opened console, enter "shadowJar"
   3. Press Enter

2. The long variant
   1. Go to the folder with the name of the project.
      This is by default "player-game abbreviation-src"
   2. Under the now displayed content, open the folder "shadow".
   3. In the "shadow" folder there is a task called shadowJar.
      A double click starts the export.

The export is saved in the project's folder.
The name of this jar is by default "game abbreviation_year_client",
but can be changed arbitrarily after the export.
You can also adjust the name before the export
by opening "build.gradle.kts" in the project
and changing the "archiveBaseName" under "tasks.shadowJar".