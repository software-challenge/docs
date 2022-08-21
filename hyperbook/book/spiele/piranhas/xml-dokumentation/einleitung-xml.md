# Einleitung

Wie in den letzten Jahren wird zur Computerspieler-Server Kommunikation ein
XML-Protokoll genutzt. In diesem Dokument wird die
Kommunikationsschnittstelle definiert, sodass ein komplett eigener
:t[Computerspieler]{#player} geschrieben werden kann. Es wird hier nicht die vollständige
Kommunikation dokumentiert bzw. definiert, dennoch alles, womit ein
:t[Computerspieler]{#player} umgehen können muss, um spielfähig zu sein.

## An wen richtet sich dieses Dokument?

Die Kommunikation mit dem Spielserver ist für diejenigen, die aufbauend
auf dem Zufallspieler programmieren, unwichtig. Dort steht bereits ein
funktionierender :t[Computerspieler]{#player} bereit und es muss nur die Spiellogik entworfen
werden. \\\\ Nur wer einen komplett eigenen :t[Computerspieler]{#player} entwerfen will,
beispielsweise um die Programmiersprache frei wählen zu können, benötigt
die Definitionen.

## Hinweise

Falls Sie beabsichtigen sollten, diese Kommunikationsschnittstelle zu
realisieren, sei darauf hingewiesen, dass es im Verlauf des Wettbewerbes
möglich ist, dass weitere, hier noch nicht aufgeführte Elemente zur
Kommunikationsschnittstelle hinzugefügt werden. Um auch bei solchen
Änderungen sicher zu sein, dass ihr :t[Computerspieler]{#player} fehlerfrei mit dem Server
kommunizieren kann, empfehlen wir Ihnen, beim Auslesen des :t[XML]{#xml} jegliche
Daten zu verwerfen, die hier nicht weiter definiert sind. Die vom
Institut bereitgestellten Programme (Server, Zufallspieler) nutzen eine
Bibliothek um Java-Objekte direkt in :t[XML]{#xml} zu konvertieren und umgekehrt.
Dabei werden XML-Nachrichten nicht mit einem newline abgeschlossen.
