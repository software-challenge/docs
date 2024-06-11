---
name: Hase und Igel
hide: true
---

Die Nutzung des Spielkonzeptes "Hase und Igel" (Name, Spielregeln und Grafik)
erfolgt mit freundlicher Genehmigung der Ravensburger Spieleverlag GmbH.
Das Spielfeld der Version 2008 vom Ravensburger Spieleverlag wird folgendermaßen modifiziert:
1. Die Igel- und Salatfelder werden so angeordnet wie im Original.
   Die Felder zwischen 2 Igelfeldern mit Ausnahme der Salatfelder werden zufällig permutiert.
2. Das Zahlenfeld 1-5-6 wird durch das Zahlenfeld 1 ersetzt.
3. Das Zahlenfeld 3 wird durch das Karottenfeld ersetzt.
4. Das Zahlenfeld 4 wird durch das Marktfeld ersetzt.

# Modifizierte Spielregeln Hase und Igel für Software-Challenge 2025

## Spielbeginn

Jeder Spieler erhält zu Beginn 68 Karotten und 5 Salate als Wegzehrung.
Im Laufe des Spiels können die Spieler mit Karottenkarten kaufen,
mit denen dann beim Betreten eines Hasenfeldes besondere Aktionen ausgeführt werden können.

Mit den Karotten bezahlt der Spieler auch das Vorrücken.
Die Anzahl der Karotten, die benötigt werden,
um eine bestimmte Anzahl von Zügen zu ziehen,
ist der folgenden Rennkarte zu entnehmen:

![Hase und Igel Rennkarte](/images/spiele/hase-und-igel/rennkarte.png)

Das Spielfeld besteht aus 65 Feldern.
Ziel des Spiels ist,
das Zielfeld (Feld 65) mit weniger als zehn Karotten
und keinem Salat zu erreichen.

## Felder

Es gibt neun verschiedene Spielfelder:

### Startfeld

Beide Spieler stehen anfänglich auf dem Startfeld.
Nur hier und auf dem Zielfeld dürfen beide Spieler gleichzeitig stehen.
Das Startfeld darf nur verlassen werden.
Es ist nicht erlaubt das Startfeld erneut zu betreten.

### Karottenfeld

Ein Karottenfeld darf durch jede Bewegungsaktion (Vorwärtszug, Karten) betreten werden.
Nur auf ihm darf ein Zug "Karotten tauschen" stattfinden (nicht die Karte).

### Hasenfeld

Darf nur betreten werden, wenn eine Karte gespielt werden kann.
Sollte sich ein Spieler am Ende seines Zuges auf einem Hasenfeld befinden,
muss dieses im nächsten Zug (wenn möglich) verlassen werden
(es ist erlaubt, das Hasenfeld zu verlassen
und dann durch die Nutzung von Karten wieder zu betreten).

### Salatfeld

Darf nur mit mindestens einem Salat betreten werden.
In der Runde nach dem Betreten muss der Spieler einen Salat fressen.
Abgesehen von der entsprechenden Karte
darf nur auf einem Salatfeld ein Salat gefressen werden.
In der darauffolgenden Runde muss das Salatfeld verlassen werden
(es ist innerhalb des Spiels trotzdem durch Rückwärtszüge oder Karten möglich,
auf demselben Salatfeld mehrere Salate zu fressen).

### Igelfeld

Darf nur durch einen Rückwärtszug betreten werden.

### Position-1-Feld

Das Position-1-Feld darf uneingeschränkt betreten werden.
Sollte sich ein Spieler am Anfang seines Zuges auf diesem Feld befinden
und an erster Stelle stehen, so erhält er 10 Karotten.

### Position-2-Feld

Das Position-2-Feld darf uneingeschränkt betreten werden.
Sollte sich ein Spieler am Anfang seines Zuges auf diesem Feld befinden
und an zweiter Stelle stehen, so erhält er 30 Karotten.

### Marktfeld

Betritt ein Spieler ein Marktfeld,
zahlt er unmittelbar 10 Karotten
(er darf dieses Feld nur betreten, wenn er mindestens 10 Karotten besitzt)
und erhält eine frei auswählbare Hasenkarte,
die er später beim Betreten eines Hasenfeldes nutzen kann.
Im Laufe des Spiels darf ein Spieler einen Kartenvorrat anlegen,
auch mit mehreren Karten desselben Typs.

### Zielfeld

Das Zielfeld darf nur betreten werden,
wenn der Spieler höchstens zehn Karotten und keinen Salat besitzt.

## Karte ausspielen

Eine Karte muss ausgespielt werden, wenn ein Hasenfeld betreten wird,
und darf auch nur auf einem Hasenfeld ausgespielt werden. Das Betreten
eines Hasenfeldes ist entweder durch einen Vorwärtszug oder das
Ausspielen einer Karte möglich. Sollte es nicht möglich sein, eine Karte
auszuspielen, ist das Betreten eines Hasenfeldes nicht erlaubt.
Das Ausspielen einer Karte ist also immer Teil eines Zuges.
Sofern durch das Ausspielen einer Karte ein weiteres Hasenfeld betreten wird, muss eine weitere Karte ausgespielt werden.
Sollte durch das Ausspielen einer Karte kein weiteres Hasenfeld betreten werden, endet der Zug.

Folgende Karten gibt es:

### Friss sofort einen Salat

Es wird ein Salat vom Spieler verbraucht.
Je nach der aktuellen Position des Spielers (Erster/Zweiter) erhält der Spieler Karotten (10/30).
Diese Karte darf nur eingesetzt werden, wenn der Spieler mindestens einen Salat hat.

### Karotten nehmen oder abgeben

Der Spieler darf 20 Karotten abgeben (dafür muss der Spieler mindestens 20 Karotten besitzen) oder aufnehmen oder nichts tun.

### Rücke eine Position vor

Kann nur ausgespielt werden, wenn der Spieler sich an zweiter Position
befindet. Der Spieler rückt auf das Feld unmittelbar vor dem gegnerischen Spieler
vor. Dies ist nicht erlaubt, sollte es sich bei dem so betretenen Feld
um ein Igelfeld handeln oder sollte der gegnerische Spieler sich im Ziel
befinden. Es ist außerdem nicht erlaubt, so ein Salatfeld zu betreten,
ohne mindestens einen Salat zu besitzen. Es kann so das Ziel erreicht
werden, wenn die Siegbedingungen erfüllt sind.

### Falle eine Position zurück

Kann nur ausgespielt werden, wenn der Spieler sich an erster Position
befindet. Der Spieler fällt auf das Feld unmittelbar hinter dem gegnerischen Spieler
zurück. Dies ist nicht erlaubt, sollte es sich bei dem so betretenen
Feld um ein Igelfeld handeln oder sollte der gegnerische Spieler sich
auf dem Startfeld befinden. Es ist außerdem nicht erlaubt, so ein
Salatfeld zu betreten, ohne mindestens einen Salat zu besitzen.

### Karottenvorat mit dem Gegner tauschen

Tausche Deinen Karottenvorrat mit dem des Gegners.
Diese Karte darf nur eingesetzt werden, solange beide Spieler noch vor dem letzten Salatfeld stehen
und nur, wenn die letzte gleichartige Tauschkarte nicht in einer der beiden letzten Runden eingesetzt wurde.

## Zugmöglichkeiten

In jeder Runde muss jeder Spieler einen der folgenden Züge ausführen:

### Vorwärtszug

Durch einen Vorwärtszug bewegt sich der Spieler um die entsprechende
Zahl von Feldern nach vorne (mindestens 1). Dabei werden Karotten
entsprechend der Rennkarte verbraucht. Ein Spieler darf nicht
auf ein Feld ziehen, das bereits durch den Gegner besetzt ist, außer es
handelt sich um das Zielfeld. Durch einen Vorwärtszug dürfen alle Felder
außer dem Igelfeld direkt betreten werden. Es ist nicht erlaubt, das
Zielfeld zu betreten, wenn die Siegbedingungen (höchstens 10 Karotten
und 0 Salate) nicht erfüllt sind. Wenn durch einen Vorwärtszug ein
Salatfeld betreten wird, muss in der nächsten Runde ein Salat gefressen werden
(sollte kein Salat vorhanden sein, ist das Betreten nicht erlaubt). Wenn
durch einen Vorwärtszug ein Hasenfeld betreten wird, muss unmittelbar danach (also im selben Zug) eine
Karte ausgespielt werden (wenn keine spielbare Karte vorhanden ist, ist das
Betreten nicht erlaubt).

### Rückwärtszug

Durch einen Rückwärtszug zieht der Spieler zu dem nächsten Igelfeld mit
kleinerem Index. Gibt es kein solches Igelfeld oder ist es besetzt, darf kein Rückwärtszug gemacht werden.
Durch einen Rückwärtszug werden 10 mal so viele Karotten aufgenommen wie Felder zurückgezogen wurden.

### Karotten tauschen

Befindet sich ein Spieler auf einem Karottenfeld,
so kann dieser (aber muss nicht) die Aktion „Karotten tauschen“ durchführen.
Dabei muss der Spieler entweder 10 Karotten abgeben
(dafür muss der Spieler mindestens 10 Karotten besitzen) oder aufnehmen.
Die Aktion „Karotten tauschen“ kann auch in mehreren unmittelbar aufeinanderfolgenden Runden ausgeführt werden.

### Salat fressen

Wenn sich der Spieler auf einem Salatfeld befindet und er in seiner
letzten Aktion, die kein Aussetzzug war, keinen Salat gefressen hat,
muss er einen Salat fressen.
Der Spieler verbraucht einen Salat
(dies ist immer möglich, da ein Spieler nur mit mindestens einem Salat ein Salatfeld betreten kann)
und erhält je nach Position (Erster/Zweiter) Karotten (10/30).
Nach dieser Aktion endet der Zug.

### Aussetzen

Ein Spieler setzt aus, wenn kein anderer Zug möglich ist.
(Beispiel: Keine Karotten mehr und das vorherige Igelfeld ist vom anderen Spieler besetzt)

### Beispiel, dass mehrere Aktionen innerhalb eines Zuges ausgeführt werden

Unmittelbar hinter (kleinerer Index) und vor Lotta befindet sich jeweils ein Hasenfeld.
Michel selbst befindet sich weiter dahinter.
- Michel zieht mit einem Vorwärtszug auf das Hasenfeld hinter Lotta.
  Daraufhin muss Michel eine Karte spielen.
- Er spielt die Karte "Rücke eine Position vor".
  Dadurch steht er auf dem Hasenfeld direkt vor Lotta und muss erneut eine Karte spielen.
- Er spielt die Karte "Falle eine Position zurück".
  Dadurch steht er auf dem Hasenfeld direkt hinter Lotta und muss erneut eine Karte spielen.
- Er spielt "Friss sofort einen Salat".
  Es wird kein Hasenfeld neu betreten, also endet der Zug.

So ist es möglich, maximal vier Aktionen in einem Zug zu machen.

## Spielende

Das Spiel endet, wenn
- sich mindestens ein Spieler am Ende einer Runde im Ziel befindet (die Runde wird also immer zu Ende gespielt),
- das Rundenlimit von 30 Runden erreicht ist oder
- beide Spieler unmittelbar nacheinander einmal aussetzen, d.h. bewegungsunfähig sind.

Es gewinnt der Spieler, der sich am nächsten am Ziel befindet.
Sollten beide Spieler sich im Ziel befinden, gewinnt der Spieler mit weniger Karotten;
bei gleicher Karottenzahl endet das Spiel unentschieden.

## Beispiel

Lotta steht unmittelbar vor einem Hasenfeld (Feld 34).
Michel steht weit hinter Lotta (Feld 22) und hat nur noch den Hasenjoker „Rücke eine Position vor“.
Dann darf Michel weder auf ein Hasenfeld vor Lotta setzen (z. B. Feld 35),
denn dort darf er seinen einzigen Hasenjoker nicht einsetzen,
noch darf er auf ein Hasenfeld hinter Lotta setzen (z. B. Feld 25),
denn wenn er dort seinen Hasenjoker „Rücke eine Position vor“ einsetzen würde,
käme er wieder auf ein Hasenfeld,
was aber nicht erlaubt ist,
weil er dafür dann keinen Hasenjoker mehr hat.

![Hase und Igel Spielbrett](/images/spiele/hase-und-igel/spielbrett.png)
