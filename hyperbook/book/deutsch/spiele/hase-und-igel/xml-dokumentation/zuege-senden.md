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
