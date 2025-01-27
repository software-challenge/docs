---
name: Getting Started
index: 3
---

# Getting Started

Damit man nicht bei null starten muss, wird eine grundlegende Code-Basis bereitgestellt.
Diese importiert die wichtigsten Funktionen des installierten socha-Pakets und nutzt diese,
um eine simple, aber trotzdem schon spielfähige Logik zu implementieren.
Aktuell gibt diese Vorlage jedoch nur zufällige Züge an den [Spielserver](/glossary/server) zurück.

## Projekt erstellen

Alles beginnt mit einem Ordner auf dem Computer, der komplett nach eigenen Wünschen benannt
werden kann. In diesen Ordner werden ab sofort alle Dateien für den Computerspieler abgelegt.

Die Spielervorlage kann komplett aus dem
[Github-Repository](https://github.com/software-challenge/player_python/blob/master/logic.py)
des socha-Pakets in den eben erstellten Ordner heruntergeladen werden.

Standardmäßig heißt diese Datei `logic.py`, doch die tatsächliche Bezeichnung ist ebenfalls
einem selbst überlassen. Für die Zukunft ist nur zu beachten, dass alle Befehle mit

```bash
python logic.py ...
```

an den gewählten Dateinamen angepasst werden.

## Visual Studio Code Oberfläche

Wenn man noch nie mit so einer Entwicklungsumgebung gearbeitet hat,
mag der erste Anblick wohl ziemlich unübersichtlich sein. Doch wenn man sich
länger mit der Software befasst, fällt einem das schnell leichter und
man möchte die modernen Tools gar nicht mehr missen.
Deshalb folgt in diesem Abschnitt eine Erläuterung der wichtigsten 
Komponenten, die Visual Studio Code zu bieten hat:

![VS Code Oberfläche](/images/python/vs-code.png)

### Datei Explorer

Im Datei/Projekt Explorer auf der linken Seite, welcher über den markierten Button
erreichbar ist, werden alle Unterordner und Dateien des mit Visual Studio Code geöffnete
Ordners angezeigt. Mit einem Rechtsklick auf eine Datei/ einen Ordner öffnet sich ein 
ausführliches Dropdownmenü mit Funktionen wie Umbenennen und Kopieren, wie man es vom
System Explorer kennt.

Um den Ordner des Computerspielers zu öffnen, hat man zwei einfache Möglichkeiten:

1.  Oben auf "File" klicken und dann bei "Open Folder" den entsprechenden Ordner auswählen.
2.  Im System Dateiexplorer den Ordner rechtsklicken und "Mit Code öffnen" auswählen.
(Das geht nur wenn man diese Option bei der VS Code Installation ausgewählt hat)

### Registerkarten

Wenn man eine Datei aus dem Explorer öffnet, wird oben in der Reihe eine
neue Registerkarte mit dieser Datei erstellt.
Ähnlich wie bei Internet Browsern hat man so schnellen Zugriff auf die Dateien,
an welchen man aktuell arbeitet.

### Editor

Das Herzstück einer Entwicklungsumgebung. Hier in der Mitte wird der eigentliche Code geschrieben.
Es lassen sich auch mehrere Editor-Bereiche nebeneinander erstellen, wenn man einzelne Registerkarten
per Drag-and-Drop an z.B. den rechten Rand des Editors zieht.

### Terminal

Das Terminal im unteren Bereich ist nicht dauerhaft sichtbar, sondern kann über den Button "Terminal" und dann
"New Terminal" (am oberen Bildschirmrand) geöffnet werden. Oder man wartet bis man das
[Python Sktipt startet](#starte-skript), wodurch sich das Terminal automatisch öffnen wird.

Im Terminal können alle möglichen Befehle ausgeführt werden, wie z.B. das Starten eines Python Programms,
aber auch Paketverwaltung mit pip ist darüber möglich. Hier werden auch Outputs der ```print()``` Funktion
von Python, sowie Fehlermeldungen des Programms angezeigt.
Letztendlich handelt es sich genauso um eine Terminalanwednung, wie sie auch vom System bereitgestellt wird.
Man könnte also auch diese nutzen, wenn einem das lieber ist.

### Python Version

Wenn man ein Python Skript geöffnet hat, kann man unten rechts erkennen, dass Visual Studio Code die
Programmiersprache erkannt hat und welche Version des Python-Interpreters von VS Code verwendet wird.
Diese sollte eigentlich automatisch erkannt werden, insofern die Python Installation vorher erfolgreich war. \
Durch einen Klick auf die Version öffnet sich am oberen Bildschirmrand aber auch ein Pop-Up,
wo man die Möglichkeit bekommt, manuell eine installierte Python Version auszuwählen.

### Starte Skript

Der Play-Button oben rechts macht eigentlich genau das was man denkt:

Es öffnet sich das VS Code Terminal und das aktuell geöffnete Skript wird ausgeführt.

### Erweiterungen

Dieses Bereich wurde bei der Installation der Python Extension schon einmal verwendet.
Hierüber können sämtliche Pakete und Add-Ons für VS Code geladen werden können.
Darunter vor allem:
- Support für andere Programmiersprachen
- Erweiterungen um mit anderer Software zusammen zu arbeiten (z.B. Remote Server)
- Themes, die das Design ändern

Deshalb sieht auch das Visual Studio Code auf dem Screenshot wahrscheinlich etwas anders aus,
als die frisch installierte Version.