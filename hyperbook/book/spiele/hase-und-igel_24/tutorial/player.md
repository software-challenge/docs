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

# Aufgabe

Schreibe eine If-Bedingung, welche abfragt, ob beide Spieler auf dem
selben Feld sind. Da dies nur möglich ist, wenn man auf dem Start-
Zielfeld ist, soll zunächst abgefragt werden, ob der aktuelle Spieler
auf dem Start- Zielfeld ist. Tipp: Es gibt die Funktion getTypeAt der
Klasse Board. Weiter Informationen sind im Dokument
„Hase\_Igel\_Spielbrett“ zu finden.
