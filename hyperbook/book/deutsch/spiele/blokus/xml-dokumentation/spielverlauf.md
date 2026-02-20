# Spielverlauf

Der Server startet (StandardIp: localhost 13050).

Nun gibt es zwei Varianten ein Spiel zu starten, eine durch einen
Administratorclient die andere durch hinzufügen der Spieler zu einen
Spieltyp:

## Variante 1 (AdminClient [???](#mit-reservierungscode))

Ein :t[Computerspieler]{#player} registriert sich als Administrator mit dem in
server.properties festgelegten Passwort pw:

    <protocol><authenticate password="pw" />

Dann kann ein Spiel angelegt werden:

    <prepare gameType="swc_2021_blokus" pause="true">
      <slot displayName="p1" canTimeout="false" />
      <slot displayName="p2" canTimeout="false" />
    </prepare>

Der Server antwortet darauf mit einer Nachricht, die die ROOM\_ID und
Reservierungscodes für die beiden Clients enthält:

    <protocol>
      <prepared roomId="871faccb-5190-4e44-82fc-6cdcbb493726">
        <reservation>RC1</reservation>
        <reservation>RC2</reservation>
      </prepared>

Der Administratorclient kann dann ebenfalls als Observer des Spiels
genutzt werden, indem ein entsprechender Request gesendet wird. Dadurch
wird das derzeitge Spielfeld ([???](#memento)) ebenfalls an den
Administratorclient gesendet.

    <observe roomId="871faccb-5190-4e44-82fc-6cdcbb493726" />

Clients, die auf dem Serverport (localhost 13050) gestartet werden,
können nun mit den Reservierungscodes beitreten.

    <protocol>
      <joinPrepared reservationCode="RC1" />

    <protocol>
      <joinPrepared reservationCode="RC2" />

## Variante 2 (kein AdminClient notwendig [???](#ohne-reservierungscode))

Die Clients wurden auf dem Serverport (Standard: localhost 13050)
gestartet.

Sie können mit folgender Anfrage einem bereits offenen Spiel des
entsprechenden Typs beitreten. Wenn noch keines vorhanden ist, wird
dabei automatisch ein neues gestartet.

    <protocol>
      <join gameType="swc_2019_piranhas" />

Der Server antwortet mit:

    <protocol>
      <joined roomId="871faccb-5190-4e44-82fc-6cdcbb493726" />

## Weiterer Spielverlauf

Der Server antwortet jeweils mit der WelcomeMessage
([???](#welcome-message)) und dem ersten GameState ([???](#memento))
sobald beide Spieler verbunden sind.

    <room roomId="cb3bc426-5c70-48b9-9307-943bc328b503">
      <data class="welcomeMessage" color="two"/>
    </room>
    <room roomId="cb3bc426-5c70-48b9-9307-943bc328b503">
      <data class="memento">
        <state class="state" turn="0" round="1" startPiece="PENTO_V">
          <startTeam class="team">ONE</startTeam>
          <board/>
          <blueShapes class="linked-hash-set">
            <shape>MONO</shape>
            <shape>DOMINO</shape>
            <shape>TRIO_L</shape>
            <shape>TRIO_I</shape>
            <shape>TETRO_O</shape>
            <shape>TETRO_T</shape>
            <shape>TETRO_I</shape>
            <shape>TETRO_L</shape>
            <shape>TETRO_Z</shape>
            <shape>PENTO_L</shape>
            <shape>PENTO_T</shape>
            <shape>PENTO_V</shape>
            <shape>PENTO_S</shape>
            <shape>PENTO_Z</shape>
            <shape>PENTO_I</shape>
            <shape>PENTO_P</shape>
            <shape>PENTO_W</shape>
            <shape>PENTO_U</shape>
            <shape>PENTO_R</shape>
            <shape>PENTO_X</shape>
            <shape>PENTO_Y</shape>
          </blueShapes>
          <yellowShapes class="linked-hash-set">
            <shape>MONO</shape>
            <shape>DOMINO</shape>
            <shape>TRIO_L</shape>
            <shape>TRIO_I</shape>
            <shape>TETRO_O</shape>
            <shape>TETRO_T</shape>
            <shape>TETRO_I</shape>
            <shape>TETRO_L</shape>
            <shape>TETRO_Z</shape>
            <shape>PENTO_L</shape>
            <shape>PENTO_T</shape>
            <shape>PENTO_V</shape>
            <shape>PENTO_S</shape>
            <shape>PENTO_Z</shape>
            <shape>PENTO_I</shape>
            <shape>PENTO_P</shape>
            <shape>PENTO_W</shape>
            <shape>PENTO_U</shape>
            <shape>PENTO_R</shape>
            <shape>PENTO_X</shape>
            <shape>PENTO_Y</shape>
          </yellowShapes>
          <redShapes class="linked-hash-set">
            <shape>MONO</shape>
            <shape>DOMINO</shape>
            <shape>TRIO_L</shape>
            <shape>TRIO_I</shape>
            <shape>TETRO_O</shape>
            <shape>TETRO_T</shape>
            <shape>TETRO_I</shape>
            <shape>TETRO_L</shape>
            <shape>TETRO_Z</shape>
            <shape>PENTO_L</shape>
            <shape>PENTO_T</shape>
            <shape>PENTO_V</shape>
            <shape>PENTO_S</shape>
            <shape>PENTO_Z</shape>
            <shape>PENTO_I</shape>
            <shape>PENTO_P</shape>
            <shape>PENTO_W</shape>
            <shape>PENTO_U</shape>
            <shape>PENTO_R</shape>
            <shape>PENTO_X</shape>
            <shape>PENTO_Y</shape>
          </redShapes>
          <greenShapes class="linked-hash-set">
            <shape>MONO</shape>
            <shape>DOMINO</shape>
            <shape>TRIO_L</shape>
            <shape>TRIO_I</shape>
            <shape>TETRO_O</shape>
            <shape>TETRO_T</shape>
            <shape>TETRO_I</shape>
            <shape>TETRO_L</shape>
            <shape>TETRO_Z</shape>
            <shape>PENTO_L</shape>
            <shape>PENTO_T</shape>
            <shape>PENTO_V</shape>
            <shape>PENTO_S</shape>
            <shape>PENTO_Z</shape>
            <shape>PENTO_I</shape>
            <shape>PENTO_P</shape>
            <shape>PENTO_W</shape>
            <shape>PENTO_U</shape>
            <shape>PENTO_R</shape>
            <shape>PENTO_X</shape>
            <shape>PENTO_Y</shape>
          </greenShapes>
          <lastMoveMono class="linked-hash-map"/>
          <validColors class="linked-hash-set">
            <color>BLUE</color>
            <color>YELLOW</color>
            <color>RED</color>
            <color>GREEN</color>
          </validColors>
          <first displayName="One">
            <color class="team">ONE</color>
          </first>
          <second displayName="Two">
            <color class="team">TWO</color>
          </second>
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
      <authenticate password="examplepassword" />

Pausierung aufheben:

    <pause roomId="871faccb-5190-4e44-82fc-6cdcbb493726" pause="false" />

Daraufhin wird der erste Spieler aufgefordert einen Zug zu senden:

    <room roomId="871faccb-5190-4e44-82fc-6cdcbb493726">
      <data class="sc.framework.plugins.protocol.MoveRequest" />
    </room>

Der :t[Computerspieler]{#player} des CurrentPlayer sendet nun einen Zug ([???](#zug)):

    <room roomId="cb3bc426-5c70-48b9-9307-943bc328b503">
      <data class="sc.plugin2021.SetMove">
        <piece color="BLUE" kind="PENTO_V" rotation="RIGHT" isFlipped="false">
          <position x="17" y="0"/>
        </piece>
      </data>
    </room>

So geht es abwechselnd weiter, bis zum Spielende ([???](#spielende)).
Die letzte Nachricht des Servers endet mit:

    </protocol>

Danach wird die Verbindung geschlossen.
