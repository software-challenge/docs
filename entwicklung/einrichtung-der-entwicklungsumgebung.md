# Einrichtung der (Java-)Entwicklungsumgebung

Die Aufgabe einer Entwicklungsumgebung (IDE) ist es, den Programmierer
bei seiner Arbeit zu unterstützen. Dazu bietet sie neben dem Editor auch
viele Tools, die das Entwickeln eigener Programme stark erleichtern.
Zwei große Vertreter an Entwicklungsumgebungen sind Eclipse und
IntelliJ.

**Hinweis:** Bevor man sich um die Einrichtung der Entwicklungsumgebung
kümmert, muss unbedingt [Java installiert](#installation-java) sein.

## SimpleClient beschaffen

Der SimpleClient ist schon ein fertiger Computerspieler. Denn Quellcode
kann man verwenden, um seinen eigenen Spieler zu programmieren. Den
SimpleClient bekommt man im Downloadbereich der Software-Challenge
(<https://www.software-challenge.de/downloads>). Man braucht die Version
"als Quellcode".

## Einrichtung von Eclipse

### Beschaffung und Installation der Software

Am einfachsten ist die Installation von Eclipse mittels des Eclipse
Installer. Dies ist auf folgender Seite erklärt:
<https://www.eclipse.org/downloads/packages/installer>

### SimpleClient in Eclipse einbinden

![SimpleClient in Eclipse importieren](eclipse_import_project.jpg)

1.  Im Menü auf "File" → "Import…" gehen

2.  Im Dialogfenster unter "General" "Projects from Folder or Archive"
    wählen, dann auf den "Next" Button klicken

3.  Oben rechts auf "Archive…" klicken und die heruntergeladene
    ZIP-Datei mit dem SimpleClient auswählen. Dann auf "Finish" klicken.

Nun muss noch das SDK und Spiel-Plugin eingebunden werden, damit
Funktionen wie Autovervollständigung und Anzeige der Dokumentation
richtig arbeiten:

1.  Im Package Explorer einen Rechtsklick auf den Eintrag sdk.jar unter
    "Referenced Libraries" machen und Properties wählen

2.  Links "Java Source Attachment" auswählen

3.  Rechts "Workspace location" aktivieren und den Pfad zu
    "sdk-sources.jar" (im Ordner "lib" des SimpleClient Quellcode
    Paketes) einstellen

4.  Den Dialog mit "Apply and Close" schließen

5.  Im Package Explorer einen Rechtsklick auf den Eintrag für das
    Spiel-Plugin unter "Referenced Libraries" machen (Spielname und
    Jahreszahl, also z.B. "piranhas\_2019.jar") und Properties wählen

6.  Links "Java Source Attachment" auswählen

7.  Rechts "Workspace location" aktivieren und den Pfad zur Source-Jar
    (im Ordner "lib" des SimpleClient Quellcode Paketes) einstellen
    (heißt genau wie das Spiel-Plugin mit einem "sources" angehängt,
    also z.B. "piranhas\_2019-sources.jar")

8.  Den Dialog mit "Apply and Close" schließen

### SimpleClient aus Eclipse starten

Den SimpleClient kann man starten, indem man im Project-Explorer einen
Rechtsklick auf die Datei `Starter.java` macht und dann "Run As" → "Java
Application" auswählt.

**Hinweis:** Damit der SimpleClient erfolgreich startet, muss der
Spielleiter laufen und auf eine Verbindung warten.

## Weiterführende Links

-   [Homepage der Eclipse-IDE](http://www.eclipse.org)

-   [Homepage des NetBeans-Projektes](http://www.netbeans.org)
