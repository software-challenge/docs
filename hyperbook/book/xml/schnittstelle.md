---
name: Schnittstelle
index: 1
---

## Die Schnittstelle zum Server (XML)

Der Spielleiter kommuniziert mit den Computerspielern über eine Netzwerkverbindung. Dadurch ist man aus technischer Sicht komplett flexibel, was die Wahl der Programmiersprache angeht. Die Computerspieler müssen lediglich das Kommunikationsprotokoll erfüllen.

Anfängern wird allerdings davon abgeraten, einen komplett eigenen Client zu schreiben. Es ist deutlich einfacher, auf einem bereitgestellten Simpleclient aufzubauen, da man sich dabei nur um die Strategie und nicht um die Kommunikation kümmern muss. Außerdem wird vom Institut für Informatik die beste Unterstützung für Java/Kotlin geboten.

### Hinweise

Im Verlauf des Wettbewerbes können Elemente zur Kommunikationsschnittstelle hinzugefügt werden, die in dieser Dokumentation nicht aufgeführt sind. Um auch bei solchen Änderungen sicher zu sein, dass ein Client fehlerfrei mit dem Server kommunizieren kann, sollten beim Auslesen des XML jegliche Daten verworfen werden, die hier nicht weiter definiert sind.

Die vom Institut bereitgestellten Programme (Server, Simpleclient) nutzen eine Bibliothek um Java-Objekte direkt in XML zu konvertieren und umgekehrt. Dabei werden XML-Nachrichten nicht unbedingt mit einem Zeilenumbruch abgeschlossen.