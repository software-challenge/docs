# Spielergebnis

Zum Spielende erhält jeder Spieler das Ergebnis. Es beginnt mit einer
`definition`, die die Interpretation der Ergebnisse erklärt. Für jeden
Spieler gibt es einen Eintrag in `scores`. Der darin enthaltene `score`
schlüsselt sich auf in:

cause  
Beitrag des Spielers zum Spielende (`REGULAR`, `LEFT`, `RULE_VIOLATION`,
`SOFT_TIMEOUT`, `HARD_TIMEOUT`)

reason  
Erklärung zu `cause`

part  
Siegpunkte des Spielers (0 verloren, 1 unentschieden, 2 gewonnen) und
weitere Punkteinträge entsprechend `definition`

Wenn es einen Sieger gibt, endet es mit einem `winner`-Tag, welches das
Gewinner-Team angibt.

Hier ein Beispiel:

    <room roomId="ROOM_ID">
      <data class="result">
        <definition>
          <fragment name="Siegpunkte">
            <aggregation>SUM</aggregation>
            <relevantForRanking>true</relevantForRanking>
          </fragment>
          <fragment name="∅ Punkte">
            <aggregation>AVERAGE</aggregation>
            <relevantForRanking>true</relevantForRanking>
          </fragment>
        </definition>
        <scores>
          <entry>
            <player name="rad" team="ONE"/>
            <score cause="REGULAR" reason="">
              <part>2</part>
              <part>27</part>
            </score>
          </entry>
          <entry>
            <player name="blues" team="TWO"/>
            <score cause="LEFT" reason="Player left">
              <part>0</part>
              <part>15</part>
            </score>
          </entry>
        </scores>
        <winner team="ONE"/>
      </data>
    </room>
