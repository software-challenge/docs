[PDF-Version dieses Dokumentes](tutorial.pdf)

# Start zum Schreiben einer KI

Am einfachsten ist es die KI auf Grundlage des SimpleClients zu
schreiben:

-   Als erstes muss der Zufallsspieler heruntergeladen werden
    (<http://www.software-challenge.de/downloads/> bitte den
    Zufallsspieler als „Quellcode“ downloaden)

-   Dieser muss nun in Eclips eingebunden werden:
    <https://docs.software-challenge.de/#einrichtung-von-eclipse>

## Wo schreibe ich die KI?

Ist dies getan befindet sich im entsprechenden Projekt das Package
„sc.player2018.logic“ mit einer Datei namens **„RandomLogic.java“**.
Diese Datei müssen wir nun editieren.

In der Datei gibt es eine Funktion mit der Bezeichnung *public void
onRequestAction()*. Diese ist wie Folgt aufgebaut:

    public void onRequestAction(){
      // optional: Laufzeitmessung
      long startTime = System.nanoTime();


      // Quellcode der KI, welche eine Zug (move) erstellt


      long nowTime = System.nanoTime();

      // sende Move. Danach gibt es kein zurück mehr:
      sendAction(move);

      // optional: LOG-Eintrag mit Zeit:
      log.warn("Time needed for turn: {}", (nowTime - startTime) / 1000000);
    }

Es ist sehr wichtig, dass alle Funktionen, welche die KI verwendet,
ihren ursprünglichen Aufruf in der Funktion onRequestAction haben.
Dadurch wird sichergestellt, dass alle Membervariablen aktuell sind.

## Wichtige Membervariablen

In der Klasse befinden sich auch drei sehr wichtige Membervariablen:

    private Starter client; // Intern für den Server wichtig. Bitte nicht modifizieren

    private GameState gameState; // Gibt u.a Infos über mögliche Züge und das Spielbrett

    private Player currentPlayer; // Infos über den aktuellen Spieler, welchen man steuert

In den Folgenden Dokumenten werden Grundlagen zum erstellen einer KI
gezeigt. Hierbei werden wir oft die Variablen **gameState** und
**currentPlayer** verwenden.

Die **API-Dokumentation** befindet sich im Ordner „doc“ im Verzeichnis
des SimpleClients.

## Aufgaben

1.  Arbeite alle anderen Dokumente durch.

2.  Analysiere die Herangehensweise der Zufallsspieler-KI.

3.  Schreibe eine KI.

# Spielbrett Informationen

## Die Klasse „FieldType“

Bevor wir mit der Klasse Board also dem Spielbrett arbeiten können,
müssen wir das Enum „FieldType“ kennenlernen. Dieses Enum definiert die
einzelnen Felder des Bretts. Es gibt:

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td style="text-align: left;"><p>CARROT</p></td>
<td style="text-align: left;"><p>Karottenfeld</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p>GOAL</p></td>
<td style="text-align: left;"><p>Zielfeld</p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p>HARE</p></td>
<td style="text-align: left;"><p>Hasenfeld</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p>HEDGEHOG</p></td>
<td style="text-align: left;"><p>Igelfeld</p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p>SALAD</p></td>
<td style="text-align: left;"><p>Salatfeld</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p>START</p></td>
<td style="text-align: left;"><p>Start</p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p>POSITION_1</p></td>
<td style="text-align: left;"><p>Positionsfelder</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p>POSITION_2</p></td>
<td style="text-align: left;"></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p>INVALID</p></td>
<td style="text-align: left;"><p>Ungültig</p></td>
</tr>
</tbody>
</table>

Die Dokumentation für FieldType ist in /doc/sc/plugin2018/FieldType.html
zu finden.

## Funktionen der Klasse „Board“

Das Spielbrett kann man sich wie einer Art modifizieren „Array“ [1]
vorstellen. Mithilfe der FieldTypes können wir die Funktionen des Boards
verwenden. Zunächst stellt sich allerdings die Frage, wie wir überhaupt
das Spielbrett bekommen können. Das Spielbrett bekommen wir durch den
GameState. Mit Hilfe der Methode *gameState.getBoard()*.

Unsere Eigene Position können wir mithilfe von **currentPlayer** oder
**gameState** herausfinden:

    // Es wird immer ein Integer zwischen 0 bis 64 zurückgegeben:
    currentPlayer.getFieldIndex();
    // dasselbe wie oben:
    gameState.getCurrentPlayer().getFieldIndex();

    if (currentPlayer.getFieldIndex() == gameState.getCurrentPlayer().getFieldIndex()) {
      //wird immer ausgeführt
    }

### public final int getNextFieldByType(FieldType type,int pos)

Dieser Funktion übergeben wir eine Position und ein FieldType. Es gibt
die Position des nächsten FieldType an, welches **nach** der angegeben
Position liegt. Hat das Feld mit der angegeben Position, den gleichen
FieldType, so wird dennoch die Position des nächsten Felds angegeben
(siehe zweites Beispiel). Gibt es diesen FieldType nicht mehr wird -1
zurückgegeben.

    gameState.getBoard().getNextFieldByType(FieldType.GOAL,
                                            currentPlayer.getFieldIndex());

Dies würde in einem normalen Spiel immer 64 zurückgeben, außer man
befindet sich auf dem Ziel. Im diesem Fall wäre das Ergebnis -1.

    // Damit man nicht immer gameState.getBoard() schreiben muss:
    Board b = gameState.getBoard();
    final int index = currentPlayer.getFieldIndex(); // Index des Spielers

    if (index == b.getNextFieldByType(b.getTypeAt(index), index)) {
      System.out.println("Geht nicht");
    }

Dies liegt daran, dass der verwendete Index nie der Rückgabewert von
**getNextFieldByType** sein kann.

    int next_hedgehog = b.getNextFieldByType(FieldType.HEDGEHOG,
                                             currentPlayer.getFieldIndex());
    int next_next_hedgehog = b.getNextFieldByType(FieldType.HEDGEHOG, next_hedgehog);

Dies würde die Postion des nächste und vom übernächste Igelfeld
bestimmen. Achtung es wird hierbei nicht überprüft, ob es so ein Feld
überhaupt gibt. Dies kann zu Fehlern führen. Steht man z.B auf dem
letzten Igelfeld, so hat **next\_next\_hedgehog** den Wert 11, anstelle
von -1 (Siehe Übung 2).

### public final int getPreviousFieldByType(FieldType type,int pos)

Analog zu getNextFieldByType. Allerdings bezieht sich die Funktion auf
das vorherige Feld mit dem entsprechenden FieldType.

### public final FieldType getTypeAt(int pos)

Mit dieser Funktionen kann man den FieldType eines bestimmten Feldes
ermitteln.

    FieldType my_field = gameState.getBoard().getTypeAt(currentPlayer.getFieldIndex());
    FieldType field_42 = gameState.getBoard().getTypeAt(42);

Speichert den aktuelle FieldType auf welchen man steht und den FieldType
des Feldes 42.

    if (gameState.getBoard().getTypeAt(-1) == FieldType.INVALID) {
      // Wird immer ausgeführt, da es das Feld an der Position -1 nicht gibt
    }

Dieses Beispiel zeigt auf, dass es durch getTypeAt nie zu einer
IndexOutOfBoundsException kommen kann. Es gibt nur Felder im Intervall
von 0 – 64. Sollte man nach einem Feld außerhalb diese Intervalls
fragen, so wird immer INVALID zurückgegeben.

Die komplette API-Dokumentation ist in /doc/sc/plugin2018/Board.html zu
finden.

## Aufgaben

1.  Gib die Entfernung des Gegners zum Startfeld aus. Verwende dabei
    keine Variablen oder Literale. Die Ausnahme ist der Rückgabewert.
    Dieser darf eine Literale sein (z.B. return 127;). Tipp: Suche in
    der API von GameState nach einer Funktion, welchen den anderen
    Spieler zurückgibt oder lese das Dokument „Hase\_Igel\_Player“.

2.  Erkläre warum **next\_next\_hedgehog** den Wert 11 hätte, wenn wir
    auf den letzten Igelfeld stehen würden.

        int next_hedgehog = b.getNextFieldByType(FieldType.HEDGEHOG,
                                                 currentPlayer.getFieldIndex());
        int next_next_hedgehog = b.getNextFieldByType(FieldType.HEDGEHOG, next_hedgehog);

3.  Schreibe eine Funktion, welche das übernächste Igelfeld ausgibt.
    Gibt es solch ein Feld nicht, so soll immer -1 zurückgegeben werden.

# Die Klasse Player

Die Klasse Player repräsentiert einen Spieler. Der eigene Spieler kann
in der RandomLogic durch die Variable **currentPlayer** oder mithilfe
der GameState Funktion *getCurrentPlayer()* abgefragt werden. Der
gegnerische Spieler kann ebenfalls mithilfe einer Methode von GameState
bestimmt werden (*gameState.getOtherPlayer()*).

Die Klasse Player besitzt viele Funktionen, welche einen Informationen
über den Spieler geben:

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td style="text-align: left;"><p>java.util.List&lt;CardType&gt;</p></td>
<td style="text-align: left;"><p><em>getCards()</em><br />
Gibt die für diesen Spieler verfügbaren Hasenkarten zurück.</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p>java.util.List&lt;CardType&gt;</p></td>
<td style="text-align: left;"><p><em>getCardsWithout(CardType
type)</em><br />
Gibt Karten ohne bestimmten Typ zurück.</p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p>int</p></td>
<td style="text-align: left;"><p><em>getCarrots()</em><br />
Die Anzahl an Karotten die der Spieler zur Zeit auf der Hand
hat.</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p>int</p></td>
<td style="text-align: left;"><p><em>getFieldIndex()</em><br />
Die aktuelle Position der Figur auf dem Spielfeld.</p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p>Action</p></td>
<td style="text-align: left;"><p><em>getLastNonSkipAction</em><br />
Gibt letzte Aktion des Spielers zurück.</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p>sc.shared.PlayerColor</p></td>
<td style="text-align: left;"><p><em>getPlayerColor()</em><br />
Die Farbe dieses Spielers auf dem Spielbrett</p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p>int</p></td>
<td style="text-align: left;"><p><em>getSalads()</em><br />
Die Anzahl der Salate, die dieser Spieler noch verspeisen muss.</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p>boolean</p></td>
<td style="text-align: left;"><p><em>inGoal()</em><br />
Überprüft, ob Spieler im Ziel.</p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p>boolean</p></td>
<td style="text-align: left;"><p><em>ownsCardOfType(CardType
type)</em><br />
Überprüft ob Spieler bestimmte Karte noch besitzt</p></td>
</tr>
</tbody>
</table>

Die Vollständige API ist in /doc/sc/plugin2018/Player.html zu finden.

Die Meisten dieser Funktionen sind selbsterklärend. Dennoch sind hier
einige Beispiele angegeben:

    System.out.print("Du hast noch folgende Karten: ");
    for (CardType c : currentPlayer.getCards()) {
        System.out.print(c + " ");
    }
    System.out.println();

Dies würde alle Karten ausgeben, welche man noch hat.

    if (currentPlayer.inGoal() && !currentPlayer.getCards().isEmpty()) {
        System.out.println("Was fuer eine Verschwendung.");
    }

Die If-Bedingung würde dann ausgeführt werden, wenn man im Ziel ist,
allerdings noch Karten hat.

Eine weitere wichtige Funktion ist *getFieldIndex*. Diese Funktion wird
häufig im Dokument „Hase\_Igel\_Spielbrett“ verwendet.

Neben diesen Funktionen existieren noch einige „Setter“. Diese sind
allerdings hauptsächlich für den Server notwendig und haben einen
geringen praktischen Nutzten für uns.

## Aufgabe

Schreibe eine If-Bedingung, welche abfragt, ob beide Spieler auf dem
selben Feld sind. Da dies nur möglich ist, wenn man auf dem Start-
Zielfeld ist, soll zunächst abgefragt werden, ob der aktuelle Spieler
auf dem Start- Zielfeld ist. Tipp: Es gibt die Funktion getTypeAt der
Klasse Board. Weiter Informationen sind im Dokument
„Hase\_Igel\_Spielbrett“ zu finden.

# GameRuleLogic: Hilfreiche Hilfsfunktionen

Die Klasse GameRuleLogic hat viele Hilfsfunktionen, mit welchen man die
Regeln des Spieles überprüfen kann. Hierbei sind alle Funktionen static.
D.h., dass man sie ohne eine Instanz aufrufen kann.

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td style="text-align: left;"><p>static int</p></td>
<td style="text-align: left;"><p><em>calculateCarrots(int
moveCount)</em><br />
Berechnet wie viele Karotten für einen Zug der Länge moveCount benötigt
werden.</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p>static int</p></td>
<td style="text-align: left;"><p><em>calculateMoveableFields(int
carrots)</em><br />
Berechnet, wie weit man mit carrots Karotten gehen kann. Beispiel: Mit
68 Karotten kann man 11 Felder weit gehen.</p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p>static boolean</p></td>
<td style="text-align: left;"><p><em>canPlayCard(GameState
state)*</em><br />
Gibt zurück, ob der derzeitige Spieler eine Karte spielen kann.</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p>static boolean</p></td>
<td style="text-align: left;"><p><em>isValidToAdvance(GameState state,
int distance)</em><br />
Überprüft <em>Advance</em> Aktionen auf ihre Korrektheit.
<em>Distance</em> steht für die Distanz die man zurücklegen
will.Three</p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p>static boolean</p></td>
<td style="text-align: left;"><p><em>isValidToEat(GameState
state)</em><br />
Überprüft <em>EatSalad</em> Züge auf Korrektheit. Diese Funktion bezieht
sich <strong>nicht</strong> auf die Karte
<em>TAKE_OR_DROP_CARROTS</em></p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p>static boolean</p></td>
<td style="text-align: left;"><p><em>isValidToExchangeCarrots(GameState
state, int n)</em><br />
Überprüft ob der derzeitige Spieler 10 Karotten nehmen oder abgeben
kann. „n“ kann entweder 10 oder -10 sein. Je nachdem ob man annehmen
oder abgeben will. Diese Funktion bezieht sich <strong>nicht</strong>
auf die Karte <em>EAT_SALAD</em>.</p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p>static boolean</p></td>
<td style="text-align: left;"><p><em>isValidToFallBack(GameState
state)</em><br />
Überprüft <em>FallBack</em> Züge auf Korrektheit</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p>static boolean</p></td>
<td style="text-align: left;"><p><em>isValidToPlayCard(GameState state,
CardType c,int n)*</em><br />
Überprüft ob der derzeitige Spieler die Karte spielen kann. „n“ wird für
die <em>TAKE_OR_DROP_CARROTS</em> Karte benötigt (s.u). „n“ kann die
Wert 0, 20 oder -20 annehmen.</p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p>static boolean</p></td>
<td style="text-align: left;"><p><em>isValidToPlayEatSalad(GameState
state)*</em><br />
Überprüft ob der derzeitige Spieler die <em>EAT_SALAD</em> Karte spielen
darf.</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p>static boolean</p></td>
<td style="text-align: left;"><p><em>isValidToPlayFallBack(GameState
state)*</em><br />
Überprüft ob der derzeitige Spieler die <em>FALL_BACK</em> Karte spielen
darf.</p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p>static boolean</p></td>
<td style="text-align: left;"><p><em>isValidToPlayHurryAhead(GameState
state) *</em><br />
Überprüft ob der derzeitige Spieler die <em>HURRY_AHEAD</em> Karte
spielen darf.</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p>static boolean</p></td>
<td
style="text-align: left;"><p><em>isValidToPlayTakeOrDropCarrots(GameState
state,int n)*</em><br />
Überprüft ob der derzeitige Spieler die <em>TAKE_OR_DROP_CARROTS</em>
Karte spielen darf. „n“ kann entweder 0, 20 oder -20 sein.</p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p>static boolean</p></td>
<td style="text-align: left;"><p><em>isValidToSkip(GameState
state)</em><br />
Überprüft, ob der derzeitige Spieler aussetzen darf.</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p>static boolean</p></td>
<td style="text-align: left;"><p><em>mustEatSalad(GameState
state)</em><br />
Überprüft ob man einen Salat fressen muss. Dies ist immer der Fall, wenn
man in der vorherigen Runde ein Salatfeld betreten hat.</p></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><p>static boolean</p></td>
<td style="text-align: left;"><p><em>mustPlayCard(GameState state)
*</em><br />
Überprüft ob eine Karte gespielt werden muss.</p></td>
</tr>
<tr class="even">
<td style="text-align: left;"><p>static boolean</p></td>
<td style="text-align: left;"><p><em>playerMustAdvance(GameState
state)</em><br />
Überprüft ab der derzeitige Spieler im nächsten Zug einen Vorwärtszug
machen muss.</p></td>
</tr>
</tbody>
</table>

\*Diese Funktionen werden im Kapitel „Erweiterte Beispiele“ besprochen.

Die komplette API-Dokumentation ist in
doc/sc/plugin2018/util/GameRuleLogic.html zu finden.

## Simulation des Gegners

Natürlich kann man alle diese Funktionen auch auf den Gegenspieler
anwenden. Dafür müssen wir allerdings eine Kopie des GameState
erstellen:

    try {
      GameState otherGame = gameState.clone(); // Deep-Copy
      // Rundenanzahl hochsetzten für switch Befehl:
      otherGame.setTurn(gameState.getTurn()+1);
      // Tausche currentPlayer (hängt von der Rundenanzahl ab):
      otherGame.switchCurrentPlayer();
      // Gib Informationen über den Gegner aus:
      System.out.println("CurrentPlayer von otherGame:" + otherGame.getCurrentPlayer());
    } catch (CloneNotSupportedException e1) { // Fehlerbehandlung
      e1.printStackTrace();
    }

Alle Funktionen von GameRuleLogic können wir nun, mithilfe der Variable
otherGame, auf den Gegner anwenden.

## Einführende Beispiele

Die meisten Funktionen dieser Klasse sind selbsterklärend. Dennoch
werden einige der häufig verwendeten Funktionen mit kleinen Beispielen
vorgestellt.

    if (GameRuleLogic.isValidToEat(gameState) != GameRuleLogic.mustEatSalad(gameState)) {
      System.out.println("Unmöglich");
    }

Nach den Regeln muss man immer ein Salat essen, wenn man im vorherigen
Zug ein Salatfeld betreten hat. Außerdem ist dies die einzige
Möglichkeit die Aktion EatSalad auszuführen (nicht mit dem Spielen der
EAT\_SALAD Karte verwechseln).

Dadurch wird auch die Unerfüllbarkeit des folgenden Ausdrucks
impliziert:

    if (GameRuleLogic.isValidToEat(gameState) &&
        (GameRuleLogic.isValidToFallBack(gameState) || GameRuleLogic.canMove(gameState))) {
      System.out.println("Unmöglich");
    }

Eine weiter hilfreiche Funktion ist *isValidToAdvance*. Mit dieser
Funktion wird überprüft, ob ein Vorwärtszug mit der übergeben Distanz
überhaupt möglich ist:

    // berechne die maximale Entfernung, welche man laufen darf
    int max_move = GameRuleLogic.calculateMoveableFields(currentPlayer.getCarrots());

    if (GameRuleLogic.isValidToAdvance(gameState, max_move +1)) {
      System.out.println("Unmöglich");
    }

Die Funktion *calculateMoveableFields* gibt hierbei die maximale
Entfernung zurück, welche man mit den übergebenen Karotten laufen darf.
Diese maximale Entfernung wird immer um 1 erhöht, was dazu führt, dass
der Zug immer unmöglich ist.

## Erweitertes Beispiel

Alle Funktionen die mit einem \* markiert wurden (s.o) haben eine
Gemeinsamkeit. Sie beziehen sich auf das Spielen von Karten. Das Spielen
von Karten ist allerdings nur erlaubt, wenn man das entsprechende
Hasenfeld in der selben Zug betreten hat. Deshalb müssen wir GameState
bearbeiten, damit diese Funktionen überhaupt Sinn haben. Das folgende
Beispiel gibt eine Möglichkeit an, wie man diese Funktionen einsetzten
kann:

    int nextHareFieldIndex = gameState.getNextFieldByType(FieldType.HARE,
                                                          currentPlayer.getFieldIndex())
    // wenn es ein nächstes Hasenfeld gibt
    if (nextHareFieldIndex > 0) {
      try {

        GameState gameHare = gameState.clone(); // erstelle Deep-Copy
        Player harePlayer = gameHare.getCurrentPlayer(); // erstelle Shallow-Copy

        //setzte den aktuellen Spieler auf ein Hasenfeld
        harePlayer.setFieldIndex(nextHareFieldIndex);
        System.out.println(gameHare.getCurrentPlayer().getCards()); // gib alle Karten aus

        // Welche Karten kann man spielen?
        System.out.println("Play EatSalad: " +
                           GameRuleLogic.isValidToPlayEatSalad(gameHare));
        System.out.println("Play TakeOrDropCarrots: " +
                           GameRuleLogic.isValidToPlayTakeOrDropCarrots(gameHare,20));
        System.out.println("Play HurryAhead: " +
                           GameRuleLogic.isValidToPlayHurryAhead(gameHare));
        System.out.println("Play FallBack: " +
                           GameRuleLogic.isValidToPlayFallBack(gameHare));

      } catch (CloneNotSupportedException e1) {
        e1.printStackTrace();
      }
    }

Hierfür müssen wir den Spieler einfach nur auf das Hasenfeld setzten.
Allerdings wird nicht überprüft, ob der Spieler überhaupt bis zum
nächsten Hasenfeld laufen kann.

## Aufgaben

1.  Ist das Ausführen der inneren If-Bedingung wirklich unmöglich.
    Erkläre warum oder gib ein Gegenbeispiel an:

<!-- -->

    int dif = gameState.getOtherPlayer().getFieldIndex() - currentPlayer.getFieldIndex();

    if (dif >= 0 &&
        dif <= GameRuleLogic.calculateMoveableFields(currentPlayer.getCarrots())) {
      if (GameRuleLogic.isValidToAdvance(gameState, dif)) {
        System.out.println("Unmöglich");
      }
    }

1.  Erweiterte das Beispiel aus dem Kapitel „Erweitertes Beispiel“ so,
    dass sicher gestellt wird, dass der aktuelle Spieler auf ein
    Hasenfeld gesetzt wird, welches er wirklich erreichen kann.

[1] Technisch gesehen hat die Klasse eine private Liste von Feldern.
Allerdings ähnelt ein Aufruf der Funktion getTypeAt sehr den Aufruf
eines Arrays. Auch wenn der Rückgabewert kein Feld sonder ein FieldType
ist.
