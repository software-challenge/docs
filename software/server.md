# Der Spielleiter (Server)

Die beiden [Computerspieler](#der-computerspieler) kommunizieren nicht
direkt miteinander, sondern übertragen ihre Nachrichten über einen
Mittelmann: den Spielleiter. Dadurch ist zum einen sichergestellt, dass
man seinen Gegner nicht mit invaliden Nachrichten belästigen kann, zum
anderen sorgt der Spielleiter dafür, dass sich die Kontrahenten an die
Spielregeln halten.

Der Spielleiter ist direkt im [Wettkampfsystem](#das-wettkampfsystem)
integriert, so dass alle Turnierspiele regelkonform gespielt werden. Zum
Testen des eigenen Computerspielers gibt es eine spezielle Version des
Spielleiters, die im [Downloadbereich der
Website](https://software-challenge.de/dokumentation-und-material)
heruntergeladen werden kann. Diese Download-Version enthälft eine
grafische Oberfläche, durch die man das Spiel gut verfolgen und sogar
als Mensch mitspielen kann.

## System vorbereiten und Spielleiter starten

Die einzige Vorraussetzung ist, dass auf dem Rechner mindestens die
Laufzeitumgebung für Java 9 installiert ist. Siehe
[???](#installation-java).

Nach der erfolgreichen Installation kann man den Server durch einen
Doppelklick auf die Datei `software-challenge-gui` starten.

## Die Programmoberfläche

Die Programmoberfläche besteht aus einer Menüleiste oben sowie der
Spielfläche darunter.

Unter dem ersten Menüpunkt (Symbol der Software-Challenge) findet man
alle grundlegenden Aktionen.

### Ein neues Spiel erstellen

Um ein Spiel zu spielen, muss zunächst "Neues Spiel starten" angeklickt
werden.

![Dialog für ein neues Spiel](gui/game-creation.png)

In diesem Fenster werden die Spieler ausgewählt, die an dem Spiel
teilnehmen sollen. Für jeden Spieler gibt es folgende Optionen:

Text-Eingabefeld: Hier kann für jeden Spieler ein Name eingegeben
werden, der dann im Spiel angezeigt wird.

Spielertyp: Es kann zwischen 4 verschiedenen Spielertypen gewählt
werden:

Mensch  
Ein menschlicher Spieler, der über die Programmoberfläche spielt.

Beispiel-Computerspieler  
Ein Computerspieler, der im Server integriert ist.

Computerspieler, von GUI gestartet  
Ein Computerspieler in Form eines separaten Programms, das beim Starten
des Spiels automatisch vom Server gestartet wird.

Manuell gestarteter Client  
Ein Computerspieler in Form eines separaten Programms, das manuell durch
den Benutzer gestartet werden muss.

Nach Eingabe der erforderlichen Werte kann das Spiel mithilfe des
unteren Knopfs "Erstellen" erstellt werden.

### Die Spielfeldoberfläche

![Die Spielfeldoberfläche (hier mit dem Spiel
"Ostseeschach")](gui/ostseeschach.png)

Auf dem Spielbrett wird das eigentliche Spiel, die Züge und weitere für
das Spiel wichtige Informationen dargestellt. Hier setzt der menschliche
Spieler auch seine Züge.

Die Steuerelemente unterscheiden sich je nach Spiel und Spielsituation.
Unten gibt es immer die Schaltflächen "Anhalten/Weiter".

## Spielwiederholungen (Replays)

Spielwiederholungen oder Replay-Dateien sind aufgezeichnete frühere
Spiele, die man sich beliebig oft wieder ansehen kann, um beispielsweise
einen Fehler des eigenen Spielers zu analysieren oder eine Strategie zu
verbessern.

Aktuell werden Replay-Dateien automatisch im Unterordner `replays`
abgespeichert. Die im Folgenden genannten Anpassungsmöglichkeiten werden
noch implementiert.

Um das aktuelle Spiel als Spielwiederholung zu speichern, klickt man auf
das Icon ganz rechts unten im Spielbereich. Dann kann man einen
Dateinamen und Speicherort festlegen.

Um eine gespeicherte Spielwiederholung zu laden, verwendet man den
Eintrag "Replay laden" im linken Punkt der Menüleiste Nachdem man eine
Datei ausgewählt hat, kann man das gespeicherte Spiel abspielen oder
Schritt für Schritt durchgehen.

### Spielsituation nachstellen

Diese Funktionalität fehlt noch in der neuen GUI und wird dort bald auf
einfacherem Wege verfügbar sein.

Wenn ein Fehlerverhalten des Computerspielers nur in einer bestimmten
Situation in einem Spiel auftritt, kann es oft wünschenswert sein, diese
Situation erneut nachzuspielen um den Computerspieler gezielt zu
verbessern.

Dies ist zur Zeit nur auf etwas kompliziertem Wege möglich. Es folgt
eine Schritt-für-Schritt Anleitung:

1.  Laden Sie das betreffende Replay aus dem Wettkampfsystem herunter
    (.xml.gz Datei).

2.  Entpacken Sie das Replay, sodass sie eine .xml-Datei erhalten.

3.  Starten Sie den Server und erstellen Sie ein neues Spiel. Wählen Sie
    den Computerspieler, der für diese Spielsituation getestet werden
    soll. Dieser Spieler muss als Spieler 1 gestartet werden und ist
    dann direkt als erstes dran. Der Gegenspieler kann dann ein
    beliebiger Computerspieler oder auch ein Mensch sein.

4.  Setzen Sie einen Haken bei "Spiel aus Datei laden". Wählen Sie über
    "Datei wählen" das entsprechende Replay aus und spezifizieren sie
    den Zug in dem gestartet werden soll. Starten Sie dann das Spiel.
    Das Spiel sollte sich nun in genau der Situation befinden, in der
    das Fehlerverhalten aufgetreten ist. Dabei ist der Spieler, der nun
    dran ist immer der rote Spieler. Falls der blaue Spieler eigentlich
    dran war, werden die Farben der Spieler getauscht.

5.  Nun kann der nächste Zug beim Spieler angefordert werden und dabei
    durch Debugging kontrolliert werden, wo sich der Spieler falsch
    verhalten hat. Achtung: Wenn weitere Züge angefordert werden, kann
    das Verhalten vom normalen Spielverlauf abweichen, da evtl. nicht
    alle Daten für das Spiel in der XML vorhanden sind.

### Replay mit Server ohne graphische Oberfläche speichern

Wenn der Server ohne die graphische Oberfläche gestartet wird, kann das
`--saveReplay` Attribut gesetzt werden, damit bei Ende jedes Spiels das
Replay des Spiels unter `./replays` gespeichert wird.

      java -Dfile.encoding=UTF-8 -Dlogback.configurationFile=logback.xml -jar softwarechallenge-server.jar --port 13051 --saveReplay true

## Automatische Spiele: Der Testserver

Wenn man einen grundsätzlich funkionierenden Computerspieler
programmiert hat, ist es sinnvoll, diesen mit vielen verschiedenen
Spielsituationen zu konfrontieren. Dadurch lassen sich Fehler entdecken
und die Spielstärke des Computerspielers beurteilen. Für solche
Testdurchläufe wird ein Testserver und TestClient zur Verfügung
gestellt.

Der Testserver hat keine grafische Oberfläche und läuft, im Gegensatz
zum Server mit graphischer Oberfläche (Port 13050), standardmäßig auf
Port 13051. So kannst du ihn nutzen:

1.  Lade den Testserver von der Download-Seite herunter.

2.  Entpacken Sie das heruntergeladene Archiv.

3.  Öffne eine Kommandozeilenumgebung (Terminal; auf Windows cmd oder
    Powershell) im Verzeichnis des entpackten Archives.

4.  Starte den Testserver auf Port 13051:

        java -Dfile.encoding=UTF-8 -Dlogback.configurationFile=logback.xml -jar softwarechallenge-server.jar --port 13051

5.  Starten die Computerspieler in weiteren Kommandozeilenumgebungen auf
    Port 13051 (beim SimpleClient geht dies mit der Option
    `--port 13051`). Die Computerspieler verbinden sich automatisch zum
    Testserver und spielen ein Spiel. Danach sollten sich die
    Computerspieler automatisch beenden.

6.  Um weitere Testspiele zu spielen, starte die Computerspieler erneut.
    Der Testserver muss dabei nicht neu gestartet werden.

Beachte, dass der Testserver keine Spielaufzeichnungen anlegt, wie es
der Server mit grafischer Oberfläche tut. Die Auswertung der Spiele muss
in einem der teilnehmenden Computerspieler geschehen (z.B. durch
Log-Ausgaben).

Es ist ebenfalls möglich, statt eines zufällig generierten vollständigen
Spielplanes eine Spielsituation zu laden und zu testen. Die
Spielsituation muss vorher wie unter [Spielsituation
nachstellen](#spielsituation-nachstellen) erzeugt werden. Dann kann die
Datei mit dem Argument `--loadGameFile` geladen werden und optional mit
`--turn` ein Zug spezifiziert werden.

      java -Dfile.encoding=UTF-8 -Dlogback.configurationFile=logback.xml -jar softwarechallenge-server.jar --port 13051 --loadGameFile ./replay.xml --turn 10

### Unerwartete Zugzeitüberschreitungen (Soft-Timeout)

Wenn Sie den Testserver einige Zeit laufen lassen, um eine größere
Anzahl von Testspielen durchzuführen, kann es dazu kommen, dass
Computerspieler wegen Zugzeitüberschreitungen vom Server disqualifiziert
werden (Soft-Timeout). Dies passiert, obwohl der Zug innerhalb der
erlaubten Zugzeit (abhängig vom Spiel, bisher aber immer zwei Sekunden)
an den Server geschickt wurde. Der Garbage Collector der Java Virtual
Machine löst dieses Verhalten aus. Er pausiert die Anwendung, um nicht
mehr genutzten Speicher freizugeben. Wenn der Server dadurch zu einem
ungünstigen Zeitpunkt angehalten wird, bemerkt er den Eingang des Zuges
vom Computerspieler nicht rechtzeitig und disqualifiziert ihn daraufhin.
Damit dieses Problem möglichst selten auftritt, haben sich die folgenden
Parameter beim Starten des Servers bewährt:

Unter Linux:

    java -Dfile.encoding=UTF-8 \
         -Dlogback.configurationFile=logback.xml \
         -server \
         -XX:MaxGCPauseMillis=100 \
         -XX:GCPauseIntervalMillis=2050 \
         -XX:+UseConcMarkSweepGC -XX:+CMSParallelRemarkEnabled \
         -XX:+UseCMSInitiatingOccupancyOnly -XX:CMSInitiatingOccupancyFraction=70 \
         -XX:+ScavengeBeforeFullGC -XX:+CMSScavengeBeforeRemark \
         -jar softwarechallenge-server.jar --port 13051

Unter Windows (unterscheidet sich nur durch die Art, den langen Befehl
auf mehrere Zeilen zu verteilen):

    java -Dfile.encoding=UTF-8 ^
         -Dlogback.configurationFile=logback.xml ^
         -server ^
         -XX:MaxGCPauseMillis=100 ^
         -XX:GCPauseIntervalMillis=2050 ^
         -XX:+UseConcMarkSweepGC -XX:+CMSParallelRemarkEnabled ^
         -XX:+UseCMSInitiatingOccupancyOnly -XX:CMSInitiatingOccupancyFraction=70 ^
         -XX:+ScavengeBeforeFullGC -XX:+CMSScavengeBeforeRemark ^
         -jar softwarechallenge-server.jar --port 13051

Um das Verhalten des Garbage Collectors noch weiter zu verbessern, kann
man auch noch mittels der Optionen

    -XX:+PrintGCDateStamps -XX:+PrintGC -XX:+PrintGCDetails -Xloggc:"pfad_zum_gc.log"

eine Logdatei über die Aktivitäten des Garbage Collectors anlegen. Darin
sieht man genau, wann er wie lange lief. Man kann dann die Einstellungen
verändern und testen, ob sich das Verhalten verbessert.

Die Konfiguration des Garbage Collectors ist kein Allheilmittel und kann
zu neuen Problemen führen, auf die man gefasst sein sollte. Dazu gehören
erhöhter Resourcenverbrauch und Instabilität der Anwendung.

### Massentests

Massentests mit dem eigenen Computerspieler können sehr nützlich sein,
beispeilsweise um die Stärke gegenüber einer früheren Version zu Testen.
Dafür wird in jeder Saison ab Version XX.1.0 ein TestClient
bereitgestellt.

Der TestClient muss vom Terminal mit den entsprechenden Argumenten
aufgerufen werden. Diese werden unter den Beispielen näher erläutert.

Unter Linux:

    java -jar -Dlogback.configurationFile=logback-tests.xml test-client.jar \
        --tests 4 \
        --name1 "displayName1" \
        --player1 "./player1.jar" \
        --name2 "displayName2" \
        --player2 "./player2.jar" \
        --start-server \
        --port 13051

Unter Windows (unterscheidet sich nur durch die Art, den langen Befehl
auf mehrere Zeilen zu verteilen):

    java -jar -Dlogback.configurationFile=logback-tests.xml test-client.jar ^
        --tests 4 ^
        --name1 "displayName1" ^
        --player1 "./player1.jar" ^
        --name2 "displayName2" ^
        --player2 "./player2.jar" ^
        --start-server ^
        --port 13051

Der TestClient kann sich auch mit einem bereits laufenden Server
verbinden, bei Angabe des Arguments `--start-server` startet er jedoch
einfach selbst einen. Wichtig ist, dass nicht versucht wird, zwei Server
auf dem selben Port zu starten.

#### Argumente des TestClients

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr class="header">
<th style="text-align: left;">Attribut</th>
<th style="text-align: left;">Standardwert (Typ)</th>
<th style="text-align: left;">Beschreibung</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td style="text-align: left;"><p>--tests</p></td>
<td style="text-align: left;"><p>100 (int)</p></td>
<td style="text-align: left;"><p>Anzahl der Tests, die gespielt werden
sollen</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p>--player1</p></td>
<td style="text-align: left;"><p>"./defaultplayer.jar"
(Dateipfad)</p></td>
<td style="text-align: left;"><p>Erster Computerspieler</p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p>--player2</p></td>
<td style="text-align: left;"><p>"./defaultplayer.jar"
(Dateipfad)</p></td>
<td style="text-align: left;"><p>Zweiter Computerspieler</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p>--name1</p></td>
<td style="text-align: left;"><p>"player1" (String)</p></td>
<td style="text-align: left;"><p>Name des ersten Spielers</p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p>--name2</p></td>
<td style="text-align: left;"><p>"player2" (String)</p></td>
<td style="text-align: left;"><p>Name des zweiten Spielers</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p>--no-timeout</p></td>
<td style="text-align: left;"><p>false (bool)</p></td>
<td style="text-align: left;"><p>Deaktiviere ausscheiden durch Timeouts.
Kann durch <code>--no-timeout1</code> bzw. <code>--no-timeout2</code>
für beide Spieler unabhängig gesetzt werden.</p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p>--start-server</p></td>
<td style="text-align: left;"><p>false (bool)</p></td>
<td style="text-align: left;"><p>Starte einen Server auf dem angegebenen
Port vor dem Starten der Clients.</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p>--server</p></td>
<td style="text-align: left;"><p>'server.jar aus dem Classpath'
(Dateipfad)</p></td>
<td style="text-align: left;"><p>Gib einen bestimmten server an, der für
die tests gestartet werden soll.</p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p>--port</p></td>
<td style="text-align: left;"><p>13051 (int)</p></td>
<td style="text-align: left;"><p>Der Port, auf dem der Server
läuft.</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p>--host</p></td>
<td style="text-align: left;"><p>localhost (IP)</p></td>
<td style="text-align: left;"><p>Die Adresse, auf dem der Server
läuft.</p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p>--loglevel</p></td>
<td style="text-align: left;"><p>INFO - ensprechend der
logback-tests.xml (<a
href="https://logback.qos.ch/apidocs/ch/qos/logback/classic/Level.html">Level</a>)</p></td>
<td style="text-align: left;"><p>Setzt das Loglevel, um ausführliche
oder besonders kompakte Ausgaben zu erhalten.</p></td>
</tr>
</tbody>
</table>

Boolesche Parameter werden als true gewertet, sobald sie angegeben
werden. Ein Wert hinter dem Parameter hat keine Wirkung.

Bei Argumenten, die nicht angegeben wurden, werden die Standardwerte aus
der Tabelle verwendet. Die Ausgabe der Daten erfolgt nach jedem Spiel
anhand von gerundeten Werten. Der TestClient beendet sich selbst,
nachdem alle Spiele gespielt wurden.

Die Ergebnisse der Spiele werden für den jeweiligen Spielernamen vom
Server zusammengezählt, auch über mehrere Starts des TestClients. Die
Ergebnisse werden erst zurückgesetzt, wenn der Server neu gestartet
wird. Achte also nach einer Veränderung der Spieler darauf, den Server
neu zu starten oder andere Spielernamen zu verwenden.

Dieses Verhalten wird wahrscheinlich bald verändert, wobei dann jeder
TestClient unabhängig vom Server die Punkte zählt.
