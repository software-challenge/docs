# Züge senden

## Der Move

Der Move ist die Antwort auf den MoveRequest des Servers.

### MoveRequest

`ROOM_ID`  
ID des GameRooms, dient der Zuordnung der Antworten des Clients.

<!-- -->

    <room roomId="ROOM_ID">
      <data class="sc.framework.plugins.protocol.MoveRequest" />
    </room>

### Senden

Der Move ist der allgemeine Zug, der in verschiedenen Varianten gesendet
werden kann.

`ROOM_ID`  
ID des GameRooms, aus dem `MoveRequest`.

`ZUG`  
Zug wie in [ZUG](#zug)

<!-- -->

    <room roomId="ROOM_ID">
      ZUG
    </room>

## ZUG

`X`  
X-Koordinate des zu ziehenden Piranhas (`0` bis `9`, Spalten des
Spielfeldes von links nach rechts)

`Y`  
Y-Koordinate des zu ziehenden Piranhas (`0` bis `9`, Zeilen des
Spielfeldes von unten nach oben)

`DIRECTION`  
Richtung, in die der Piranha zieht. Eine von folgenden:

-   `UP`

-   `UP_RIGHT`

-   `RIGHT`

-   `DOWN_RIGHT`

-   `DOWN`

-   `DOWN_LEFT`

-   `LEFT`

-   `UP_LEFT`

<!-- -->

    <data class="move" x="X" y="Y" direction="DIRECTION" />

## Debughints

Zügen können Debug-Informationen beigefügt werden:

    <hint content="S" />

Damit sieht beispielsweise ein Laufzug so aus:

    <room roomId="ROOM_ID">
      <data class="move" x="0" y="0" direction="UP">
        <hint content="Dies ist ein Hint." />
        <hint content="noch ein Hint" />
      </data>
    </room>
