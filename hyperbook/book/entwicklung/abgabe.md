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

### Offizielle Spielervorlagen
- [Java](https://github.com/software-challenge/backend/blob/main/player/configuration/README.md)
- [Ruby](https://github.com/software-challenge/client-ruby/blob/main/README.md)

### Inoffizielle Spielervorlagen
- [C#](https://github.com/jnccd/socha-client-csharp/blob/master/README.md)
- [C++](https://github.com/Estugon/sc-penguins-cpp/blob/main/README.md)
- [Python](https://github.com/FalconsSky/socha-python-client/blob/master/README.md)
- [Rust](https://github.com/fwcd/socha-client-rust-2023/blob/main/README.md)
- [Swift](https://github.com/matthesjh/sc23-swift-client/blob/main/README.md)

Wie man den abgabefertigen :t[Computerspieler]{#player} dann im :t[Wettkampfsystem]{#contest} einsendet,
ist unter :t[Wettkampfsystem->Computerspieler]{#contest.computerspieler} beschrieben.

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

## Ausführungsumgebung

Der :t[Computerspieler]{#player} wird in einem Docker container ausgeführt,
welcher die verfügbaren Bibliotheken und Programme bestimmt.
Die verfügbaren Container-Vorlagen sind im Wettkampfsystem einsehbar,
und bieten unter anderem Java, Python, Ruby, Node.js, Swift, .NET, C++ Boost, Tensorflow
oft in mehreren Versionen.

| Bezeichnung        | Image-Name                                                                                   | Beschreibung                                                                                                               |
| ------------------ | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Java 11             | [openjdk:11-ea-jre](https://hub.docker.com/_/openjdk/)                                       | Open Source Java Platform, Standard Edition, Version 1.8.0. Für alle :t[Computerspieler]{#player} auf Basis des Java Zufallsspielers.     |
| Ruby 2             | [ruby:2.4.2](https://hub.docker.com/_/ruby/) mit installiertem Software-Challenge-Computerspieler-Gem | Ruby Interpreter, Version 2.4.2. Für alle :t[Computerspieler]{#player} auf Basis des Ruby Zufallsspielers.                                |
| Python 3           | [python:3.6.3](https://hub.docker.com/_/python/)                                             | Python Interpreter, Version 3.6.3. Für selbst entwickelte :t[Computerspieler]{#player} in Python.                                       |
| Mono 5.4 (C# .NET) | [mono:5.4.1.6](https://hub.docker.com/_/mono/)                                               | Mono Laufzeitumgebung, Version 5.4.1.6. Für selbst entwickelte :t[Computerspieler]{#player} basierend auf dem Microsoft .NET Framework. |

Wenn Ihr :t[Computerspieler]{#player} eine speziellere Umgebung benötigt
(zum Beispiel ein hier nicht angebotener Interpreter),
nehmen Sie bitte mit uns Kontakt auf (<tech@software-challenge.de>).
Wir stellen gern weitere Images zur Verfügung.

