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
X-Koordinate des zu ziehenden Spielsteines oder des Zielfeldes

`Y`  
Y-Koordinate des zu ziehenden Spielsteines oder des Zielfeldes

`Z`  
Z-Koordinate des zu ziehenden Spielsteines oder des Zielfeldes

`COLOR`  
Farbe des zu setzenden Spielsteines (RED/BLUE)

`TYPE`  
Typ des zu setzenden Spielsteines (ANT, BEE, BEETLE, GRASSHOPPER,
SPIDER)

Es gibt drei Arten von Zuegen. Entweder man setzt einen eigenen noch
nicht gesetzten Stein auf ein Zielfeld:

    <data class="setmove">
      <piece owner="COLOR" type="TYPE" />
      <destination x="X" y="Y" z="Z"/>
    </data>

Oder man bewegt einen eigenen Stein auf dem Spielfeld:

    <data class="dragmove">
      <start x="X" y="Y" z="Z"/>
      <destination x="X" y="Y" z="Z"/>
    </data>

Oder man kann weder setzen noch ziehen, dann ist es erlaubt,
auszusetzen:

    <data class="missmove" />

## Debughints

Zügen können Debug-Informationen beigefügt werden:

    <hint content="S" />

Damit sieht beispielsweise ein Zug so aus:

    <room roomId="ROOM_ID">
      <data class="dragmove">
        <start x="X" y="Y" z="Z"/>
        <destination x="X" y="Y" z="Z"/>
        <hint content="Dies ist ein Hint." />
        <hint content="noch ein Hint" />
      </data>
    </room>
