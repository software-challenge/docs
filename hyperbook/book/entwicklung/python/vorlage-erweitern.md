---
name: Spielervorlage erweitern
index: 6
---

# Spielervorlage erweitern

Damit man einen möglichst einfachen Einstieg in die Programmierung
eines Computerspielers für die Software-Challenge mit Python hat, stellen
wir dafür eine Vorlage bereit.
Dort ist eine grundlegende Struktur zu finden, die benötigt wird,
um mit dem Spielserver zu kommunizieren
und in Zukunft die eigene Taktik implementieren zu können.

## Vorlage herunterladen

Wie man die Vorlage zu der diesjährigen Saison findet und
auf den eigenen Comuter herunterladen kann, haben wir bereits
[hier](/entwicklung/python/getting-started#projekt-erstellen)
in der Dokumentation erklärt.

## Spielervorlage verstehen

Hier ist ein Bild, der Spielervorlage zum Spiel Piranhas 2026 (Stand September 2025),
um Grundbausteine in jeder Vorlage zu erklären:

![Spielervorlage](/images/python/vorlage.png)

1. Ein großer Block an Imports von Standardpaketen und Klassen der Python
   Schnittstelle.
   Die meisten werden davon bisher gar nicht genutzt, sind aber in Zukunft
   praktisch, oder zeigen direkt, was von uns alles zur Verfügung gestellt wird.
2. Die Hauptklasse für die Logik des Spielers mit dem Attribut `game_state`, welches
   für den aktuellen Spielstand vorgesehen ist. Hieraus lassen sich alle
   benötigten Informationen über das Spielfeld zum jetzigen Zug auslesen.
3. `calculate_move()`: Die wahrscheinlich wichtigste Methode. Sie wird aufgerufen, wenn der Spielserver einen
   Zug vom Computerspieler anfordert. Hier kann also der beste Zug berechnet werden,
   bzw. es können dafür benötigte Funktionen aufgerufen werden.
   Damit der Computerspieler einen Zug an den Server sendet, muss der entsprechende Zug von
   der Methode zurückgegeben werden.
   Aktuell wird ein zufälliger Zug aus den möglichen ausgewählt und gespielt.
4. `on_update()`: Eine weitere Methode, die durch ein Event vom Server getriggert wird. 
   Sie bekommt als Parameter einen neuen Spielstand und speichert dieses Objekt in
   dem eben angesprochenen Attribut der Klasse.
5. Startet den Computerspieler und übergibt dabei ein Objekt der Klasse mit der programmierten Logik.

## Inhalte der Schnittstelle

Zu allen Klassen, Methoden und Attributen, die in der Python Schnittstelle enthalten sind
und mit welchen gearbeitet werden kann, gibt es eine extra
[Dokumentation](https://socha-python-client.readthedocs.io/de/latest/autoapi/socha/_socha/index.html),
in der auch jeweils eine Erklärung zur Funktionsweise, zu Parametern und weiteren nützlichen Informationen.