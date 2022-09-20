---
name: Computerspieler abgabefertig machen
index: 9
---

# Computerspieler abgabefertig machen

Damit das :t[Wettkampfsystem]{#contest} mit dem :t[Computerspieler]{#player} arbeiten kann,
muss er als ausführbares Programm in ein ZIP-Archiv gepackt werden.

Je nach Programmiersprache, in der der :t[Computerspieler]{#player} entwickelt wurde,
sind unterschiedliche Schritte notwendig.

:::alert{info}
In der Regel sollte jede Spielervorlage eine Beschreibung beinhalten, 
die aussagt, wie diese im :t[Wettkampfsystem]{#contest} genutzt werden kann.
:::

Wie man den abgabefertigen :t[Computerspieler]{#player} dann im :t[Wettkampfsystem]{#contest} einsendet,
ist unter :t[Wettkampfsystem->Computerspieler]{#contest.computerspieler} beschrieben.

## Java

Diese Anleitung beschreibt, wie man mit der Java-Spielervorlage umgehen sollte.

Hierzu gibt es zwei Möglichkeiten: 
Die JAR-Datei selbst erstellen oder die Verwendung von Gradle, was wir empfehlen.

### Erste Möglichkeit - JAR erstellen

#### Eclipse

1.  In Eclipse im Menü auf *File* → *Export*. Dann unter *Java* →
    *Runnable JAR file* wählen

2.  Im nächsten Fenster wird die *Run Configuration* ausgewählt, 
    dazu muss die Spielervorlage mindestens einmal mit Eclipse gestartet worden sein.

    Darunter wird mit *Browse* die Zieldatei, z.B.
    `[…​]/my_player.jar`, ausgewählt. Bei *Library handling* am besten
    die erste Option nehmen. So wird eine einzige JAR Datei erzeugt, in
    der alles nötige drin ist. Mit einem Klick auf Finish wird die
    JAR-Datei erzeugt. Eventuell erhält man einen Hinweis *This
    operation repacks referenced libraries*, den man mit *OK* bestätigen
    muss.

Wenn alles geklappt hat, wurde der :t[Computerspieler]{#player} in ein ausführbares
Programm überführt. Damit der Wettkampfserver den :t[Computerspieler]{#player} verarbeiten
kann, muss er noch in ein ZIP-Archiv gepackt werden, auch wenn ein JAR
technisch gesehen bereits ein ZIP-Archiv ist.

### Zweite Möglichkeit - Gradle

Man kann auch das Gradle-Buildscript benutzen, 
welches der Spielervorlage beiliegt.
Dieses kompiliert die Spielervorlage und erzeugt automatisch eine JAR-Datei,
welche man dann noch in einer ZIP-Datei verpacken muss
und dann im :t[Wettkampfsystem]{#contest} hochladen kann.

#### Gradle direkt ausführen

Angenommen Gradle ist installiert, 
so kann man über die Kommandozeile in das Verzeichnis der Spielervorlage wechseln 
und mit folgenden das Gradle-Projekt initialisieren.
```shell
$ gradle init
```
Wenn du dies getan hast, dann hast du von hier aus die Möglichkeit
den Spieler direkt zu starten.
```shell
$ ./gradlew run
```
Oder du baust den Spieler, um ihn dann auf das :t[Wettkampfsystem]{#contest} zu laden.
```shell
$ ./gradlew build
```
Wenn das Bauen der JAR erfolgreich war, 
dann solltest du im selben Ordner nun eine neue JAR-Datei vorfinden.
Diese muss dann nur noch in eine ZIP-Datei gepackt werden
und kann dann auch schon auf das :t[Wettkampfsystem]{#contest} hochgeladen werden.

## Andere Programmiersprache

Bei Computerspielern in einer anderen Programmiersprache muss das
ZIP-Archiv ein Shell-Script mit genauen Instruktionen zum Start des
Computerspielers enthalten. Dieses muss nach dem Hochladen im
Wettkampfystem als Hauptdatei ausgewählt werden.

Beachten Sie hierbei, dass diesem Script vom :t[Wettkampfsystem]{#contest} Parameter
übergeben werden, die an Ihr Programm weitergegeben werden müssen. Diese
Parameter sind mindestens Host und Port des Spielservers sowie die
Reservierungsnummer des Spiels, dem der :t[Computerspieler]{#player} beitreten soll.
Ein Aufruf sieht also in etwa wie folgt aus (falls `start.sh` als
Hauptdatei eingestellt ist):

    start.sh -h gameserver -p 13050 -r 590e5e6f-cf93-488e-a12d-5c194ecf95c2

Die Parameter folgen dabei den [GNU Getopt
Konventionen](https://www.gnu.org/software/libc/manual/html_node/Argument-Syntax.html#Argument-Syntax).
Das heißt, die drei Parameter können in beliebiger Reihenfolge und als
kurze oder lange Version übergeben werden. Folgende Variante muss also
auch von Ihrem Programm korrekt verarbeitet werden können:

    start.sh --reservation 590e5e6f-cf93-488e-a12d-5c194ecf95c2 --host gameserver --port 13050

Auch der Server mit grafischer Oberfläche ruft Ihr Programm mit diesen
Parametern auf. Ihr Programm wird also nur von der grafischen Oberfläche
richtig gestartet, wenn es die Parameter richtig verarbeitet.

Für die meisten Programmiersprachen gibt es Bibliotheken, die die
Kommandozeilenparameter nach diesem Schema verarbeiten können, sie
müssen diese Funktion also nicht unbedingt selbst implementieren.

Weiterhin ist es wichtig, den Interpreter in der ersten Zeile des Script
anzugeben, da das Script nicht von einer Shell aufgerufen wird. Ein
`start.sh` Script sieht also in etwa so aus:

    #!/bin/sh
    chmod +x hauptprogramm_dateiname
    ./hauptprogramm_dateiname "$@"

-   Script soll von `/bin/sh` interpretiert werden, es ist also ein
    einfaches Shell-Script.

-   Die Binärdatei wird ausführbar gemacht (das ist nötig, da in einem
    ZIP-Archiv das Ausführbar-Attribut nicht gespeichert wird).

-   Die Binärdatei wird aufgerufen und alle Parameter, die das Script
    bekommen hat, werden weitergereicht (`"$@"`).

Die `start.sh` muss in UTF-8 und mit UNIX(LF) Zeilenenden kodiert sein.
Andere Kodierungen führen zu Fehlern bei der Ausführung auf dem Server.
In Notepad++ kann die Kodierung einfach in dem Tab `Kodierung` angepasst
werden, die Zeilenenden in `Bearbeiten > Format Zeilenende`.

Bei compilierten Sprachen müssen die :t[Computerspieler]{#player} für 64bit Linux
compiliert werden, bei interpretierten Sprachen muss ein passender
Interpreter auf dem :t[Wettkampfsystem]{#contest} vorhanden sein. Weiterhin müssen
Abhängigkeiten wie z.B. genutzte Bibliotheken vorhanden sein oder
mitgeliefert werden.
