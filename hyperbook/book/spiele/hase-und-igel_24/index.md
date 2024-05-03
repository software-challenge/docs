---
name: Hase und Igel
hide: true
---

Die Nutzung des Spielkonzeptes "Hase und Igel" (Name, Spielregeln und
Grafik) erfolgt mit freundlicher Genehmigung der Ravensburger
Spieleverlag GmbH. Das Spielfeld der Version 2008 vom Ravensburger
Spieleverlag wird folgendermaßen modifiziert: 1. Die Igel- und
Salatfelder werden so angeordnet wie im Original. Die Felder zwischen 2
Igelfeldern mit Ausnahme der Salatfelder werden zufällig permutiert. 2.
Die Zahlenfelder 3 und 4 werden durch Karottenfelder ersetzt. 3. Das
Zahlenfeld 1/5/6 wird durch das Zahlenfeld 1 ersetzt.

# Modifizierte Spielregeln Hase und Igel Software-Challenge 2018

Sören Domrös &lt;<stu114053@mail.uni-kiel.de>&gt;

Ziel dieser Dokumentation ist es, die Spielregeln der Softwarechallenge
festzuhalten.

[PDF-Version dieses Dokumentes](regeln.pdf)

Wir freuen uns über sämtliche Verbesserungsvorschläge. Die Dokumentation
kann [direkt auf GitHub
editiert](https://github.com/software-challenge/docs) werden, einzige
Voraussetzung ist eine kostenlose Registrierung bei GitHub. Ist man
angemeldet, kann man ein Dokument auswählen (ein guter Startpunkt ist
die Datei
[index.md](https://github.com/software-challenge/docs/blob/master/index.md)
welche Verweise auf alle Sektionen der Dokumentation enthält) und dann
auf den Stift oben rechts klicken. Alternativ auch gern eine E-Mail an
<tech@software-challenge.de>.

## Spielbeginn

Jeder Spieler erhält zu Beginn 68 Karotten und 5 Salate als Wegzehrung,
sowie je eine Karte „Rücke eine Position vor“, „Falle eine Position
zurück“, „Friss sofort einen Salat“ und „Karotten nehmen oder abgeben“.
Mit den Karotten bezahlt der Spieler das Vorrücken. Die Anzahl der
Karotten, die benötigt werden, um eine bestimmte Anzahl von Zügen zu
ziehen, ist dabei der folgenden Rennkarte zu entnehmen.

![hui bilder 003](../images/hui-bilder-003.png)

Das Spielfeld besteht aus 65 Feldern. Ziel des Spiels ist es das
Zielfeld (Feld 65) mit weniger als zehn Karotten und keinem Salat zu
erreichen.

## Felder

Es gibt acht verschiedene Spielfelder:

### Startfeld

Das Startfeld darf nur verlassen werden. Es ist nicht erlaubt das
Startfeld erneut zu betreten, sollte es einmal verlassen werden. Auf ihm
starten beide Spieler

### Karottenfeld

Ein Karottenfeld darf durch jede Bewegungsaktion (Vorwärtszug, Karten)
betreten werden. Nur auf ihm darf ein Karotten tauschen Zug stattfinden
(die Karotten tauschen Karte darf hier nicht benutzt werden).

### Hasenfeld

Darf nur betreten werden, wenn eine Karte gespielt werden kann. Sollte
sich ein Spieler am Ende seines Zuges auf einem Hasenfeld befinden, muss
dieses im nächsten Zug (wenn möglich) verlassen werden (es ist erlaubt
das Hasenfeld zu verlassen und dann durch nutzen von Karten wieder zu
betreten).

### Salatfeld

Darf nur betreten werden, wenn der Spieler mindestens einen Salat
besitzt. In dem Zug nach dem Betreten muss ein Salat gefressen werden.
Nur auf einem Salatfeld darf ein Salat gefressen werden (außer natürlich
durch die Karte Salat fressen). Das Salatfeld muss verlassen werden
(wenn möglich) sobald ein Salat gegessen wurde (es ist innerhalb des
Spiels trotzdem durch Rückzüge oder Karten möglich auf demselben
Salatfeld mehrere Salate zu essen).

### Igelfeld

Darf nur durch einen Rückzug betreten werden. Muss (wenn möglich) im
nächsten Zug wieder verlassen werden.

### Position-1 Feld

Das Position 1 Feld darf uneingeschränkt betreten werden. Sollte sich
ein Spieler am Anfang seines Zuges auf diesem Feld befinden und an
erster Stelle stehen, so erhält er zehn Karotten.

### Position-2 Feld

Das Position 2 Feld darf uneingeschränkt betreten werden. Sollte sich
ein Spieler am Anfang seines Zuges auf diesem Feld befinden und an
zweiter Stelle stehen, so erhält er 30 Karotten.

### Zielfeld

Das Zielfeld darf nur betreten werden, wenn der Spieler höchstens zehn
Karotten und keine Salate besitzt.

## Zugmöglichkeiten

Ein Spieler kann folgende Züge machen:

### Vorwärtszug

Durch einen Vorwärtszug bewegt sich der Spieler um die entsprechende
Zahl von Feldern nach vorne (mindestens 1). Dabei werden Karotten
entsprechend der Rennkarte verbraucht. Wenn ein Spieler sich auf dem
Startfeld befindet, muss ein Vorwärtszug gemacht werden. Wenn ein
Spieler sich auf einem Startfeld befindet oder die letzte Aktion, die
keine Aussetzaktion war, Salat fressen war, muss ein Bewegungszug
gemacht werden (Vorwärtszug oder Rückwärtszug). Ein Spieler darf nicht
auf ein Feld ziehen, dass bereits durch den Gegner besetzt ist, außer es
handelt sich um das Zielfeld. Durch einen Vorwärtszug dürfen alle Felder
außer das Igelfeld direkt betreten werden. Es ist nicht erlaubt das
Zielfeld zu betreten, wenn die Siegbedingungen (höchstens 10 Karotten
und 0 Salate) nicht erfüllt sind. Wenn durch einen Vorwärtszug ein
Salatfeld betreten wird, muss im nächsten Zug ein Salat gefressen werden
(sollte kein Salat vorhanden sein ist das Betreten nicht erlaubt). Wenn
durch einen Vorwärtszug ein Hasenfeld betreten wird, muss danach eine
Karte ausgespielt werden (wenn keine spielbare Karte vorhanden ist das
Betreten nicht erlaubt). Sollte durch einen Vorwärtszug kein Hasenfeld
betreten werden endet der Zug.

### Rückwärtszug

Durch einen Rückwärtszug zieht der Spieler zu dem nächsten Igelfeld mit
kleinerem Index, sollte dies nicht besetzt sein. Ist das vorherige
Igelfeld besetzt, darf kein Rückzug gemacht werden. Durch einen Rückzug
werden 10 mal zurückgezogene Felder viele Karotten aufgenommen. Nach
einem Rückwärtszug endet der Zug.

### Karte ausspielen

Eine Karte muss ausgespielt werden, wenn ein Hasenfeld neu betreten wird
und darf auch nur auf einem Hasenfeld ausgespielt werden. Das Betreten
eines Hasenfeldes ist entweder durch einen Vorwärtszug oder das
Ausspielen einer Karte möglich. Sollte es nicht möglich sein eine Karte
aus zuspielen ist das Betreten eines Hasenfeldes nicht erlaubt. Sollte
durch das Ausspielen einer Karte kein Hasenfeld neu betreten werden Ende
der Zug. Ein Spieler hat zu Beginn folgende Karten:

#### Friss sofort einen Salat

Es wird ein Salat vom Spieler entfernt, je nach Position des Spielers
(Erster/Zweiter) erhält der Spieler Karotten (10/30). Diese Karte darf
nur eingesetzt werden, wenn der Spieler mindestens einen Salat hat. In
dem nächsten Zug muss das betretene Hasenfeld verlassen werden.

#### Karotten nehmen oder abgeben

Der Spieler darf 20 Karotten abgeben oder aufnehmen oder nichts tun. Es
darf der Spieler nicht mehr Karotten abgeben als er besitzt. In dem
nächsten Zug muss das betretene Hasenfeld verlassen werden.

#### Rücke eine Position vor

Kann nur ausgespielt werden, wenn der Spieler sich an zweiter Position
befindet. Der Spieler rückt auf das Feld vor dem gegnerischen Spieler
vor. Dies ist nicht erlaubt, sollte es sich bei dem so betretenen Feld
um ein Igelfeld handeln oder sollte der gegnerische Spieler sich im Ziel
befinden. Es ist außerdem nicht erlaubt, so ein Salatfeld zu betreten,
ohne mindestens einen Salat zu besitzen. Es kann so das Ziel erreicht
werden, wenn die Siegbedingungen erfüllt sind.

#### Falle eine Position zurück

Kann nur ausgespielt werden, wenn der Spieler sich an erster Position
befindet. Der Spieler fällt auf das Feld hinter dem gegnerischen Spieler
zurück. Dies ist nicht erlaubt, sollte es sich bei dem so betretenen
Feld um ein Igelfeld handeln oder sollte der gegnerische Spieler sich
auf dem Startfeld befinden. Es ist außerdem nicht erlaubt, so ein
Salatfeld zu betreten, ohne mindestens einen Salat zu besitzen.

### Karotten tauschen

Befindet sich ein Spieler auf einem Karottenfeld,
so kann dieser (aber muss nicht) die Aktion „Karotten tauschen“ durchführen.
Dabei muss der Spieler entweder 10 Karotten abgeben (dafür muss der Spieler mindestens 10 Karotten besitzen) oder nehmen. 
Die Aktion „Karotten tauschen“ kann auch in mehreren unmittelbar aufeinanderfolgenden Runden ausgeführt werden.

### Salat fressen

Wenn sich der Spieler auf einem Salatfeld befindet und er in seiner
letzten Aktion, die kein Aussetzzug war, keinen Salat gefressen hat,
muss er einen Salat fressen. Der Spieler verliert einen Salat (dies ist
immer möglich, da ein Spieler nur mit mindestens einem Salat ein
Salatfeld betreten kann) und erhält je nach Position (Erster/Zweiter)
Karotten (10/30). Nach dieser Aktion endet der Zug.

### Aussetzen

Es Spieler darf nur Aussetzen, sollte sonst kein anderer Zug möglich
sein. Nach dieser Aktion endet der Zug.

### Zusammenfassung

Enthält ein Zug einen der folgenden Aktionen, kann er nur aus einer
Aktion bestehen: Rückwärtszug, Karotten tauschen, Salat fressen oder
Aussetzen. Eine Karte kann nur nach einem Vorwärtszug oder einer anderen
Karte gespielt werden (wenn durch die vorherige Aktion ein Hasenfeld
betreten wird). Ein Vorwärtszug, der auf kein Hasenfeld führt, kann
ebenfalls nur die einzige Aktion eines Zuges sein. Die einzige
Möglichkeit mehr als eine Aktion pro Zug zu machen ist durch Karten
möglich. Dies kann folgendermaßen passieren:  
Der Gegner befindet sich zwischen zwei Hasenfeldern. Der Spieler selbst
befindet sich hinter ihm. Der Spieler zieht mit einem Vorwärtszug auf
das Hasenfeld hinter dem Gegner. Daraufhin muss er eine Karte spielen.
Er spielt die Karte "Rücke eine Position vor". Dadurch steht er auf dem
Hasenfeld direkt vor dem Gegner und muss erneut eine Karte spielen. Er
spielt die Karte "Falle eine Position zurück". Dadurch steht er auf dem
Hasenfeld direkt hinter dem Gegner und muss erneut eine Karte spielen.
Er spielt "Friss sofort einen Salat". Es wird kein Hasenfeld neu
betreten, also endet der Zug. So ist es möglich maximal vier Aktionen in
einem Zug zu machen.

## Spielende

Das Spiel endet, sobald das Rundenlimit von 30 Runden erreicht ist oder
sich mindestens eine Spieler am Ende einer Runde im Ziel befindet.
Sollte der erste Spieler im Ziel sein, hat der zweite Spieler einen
Nachzug. Der erste Spieler bekommt keinen Nachzug. Es gewinnt der
Spieler, der am nächsten am Ziel befindet. Sollte beide Spieler sich im
Ziel befinden, gewinnt der Spieler mit weniger Karotten. Sollten beide
Spieler gleich viele Karotten besitzen, gewinnt der Startspieler, da er
zuerst das Ziel erreicht hat.

## Beispiel

Jasper steht unmittelbar vor einem Hasenfeld (Feld 34). Johannes steht
weit hinter Jasper (Feld 22) und hat nur noch den Hasenjoker „Rücke eine
Position vor“. Dann darf Johannes weder auf ein Hasenfeld vor Jasper
setzen (z. B. Feld 35), denn dort darf er seinen einzigen Hasenjoker
nicht einsetzen, noch darf er auf ein Hasenfeld hinter Jasper setzen
(z. B. Feld 25), denn wenn er dort seinen Hasenjoker „Rücke eine
Position vor“ einsetzen würde, käme er wieder auf ein Hasenfeld, was
aber nicht erlaubt ist, weil er dafür dann keinen Hasenjoker mehr hat.

![hui bilder 004](../images/hui-bilder-004.png)

# Software-Challenge XML-Dokumentation Hase und Igel

Ziel dieser Dokumentation ist es, die XML-Schnittstelle der
Softwarechallenge festzuhalten.

Wir freuen uns über sämtliche Verbesserungsvorschläge. Die Dokumentation
kann [direkt auf GitHub
editiert](https://github.com/software-challenge/docs) werden, einzige
Voraussetzung ist eine kostenlose Registrierung bei GitHub. Ist man
angemeldet, kann man ein Dokument auswählen (ein guter Startpunkt ist
die Datei
[index.md](https://github.com/software-challenge/docs/blob/master/index.md)
welche Verweise auf alle Sektionen der Dokumentation enthält) und dann
auf den Stift oben rechts klicken. Alternativ auch gern eine E-Mail an
<tech@software-challenge.de>.

## Einleitung

Wie in den letzten Jahren wird zur Computerspieler-Server Kommunikation ein
XML-Protokoll genutzt. In diesem Dokument wird die
Kommunikationsschnittstelle definiert, sodass ein komplett eigener
:t[Computerspieler]{#player} geschrieben werden kann. Es wird hier nicht die vollständige
Kommunikation dokumentiert bzw. definiert, dennoch alles, womit ein
:t[Computerspieler]{#player} umgehen können muss, um spielfähig zu sein.

### An wen richtet sich dieses Dokument?

Die Kommunikation mit dem Spielserver ist für diejenigen, die aufbauend
auf dem Zufallsspieler programmieren, unwichtig. Dort steht bereits ein
funktionierender :t[Computerspieler]{#player} bereit und es muss nur die Spiellogik entworfen
werden. \\\\ Nur wer einen komplett eigenen :t[Computerspieler]{#player} entwerfen will,
beispielsweise um die Programmiersprache frei wählen zu können, benötigt
die Definitionen.

### Hinweise

Falls Sie beabsichtigen sollten, diese Kommunikationsschnittstelle zu
realisieren, sei darauf hingewiesen, dass es im Verlauf des Wettbewerbes
möglich ist, dass weitere, hier noch nicht aufgeführte Elemente zur
Kommunikationsschnittstelle hinzugefügt werden. Um auch bei solchen
Änderungen sicher zu sein, dass ihr :t[Computerspieler]{#player} fehlerfrei mit dem Server
kommunizieren kann, empfehlen wir Ihnen, beim Auslesen des :t[XML]{#xml} jegliche
Daten zu verwerfen, die hier nicht weiter definiert sind. Die vom
Institut bereitgestellten Programme (Server, Zufallsspieler) nutzen eine
Bibliothek um Java-Objekte direkt in :t[XML]{#xml} zu konvertieren und umgekehrt.
Dabei werden XML-Nachrichten nicht mit einem newline abgeschlossen.

## Spiel betreten

Wenn begonnen wird mit dem Server zu kommunizieren, muss zuallererst

    <protocol>

gesendet werden, um die Kommunikation zu beginnen.

### Ohne Reservierungscode

Betritt ein beliebiges offenes Spiel:

    <join gameType="swc_2018_hase_und_igel"/>

Sollte kein Spiel offen sein, wird so ein neues erstellt. Je nachdem ob
paused in server.properties true oder false ist, wird das Spiel pausiert
gestartet oder nicht. Der Server antwortet darauf mit:

-   ROOM\_ID Id des GameRooms

<!-- -->

    <joined roomId="ROOM_ID"/>

Alle administrativen Clients werden ebenfalls darüber benachrichtigt und
erhalten folgende Nachricht:

-   ROOM\_ID Id des GameRooms

<!-- -->

    <joinedGameRoom roomId="ROOM_ID" existing="false"/>

Falls bereits ein GameRoom offen war, ist dementsprechend existing true.

### Mit Reservierungscode

Ist ein Reservierungscode gegeben, so kann man den durch den Code
gegebenen Platz betreten.

#### Join mit RC

-   RC Reservierungscode

<!-- -->

    <joinPrepared reservationCode="RC"/>

#### Welcome Message

Der Server antwortet darauf nur, wenn der zweite :t[Computerspieler]{#player} ebenfalls
verbunden ist:

-   ROOM\_ID Id des GameRooms

-   COLOR Spielerfarbe also red oder blue

-   status GameState wie in [Status](#status)

<!-- -->

    <joined roomId="ROOM_ID"/>
    <room roomId="ROOM_ID">
      <data class="welcomeMessage" color="COLOR"></data>
    </room>
    <room roomId="ROOM_ID">
      <data class="memento">
        status
      </data>
    </room>

## Züge senden

### Der Move

Der Move ist die Antwort auf den MoveRequest des Servers.

#### MoveRequest

-   ROOM\_ID Id des GameRooms

<!-- -->

    <room roomId="ROOM_ID">
      <data class="sc.framework.plugins.protocol.MoveRequest"/>
    </room>

#### Senden

Der Move ist der allgemeine Zug, der in verschiedenen Varianten gesendet
werden kann.

-   ROOM\_ID Id des GameRooms

-   ZUG Zug wie in [ZUG](#zug)

<!-- -->

    <room roomId="ROOM_ID">
      ZUG
    </room>

### ZUG

-   ACTION Aktionen wie in [ACTION](#action)

<!-- -->

    <data class="move">
      ACTION
      ..
      ACTION
    </move>

### ACTION

Mögliche Aktionen:

-   I Index der Aktion beginnend mit 0

-   D Anzahl der Felder um die sich bewegt wird

-   W -10 oder 10

-   V 20,0,-20 falls type TAKE\_OR\_DROP\_CARROTS, 0 sonst

<!-- -->

    <advance order="I" distance="D"/>
    <card order="I" type="CARD_TYPE" value="V"/>
    <exchangeCarrots order="I" value="W"/>
    <eatSalad order="I"/>
    <fallBack order="I"/>
    <skip order="I"/>

### Debughints

Zügen können Debug-Informationen beigefügt werden:

    <hint content="S"/>

Damit sieht beispielsweise ein Laufzug so aus:

    <room roomId="ROOM_ID">
      <data class="move">
        <advance order="0" distance="1"/>
        <card order="1" type="EAT_SALAD" value="0"/>
        <hint content="Dies ist ein Hint."/>
        <hint content="noch ein Hint"/>
      </data>
    </room>

## Spielstatus

Es folgt die Beschreibung des Spielstatus, der vor jeder Zugaufforderung
an die Clients gesendet wird. Das Spielstatus-Tag ist dabei noch in
einem *data*-Tag der Klasse *memento* gewrappt:

### memento

-   ROOM\_ID Id des GameRooms

-   status Gamestate wie in [Status](#status)

<!-- -->

    <room roomId="ROOM_ID">
      <data class="memento">
        status
      </data>
    </room>

### Status

-   Z aktuelle Zugzahl

-   S Spieler, der das Spiel gestartet hat (RED/BLUE)

-   C Spieler, der an der Reihe ist (RED/BLUE)

-   red, blue wie in [Spieler](#spieler) definiert

-   board Das Spielbrett, wie in [Spielbrett](#spielbrett) definiert

-   lastMove Letzter getätigter Zug (nicht in der ersten Runde), wie in
    [Letzter Zug](#letzter-zug) definiert

-   condition Spielergebnis, wie in [Spielergebnis](#spielende)
    definiert; nur zum Spielende

<!-- -->

    <state class="state" turn="Z" startPlayer="S" currentPlayer="C">
      red
      blue
      [board]
      [lastMove]
      [condition]
    </state>

### Spieler

-   C Farbe (red/blue)

-   N Anzeigename

-   I Feldindex des Spielers

-   S Anzahl Salate

-   K Anzahl der Karotten

<!-- -->

    <C displayName="N" color="C" index="I" carrots="K" salads="S">
      <cards>
        <type>TAKE_OR_DROP_CARROTS</type>
        <type>EAT_SALAD</type>
        <type>HURRY_AHEAD</type>
        <type>FALL_BACK</type>
      </cards>
      <lastNonSkipAction class="fallBack" order="0"/> // Beispiel für letzte Aktion
    </C>

### Spielbrett

-   FIELD Ein Spielfeld wie in [Spielfeld](#spielfeld) definiert.

<!-- -->

    <board>
      <fields index="0" type="START"/>
      ..
      FIELD
      ..
      <fields index="64" type="GOAL"/>
    </board>

### Spielfeld

-   I Feldnummer

-   TYPE Typ des Feldes
    (START/CARROT/HARE/GOAL/POSITION\_{X}/HEDGEHOG/SALAD). X ist 1 oder
    2

<!-- -->

    <fields index="I" type="TYPE"/>

### Letzter Zug

Der letzte Zug ist ein Move (siehe hierzu [ZUG](#zug)).

-   ACTIONS Teilzüge des Zuges (siehe hierzu [ACTION](#action)).

<!-- -->

    <lastMove>
      ACTIONS
    </lastMove>

## Zug-Anforderung

Eine einfache Nachricht fordert zum Zug auf:

    <room roomId="RID">
      <data class="sc.framework.plugins.protocol.MoveRequest"/>
    </room>

## Fehler

Ein “spielfähiger” :t[Computerspieler]{#player} muss nicht mit Fehlern umgehen können.
Fehlerhafte Züge beispielsweise resultieren in einem vorzeitigen Ende
des Spieles, das im nächsten gesendeten Gamestate erkannt werden kann
(siehe [Spielergebnis](#spielende)).

-   MSG Fehlermeldung

<!-- -->

    <room roomId="RID">
      <error message="MSG">
        <originalRequest>
        Request, der den Fehler verursacht hat
        </originalRequest>
      </error>
    </room>

## Spiel verlassen

Wenn ein :t[Computerspieler]{#player} den Raum verlässt, bekommen die anderen Clients eine
entsprechende Meldung vom Server.

-   ROOM\_ID Id des GameRooms

<!-- -->

    <left roomId="ROOM_ID"/>

## Spielergebnis

Zum Spielende enthält der Spieler das Ergebnis:

-   ROOM\_ID Id des GameRooms

-   R1, R2 Text, der den Grund für das Spielende erklärt

-   CAUSE1, CAUSE2 Grund des Spielendes
    (REGULAR/LEFT/RULE\_VIOLATION/SOFT\_TIMEOUT/HARD\_TIMEOUT)

-   WP1, WP2 Siegpunkte der jeweiligen Spieler, 0 verloren, 1
    unentschieden, 2 gewonnen

-   I1, I2 Index des Feldes auf dem der Spieler steht

-   C1, C2 Karotten des Spielers

-   NAME Anzeigename des Spielers

-   COLOR Farbe des Siegers

-   I3 I1 oder I2 je nachdem wer gewonnen hat

-   C3 C1 oder C2 je nachdem wer gewonnen hat

-   S Salate des Siegers

-   \[cards\] Karten des Siegers wie in [Spieler](#spieler)

-   \[lastNonSkipAction\] Letztes Aktion des Siegers wie in
    [Spieler](#spieler)

<!-- -->

    <room roomId="ROOM_ID">
      <data class="result">
        <definition>
          <fragment name="Gewinner">
            <aggregation>SUM</aggregation>
            <relevantForRanking>true</relevantForRanking>
          </fragment>
          <fragment name="Ø Feldnummer">
            <aggregation>AVERAGE</aggregation>
            <relevantForRanking>true</relevantForRanking>
          </fragment>
          <fragment name="Ø Karotten">
            <aggregation>AVERAGE</aggregation>
            <relevantForRanking>true</relevantForRanking>
          </fragment>
        </definition>
        <score cause="CAUSE1" reason="R1">
          <part>WP1</part>
          <part>I1</part>
          <part>C1</part>
        </score>
        <score cause="CAUSE2" reason="R2">
          <part>WP2</part>
          <part>I2</part>
          <part>C1</part>
        </score>
        <winner class="player" displayName="NAME" color="COLOR" index="I3" carrots="C3" salads="S">
          [cards]
          [lastNonSkipAction]
        </winner>
      </data>
    </room>

## Spielverlauf

Der Server startet (StandardIp: localhost 13050).

Nun gibt es zwei Varianten ein Spiel zu starten, eine durch einen
Administratorclient die andere durch hinzufügen der Spieler zu einen
Spieltyp:

### Variante 1 (AdminClient [Mit Reservierungscode](#mit-reservierungscode))

Ein :t[Computerspieler]{#player} registriert sich als Administrator mit dem in
server.properties festgelegten Passwort p:

    <protocol><authenticate passphrase="p"/>

Dann kann ein Spiel angelegt werden:

    <prepare gameType="swc_2018_hase_und_igel">
      <slot displayName="p1" canTimeout="false" shouldBePaused="true"/>
      <slot displayName="p2" canTimeout="false" shouldBePaused="true"/>
    </prepare>

Der Server antwortet darauf mit einer Nachricht, die die ROOM\_ID und
Reservierungscodes für die beiden Clients enthält:

    <protocol>
      <prepared roomId="871faccb-5190-4e44-82fc-6cdcbb493726">
        <reservation>RC1</reservation>
        <reservation>RC2</reservation>
      </prepared>

Der Administratorclient kann nur ebenfalls als Observer des Spiels
genutzt werden, indem ein entsprechender Request gesendet wird. Dadurch
wird das derzeitge Spielfeld ([memento](#memento)) ebenfalls an den
Administratorclient gesendet.

    <observe roomId="871faccb-5190-4e44-82fc-6cdcbb493726"/>

Clients die auf dem Serverport (localhost 13050) gestartet werden können
so über diesen Code joinen.

    <protocol>
      <joinPrepared reservationCode="RC1"/>

    <protocol>
      <joinPrepared reservationCode="RC2"/>

### Variante 2 ((eventuell) ohne AdminClient [Ohne Reservierungscode](#ohne-reservierungscode))

Die Clients wurden auf dem Serverport (Standard: localhost 13050)
gestartet.

Sie können sich mit folgender Anfrage einen bereits offenen Spiel
gleichen Typs beitreten oder, falls kein Spiel des Typs vorhanden selbst
eines starten:

    <protocol>
      <join gameType="swc_2018_hase_und_igel"/>

Der Server antwortet mit:

    <protocol>
      <joined roomId="871faccb-5190-4e44-82fc-6cdcbb493726"/>

### Weiterer Spielverlauf

Der Server antwortet jeweils mit der WelcomeMessage ([Welcome
Message](#welcome-message)) und dem ersten GameState
([memento](#memento)) sobald beide Spieler verbunden sind.

    <room roomId="871faccb-5190-4e44-82fc-6cdcbb493726">
      <data class="welcomeMessage" color="red"/>
    </room>
    <room roomId="871faccb-5190-4e44-82fc-6cdcbb493726">
      <data class="memento">
        <state class="state" turn="0" startPlayer="RED" currentPlayer="RED">
          <red displayName="Unknown" color="RED" index="0" carrots="68" salads="5">
            <cards>
              <type>TAKE_OR_DROP_CARROTS</type>
              <type>EAT_SALAD</type>
              <type>HURRY_AHEAD</type>
              <type>FALL_BACK</type>
            </cards>
          </red>
          <blue displayName="Unknown" color="BLUE" index="0" carrots="68" salads="5">
            <cards>
              <type>TAKE_OR_DROP_CARROTS</type>
              <type>EAT_SALAD</type>
              <type>HURRY_AHEAD</type>
              <type>FALL_BACK</type>
            </cards>
          </blue>
          <board>
            <fields index="0" type="START"/>
            <fields index="1" type="CARROT"/>
            <fields index="2" type="HARE"/>
            <fields index="3" type="HARE"/>
            <fields index="4" type="POSITION_2"/>
            <fields index="5" type="POSITION_1"/>
            <fields index="6" type="CARROT"/>
            <fields index="7" type="CARROT"/>
            <fields index="8" type="HARE"/>
            <fields index="9" type="CARROT"/>
            <fields index="10" type="SALAD"/>
            <fields index="11" type="HEDGEHOG"/>
            <fields index="12" type="HARE"/>
            <fields index="13" type="CARROT"/>
            <fields index="14" type="CARROT"/>
            <fields index="15" type="HEDGEHOG"/>
            <fields index="16" type="POSITION_1"/>
            <fields index="17" type="CARROT"/>
            <fields index="18" type="POSITION_2"/>
            <fields index="19" type="HEDGEHOG"/>
            <fields index="20" type="CARROT"/>
            ...
            <fields index="57" type="SALAD"/>
            <fields index="58" type="CARROT"/>
            <fields index="59" type="POSITION_1"/>
            <fields index="60" type="HARE"/>
            <fields index="61" type="CARROT"/>
            <fields index="62" type="HARE"/>
            <fields index="63" type="CARROT"/>
            <fields index="64" type="GOAL"/>
          </board>
        </state>
      </data>
    </room>

Der erste Spieler erhält dann eine Zugaufforderung
([MoveRequest](#move-request)), falls in server.properties paused auf
false gesetzt wurde. Falls das Spiel pausiert ist, muss das Spiel durch
einen Administratorclient gestartet werden:

Verbinden des Administratorclients (falls es sich um die erste
Kontaktaufnahme zum Server handelt, ansonsten &lt;protocol&gt;
weglassen).

    <protocol>
      <authenticate passphrase="examplepassword"/>

Pausierung aufheben:

    <pause roomId="871faccb-5190-4e44-82fc-6cdcbb493726" pause="false" />

Daraufhin wird der erste Spieler aufgefordert einen Zug zu senden:

    <room roomId="871faccb-5190-4e44-82fc-6cdcbb493726">
      <data class="sc.framework.plugins.protocol.MoveRequest"/>
    </room>

Der :t[Computerspieler]{#player} des CurrentPlayer sendet nun einen Zug ([ZUG](#zug)):

    <room roomId="871faccb-5190-4e44-82fc-6cdcbb493726">
      <data class="move">
        <advance order="0" distance="6">
      </data>
    </room>

So geht es abwechselnd weiter, bis zum Spielende
([Spielergebnis](#spielende)). Die letzte Nachricht des Servers endet
mit:

    </protocol>

Danach wird die Verbindung geschlossen.
