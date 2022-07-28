# Spiel betreten

Wenn begonnen wird mit dem Server zu kommunizieren, muss zuallererst

    <protocol>

gesendet werden, um die Kommunikation zu beginnen.

## Ohne Reservierungscode

Betritt ein beliebiges offenes Spiel:

    <join gameType="swc_2021_blokus" />

Sollte kein Spiel offen sein, wird so ein neues erstellt. Je nachdem ob
paused in server.properties true oder false ist, wird das Spiel pausiert
gestartet oder nicht. Der Server antwortet darauf mit:

-   ROOM\_ID ID des GameRooms

<!-- -->

    <joined roomId="ROOM_ID" />

Alle administrativen Clients werden ebenfalls darüber benachrichtigt und
erhalten folgende Nachricht:

-   ROOM\_ID ID des GameRooms

<!-- -->

    <joinedGameRoom roomId="ROOM_ID" existing="false" />

Falls bereits ein GameRoom offen war, ist dementsprechend existing true.

## Mit Reservierungscode

Ist ein Reservierungscode gegeben, so kann man den durch den Code
gegebenen Platz betreten.

### Join mit Reservierungscode

-   RC Reservierungscode

<!-- -->

    <joinPrepared reservationCode="RC" />

### Welcome Message

Der Server antwortet darauf erst, wenn der zweite Client ebenfalls
verbunden ist:

-   ROOM\_ID Id des GameRooms

-   COLOR Spielerfarbe. Da bei Blokus jeder Spieler zwei Farben spielt,
    ist hier nur one oder two angegeben

-   STATUS GameState wie in [???](#status)

<!-- -->

    <joined roomId="ROOM_ID" />
    <room roomId="ROOM_ID">
      <data class="welcomeMessage" color="COLOR"></data>
    </room>
    <room roomId="ROOM_ID">
      STATUS
    </room>

Als erstes kommt eine Bestätigung, dass das Spiel betreten wurde. Hier
kann die Raum-ID festgestellt und für die weitere Kommunikation
gespeichert werden. Nach der Willkommensnachricht, welche dem Spieler
mitteilt, ob er erster oder zweiter Spieler ist, wird der initiale
Spielstatus gesendet.
