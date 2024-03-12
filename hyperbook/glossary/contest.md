---
name: Wettkampfsystem
index: 3
---

# Das Wettkampfsystem

Das Wettkampfsystem ist die Plattform,
auf der die [Computerspieler](glossary/player) der einzelnen Schulen gegeneinander antreten.
Die Teams können sich dabei nicht nur im Wettkampf,
sondern auch in Freundschaftsspielen mit ihren Gegnern messen.
Außerdem liefert es alle Informationen rund um den Wettkampf,
wie z.B. die Ergebnisse der einzelnen Spieltage
oder die Anzahl der Mitglieder in den einzelnen Teams.

## Die Weboberfläche

![Die Startseite der Weboberfläche](/images/wettkampfsystem_neu_startseite.png)

Die Weboberfläche ist unter der URL <http://contest.software-challenge.de> erreichbar.
Alle Informationen, die den Ablauf des Wettkampfs betreffen
(z.B. Terminplan, News oder Rangliste) sind auch ohne Anmeldung verfügbar.
Man muss sich nur am System anmelden, wenn man auf seinen Kurs,
bzw. auf seinen Computerspieler zugreifen möchte.
Im Wettkampfsystem findet die gesamte Wettkampfverwaltung statt.
Hier können die Clients abgegeben, getestet und aktiviert werden
und es kann der aktuelle Wettkampfstand abgerufen werden (Rangliste, Spieltage, etc.).

### Auswahl

Standardmäßig ist die aktuellste Saison im System aktiv. Über den 
Button in der oberen Leiste bekommt man alle verfügbaren 
Saisons angezeigt und, wenn man eine ausgewählt hat, sieht man auch die 
Gruppen dazu. Anschließend kann man die Informationen einsehen. 

### Teams

#### Alle Teams

![Die Teamtabelle](/images/wettkampfsystem_neu_teams.png)

Hier werden die teilnehmenden Teams mit ihren Ansprechpartnern und
Tutoren tabellarisch aufgelistet.

#### Meine Teams

Angemeldete Benutzer können hier eine Übersicht über Teams der aktuellen Saison 
finden mit denen sie zu tun haben.

## Frei verfügbare Informationen

### News

Hier sind alle News zum Wettkampf einsehbar. Alles Wichtige zum Wettkampf
erscheint hier.

### Gruppen

![Screenshot der Gruppen](/images/wettkampfsystem_neu_gruppe.png)

Die Teams jeder Wettkampfsaison sind in der ersten Meisterschaftsphase in Gruppen 
aufgeteilt. Auf der Seite einer Gruppe kann man auf die einzelnen Spieltage zugreifen 
und die aktuelle Rangliste sehen.

### Spieltag

![Screenshot der Spieltagsuebersicht](/images/wettkampfsystem_neu_spieltag.png)

Auf dieser Seite kann man sehen, welche Schulen an dem Spieltag
aufeinander treffen. Wurde der Spieltag schon ausgetragen,
kann man sich die Ergebnisse und den Verlauf der einzelnen Spiele
anschauen.

### Finale

Hier findet sich die Übersicht über die Finalteilnehmer. Diese ist erst
verfügbar, wenn die Teilnehmer feststehen.

## Nur mit Anmeldung verfügbar

### Mitglieder

![Dialog](/images/wettkampfsystem_neu_mitglieder.png)

Hier werden alle Mitglieder des Teams aufgelistet. Mit den Buttons rechts neben den 
Teammitgliedern kann man sie aus dem Team werfen.

#### Mitglieder hinzufügen

Neue Mitglieder kann man über die Schaltfläche "Bestehenden Benutzer einladen" unten einladen. 
Dabei können Tutoren sowohl Lehrkräfte, als auch Schülerinnen und
Schüler hinzufügen, während Lehrkräfte nur Schülerinnen und Schüler hinzufügen dürfen.
Schülerinnen und Schüler haben in dieser Hinsicht keinerlei Rechte.

**Hinweis:** Es muss nicht jede Schülerin und jeder Schüler eingetragen werden und über
Zugangsdaten erhalten. Es reicht, wenn sich die Teammitglieder am Server
anmelden können, die den :t[Computerspieler]{#player} hochladen.

Wenn man eine neue Person ins Team aufnehmen will, kann man eine im System
bekannte Person einladen.

Darüber kann man die Schülerinnen- und Schüler-Anzahl des Teams
eintragen. Hierzu zählen auch Schülerinnen und Schüler, die keine eigenen Zugangsdaten
für das Wettkampfsystem haben. Diese Zahl wird sowohl für die Presse als
auch für statistische Zwecke gebraucht und sollte in jedem Fall stimmen.

##### Benachrichtigungen

Für Personen mit Zugangsdaten kann neben den Personendetails eingestellt
werden, unter welchen Umständen diese Personen eine e-Mail mit einer
entsprechenden Benachrichtigung erhalten sollen. Dabei gibt es folgende
Optionen:

-   Ein Spieltag wurde gespielt

-   In einem Ihrer Teams gibt es noch keinen spielbereiten
    :t[Computerspieler]{#player} für den nahenden Spieltag

-   Es gibt Neuigkeiten zum Wettbewerb

-   Eines ihrer Tickets wurde geändert

### Computerspieler

In dieser Rubrik kann man die :t[Computerspieler]{#player} hochladen und verwalten.
Bevor man einen Computerspieler hochlädt, muss [er abgabefertig gemacht werden](/entwicklung/abgabe).

![Übersicht der eingesendeten Computerspieler](/images/wettkampfsystem_neu_hochladen.png)

Oben am rechten Rand befindet sich die Schaltfläche,
um neue Computerspieler hinzuzufügen.
Diese führt zu einem Formular,
mit dem man das ZIP-Archiv des Computerspielers hochladen kann.

Man kann dem Spieler einen **Namen** geben, damit man ihn in der Liste
der hochgeladenen Spieler später besser erkennt. Man kann auch noch
zusätzliche **Parameter** festlegen, die dem Computerspieler beim Start
übergeben werden. Dies ist nützlich, wenn der Computerspieler
verschiedene Spielstrategien unterstützt und man diese per Parameter
auswählen kann. Dann muss man den Computerspieler nur einmal hochladen
(die Parameter kann man auch später verändern). Die Angabe eines Namens
und von Parametern ist optional.

Als letztes muss noch die Umgebung (das **Docker Image**) gewählt
werden, in der der Computerspieler auf dem Wettkampfsystem ausgeführt
werden soll. Verwendet der Computerspieler eine der beiden offiziell
unterstützten Programmiersprachen Java und Ruby, kann hier einfach das
entsprechende ausgewählt werden. Ansonsten hängt es von der gewählten
Programmiersprache ab, ob eine passende Umgebung angeboten wird. Sollte
sich nichts finden, installieren wir gern etwas passendes nach.

Wurde ein Spieler erfolgreich hochgeladen, befindet er sich in der Liste
aller Spieler des Teams. Hier kann man mit dem Link "Testen" seine
Turnierfähigkeit prüfen. Der Spieler spielt dann zweimal gegen den
Zufallsspieler. Ein Haken in einem grünen Kreis symbolisiert einen
erfolgreichen Test. Das Logbuch über den Testlauf kann mit dem Link
"Logs" aufgerufen werden. Unter Umständen muss noch die richtige
Startdatei eingestellt werden. Dafür kann man rechts in der Spalte
"Hauptdatei" auf den entsprechenden Link klicken und im folgenden
Dateimenü die richtige Startdatei auswählen.

Mit dem '+' kann man einen Kommentar an den Computerspieler heften,
so dass man ihn besser von den anderen unterscheiden kann.

Mit dem Link "Aktivieren" markiert man den Spieler als denjenigen, der
das nächste Spiel auf dem Wettkampfsystem spielen soll. Dies kann ein
Freundschaftsspiel oder ein Spiel des Wettkampfes sein.

**Hinweis:** Es nimmt der jeweils aktive Computerspieler am Spieltag
teil. Die Frist für das Aktivieren eines Clients, der an einem Spieltag
teilnehmen soll, endet am Spieltag um 0 Uhr. Bei späterer Aktivierung
kann nicht garantiert werden, dass der neue statt des bisherigen Clients
am Spieltag teilnimmt. Ist an einem Spieltag kein Computerspieler
aktiviert, nimmt das Team nicht an der Begegnung dieses Spieltages teil
und die betreffenden Spiele zählen als verloren.

## Freundschaftsspiele

Um sich schon vor dem Wettkampf einen Eindruck von der Stärke des
eigenen Teams zu machen, kann man mit seinen Gegnern Freundschaftsspiele
absolvieren.

Um ein Freundschaftsspiel zu spielen gibt es zwei Möglichkeiten: Man
fordert einen (oder alle) Gegner heraus oder man nimmt eine
Herausforderung an.

Durch einen Klick auf das Ergebnis eines gespielten Freundschaftsspiels
kann man es sich im Detail anschauen.

## Verfügbare Schnittstellen

Im folgenden können Schnittstellen gefunden werden mit denen man mit dem
Wettkampfsystem interagieren kann.

### Replays

Man kann direkt auf unter "Replay herunterladen" auf der jeweiligen
Match-Seite einen Link finden, der z.B. wie folgt aussieht:
`…​/wettbewerb/2010/spieltage/XXXX/matches/XXXX/rounds/XXXX` bei einem
normalen GET-Request erhält man das Replay-Archiv (also ein GZip
Archiv). Um die Replays z.B. in einer eigenen Anwendung zu verwenden,
kann man sich auch vom Server bereits entpackte und an das Format des
Replay-Viewers angepasste XML-Files zurückgeben lassen. Dies kann zum
Einen durch einen XML-Header des Requests geschehen oder zum Anderen
einfach durch das Anhängen der Endung `.xml` an den oben genannten Link.

Wenn größere Mengen Replays benötigt werden, empfehlen wir die
Standard-Archive vorzuziehen und dann lokal zu entpacken, da diese schon
fertig gepackt auf dem Server vorliegen und somit schneller und mit
weniger Last für das System zur Verfügung gestellt werden können.
