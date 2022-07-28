# Administration

Mit einem authentifizierten Client kann man den Server steuern.

## Verbindungsaufbau

Zuerst muss sich ein Client mit dem entsprechenden Passwort aus
`server.properties` authentifizieren:

    <protocol><authenticate password="examplepassword"/>

Ein authentifizierter AdminClient wird benachrichtigt, wenn sich ein
Client über ein `JoinRoomRequest` verbindet:

    <joinedGameRoom roomId=ROOMID playerCount=X />

roomId  
eine vom Server generierte Zeichenfolge, die die Partie identifiziert

playerCount  
die Anzahl der Spieler im Raum nach dem Beitritt des neuen Spielers

## Aktionen in einem Raum

Ein AdminClient kann sich als Observer eines Raums anmelden, dadurch
erhält er alle Nachrichten, die das Spiel betreffen:

    <observe roomId=ROOMID />

Ein AdminClient kann ein Spiel pausieren oder fortsetzen:

    <pause roomId=ROOMID pause="true/false" />

Ein AdminClient kann einen Zug in einem pausierten Spiel anfordern:

    <step roomId=ROOMID />

Ein AdminClient kann ein Spiel abbrechen:

    <cancel roomId=ROOMID />

Ein AdminClient kann ein Spiel vorbereiten:

    <prepare gameType="pluginId" pause="true">
      <slot displayName="p1" canTimeout="true" reserved="true"/>
      <slot displayName="p2" canTimeout="true" reserved="true"/>
    </prepare>

pluginId  
identifiziert das Spiel (für Ostseeschach: `swc_2022_ostseeschach`)

## Servereinstellungen

Die Servereinstellungen liegen in der `server.properties` Datei, die
zusammen mit dem Server heruntergeladen wird. In ihr können folgende
Werte konfiguriert werden:

password  
lokales Administratorpasswort (standardmäßig auf `examplepassword`)

paused  
ob ein automatisch angelegtes Spiel anfangs pausiert sein soll oder
nicht (standardmäßig pausiert)
