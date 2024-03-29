# Züge senden

## Der Move

Der Move ist die Antwort auf den MoveRequest des Servers.

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

`COLOR`  
Farbe des zu setzenden Spielsteines (`BLUE`,`YELLOW`,`RED`,`GREEN`)

`KIND`  
Typ des zu setzenden Spielsteines (siehe [???](#spielsteine))

`ROTATION`  
Drehung des Spielsteines (`NONE`,`RIGHT`,`MIRROR`,`LEFT`)

`FLIPPED`  
Ob der Spielstein umgedreht wurde (`true`,`false`)

`X`  
X-Koordinate des zu ziehenden Spielsteines oder des Zielfeldes

`Y`  
Y-Koordinate des zu ziehenden Spielsteines oder des Zielfeldes

Es gibt zwei Arten von Zuegen. Entweder man setzt einen eigenen noch
nicht gesetzten Stein auf ein Zielfeld:

    <data class="sc.plugin2021.SetMove">
      <piece color="COLOR" kind="KIND" rotation="ROTATION" isFlipped="FLIPPED">
        <position x="X" y="Y"/>
      </piece>
    </data>

Oder man möchte nicht setzen, dann ist es erlaubt, auszusetzen:

    <data class="sc.plugin2021.SkipMove">
      <color>COLOR</color>
    </data>

### Spielstein Transformationen

Bei `ROTATION` `NONE` ändern sich die Koordinaten der Teile des
Spielsteins nicht. `(x, y) ⇒ (x, y)`

![pento L](pento_L.png)

Bei `ROTATION` `RIGHT` wird der Spielstein um den Ursprung nach rechts
gedreht. `(x, y) ⇒ (-y, x)`

![pento L RIGHT](pento_L_RIGHT.png)

Bei `ROTATION` `MIRROR` wird der Spielstein um den Ursprung gespiegelt.
`(x, y) ⇒ (-x, -y)`

![pento L MIRROR](pento_L_MIRROR.png)

Bei `ROTATION` `LEFT` wird der Spielstein um den Ursprung nach links
gedreht. `(x, y) ⇒ (y, -x)`

![pento L LEFT](pento_L_LEFT.png)

Wird zusätzlich `FLIPPED` auf `true` gesetzt, so werden die von der
Rotation resultierenden Koordinaten anschließend noch auf der X-Achse
invertiert. `(x, y) ⇒ (-x, y)`

![pento L LEFT FLIPPED](pento_L_LEFT_FLIPPED.png)

Auf dem vorigen Bild ist das Resultat von `ROTATION` `LEFT` und
`FLIPPED` `true` zu sehen.

Nach den Transformationen werden die Koordinaten noch normalisiert, d.h.
sie werden an die obere linke Ecke angelegt.

Dafür werden sie mit dem minimalen X Wert aller Koordinaten und dem
minimalen Y Wert aller Koordinaten subtrahiert.
`(x, y) ⇒ (x - minX, y - minY)`

Schließlich werden die Koordinaten noch mit den `X, Y` Werten, die zum
Move gehören, addiert, um die Koordinaten aller Teile des Spielsteins
auf dem Board zu erhalten.

## Debughints

Zügen können Debug-Informationen beigefügt werden:

    <hint content="S" />

Damit sieht beispielsweise ein Zug so aus:

    <room roomId="ROOM_ID">
      <data class="sc.plugin2021.SetMove">
        <piece color="COLOR" kind="KIND" rotation="ROTATION" isFlipped="FLIPPED">
          <position x="X" y="Y"/>
        </piece>
        <hint content="Dies ist ein Hint." />
        <hint content="noch ein Hint" />
      </data>
    </room>
