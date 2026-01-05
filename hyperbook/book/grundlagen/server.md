---
name: Spielleiter
index: 2
---

# Der Spielleiter (Server)

Die beiden [Computerspieler](/grundlagen/player) kommunizieren nicht direkt miteinander,
sondern spielen über einen Mittelsmann: den Spielleiter.
Dadurch ist zum einen sichergestellt,
dass man seinen Gegner nicht mit invaliden Nachrichten belästigen kann,
zum anderen sorgt der Spielleiter dafür,
dass sich die Kontrahenten an die Spielregeln halten.

Der Spielleiter ist direkt im [Wettkampfsystem](/grundlagen/contest) integriert,
sodass alle Turnierspiele regelkonform gespielt werden.
Zum Testen des eigenen Computerspielers gibt es eine Version des Spielleiters mit grafischer Oberfläche,
erhältlich im [Downloadbereich der Website](https://software-challenge.de/dokumentation-und-material).
Dadurch kann man das Spiel gut verfolgen
und sogar als Mensch mitspielen.

## System vorbereiten und Spielleiter starten

Die einzige Voraussetzung ist
die [Installation einer Java-Laufzeitumgebung](/entwicklung/java/installation-von-java).
dass auf dem Rechner mindestens die Laufzeitumgebung für Java 11 installiert ist.

Nach der erfolgreichen Installation kann man den grafischen Server
durch einen Doppelklick auf die Datei `software-challenge-gui` starten.

## Die Programmoberfläche

Die Programmoberfläche besteht aus einer Menüleiste oben
sowie der Spielfläche darunter.

Unter dem ersten Menüpunkt (Symbol der Software-Challenge)
findet man alle grundlegenden Aktionen.

### Ein neues Spiel erstellen

Starte ein neues Spiel mit Klick auf "Neues Spiel starten":

![Dialog für ein neues Spiel](/images/game-creation.png)

In diesem Fenster werden die Spieler ausgewählt,
die an dem Spiel teilnehmen sollen.
Für jeden Spieler gibt es folgende Optionen:

- **Text-Eingabefeld**: Hier kann für jeden Spieler ein Name eingegeben werden,
  der dann im Spiel angezeigt wird.

- **Spielertyp**: Es kann zwischen 4 verschiedenen Spielertypen gewählt werden:

    - *Mensch*
Ein menschlicher Spieler, der über die Programmoberfläche spielt.

    - *Beispiel-Computerspieler*
Ein Computerspieler, der im Server integriert ist.

    - *Computerspieler, von GUI gestartet*
Ein Computerspieler in Form eines separaten Programms, das beim Starten
des Spiels automatisch vom Server gestartet wird.

    - *Manuell gestarteter Computerspieler*
Ein Computerspieler in Form eines separaten Programms, das manuell durch
den Benutzer gestartet werden muss.

Nach Eingabe der erforderlichen Werte kann das Spiel mithilfe des
unteren Knopfs "Erstellen" erstellt werden.

### Die Spielfeldoberfläche

![Die Spielfeldoberfläche (hier mit dem Spiel "Hey, Danke für den Fisch")](/images/spiele/penguins/penguins_spielfeld.png "Spielfeld")

Auf dem Spielbrett wird das eigentliche Spiel,
die Züge und weitere für das Spiel wichtige Informationen dargestellt.
Hier setzt der menschliche Spieler auch seine Züge.

Die Steuerelemente unterscheiden sich je nach Spiel und Spielsituation.
Durch die Steuerleiste unten lässt sich der Spielfluss beinflussen.

## Spielwiederholungen (Replays)

<!-- TODO eigene Replay-Sektion im Glossar -->

Spielwiederholungen oder Replay-Dateien sind aufgezeichnete frühere Spiele,
die man sich beliebig oft wieder ansehen kann,
um beispielsweise einen Fehler des eigenen Spielers zu analysieren
oder eine Strategie zu verbessern.

Aktuell werden Replay-Dateien automatisch im Unterordner "replays"
des aktuellen Verzeichnisses beim Programmstart abgespeichert.

<!--
Die im Folgenden genannten Anpassungsmöglichkeiten beim Speichern werden noch implementiert.

~Um das aktuelle Spiel als Spielwiederholung zu speichern,
klick auf das Icon ganz rechts unten im Spielbereich.
Dann kann man einen Dateinamen und Speicherort festlegen.~
-->

Um eine gespeicherte Spielwiederholung zu laden, verwendet man den
Eintrag "Replay laden" im linken Punkt der Menüleiste Nachdem man eine
Datei ausgewählt hat, kann man das gespeicherte Spiel abspielen oder
Schritt für Schritt durchgehen.

### Spielsituation nachstellen

Diese Funktionalität fehlt noch in der neuen GUI
und wird dort bald auf einfacherem Wege verfügbar sein.

Wenn ein Fehlerverhalten des Computerspielers
nur in einer bestimmten Situation in einem Spiel auftritt,
kann es oft wünschenswert sein,
diese Situation erneut nachzuspielen um den Computerspieler gezielt zu verbessern.

Dies ist zur Zeit nur auf etwas kompliziertem Wege möglich.
Es folgt eine Schritt-für-Schritt Anleitung:

1.  Lade das betreffende Replay aus dem Wettkampfsystem herunter (.xml.gz Datei).

2.  Entpacke das Replay, um eine .xml-Datei zu erhalten.

3.  Starte den Server und erstelle ein neues Spiel.
    Wähle den Computerspieler, der für diese Spielsituation getestet werden soll.
    Dieser Spieler muss als Spieler 1 gestartet werden und ist dann direkt als erstes dran.
    Der Gegenspieler kann dann ein beliebiger Computerspieler oder auch ein Mensch sein.

4.  Setze einen Haken bei "Spiel aus Datei laden".
    Wähle über "Datei wählen" das entsprechende Replay aus
    und gib den Zug an, in dem gestartet werden soll.
    Starte dann das Spiel.

5.  Das Spiel sollte sich nun in genau der Situation befinden,
    in der das Fehlerverhalten aufgetreten ist.
    Dabei ist der Spieler, der nun dran ist, immer der rote Spieler.
    Falls der blaue Spieler eigentlich dran war, werden die Farben der Spieler getauscht.

6.  Nun kann der nächste Zug beim Spieler angefordert werden und dabei durch Debugging kontrolliert werden,
    wo sich der Spieler falsch verhalten hat.
    Achtung: Wenn weitere Züge angefordert werden,
    kann das Verhalten vom normalen Spielverlauf abweichen,
    da evtl. nicht alle Daten für das Spiel in der XML vorhanden sind.

## Automatische Spiele: Der Testserver

Wenn man einen grundsätzlich funkionierenden Computerspieler programmiert hat,
ist es sinnvoll, diesen mit vielen verschiedenen Spielsituationen zu konfrontieren.
Dadurch lassen sich Fehler entdecken und die Spielstärke des Computerspielers beurteilen.
Für solche Testdurchläufe wird ein Testserver und TestClient zur Verfügung gestellt.

Der Testserver hat keine grafische Oberfläche und läuft,
im Gegensatz zum Server mit graphischer Oberfläche (Port 13050),
standardmäßig auf Port 13051.
So nutzt du ihn

1.  Lade den Testserver von der Download-Seite herunter.

2.  Entpacke das heruntergeladene Archiv.

3.  Öffne eine Kommandozeilenumgebung
    (Terminal; auf Windows cmd oder Powershell)
    im Verzeichnis des entpackten Archives.

4.  Starte den Testserver auf Port 13051 mit dem beiliegenden `./start.sh` (Linux/macOS) bzw. `.\start.bat` Skript oder dem entsprechenden Befehl:

        java -Dfile.encoding=UTF-8 -Dlogback.configurationFile=logback.xml -jar server.jar --port 13051

5.  Starte die Computerspieler in weiteren Kommandozeilenumgebungen auf Port 13051
    (standardmäßig die Option `--port 13051`).
    Die Computerspieler verbinden sich automatisch zum Testserver und spielen ein Spiel.
    Danach sollten sich die Computerspieler automatisch beenden.

6.  Um weitere Testspiele zu spielen, starte die Computerspieler erneut.
    Der Testserver muss dabei nicht neu gestartet werden.

Es ist möglich, statt eines zufällig generierten vollständigen Spielplanes
eine Spielsituation zu laden und zu testen.
Die Spielsituation muss vorher wie unter [Spielsituation nachstellen](grundlagen/server#spielsituation-nachstellen) erzeugt werden.
Dann kann die Datei mit dem Argument `--loadGameFile` geladen werden
und optional mit `--turn` ein Zug spezifiziert werden.
```sh
java -Dfile.encoding=UTF-8 -Dlogback.configurationFile=logback.xml -jar server.jar --port 13051 --loadGameFile ./replay.xml --turn 10
```

TODO:
Tabelle cli Optionen wie bei TestClient?

### Replay speichern

Wenn der Server ohne grafische Oberfläche gestartet wird,
kann `--saveReplay` mitgegeben werden,
damit am Ende jedes Spiels ein Replay unter "./replays" gespeichert wird.

      java -Dfile.encoding=UTF-8 -Dlogback.configurationFile=logback.xml -jar server.jar --port 13051 --saveReplay true


### Unerwartete Zugzeitüberschreitungen (Soft-Timeout)

Mit der Option `--no-timeout` können Zeitüberschreitungen für alle Spieler deaktiviert werden.
Alternativ können diese auch bei erstellten Reservierungen
über das XML-Protokoll individuell für jeden Spieler gesetzt werden.

Wenn Sie den Testserver einige Zeit laufen lassen,
um eine größere Anzahl von Testspielen durchzuführen, kann es dazu kommen,
dass Computerspieler wegen Zugzeitüberschreitungen vom Server disqualifiziert werden (Soft-Timeout).
Dies passiert, obwohl der Zug innerhalb der erlaubten Zugzeit
(abhängig vom Spiel, bisher aber immer zwei Sekunden)
an den Server geschickt wurde.
Der [Garbage Collector](/faq#garbage-collector) der Java Virtual Machine kann dieses Verhalten auslösen.
Er pausiert die Anwendung, um nicht mehr genutzten Speicher freizugeben.
Wenn der Server dadurch zu einem ungünstigen Zeitpunkt angehalten wird,
bemerkt er den Eingang des Zuges vom Computerspieler nicht rechtzeitig und disqualifiziert ihn daraufhin.
Damit dieses Problem möglichst selten auftritt,
haben sich die folgenden Parameter beim Starten des Servers bewährt:

Unter Linux und macOS:
```sh
java -Dfile.encoding=UTF-8 \
     -Dlogback.configurationFile=logback.xml \
     -server \
     -XX:MaxGCPauseMillis=100 \
     -XX:GCPauseIntervalMillis=2050 \
     -XX:+UseConcMarkSweepGC -XX:+CMSParallelRemarkEnabled \
     -XX:+UseCMSInitiatingOccupancyOnly -XX:CMSInitiatingOccupancyFraction=70 \
     -XX:+ScavengeBeforeFullGC -XX:+CMSScavengeBeforeRemark \
     -jar server.jar --port 13051
```

Unter Windows
(unterscheidet sich nur durch die Art, den langen Befehl auf mehrere Zeilen zu verteilen):
```sh
java -Dfile.encoding=UTF-8 ^
     -Dlogback.configurationFile=logback.xml ^
     -server ^
     -XX:MaxGCPauseMillis=100 ^
     -XX:GCPauseIntervalMillis=2050 ^
     -XX:+UseConcMarkSweepGC -XX:+CMSParallelRemarkEnabled ^
     -XX:+UseCMSInitiatingOccupancyOnly -XX:CMSInitiatingOccupancyFraction=70 ^
     -XX:+ScavengeBeforeFullGC -XX:+CMSScavengeBeforeRemark ^
     -jar server.jar --port 13051
```

Um das Verhalten des Garbage Collectors noch weiter zu verbessern,
kann man auch noch mittels der Optionen
`-XX:+PrintGCDateStamps -XX:+PrintGC -XX:+PrintGCDetails -Xloggc:"pfad_zum_gc.log"`
eine Logdatei über die Aktivitäten des Garbage Collectors anlegen.
Darin sieht man genau, wann er wie lange lief.
Man kann dann die Einstellungen verändern und testen, ob sich das Verhalten verbessert.

Die Konfiguration des Garbage Collectors ist kein Allheilmittel
und kann zu neuen Problemen führen, auf die man gefasst sein sollte.
Dazu gehören erhöhter Ressourcenverbrauch und Instabilität der Anwendung.

Eine Auflistung möglicher nützlicher Parameter für Computerspieler findet sich unter
https://stackoverflow.com/questions/48989515/java-garbage-collector-time-limit.

### Massentests mit dem TestClient

Massentests mit dem eigenen Computerspieler können sehr nützlich sein,
beispielsweise um die Stärke gegenüber einer früheren Version zu Testen.
Dafür wird in jeder Saison ab Version XX.1.0 ein TestClient bereitgestellt.

Der TestClient lässt für eine Anzahl an Spielen zwei Computerspieler gegeneinander antreten,
wobei die Startreihenfolge abwechselt,
sodass eine gerade Anzahl an Spielen sinnvoll ist.
Dabei informiert er über den Fortschritt
und wertet am Ende die erreichten Punktzahlen aus.

Der TestClient muss vom Terminal mit den entsprechenden Argumenten aufgerufen werden.
Diese werden unter den Beispielen näher erläutert.

Unter Linux und macOS:
```sh
    java -jar -Dlogback.configurationFile=logback-tests.xml test-client.jar \
        --tests 4 \
        --name1 "displayName1" \
        --player1 "./player1.jar" \
        --name2 "displayName2" \
        --player2 "./player2.jar" \
        --start-server \
        --port 13051
```

Unter Windows
(unterscheidet sich nur durch die Art, den langen Befehl auf mehrere Zeilen zu verteilen):

```cmd
    java -jar -Dlogback.configurationFile=logback-tests.xml test-client.jar ^
        --tests 4 ^
        --name1 "displayName1" ^
        --player1 "./player1.jar" ^
        --name2 "displayName2" ^
        --player2 "./player2.jar" ^
        --start-server ^
        --port 13051
```
Der TestClient kann sich auch mit einem bereits laufenden Server verbinden,
bei Angabe des Arguments `--start-server` startet er jedoch einfach selbst einen.
Bei folgender Fehlermeldung wurde der Server auf einem bereits belegten Port gestartet:
```
    Could not start server on port 13050
    java.net.BindException: Address already in use
```

#### Argumente des TestClients

| Attribut         | Standardwert (Typ)                               | Beschreibung                                                                                                                         |
|------------------|--------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| `--tests`        | 100 (`int`)                                      | Anzahl der Tests, die gespielt werden sollen                                                                                         |
| `--player1`      | "./defaultplayer.jar" (Dateipfad)                | Erster Computerspieler                                                                                                               |
| `--player2`      | "./defaultplayer.jar" (Dateipfad)                | Zweiter Computerspieler                                                                                                              |
| `--name1`        | "player1" (`String`)                             | Name des ersten Spielers                                                                                                             |
| `--name2`        | "player2" (`String`)                             | Name des zweiten Spielers                                                                                                            |
| `--no-timeout`   | false (`bool`)                                   | Deaktiviere Ausscheiden durch Timeouts. Kann durch `--no-timeout1` bzw. `--no-timeout2` für beide Spieler unabhängig gesetzt werden. |
| `--start-server` | false (`bool`)                                   | Starte einen Server auf dem angegebenen Port vor dem Starten der Clients.                                                            |
| `--server`       | 'server.jar' aus dem Classpath (Dateipfad)       | Gib einen bestimmten server an, der für die tests gestartet werden soll.                                                             |
| `--port`         | 13050 / 13051 (`int`)                            | Der Port, auf dem der Server läuft.                                                                                                  |
| `--host`         | localhost (IP)                                   | Die Adresse, auf dem der Server läuft.                                                                                               |
| `--loglevel`     | INFO - ensprechend der logback-tests.xml (Level) | Setzt das Loglevel, um ausführliche oder kompaktere Ausgaben zu erhalten.                                                            |

Boolesche Parameter werden als true gewertet, sobald sie angegeben werden.
Ein Wert hinter dem Parameter hat keine Wirkung.

Bei Argumenten, die nicht angegeben wurden, werden die Standardwerte aus
der Tabelle verwendet. Die Ausgabe der Daten erfolgt nach jedem Spiel
anhand von gerundeten Werten. Der TestClient beendet sich selbst,
nachdem alle Spiele gespielt wurden.

Die Ergebnisse der Spiele werden für den jeweiligen Spielernamen vom
Server zusammengezählt, auch über mehrere Starts des TestClients. Die
Ergebnisse werden erst zurückgesetzt, wenn der Server neu gestartet
wird. Achte also nach einer Veränderung der Spieler darauf, den Server
neu zu starten oder andere Spielernamen zu verwenden.

TODO: Is this still right?
Dieses Verhalten wird wahrscheinlich bald verändert,
Die Ergebnisse der Spiele werden für den jeweiligen Spielernamen vom Server zusammengezählt,
auch über mehrere Starts des TestClients.
Die Ergebnisse werden erst zurückgesetzt,
wenn der Server neu gestartet wird.
Achte also nach einer Veränderung der Spieler darauf,
den Serverneu zu starten oder andere Spielernamen zu verwenden.
Perspektivisch soll der TestClient zukünftig unabhängig vom Server die Punkte zählen.
