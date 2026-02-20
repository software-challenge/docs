# Spielstatus

Es folgt die Beschreibung des Spielstatus, der vor jeder Zugaufforderung
an die Clients gesendet wird. Das Spielstatus-Tag ist dabei noch in
einem *data*-Tag der Klasse *memento* gewrappt:

## memento

-   ROOM\_ID Id des GameRooms

-   STATUS Gamestate wie in [Status](#status)

<!-- -->

    <room roomId="ROOM_ID">
      <data class="memento">
        STATUS
      </data>
    </room>

## Status

-   Z aktuelle Zugzahl

-   S Spieler, der das Spiel gestartet hat (RED/BLUE)

-   C Spieler, der an der Reihe ist (RED/BLUE)

-   red, blue wie in [Spieler](#spieler) definiert

-   board Das Spielbrett, wie in [Spielbrett](#spielbrett) definiert

-   undeployed Noch nicht gesetzte Spielsteine, siehe [Nicht gesetzte
    Spielsteine](#undeployed)

<!-- -->

    <state class="state" turn="Z" startPlayerColor="S" currentPlayerColor="C">
      red
      blue
      [board]
      [undeployed]
    </state>

## Spieler

-   c Farbe (red/blue)

-   C Farbe (RED/BLUE)

-   N Name des Spielers

<!-- -->

    <c displayName="N" color="C" />

## Spielbrett

-   FIELD Ein Spielfeld wie in [Spielfeld](#spielfeld) definiert.

<!-- -->

    <board>
      <fields>
        <null/>
        ...
        <null/>
        <field x="-5" y="2" z="3" isObstructed="false"/>
        ...
        FIELD
        ...
        <field x="-5" y="5" z="0" isObstructed="false"/>
      </fields>
      ...
      </board>

`<board>` enthaelt 11 `<fields>` Tags die wiederrum 11 Eintraege haben.
Das ganze repraesentiert ein 11x11 2D-Array. Da das Spielfeld aber nicht
rechteckig ist sondern die Form eines Hexagons hat, sind nicht alle
Array-Eintraege durch Felder belegt, sondern manche durch `<null/>`. Das
Feld mit den X- und Y-Koordinaten `x` und `y` ist im Array an der Stelle
(`x+5`, `y+5`) gespeichert.

## Spielfeld

-   X X-Koordinate

-   Y Y-Koordinate

-   Z Z-Koordinate

-   OBSTRUCTED Blockiert (true) oder nicht (false)

-   PIECES Spielsteine (falls auf dem Feld vorhanden). Oberster
    Spielstein kommt als letztes in der Liste. Siehe
    [Spielstein](#spielstein).

<!-- -->

    <field x="X" y="Y" z="Z" isObstructed="OBSTRUCTED">
      PIECES
    </field>

## Spielstein

-   OWNER Farbe (RED/BLUE)

-   TYPE Insektentyp (ANT, BEE, BEETLE, GRASSHOPPER, SPIDER)

<!-- -->

    <piece owner="OWNER" type="TYPE"/>

## Nicht gesetzte Spielsteine

    <undeployedRedPieces>
      <piece owner="RED" type="BEE"/>
      ...
    </undeployedRedPieces>
    <undeployedBluePieces>
      <piece owner="BLUE" type="BEE"/>
      ...
    </undeployedBluePieces>
