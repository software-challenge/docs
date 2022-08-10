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

-   lastMove Letzter getätigter Zug (nicht in der ersten Runde), wie in
    [Letzter Zug](#letzter-zug) definiert

-   condition Spielergebnis, wie in [???](#spielende) definiert; nur zum
    Spielende

<!-- -->

    <state class="state" turn="Z" startPlayer="S" currentPlayer="C">
      red
      blue
      [board]
      [lastMove]
      [condition]
    </state>

## Spieler

-   c Farbe (red/blue)

-   C Farbe (RED/BLUE)

<!-- -->

    <c displayName="N" color="C" />

## Spielbrett

-   FIELD Ein Spielfeld wie in [Spielfeld](#spielfeld) definiert.

<!-- -->

    <board>
      <fields>
        <field x="0" y="0" state="EMPTY" />
        ...
        FIELD
        ...
        <field x="0" y="9" state="EMPTY" />
      </fields>
      ...
      <fields>
        <field x="9" y="0" state="EMPTY" />
        ...
        FIELD
        ...
        <field x="9" y="9" state="EMPTY" />
      </fields>
    </board>

## Spielfeld

-   X X-Koordinate

-   Y Y-Koordinate

-   STATE Zustand des Feldes (RED,BLUE,OBSTRUCTED,EMPTY)

<!-- -->

    <field x="X" y="Y" state="STATE" />

## Letzter Zug

Der letzte Zug ist ein Move (siehe hierzu [???](#zug)).

    <lastMove>
      ZUG
    </lastMove>
