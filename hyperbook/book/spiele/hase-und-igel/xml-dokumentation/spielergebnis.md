# Spielergebnis

Zum Spielende enthält der Spieler das Ergebnis:

-   ROOM\_ID Id des GameRooms

-   R1, R2 Text, der den Grund für das Spielende erklärt

-   CAUSE1, CAUSE2 Grund des Spielendes
    (REGULAR/LEFT/RULE\_VIOLATION/SOFT\_TIMEOUT/HARD\_TIMEOUT)

-   WP1, WP2 Siegpunkte der jeweiligen Spieler, 0 verloren, 1
    unentschieden, 2 gewonnen

-   I1, I2 Index des Feldes auf dem der Spieler steht

-   C1, C2 Karotten des Spielers

-   NAME Anzeigename des Spielers

-   COLOR Farbe des Siegers

-   I3 I1 oder I2 je nachdem wer gewonnen hat

-   C3 C1 oder C2 je nachdem wer gewonnen hat

-   S Salate des Siegers

-   \[cards\] Karten des Siegers wie in [???](#spieler)

-   \[lastNonSkipAction\] Letztes Aktion des Siegers wie in
    [???](#spieler)

<!-- -->

    <room roomId="ROOM_ID">
      <data class="result">
        <definition>
          <fragment name="Gewinner">
            <aggregation>SUM</aggregation>
            <relevantForRanking>true</relevantForRanking>
          </fragment>
          <fragment name="Ø Feldnummer">
            <aggregation>AVERAGE</aggregation>
            <relevantForRanking>true</relevantForRanking>
          </fragment>
          <fragment name="Ø Karotten">
            <aggregation>AVERAGE</aggregation>
            <relevantForRanking>true</relevantForRanking>
          </fragment>
        </definition>
        <score cause="CAUSE1" reason="R1">
          <part>WP1</part>
          <part>I1</part>
          <part>C1</part>
        </score>
        <score cause="CAUSE2" reason="R2">
          <part>WP2</part>
          <part>I2</part>
          <part>C1</part>
        </score>
        <winner class="player" displayName="NAME" color="COLOR" index="I3" carrots="C3" salads="S">
          [cards]
          [lastNonSkipAction]
        </winner>
      </data>
    </room>
