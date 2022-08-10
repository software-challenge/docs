# Spielverlauf

## Start

Der Server eröffnet das Spiel mit einer Begrüßung und dem initialen
Spielstatus sobald beide Spieler verbunden sind.

ROOM\_ID  
Identifikationscode der Spielpartie

COLOR  
Spielerfarbe

STATUS  
[???](#status) der Partie

<!-- -->

    <room roomId="ROOM_ID">
      <data class="welcomeMessage" color="COLOR"></data>
    </room>
    <room roomId="ROOM_ID">
      <data class="memento">
        STATUS
      </data>
    </room>

## Ablauf

Der erste Spieler erhält dann eine Zugaufforderung:

    <room roomId="ROOM_ID">
      <data class="moveRequest" />
    </room>

Worauf dieser innerhalb der gesetzten Zeitbeschränkung mit einem
[???](#Zug) antwortet:

    <room roomId="ROOM_ID">
      <data class="move">
        ZUG
      </data>
    </room>

Nach Erhalt des Zuges sendet der Server den neuen Spielstatus an alle
Spieler und dem nächsten Spieler eine Zugaufforderung. So geht es hin
und her bis zum [???](#spielende).

## Ende der Kommunikation

Die letzte Nachricht des Servers endet mit:

    </protocol>

Danach wird die Verbindung geschlossen.
