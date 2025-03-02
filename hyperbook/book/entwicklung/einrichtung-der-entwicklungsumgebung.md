---
name: Einrichtung der Entwicklungsumgebung
index: 6
---

# Einrichtung der (Java-)Entwicklungsumgebung

Die Aufgabe einer Entwicklungsumgebung (IDE) ist es, den Programmierer
bei seiner Arbeit zu unterstützen. Dazu bietet sie neben dem Editor auch
viele Tools, die das Entwickeln eigener Programme stark erleichtern.
Zwei große Vertreter an Entwicklungsumgebungen sind Eclipse und
IntelliJ.

**Hinweis:** Bevor man sich um die Einrichtung der Entwicklungsumgebung
kümmert, muss unbedingt [Java installiert](installation-von-java) sein.

## Spielervorlage beschaffen

Die Spielervorlage ist schon ein fertiger Computerspieler. Den Quellcode kann man verwenden, 
um seinen eigenen Spieler zu programmieren. 
Die Spielervorlage bekommt man im 
[Downloadbereich der Software-Challenge](https://software-challenge.de/dokumentation-und-material).
Man braucht die Version
*als Quellcode*.

## Einrichtung von Eclipse

#### Windows

Am einfachsten ist die Installation von Eclipse unter Windows mittels des Eclipse Installer. 
Dies ist auf der [Eclipse-Website](https://www.eclipse.org/downloads/packages/installer) gut erklärt.

#### Debian (Linux)
Unter Debian basierenden Distributionen ist die Installation sehr einfach mit `snap`.
```shell
$ sudo snap install eclipse --classic
```

#### Arch (Linux)
Mit einer Arch-Distribution lässt sich Eclipse ebenso einfach mit `snap` installieren. Allerdings ist oftmals `snap` noch nicht installiert.
```shell
$ sudo pacman -S snapd
$ sudo systemctl enable --now snapd.socket
$ sudo ln -s /var/lib/snapd/snap /snap
$ sudo snap install eclipse --classic
```

### Spielervorlage in Eclipse einbinden

![Spielervorlage in Eclipse importieren](/images/eclipse_import_project.jpg)

1.  Spielervorlage herunterladen (von unserer Website unter allgemeine Dokumatation)

2.  Die heruntergeladene Zip extrahieren

3.  In dem extrahiertem Ordner die Batchdatei gradlew ausführen. Es kann sein das Windows Defender 
    etwas dagegen hat, weil die Anwendung versucht Gradle herunterzuladen. Falls dies der Fall sein sollte, auf "weiter Informationen" gehen und auf "trotzdem ausführen" klicken.
    Wenn alles funktioniert hat, muss in der Datei nun ein neuer Ordner mit dem Namen .gradle erschienen sein

4.  Nun öffnet man Eclipse und geht oben links auf:
    1.  File
    2.  Import...
    3.  Gradle
    4.  Existing Gradle Project
    5.  Next>
   
5.  Nun wählt man unter "Project root directory" die extrahierte Datei der Spielervorlage aus und klickt auf "next>"

6.  Hier muss man einige Dinge beachten:
    1.  Oben links bei "Overide workspace settings" ein Häckchen setzen
    2.  Unter "Gradle distribution" Specific Gradle version auswählen und die Version 6.9.1 angeben
    3.  Unter "Advanced Options" bei "Java home" nachsehen, ob dort der Ordner des JDK (Java Develobment Kit) angegeben ist
        und dabei beachten das man nur JDK´s der Versionen 11-15 benutzen kann.
    4.  Unten wieder auf "Next>" klicken

7. Dieser Schritt kann einen Moment dauern. Wenn alles erfolgreich war, steht unten in der Konsole "CONFIGURE         SUCCESFUL".
   Falls es funktioniert hat geht man auf "Finish". Falls nicht überprüft man im Schritt davor die Gradle Version und die Version des JDK, dass angegeben ist

### Spielervorlage aus Eclipse starten

Die Spielervorlage kann man starten, indem man im Project-Explorer einen
Rechtsklick auf die Datei `Starter.java` macht und dann "Run As" → "Java
Application" auswählt.

:::alert{info}
Damit die Spielervorlage erfolgreich startet, muss der
:t[Spielleiter]{#server} laufen und auf eine Verbindung warten.
:::

## Einrichtung von IntelliJ

Um IntelliJ zu installieren befilgt man folgende Schritte:

 1. Man geht auf die [IntelliJ-Website](https://www.jetbrains.com/idea/download/?section=windows) und läd sich IntelliJ Community herunter (Ist unten auf der Website zu finden)

 2. Wenn dies geschehen ist führt man die heruntergeladene .exe Datei aus und es öffnet sich ein Installer

 3. Nachdem man ausgewählt hat wo das Programm gespeichert werden soll, kommt man in ein Menü das Installation Options heißt. Hier wählt man
    1. Add "Open Folder as Project"
    2. .java
    3. .gradle 
   
 4. Im nächsten Menü wählt man Install aus

 5. Wenn der Instalationsprozess fertig ist geht man auf Finish


### Spielervorlage in IntelliJ einbinden

1. Spielervorlage herunterladen (von unserer Website unter allgemeine Dokumatation)

2. Die heruntergeladene Zip extrahieren

3. Man klickt auf Open (entweder im Startmenü neben New Project oder oben links über das Optionsmenü, wenn man bereits in einem Projekt ist)

4. Nun wählt man die extrahierte Datei aus und klickt auf "Trust Project"

5. Nach dem Import wählt man unten links das Hammersymbol aus und wenn alles funktioniert hat steht in der Konsole "BUILD SUCCESSFUL". Falls das nicht der Fall sein sollte tut man folgendes:
   1. Man geht oben links auf Optionen (Das Symbol mit den 4 Strichen)
   2. Man geht auf "File" und wählt dort "Project Structure" aus
   3. Nun wählt man bei "SDK" (Software Devolopment Kit) die Version 15 aus und setzt das "Language Level" auf "SDK Default" ganz oben im Menü
   4. Nun geht man auf Apply und schließt das Menü
   5. Wenn man alle Schritte befolgt hat geht man nun wieder auf das Hammersymbol unten links und klickt auf das Refresh-Symbol bzw. auf "Sync Gradle Project" wenn man mit der Maus auf dem Button ist.

## Weiterführende Links

-   [Homepage der Eclipse-IDE](http://www.eclipse.org)
-   [Homepage der IntelliJ-IDE](https://www.jetbrains.com/de-de/idea/)