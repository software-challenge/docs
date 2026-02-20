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

Der letzte Zug ist ein Move (siehe hierzu [???](#zug)).

-   ACTIONS Teilzüge des Zuges (siehe hierzu [???](#action)).

<!-- -->

    <lastMove>
      ACTIONS
    </lastMove>
