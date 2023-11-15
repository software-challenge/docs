---
name: Spielregeln
index: 1
---

## 1. Einleitung

In dieser Anleitung werden die Elemente und Regeln 
des Spiels Mississippi Queen der Software-Challenge 2024 erläutert.
Bei Mississippi Queen versuchen zwei Spieler,
durch abwechselndes Setzen von Raddampfern
schnellstmöglich einen Fluss bis zum Ziel entlangzufahren
und dabei unterwegs zwei Passagiere mitzunehmen.
Der Spieler,
dessen Dampfer das Ziel mit zwei Passagieren an Bord zuerst erreicht,
gewinnt das Spiel.

## 2. Das Spielbrett

![Spielbrett](/images/spiele/mississippi-queen/Spielbrett.png)

Ein mögliches Spielbrett zu Beginn des Spiels sieht man oben.
Das gesamte Spielbrett besteht aus 8 Spielsegmenten mit jeweils 20 Feldern.
<!--
Die Segmente kann man durch die Farbe der Koordinaten auf den Feldern erkennen:
Die Segmente haben abwechselnd schwarze und weiße Koordinaten auf den Feldern.
-->
Am Anfang ist nur das Startsegment und ein darauf folgendes Segment aufgedeckt.
Diese beiden Segmente sind immer gerade ausgerichtet,
bilden also keinen Knick in eine Richtung.
Sobald ein Dampfer auf das zuletzt
aufgedeckte Segment fährt,
wird ein neues dahinter aufgedeckt und zwar
zufällig nach links, nach rechts oder mittig.
Dies geschieht solange,
bis alle 8 Segmente aufgedeckt sind.
Das letzte Segment ist das Zielsegment
(siehe Abbildung unter Spielende, Abschnitt 5).
<!--
Segmente, die schon von allen Spielern betreten und wieder verlassen wurden,
werden vom Spielplan entfernt, auch wenn sich darauf noch Inseln mit Passagieren befinden.
-->
Die Spielsegmente bestehen aus verschiedenen Typen hexagonaler Felder,
die zufällig verteilt sind.
Neben Wasserfeldern und Inseln <!--, Sandbänken und Baumstämmen -->
gibt es pro Spiel insgesamt 5 Passagierfelder.
Jeder Dampfer beginnt das Spiel 
mit einer Geschwindigkeit von 1 und einem Kohlevorrat von 6.
Der Dampfer hat außerdem eine von sechs Bewegungsrichtungen,
die den Kanten der Hexagon-Felder entsprechen,
aus denen die Segmente aufgebaut sind.
Die Geschwindigkeit eines Dampfers bestimmt,
wie viele Bewegungspunkte er in einer Runde zur Verfügung hat.
Den Kohlevorrat kann man nutzen, um Extra=Aktionen durchzuführen.

Die Koordinaten der Felder werden global mithilfe Kubischer Koordinaten erfasst,
wobei die Dampfer auf `(-1,-1,2)` und `(-2,1,1)` starten,
da die Mitte des ersten Segments immer `(0,0,0)` ist
(und damit die des zweiten `(4,0,-4)`).
Erklärungen und Veranschaulichungen dieses Systems finden sich hier:
https://www.redblobgames.com/grids/hexagons/#coordinates-cube

### 2.1 Wasserfelder

![Wasserfeld](/images/spiele/mississippi-queen/Wasserfeld.png)

Das Wasserfeld kann ganz normal befahren werden.
Auf ein zum Spieler in der aktuellen Bewegungsrichtung
benachbartes Wasserfeld ziehen,
kostet einen Bewegungspunkt.

![Strömungsfeld](/images/spiele/mississippi-queen/Strömungsfeld.png)

Über das ganze Spielbrett hinweg zieht sich durch jedes Segment mittig eine Gegenströmung,
die zum Passieren eine erhöhte Geschwindigkeit benötigt.
Jedes mal, wenn man eine Bewegungsaktion in die Strömung macht,
zahlt man einen Bewegungspunkt extra.

Innerhalb der Strömung ist somit die "effektive" Geschwindigkeit um 1 verringert,
wodurch man im mittleren Zielfeld
und an Passagierfeldern, die zur Mitte ausgerichtet sind,
auch mit Geschwindigkeit 2 anlegen kann.

### 2.2 Die Insel

![Insel](/images/spiele/mississippi-queen/Insel.png)

Die Insel kann nicht überquert werden.
Fährt ein Dampfer auf oder durch eine Insel,
gilt dies als illegaler Zug und führt zu einer Disqualifikation,
wodurch der Spieler das Spiel verliert.

### 2.3 Das Passagierfeld mit Anleger

![Passagierfeld](/images/spiele/mississippi-queen/Passagierfeld.png)

Auf dem Passagierfeld mit Anleger wartet ein Passagier,
der am Anleger abgeholt werden kann.
Um den Passagier abzuholen,
muss der Dampfer mit Geschwindigkeit 1 (2 auf Strömungsfeldern) am Anleger ankommen.
Es verwandelt sich in ein normales Inselfeld,
sobald der Passagier abgeholt wurde (siehe Insel, 2.2).
Wenn ein Dampfer durch Abdrängen an einem Anleger landet,
kann er einen Passagier aufnehmen,
sofern die Geschwindigkeit stimmt.

<!--
### 2.4 Die Sandbank

![Sandbank](/images/spiele/mississippi-queen/Sandbank.png)

Eine Sandbank stoppt einen Dampfer,
sollte er darauf
fahren. Das heißt, wenn ein Spieler auf eine Sandbank fährt,
beendet dies seinen Zug und setzt seine Geschwindigkeit auf
1 . Die Sandbank kann im nächsten Zug nur rückwärts oder
vorwärts in der Bewegungsrichtung,
mit der sie befahren
wurde, wieder verlassen werden.
Verlässt man sie rückwärts,
kostet dies
zusätzlich eine Kohleeinheit.
Auf einer Sandbank kann nicht gedreht oder
beschleunigt werden und ein Dampfer,
der sich darauf befindet,
kann nicht
abgedrängt werden. 
-->

### 2.4 Das Zielfeld

![Zielfeld](/images/spiele/mississippi-queen/Zielfeld.png)

Ein Zielfeld muss mit effektiver Geschwindigkeit 1 angelaufen werden 
und es müssen sich mindestens zwei Passagiere an Bord befinden,
damit der Dampfer das Spiel gewinnt.
Sind diese Bedingungen nicht erfüllt,
kann ein Zielfeld wie ein Wasserfeld befahren werden.

## 3 Spielablauf

Beide Spieler starten mit Geschwindigkeit 1 und 6 Kohleeinheiten
und ziehen im Spielverlauf jeweils einmal pro Runde.
In der ersten Runde beginnt der rote Spieler.
In allen weiteren Runden wird der beginnende Spieler wie folgt ermittelt:

1. Es beginnt der Spieler,
dessen Dampfer sich am dichtesten am Ziel befindet, 
also am weitesten vorne auf dem befahrenen Segment.

2. Sollten beide Dampfer gleich dicht am Ziel sein,
beginnt der Dampfer mit der höheren Geschwindigkeit.

3. Sollten beide Dampfer gleich schnell sein,
beginnt der Dampfer mit dem höheren Kohlevorrat.

Ansonsten beginnt der Startspieler.

<!--
4. Sollten beide Dampfer gleich viel Kohle besitzen,
beginnt der Dampfer,
der am weitesten rechts steht (höchste X-Koordinate).

5. Sollten beide Dampfer gleich weit rechts stehen,
beginnt der Dampfer,
der am weitesten unten steht (höchste Y-Koordinate). 
-->

Die fünf Felder ganz links beginnen das Koordinatensystem,
sodass ein Dampfer, der weiter außen ist,
effektiv weiter vorne stehen kann,
auch wenn er in der selben vertikalen Position ist.

<!--
Die orangene Linie in der Abbildung unten wird immer für den Spieler
angezeigt, der in einer Runde als zweites dran ist.
Durch Überschreiten
der Linie kann der Gegenspieler überholt werden,
sodass der Spieler in der
nächsten Runde als erstes dran ist.
Diese Überhollinie wird nach den oben
genannten Regeln bestimmt.
-->


## 4 Der Zug

Ein Zug besteht aus mindestens einer Aktion.
In einem Zug müssen
<!-- (falls der Zug nicht durch Auffahren auf eine Sandbank vorzeitig endet) -->
durch die Aktionen insgesamt alle Bewegungspunkte 
(bestimmt durch die Geschwindigkeit des Schiffes) verbraucht werden.
Die verschiedenen Aktionen sind:

### 4.1 Beschleunigungsaktion

Eine Beschleunigung kann nur als erste Aktion eines Zuges ausgeführt werden.
Die Beschleunigung um eine Geschwindigkeitseinheit pro Zug ist frei,
jede Beschleunigung um mehr als 1 kostet für jeden
weiteren Geschwindigkeitspunkt eine Kohleeinheit.
Möchte ein Spieler beispielsweise mit einer aktuellen Geschwindigkeit von 2 
auf Geschwindigkeit 4 beschleunigen,
kostet dies eine Kohleeinheit.
Die maximale Geschwindigkeit ist 6,
die niedrigste 1.
Auf gleiche Weise kann auch abgebremst,
also die Geschwindigkeit verringert werden.
Dies wird der Einfachheit halber als Beschleunigungsaktion 
mit negativer Beschleunigung behandelt.

### 4.2 Erzeugung der Bewegungspunkte

Bevor nun eine der folgenden Aktionen durchgeführt werden kann,
bekommt der Dampfer entsprechend seiner aktuellen Geschwindigkeit Bewegungspunkte.
Diese Bewegungspunkte müssen durch die folgenden Aktionen aufgebraucht werden,
am Ende des Zuges dürfen also keine Bewegungspunkte mehr vorhanden sein.

### 4.3 Drehaktion

Eine Drehaktion je Zug des Spielers um eine Einheit 
(also um 60◦) ist frei.
Jede weitere Drehung erfordert eine Kohleeinheit (Ausnahme Abdrängen, siehe 4.4).
<!-- Auf Sandbänken kann nicht gedreht werden. -->

### 4.4 Abdrängaktion

Endet eine Aktion auf einem Feld mit dem gegnerischen Dampfer,
muss darauf eine Abdrängaktion folgen.
Ein Spieler kann den Gegner
auf ein beliebig angrenzendes,
jedoch nicht direkt hinter dem abdrängenden Spieler liegendes,
begehbares Feld (keine Insel) abdrängen.
Eine Abdrängaktion kostet einen Bewegungspunkt,
<!-- zwei, falls auf ein Baumstammfeld abgedrängt wird.
Ist die Geschwindigkeit des auf ein Baumstammfeld abgedrängten Bootes
größer als 1, wird dessen Geschwindigkeit um 1 reduziert.
Es darf nicht
von einer Sandbank aus abgedrängt werden.  -->
Der abgedrängte Spieler bekommt eine zusätzliche freie Drehung für seinen nächsten Zug.
<!-- Wurde der Spieler auf eine Sandbank abgedrängt,
entfällt diese freie Drehung 
und die Geschwindigkeit des abgedrängten Spielers wird auf 1 reduziert. -->

### 4.5 Bewegungsaktion

Eine Bewegungsaktion erfolgt in die derzeitige Bewegungsrichtung des Schiffes.
Sie kann nur entlang passierbarer (siehe 4.4) Felder erfolgen.
Sie darf niemals durch ein vom Gegner besetztes Feld oder eine Sandbank gehen,
darf jedoch auf dem Feld des Gegners oder einer Sandbank enden.
Es ist weiterhin nicht erlaubt,
durch das gesamte, zuletzt aufgedeckte Segment
auf ein noch nicht aufgedecktes Feld zu ziehen.

### 4.6 Kombination von Aktionen

Solange die Regeln der einzelnen Aktionsarten eingehalten werden,
können mehrere Aktionen innerhalb eines Zuges beliebig kombiniert werden.
Der Aktionsablauf in einem Zug ist also: 
- Beschleunigungsaktion (optional)
- Erzeugung der Bewegungspunkte 
- Beliebige Kombination der restlichen Aktionen (Bewegung, Drehung, Abdrängen),
  solange die Aktionspunkte ausreichen und die Regeln eingehalten werden

## 5 Spielende

Das Spiel ist beendet, sobald:
- ein Dampfer mit mindestens 2 Passagieren ein Zielfeld mit Geschwindigkeit 1 erreicht hat (die Runde wird noch beendet).
- ein Spieler einen ungültigen Zug macht.
- am Ende einer Runde ein Dampfer mehr als 3 Spielsegmente zurückliegt.
- das Rundenlimit von 30 Runden erreicht ist.

Ein Spieler, der einen ungültigen Zug macht,
erhält für das Spiel insgesamt 0 Punkte.
In allen anderen Fällen berechnet sich der Punktestand 
eines jeden Spielers folgendermaßen:
- Jeder eingesammelte Passagier bringt 5 Punkte.
- Jedes überwundene Segment bringt 5 Punkte.
- Anhand der Position innerhalb eines Segments werden 0 bis 3 Punkte vergeben.
  Ein Segment ist aufgeteilt in 4 Spalten.
  Je weiter vorne man ist, desto mehr Punkte bekommt man.

Bei Spielende gewinnt der Spieler mit den meisten Punkten.
Sollten beide Spieler gleich viele Punkte haben,
gewinnt der Spieler, der mehr Passagiere eingesammelt hat.
Sollte auch diese Zahl gleich sein,
endet das Spiel unentschieden.
