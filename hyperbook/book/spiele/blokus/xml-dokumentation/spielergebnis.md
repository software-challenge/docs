# Spielergebnis

Zum Spielende enthält der Spieler das Ergebnis:

-   `ROOM_ID` Id des GameRooms

-   `R1`, `R2` Text, der den Grund für das Spielende erklärt

-   `CAUSE1`, `CAUSE2` Grund des Spielendes (`REGULAR`, `LEFT`,
    `RULE_VIOLATION`, `SOFT_TIMEOUT`, `HARD_TIMEOUT`)

-   `WP1`, `WP2` Siegpunkte der jeweiligen Spieler, 0 verloren, 1
    unentschieden, 2 gewonnen

-   `S1`, `S2` Punkte des jeweiligen Spielers

-   `NAME` Anzeigename des Spielers

-   `TEAM` Team des Siegers (`ONE`, `TWO`)

<!-- -->

    <room roomId="ROOM_ID">
      <data class="result">
        <definition>
          <fragment name="Gewinner">
            <aggregation>SUM</aggregation>
            <relevantForRanking>true</relevantForRanking>
          </fragment>
          <fragment name="∅ Punkte">
            <aggregation>AVERAGE</aggregation>
            <relevantForRanking>true</relevantForRanking>
          </fragment>
        </definition>
        <score cause="CAUSE1" reason="R1">
          <part>WP1</part>
          <part>S1</part>
        </score>
        <score cause="CAUSE2" reason="R2">
          <part>WP2</part>
          <part>S2</part>
        </score>
        <winner displayName="NAME">
          <color class="team">TEAM</color>
        </winner>
      </data>
    </room>
