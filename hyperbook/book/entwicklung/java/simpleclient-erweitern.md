---
name: Spielervorlage erweitern
index: 7
---

# Die Spielervorlage erweitern

In der Version der Java-Spielervorlage von der Software-Challenge
Homepage ist bereits eine Strategie implementiert, die RandomLogic. Man
kann jedoch auch noch beliebig viele eigene Strategien hinzufügen.

## Erstellen einer neuen Strategie

Die einfachste Möglichkeit ist, die Klasse `Logic` der Spielervorlage zu
kopieren und umzubenennen (alle Vorkommen von `Logic` durch den neuen
Klassennamen ersetzen). Der Vollständigkeit halber hier noch das
Vorgehen bei einer komplett neuen Klasse:

-   Erstellt eine neue Klasse (z.B. `MyLogic`), die das Interface
    `IGameHandler` implementiert:


```java
    public class MyLogic implements IGameHandler {
        private GameState gameState;
```
-   Implementiert die 4 Interface-Methoden


```java
    public void onGameOver(GameResult data) {
        // Hier muss nichts getan werden
    }

    @Override
    public void onError(String error) {
        // Hier muss nichts getan werden
        this.player = player;
    }

    @Override
    public void onUpdate(GameState gameState) {
        // Ein neuer Spielstatus, d.h. etwas ist geschehen. 
        // Deshalb gameState aktualisieren.
        this.gameState = gameState;
    }

    @Override
    public Move calculateMove() {
        // Ich soll einen Zug machen
        Move move;
        // ... Hier muss die Logik rein, die einen Zug findet.
        return move;
    }
```
Nun kann die Strategie in der Methode `calculateMove` (oder in eigenen
Klassen, die dort verwendet werden) implementiert werden.
