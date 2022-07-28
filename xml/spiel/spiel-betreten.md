# Spiel betreten

    <protocol>

Dieses Tag eröffnet die Kommunikation mit dem Server. Dann gibt es drei
Möglichkeiten, einer Spielpartie beizutreten.

## Beliebige Partie

Betritt ein beliebige offene Spielpartie:

    <join />

Sollte kein Spiel offen sein, wird automatisch ein neues erstellt.
Abhängig von der Einstellung `paused` in `server.properties` wird das
Spiel pausiert gestartet oder nicht.

## Bestimmte Partie

Einer bestimmten, bereits offenen aber noch nicht gestarteten Partie
kann durch Angabe der `ROOM_ID` beigetreten werden:

    <joinRoom roomId="ROOM_ID" />

## Mit Reservierung

Unter Angabe eines Reservierungscodes kann man einen reservierten Platz
in einer geplanten Partie einnehmen:

    <joinPrepared reservationCode="RESERVATION" />

## Antwort

Der Server antwortet auf einen erfolgreichen Spielbeitritt mit:

    <joined roomId="ROOM_ID" />

ROOM\_ID  
Identifikationscode der Spielpartie
