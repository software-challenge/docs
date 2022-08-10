Am einfachsten ist es die KI auf Grundlage des SimpleClients zu
schreiben:

-   Als erstes muss der SimpleClient heruntergeladen werden
    (<http://www.software-challenge.de/downloads/> bitte den
    SimpleClient als „Quellcode“ downloaden)

-   Dieser muss nun in Eclips eingebunden werden:
    <https://docs.software-challenge.de/#einrichtung-von-eclipse>

# Wo schreibe ich die KI?

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

# Wichtige Membervariablen

In der Klasse befinden sich auch drei sehr wichtige Membervariablen:

    private Starter client; // Intern für den Server wichtig. Bitte nicht modifizieren

    private GameState gameState; // Gibt u.a Infos über mögliche Züge und das Spielbrett

    private Player currentPlayer; // Infos über den aktuellen Spieler, welchen man steuert

In den Folgenden Dokumenten werden Grundlagen zum erstellen einer KI
gezeigt. Hierbei werden wir oft die Variablen **gameState** und
**currentPlayer** verwenden.

Die **API-Dokumentation** befindet sich im Ordner „doc“ im Verzeichnis
des SimpleClients.

# Aufgaben

1.  Arbeite alle anderen Dokumente durch.

2.  Analysiere die Herangehensweise der SimpleClient-KI.

3.  Schreibe eine KI.
