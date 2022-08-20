# Spielverlauf

Der Server startet (StandardIp: localhost 13050).

Nun gibt es zwei Varianten ein Spiel zu starten, eine durch einen
Administratorclient die andere durch hinzufügen der Spieler zu einen
Spieltyp:

## Variante 1 (AdminClient [???](#mit-reservierungscode))

Ein :t[Computerspieler]{#player} registriert sich als Administrator mit dem in
server.properties festgelegten Passwort p:

    <protocol><authenticate passphrase="p" />

Dann kann ein Spiel angelegt werden:

    <prepare gameType="swc_2019_piranhas">
      <slot displayName="p1" canTimeout="false" shouldBePaused="true" />
      <slot displayName="p2" canTimeout="false" shouldBePaused="true" />
    </prepare>

Der Server antwortet darauf mit einer Nachricht, die die ROOM\_ID und
Reservierungscodes für die beiden Clients enthält:

    <protocol>
      <prepared roomId="871faccb-5190-4e44-82fc-6cdcbb493726">
        <reservation>RC1</reservation>
        <reservation>RC2</reservation>
      </prepared>

Der Administratorclient kann nur ebenfalls als Observer des Spiels
genutzt werden, indem ein entsprechender Request gesendet wird. Dadurch
wird das derzeitge Spielfeld ([???](#memento)) ebenfalls an den
Administratorclient gesendet.

    <observe roomId="871faccb-5190-4e44-82fc-6cdcbb493726" />

Clients die auf dem Serverport (localhost 13050) gestartet werden können
so über diesen Code joinen.

    <protocol>
      <joinPrepared reservationCode="RC1" />

    <protocol>
      <joinPrepared reservationCode="RC2" />

## Variante 2 ((eventuell) ohne AdminClient [???](#ohne-reservierungscode))

Die Clients wurden auf dem Serverport (Standard: localhost 13050)
gestartet.

Sie können sich mit folgender Anfrage einen bereits offenen Spiel
gleichen Typs beitreten oder, falls kein Spiel des Typs vorhanden selbst
eines starten:

    <protocol>
      <join gameType="swc_2019_piranhas" />

Der Server antwortet mit:

    <protocol>
      <joined roomId="871faccb-5190-4e44-82fc-6cdcbb493726" />

## Weiterer Spielverlauf

Der Server antwortet jeweils mit der WelcomeMessage
([???](#welcome-message)) und dem ersten GameState ([???](#memento))
sobald beide Spieler verbunden sind.

    <room roomId="871faccb-5190-4e44-82fc-6cdcbb493726">
      <data class="welcomeMessage" color="red" />
    </room>
    <room roomId="871faccb-5190-4e44-82fc-6cdcbb493726">
      <data class="memento">
        <state class="state" turn="0" startPlayer="RED" currentPlayer="RED">
          <red displayName="Unknown" color="RED" />
          <blue displayName="Unknown" color="BLUE" />
          <board>
            <fields>
              <field x="0" y="0" state="EMPTY" />
              ...
              <field x="0" y="9" state="EMPTY" />
            </fields>
            ...
            <fields>
              <field x="9" y="0" state="EMPTY" />
              ...
              <field x="9" y="9" state="EMPTY" />
            </fields>
          </board>
        </state>
      </data>
    </room>

Der erste Spieler erhält dann eine Zugaufforderung
([???](#move-request)), falls in server.properties paused auf false
gesetzt wurde. Falls das Spiel pausiert ist, muss das Spiel durch einen
Administratorclient gestartet werden:

Verbinden des Administratorclients (falls es sich um die erste
Kontaktaufnahme zum Server handelt, ansonsten &lt;protocol&gt;
weglassen).

    <protocol>
      <authenticate passphrase="examplepassword" />

Pausierung aufheben:

    <pause roomId="871faccb-5190-4e44-82fc-6cdcbb493726" pause="false" />

Daraufhin wird der erste Spieler aufgefordert einen Zug zu senden:

    <room roomId="871faccb-5190-4e44-82fc-6cdcbb493726">
      <data class="sc.framework.plugins.protocol.MoveRequest" />
    </room>

Der :t[Computerspieler]{#player} des CurrentPlayer sendet nun einen Zug ([???](#zug)):

    <room roomId="871faccb-5190-4e44-82fc-6cdcbb493726">
      <data class="move" x="0" y="0" direction="UP" />
    </room>

So geht es abwechselnd weiter, bis zum Spielende ([???](#spielende)).
Die letzte Nachricht des Servers endet mit:

    </protocol>

Danach wird die Verbindung geschlossen.
