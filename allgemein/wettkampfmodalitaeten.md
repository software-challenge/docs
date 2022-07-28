# Wettkampfmodalitäten

Die Software-Challenge wird in drei Phasen ausgespielt. Da wir noch
nicht einschätzen können, wie viele Teams letztendlich teilnehmen
werden, kann sich die folgende Ablaufplanung noch ändern.

## Die Meisterschaftsphase

Für diese erste Phase (Anfang März bis Anfang April) werden wir
voraussichtlich vier Gruppen mit jeweils ca. 25 Teams bilden. In jeder
dieser Gruppen wird eine Meisterschaft ausgespielt.

Die Meisterschaft ist in Spieltagen organisiert. An jedem Spieltag hat
jedes Team eine Begegnung mit einem anderen Team. Bei einer ungeraden
Teamanzahl in einer der Gruppen setzt an jedem Spieltag eines der Teams
aus.

Vor Beginn des ersten Spieltages soll jedes Team einen funktionsfähigen
Client über das Online-Abgabesystem eingeschickt haben. Zwischen den
Spieltagen besteht die Möglichkeit, Clients ebenfalls über dieses System
zu aktualisieren. Über das Online-Abgabesystem werden auch die
Ergebnisse, Ranglisten etc. veröffentlicht.

Eine Begegnung gewinnt derjenige Spieler mit den meisten gewonnen
Spielen in dieser Begegnung. Bei gleich vielen Siegen endet die
Begegnung unentschieden. Eine gewonnene Begegnung zählt für die
Rangliste zwei Punkte, ein Unentschieden einen Punkt, eine verlorene
Begegnung null Punkte.

In der Rangliste wird als nachrangiges Kriterium ausschließlich die
Anzahl der Siegpunkte aus den bisherigen Spielen verwendet. Wenn am Ende
einer Meisterschaft zwei Teams denselben Platz belegen, entscheidet das
Los.

## Die Champions-League

In diese zweite Phase (Mitte April bis Mitte Mai) kommen die besten acht
Teams einer jeden Gruppe aus der ersten Phase. Die Champions-League wird
nach dem gleichen Schema wie eine Meisterschaft ausgespielt.

## Das Final Eight

An der dritten Phase, dem Final Eight, das im Juni in Kiel stattfindet,
nehmen die ersten acht Mannschaften der Rangliste aus der
Champions-League teil. Viertelfinale, Halbfinale, Kleines Finale (=
Spiel um den 3. Platz) und Finale werden im KO-System gespielt.

Jede Begegnung besteht aus jeweils sechs Spielen, wobei das Recht des
ersten Zuges abwechselt. Anders als bei den vorherigen Phasen kann es
beim Final Eight keine Begegnung geben, die unentschieden endet. Haben
beide Teams in einer Begegnung gleich viele Siege errungen, wird als
nachrangiges Kriterium ausschließlich die Anzahl der am Spielende
erreichten Punkte berücksichtigt, um den Sieger einer Begegnung zu
ermitteln. In dem unwahrscheinlichen Fall, dass die Begegnung auch
dadurch nicht entschieden werden kann, entscheidet das Los.

Im Übrigen gelten beim Final Eight die bekannten Regeln der beiden
vorherigen Phasen. Es wird dabei auch dieselbe Hardware eingesetzt.

## Die Begegnungen

Jede Begegnung besteht aus jeweils sechs Spielen, wobei das Recht des
ersten Zuges abwechselt.

Die Zugzeit ist für jeden Zug auf zwei Sekunden begrenzt. Dabei gilt für
die Rechenzeit die im Institut verwendete Hardware als Referenz. Jeder
Client wird dabei auf einer eigenen virtuellen Maschine mit unten
stehenden Spezifikationen ausgeführt.

Sollte ein Spieler einen ungültigen Zug setzen oder die maximale Zugzeit
überschreiten, so hat dieser Spieler verloren. In allen anderen Fällen
wird das Spiel gemäß der Spielregeln zu Ende gespielt und der Gewinner
ermittelt.

## Die Probespieltage

Anfang März, unmittelbar vor der ersten Phase, werden Probespieltage
stattfinden, die den reibungslosen Ablauf der Meisterschaft
gewährleisten sollen.

## Die konkreten Termine

Befinden sich auf der [Software-Challenge Website unter
Termine](http://www.software-challenge.de/de/termine).

## Technische Daten für die Ausführung der Computerspieler

Für alle im Wettkampfsystem ausgetragenen Spiele laufen die
Computerspieler auf den Servern des Wettkampfsystems.

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td style="text-align: left;"><p>Betriebssystem:</p></td>
<td style="text-align: left;"><p>64 Bit Linux</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p>Prozessor:</p></td>
<td style="text-align: left;"><p>Ein Kern von einem <a
href="https://ark.intel.com/de/products/92986/Intel-Xeon-Processor-E5-2620-v4-20M-Cache-2_10-GHz">Intel
Xeon E5-2620 v4, 2,1 GHz</a></p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p>Arbeitsspeicher:</p></td>
<td style="text-align: left;"><p>1,5 GB</p></td>
</tr>
</tbody>
</table>

### Log-Ausgabe

Die Computerspieler laufen im Wettkampfsystem ohne eine grafische
Oberfläche, sie können also keine Fenster oder ähnliches anzeigen. Der
Versuch eines Computerspielers, so etwas trotzdem zu tun, wird
wahrscheinlich zum Absturz des Computerspielers führen.

Die Computerspieler können jedoch Text auf die beiden
Standard-Ausgabedatenströme "stdout" und "stderr" schreiben. Diese
Ausgaben finden sich dann in den Log-Dateien wieder, die nach Beenden
eines Spiels über das Wettkampfsystem verfügbar sind.

### Lesen von Daten

Zugriff auf das Internet ist nicht möglich. Schreiben auf die Festplatte
ist möglich, es kann jedoch nicht auf Daten, die in früheren Spielen
geschrieben wurden, zugegriffen werden.

### Weitere Ausführungsumgebung

Der Computerspieler wird in einem sogenannten "Docker Container"
ausgeführt, welcher die verfügbaren Bibliotheken und Programme bestimmt.
Folgende Container-Images können genutzt werden:

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<tbody>
<tr class="odd">
<td style="text-align: left;"><p>Bezeichnung</p></td>
<td style="text-align: left;"><p>Image-Name</p></td>
<td style="text-align: left;"><p>Beschreibung</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p>Java 8</p></td>
<td style="text-align: left;"><p><a
href="https://hub.docker.com/_/openjdk/">openjdk:8u151-jre</a></p></td>
<td style="text-align: left;"><p>Open Source Java Platform, Standard
Edition, Version 1.8.0. Für alle Computerspieler auf Basis des Java
SimpleClients.</p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p>Ruby 2</p></td>
<td style="text-align: left;"><p><a
href="https://hub.docker.com/_/ruby/">ruby:2.4.2</a> mit installiertem
Software-Challenge-Client-Gem</p></td>
<td style="text-align: left;"><p>Ruby Interpreter, Version 2.4.2. Für
alle Computerspieler auf Basis des Ruby SimpleClients.</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p>Python 3</p></td>
<td style="text-align: left;"><p><a
href="https://hub.docker.com/_/python/">python:3.6.3</a></p></td>
<td style="text-align: left;"><p>Python Interpreter, Version 3.6.3. Für
selbst entwickelte Computerspieler in Python.</p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p>Mono 5.4 (C# .NET)</p></td>
<td style="text-align: left;"><p><a
href="https://hub.docker.com/_/mono/">mono:5.4.1.6</a></p></td>
<td style="text-align: left;"><p>Mono Laufzeitumgebung, Version 5.4.1.6.
Für selbst entwickelte Computerspieler basierend auf dem Microsoft .NET
Framework.</p></td>
</tr>
</tbody>
</table>

Wenn Ihr Computerspieler eine speziellere Umgebung benötigt (zum
Beispiel ein hier nicht angebotener Interpreter), nehmen sie bitte mit
uns Kontakt auf (<svk@informatik.uni-kiel.de>). Wir stellen gern weitere
Images zur Verfügung.
