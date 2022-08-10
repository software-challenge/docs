# Spielstatus

Es folgt die Beschreibung des Spielstatus, der vor jeder Zugaufforderung
an die Clients gesendet wird. Das Spielstatus-Tag ist dabei noch in
einem *data*-Tag der Klasse *memento* gewrappt:

## memento

-   `ROOM_ID` Id des GameRooms

-   `STATUS` Gamestate wie in [Status](#status)

<!-- -->

    <room roomId="ROOM_ID">
      <data class="memento">
        STATUS
      </data>
    </room>

## Status

-   `Z` aktuelle Zugzahl

-   `R` aktuelle Rundenzahl

-   `P` Spielstein, der in der ersten Runde gelegt werden muss, siehe
    [???](#spielsteine)

-   `T` Team, welches beginnt (`ONE`, `TWO`)

-   `board` Das Spielbrett, wie in [Spielbrett](#spielbrett) definiert

-   `blueShapes`, `yellowShapes`, `redShapes`, `greenShapes` Noch nicht
    gesetzte Spielsteine, siehe [Nicht gesetzte
    Spielsteine](#undeployed)

-   `lastMoveMono` beschreibt, wenn eine Farbe alle Steine gelegt hat,
    ob der Mono-Stein als letztes gelegt wurde

-   `validColors` alle Farben, die noch im Spiel sind

-   `first` Name und auch Team des ersten Spielers.

-   `second` Name und auch Team des zweiten Spielers.

-   `lastMove` der zuletzt ausgeführte Zug, siehe [Vorheriger
    Zug](#last-move)

<!-- -->

    <state class="state" turn="Z" round="R" startPiece="P">
      <startTeam class="team">T</startTeam>
      blueShapes
      yellowShapes
      redShapes
      greenShapes
      validColors
      first
      second
      board
      lastMove
      lastMoveMono
    </state>

## Spielbrett

-   `X` X-Koordinate

-   `Y` Y-Koordinate

-   `CONTENT` Farbe des Spielsteins, der dieses Feld überdeckt
    (`BLUE`,`YELLOW`,`RED`,`GREEN`)

<!-- -->

    <board>
      <fields>
        <field x="17" y="0" content="BLUE"/>
        [...]
        <field x="17" y="2" content="BLUE"/>
      </fields>
      [...]
    </board>

`<board>` enthaelt `<field>` Tags für alle Felder, die bereits belegt
sind. Leere Felder kommen nicht vor. Grundsätzlich besteht das
Spielbrett aber immer aus 20x20 Feldern, wobei das Feld links oben die
X- und Y-Koordinate 0 hat und die positive X-Achste nach rechts und die
positive Y-Achse nach unten verläuft.

## Nicht gesetzte Spielsteine

    <blueShapes>
      <shape>MONO</shape>
      <shape>DOMINO</shape>
      <shape>TRIO_L</shape>
      <shape>TRIO_I</shape>
      <shape>TETRO_O</shape>
      <shape>TETRO_T</shape>
      <shape>TETRO_I</shape>
      <shape>TETRO_L</shape>
      <shape>TETRO_Z</shape>
      <shape>PENTO_L</shape>
      <shape>PENTO_T</shape>
      <shape>PENTO_S</shape>
      <shape>PENTO_Z</shape>
      <shape>PENTO_I</shape>
      <shape>PENTO_P</shape>
      <shape>PENTO_W</shape>
      <shape>PENTO_U</shape>
      <shape>PENTO_R</shape>
      <shape>PENTO_X</shape>
      <shape>PENTO_Y</shape>
    </blueShapes>

Die nicht gesetzten Steine werden durch `<shape>` Tags in einem
`<blueShapes>`, `<yellowShapes>`, `<redShapes>` und `<greenShapes>` Tag
dargestellt.

## Letzter Stein

    <lastMoveMono>
      <entry>
        <color>YELLOW</color>
        <boolean>true</boolean>
      </entry>
    </lastMoveMono>

Jede Farbe, die alle Steine gesetzt hat, bekommt einen `<entry>` Tag.
Dieser beschreibt fuer die Farbe im `<color>` Tag als `<boolean>`, ob
der Mono Stein als letztes gesetzt wurde.

## Farben im Spiel

    <validColors>
      <color>BLUE</color>
      <color>YELLOW</color>
      <color>RED</color>
      <color>GREEN</color>
    </validColors>

Alle Farben, die noch Züge durchführen können, werden durch `<color>`
Tags dargestellt.

## Erster Spieler

    <first displayName="One">
      <color class="team">ONE</color>
    </first>

Der erste Spieler wird wird mit dem Tag `<first>` beschrieben. Das
Attribut "displayName" beinhaltet den Spielernamen des ersten Spielers.
Der untergeordnete Tag `<color>` hält entweder den Wert `ONE` oder
`TWO`. Hier ist dies `ONE`, also macht der erste Spieler den ersten Zug.

## Zweiter Spieler

Dieser Tag beschreibt den zweiten Spieler. Die Struktur ist wie bei
[Erster Spieler](#first).

## Vorheriger Zug

    <lastMove class="sc.plugin2021.SetMove">
      <piece color="BLUE" kind="PENTO_V" rotation="RIGHT" isFlipped="false">
        <position x="17" y="0"/>
      </piece>
    </lastMove>

Der vorherige Zug hat die selbe Struktur wie ein [???](#zug), der
gesendet wird, ausser dass das Tag `<lastMove>` und nicht `<data>`
heisst. Der vorherige Zug wird in jedem Spielstatus angegeben, ausser
vor dem ersten Zug.

## Beispiel kompletter Spielstatus

Hier ist das XML eines kompletten beispielhaften Spielstatus, wie es der
Computerspieler vom Server bekommt:

    <room roomId="cb3bc426-5c70-48b9-9307-943bc328b503">
      <data class="memento">
        <state turn="70" round="18" startPiece="PENTO_L">
          <startTeam class="team">ONE</startTeam>
          <blueShapes/>
          <yellowShapes>
            <shape>MONO</shape>
          </yellowShapes>
          <redShapes>
            <shape>MONO</shape>
            <shape>DOMINO</shape>
          </redShapes>
          <greenShapes>
            <shape>MONO</shape>
            <shape>DOMINO</shape>
            <shape>TRIO_L</shape>
            <shape>TRIO_I</shape>
          </greenShapes>
          <validColors>
            <color>YELLOW</color>
            <color>RED</color>
            <color>GREEN</color>
          </validColors>
          <first displayName="">
            <color class="team">ONE</color>
          </first>
          <second displayName="">
            <color class="team">TWO</color>
          </second>
          <board>
            <field x="0" y="0" content="RED"/>
            <field x="1" y="3" content="GREEN"/>
            <field x="8" y="6" content="YELLOW"/>
            <field x="5" y="9" content="BLUE"/>
          </board>
          <lastMove class="sc.plugin2021.SetMove">
            <piece color="BLUE" kind="MONO" rotation="NONE" isFlipped="false">
              <position x="0" y="0"/>
            </piece>
          </lastMove>
          <lastMoveMono>
            <entry>
              <color>BLUE</color>
              <boolean>true</boolean>
            </entry>
          </lastMoveMono>
        </state>
      </data>
    </room>
