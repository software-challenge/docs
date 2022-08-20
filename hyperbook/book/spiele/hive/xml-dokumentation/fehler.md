# Fehler

Ein “spielfähiger” :t[Computerspieler]{#player} muss nicht mit Fehlern umgehen können.
Fehlerhafte Züge beispielsweise resultieren in einem vorzeitigen Ende
des Spieles, das im nächsten gesendeten Gamestate erkannt werden kann
(siehe [???](#spielende)).

-   MSG Fehlermeldung

<!-- -->

    <room roomId="RID">
      <error message="MSG">
        <originalRequest>
          Request, der den Fehler verursacht hat
        </originalRequest>
      </error>
    </room>
