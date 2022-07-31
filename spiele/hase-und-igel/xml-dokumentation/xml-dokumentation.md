Ziel dieser Dokumentation ist es, die XML-Schnittstelle der
Softwarechallenge festzuhalten.

[PDF-Version dieses Dokumentes](xml-dokumentation.pdf)

Wir freuen uns über sämtliche Verbesserungsvorschläge. Die Dokumentation
kann [direkt auf GitHub
editiert](https://github.com/software-challenge/docs) werden, einzige
Voraussetzung ist eine kostenlose Registrierung bei GitHub. Ist man
angemeldet, kann man ein Dokument auswählen (ein guter Startpunkt ist
die Datei
[index.md](https://github.com/software-challenge/docs/blob/master/index.md)
welche Verweise auf alle Sektionen der Dokumentation enthält) und dann
auf den Stift oben rechts klicken. Alternativ auch gern eine E-Mail an
<svk@informatik.uni-kiel.de>.

# Einleitung

Wie in den letzten Jahren wird zur Client-Server Kommunikation ein
XML-Protokoll genutzt. In diesem Dokument wird die
Kommunikationsschnittstelle definiert, sodass ein komplett eigener
Client geschrieben werden kann. Es wird hier nicht die vollständige
Kommunikation dokumentiert bzw. definiert, dennoch alles, womit ein
Client umgehen können muss, um spielfähig zu sein.

## An wen richtet sich dieses Dokument?

Die Kommunikation mit dem Spielserver ist für diejenigen, die aufbauend
auf dem Simpleclient programmieren, unwichtig. Dort steht bereits ein
funktionierender Client bereit und es muss nur die Spiellogik entworfen
werden. \\\\ Nur wer einen komplett eigenen Client entwerfen will,
beispielsweise um die Programmiersprache frei wählen zu können, benötigt
die Definitionen.

## Hinweise

Falls Sie beabsichtigen sollten, diese Kommunikationsschnittstelle zu
realisieren, sei darauf hingewiesen, dass es im Verlauf des Wettbewerbes
möglich ist, dass weitere, hier noch nicht aufgeführte Elemente zur
Kommunikationsschnittstelle hinzugefügt werden. Um auch bei solchen
Änderungen sicher zu sein, dass ihr Client fehlerfrei mit dem Server
kommunizieren kann, empfehlen wir Ihnen, beim Auslesen des XML jegliche
Daten zu verwerfen, die hier nicht weiter definiert sind. Die vom
Institut bereitgestellten Programme (Server, Simpleclient) nutzen eine
Bibliothek um Java-Objekte direkt in XML zu konvertieren und umgekehrt.
Dabei werden XML-Nachrichten nicht mit einem newline abgeschlossen.

# Spiel betreten

Wenn begonnen wird mit dem Server zu kommunizieren, muss zuallererst

    <protocol>

gesendet werden, um die Kommunikation zu beginnen.

## Ohne Reservierungscode

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

## Mit Reservierungscode

Ist ein Reservierungscode gegeben, so kann man den durch den Code
gegebenen Platz betreten.

### Join mit RC

-   RC Reservierungscode

<!-- -->

    <joinPrepared reservationCode="RC"/>

### Welcome Message

Der Server antwortet darauf nur, wenn der zweite Client ebenfalls
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

# Züge senden

## Der Move

Der Move ist die Antwort auf den MoveRequest des Servers.

### MoveRequest

-   ROOM\_ID Id des GameRooms

<!-- -->

    <room roomId="ROOM_ID">
      <data class="sc.framework.plugins.protocol.MoveRequest"/>
    </room>

### Senden

Der Move ist der allgemeine Zug, der in verschiedenen Varianten gesendet
werden kann.

-   ROOM\_ID Id des GameRooms

-   ZUG Zug wie in [ZUG](#zug)

<!-- -->

    <room roomId="ROOM_ID">
      ZUG
    </room>

## ZUG

-   ACTION Aktionen wie in [ACTION](#action)

<!-- -->

    <data class="move">
      ACTION
      ..
      ACTION
    </move>

## ACTION

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

## Debughints

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

# Spielstatus

Es folgt die Beschreibung des Spielstatus, der vor jeder Zugaufforderung
an die Clients gesendet wird. Das Spielstatus-Tag ist dabei noch in
einem *data*-Tag der Klasse *memento* gewrappt:

## memento

-   ROOM\_ID Id des GameRooms

-   status Gamestate wie in [Status](#status)

<!-- -->

    <room roomId="ROOM_ID">
      <data class="memento">
        status
      </data>
    </room>

## Status

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

## Spieler

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

## Spielbrett

-   FIELD Ein Spielfeld wie in [Spielfeld](#spielfeld) definiert.

<!-- -->

    <board>
      <fields index="0" type="START"/>
      ..
      FIELD
      ..
      <fields index="64" type="GOAL"/>
    </board>

## Spielfeld

-   I Feldnummer

-   TYPE Typ des Feldes
    (START/CARROT/HARE/GOAL/POSITION\_{X}/HEDGEHOG/SALAD). X ist 1 oder
    2

<!-- -->

    <fields index="I" type="TYPE"/>

## Letzter Zug

Der letzte Zug ist ein Move (siehe hierzu [ZUG](#zug)).

-   ACTIONS Teilzüge des Zuges (siehe hierzu [ACTION](#action)).

<!-- -->

    <lastMove>
      ACTIONS
    </lastMove>

# Zug-Anforderung

Eine einfache Nachricht fordert zum Zug auf:

    <room roomId="RID">
      <data class="sc.framework.plugins.protocol.MoveRequest"/>
    </room>

# Fehler

Ein “spielfähiger” Client muss nicht mit Fehlern umgehen können.
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

# Spiel verlassen

Wenn ein Client den Raum verlässt, bekommen die anderen Clients eine
entsprechende Meldung vom Server.

-   ROOM\_ID Id des GameRooms

<!-- -->

    <left roomId="ROOM_ID"/>

# Spielergebnis

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

# Spielverlauf

Der Server startet (StandardIp: localhost 13050).

Nun gibt es zwei Varianten ein Spiel zu starten, eine durch einen
Administratorclient die andere durch hinzufügen der Spieler zu einen
Spieltyp:

## Variante 1 (AdminClient [Mit Reservierungscode](#mit-reservierungscode))

Ein Client registriert sich als Administrator mit dem in
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

## Variante 2 ((eventuell) ohne AdminClient [Ohne Reservierungscode](#ohne-reservierungscode))

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

## Weiterer Spielverlauf

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

Der Client des CurrentPlayer sendet nun einen Zug ([ZUG](#zug)):

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
