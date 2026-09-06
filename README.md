# Star Realm Counter v0.34

Mobile, installierbare PWA zum Zählen von Authority/Punkten und Serienpunkten bei Star-Realms-artigen Kartenspielen.

Die App läuft vollständig statisch ohne Backend und eignet sich für die Bereitstellung über GitHub Pages.

## Aktuelle Spielmodi

### FFA

Freies Spiel für 2 bis 4 Spieler.

- Jeder Spieler besitzt einen eigenen Authority-Wert.
- Der Startwert ist einstellbar; Standard sind 50 Authority.
- Bei 2 Spielern endet das Spiel, sobald ein Spieler 0 Authority erreicht.
- Bei 3 oder 4 Spielern werden Spieler mit 0 Authority eliminiert.
- Das Spiel läuft weiter, bis nur noch ein Spieler Authority besitzt.
- Der Sieger erhält 1 Serienpunkt.

### Boss

Ein Spieler ist der Boss, die übrigen Spieler bilden das gegnerische Team.

Die App unterstützt im Boss-Modus bis zu 4 Spieler insgesamt.

#### Startwerte

- Boss + 1 Gegner: Boss 50 Authority
- Boss + 2 Gegner: Boss 50 Authority
- Boss + 3 Gegner: Boss 70 Authority
- Alle Nicht-Boss-Spieler starten mit 50 Authority.

#### Handgröße

Im Boss-Modus wird die normale Handgröße direkt auf der Spielerkarte angezeigt.

- Boss: 7 Karten bei den derzeit unterstützten Spielerzahlen
- Team-Spieler: 5 Karten

Das Symbol besteht aus einem kompakten Fächer mit drei sichtbaren Karten. Die tatsächliche Handgröße steht als Zahl daneben.

#### Sieg und Serienpunkte

- Erreicht der Boss 0 Authority, gewinnt das Team.
- Jeder Nicht-Boss-Spieler erhält bei einem Teamsieg 1 Serienpunkt.
- Sind alle Nicht-Boss-Spieler ausgeschieden, gewinnt der Boss.
- Der Boss erhält für einen Sieg 2 Serienpunkte.
- Bei der nächsten Partie wechselt die Boss-Rolle zum nächsten Spieler.

### Team

Der Team-Modus basiert auf der offiziellen 2-gegen-2-Hydra-Spielweise, wird in der App aber einfach **Team** genannt.

- Genau 4 Spieler
- Spieler 1 und 2 bilden Team A.
- Spieler 3 und 4 bilden Team B.
- Beide Teams starten mit jeweils 75 gemeinsamer Authority.
- Jeder Spieler behält seinen eigenen Namen und seine eigene Fraktion.
- Sinkt die gemeinsame Authority eines Teams auf 0, gewinnt das andere Team.
- Beide Spieler des Siegerteams erhalten jeweils 1 Serienpunkt.

Im Team-Modus verwendet der gemeinsame Authority-Zähler exakt dieselben UI-Klassen wie die Spielerzähler in FFA und Boss. Dadurch sind Farben, Größen, Abstände und Anordnung identisch: oben `−1` / `+1`, darunter `−` / Zahlenfeld / `+`.

#### Darstellung

Team A und Team B werden untereinander dargestellt.

Jedes Team besitzt einen gemeinsamen Rahmen. Dieser Rahmen ist in zwei Spielerhälften aufgeteilt:

- linke Hälfte: erster Spieler des Teams
- rechte Hälfte: zweiter Spieler des Teams
- beide Fraktions-Artworks liegen nebeneinander im selben Rahmen
- jeder Spieler besitzt sein eigenes Fraktionslogo und seinen eigenen Namen
- in der Mitte befindet sich eine einzige gemeinsame Authority-Anzeige für das gesamte Team

## Fraktionen

Es stehen vier Fraktionen zur Verfügung:

- Star Empire – Gelb/Gold
- Machine Cult – Rot
- Trade Federation – Blau
- Blob – Grün

Im FFA- und Boss-Modus kann jede Fraktion innerhalb einer Partie nur einmal vergeben werden.

Im Team-Modus dürfen Fraktionen mehrfach vorkommen. Dabei gilt eine besondere Team-Regel: Haben beide Spieler eines Teams dieselbe Fraktion gewählt, ist diese Fraktion für beide Spieler des gegnerischen Teams gesperrt. Solange eine Fraktion in einem Team nur einmal vorkommt, darf sie auch vom anderen Team gewählt werden.

Die Fraktion wird direkt über das runde Fraktionslogo ausgewählt. Beim Antippen öffnet sich eine kompakte Logo-Auswahl. Nicht erlaubte Fraktionen werden dort deaktiviert.

Die verwendeten Sci-Fi-Artworks und Fraktionssymbole wurden für dieses Projekt erstellt und sind keine offiziellen Star-Realms-Grafiken.

## Spielerkarte

Im FFA- und Boss-Modus enthält eine Spielerkarte:

1. Spielername mit Entfernen-Schaltfläche `×` direkt daneben
2. Fraktionslogo und Serienpunkte
3. im Boss-Modus eine zusätzliche Zeile mit Boss-/Team-Rolle und Handkarten-Anzeige
4. große Authority-Anzeige
5. Bedienelemente für Punktänderungen

Die Boss-/Team- und Handkarten-Plaketten befinden sich in einer eigenen Zeile und überdecken weder Logo noch Serienpunkte.

## Punkte ändern

Für jeden relevanten Authority-Zähler stehen schnelle und freie Änderungen zur Verfügung.

- `−1` reduziert um einen Punkt.
- `+1` erhöht um einen Punkt.
- Über das Zahlenfeld kann ein beliebiger positiver Wert eingegeben werden.
- Mit `−` wird dieser Wert abgezogen.
- Mit `+` wird dieser Wert addiert.
- Nach der Eingabe wird das Feld wieder geleert und die Bildschirmtastatur geschlossen.
- Durch Antippen des großen Punktestands kann der Wert direkt gesetzt werden.

Mehrere schnelle Änderungen werden kurzzeitig als zusammengefasste Änderung eingeblendet.

Beispiel: Fünfmal `+1` zeigt vorübergehend `+5`.

## Serien

Serienpunkte werden mit einem Stern `★` angezeigt.

Nach dem Ende einer Partie erscheinen zwei runde Schaltflächen:

- `↻` startet die nächste Partie innerhalb derselben Serie.
- `×` beendet die Serie und setzt die Serienpunkte zurück.

Beim Start einer neuen Partie werden die Authority-Werte passend zum gewählten Spielmodus zurückgesetzt.

## Undo

Mit **Undo** kann die letzte Änderung rückgängig gemacht werden.

Der gespeicherte Zustand umfasst unter anderem:

- Authority/Punktestände
- Spieler
- Fraktionen
- Serienpunkte
- Spielmodus
- Boss-Zuordnung
- Team-Werte
- Spielende und Sieger
- Log

Dadurch kann auch ein Zug rückgängig gemacht werden, der unmittelbar das Spiel beendet hat.

## Log

Über **Log** kann der Änderungsverlauf geöffnet werden.

Das Log zeichnet Punktänderungen während des Spiels auf und kann bei Bedarf geleert werden.

## Wake Lock

Über die Wake-Lock-Funktion kann verhindert werden, dass sich der Bildschirm während einer Partie automatisch ausschaltet.

Die Funktion hängt von der Unterstützung des verwendeten Browsers beziehungsweise Betriebssystems ab.

## Speicherung

Der aktuelle Spielzustand wird lokal im Browser über `localStorage` gespeichert.

Dadurch bleibt eine laufende Partie normalerweise auch nach dem Schließen oder Neuladen der App erhalten.

## PWA und Offline-Nutzung

Star Realm Counter ist als Progressive Web App ausgelegt.

Die App verwendet:

- `manifest.webmanifest`
- `sw.js`
- `icon.svg`

Der Service Worker speichert die benötigten Dateien für die Offline-Nutzung.

Nach einem Update über GitHub Pages kann kurzfristig noch eine ältere Version aus dem Cache angezeigt werden. In diesem Fall die Seite vollständig neu laden beziehungsweise die installierte PWA schließen und erneut öffnen. Falls erforderlich können zusätzlich die Website-Daten der Seite gelöscht werden.

## Dateien im GitHub-Repository

Alle Dateien liegen direkt im Hauptverzeichnis. Ein zusätzlicher `assets`-Ordner wird nicht benötigt.

```text
index.html
manifest.webmanifest
sw.js
README.md
icon.svg
background.webp
trade_art.webp
trade_icon.webp
machine_art.webp
machine_icon.webp
empire_art.webp
empire_icon.webp
blob_art.webp
blob_icon.webp
```

Bei Updates müssen nur Dateien ersetzt werden, die sich tatsächlich geändert haben. Die Artwork- und Logo-Dateien müssen nicht erneut hochgeladen werden, solange sie unverändert bleiben.

## GitHub Pages

Das Projekt benötigt keinen Server und keine Datenbank. Für die Veröffentlichung reicht ein statisches GitHub-Pages-Repository.

Nach dem Ersetzen geänderter Dateien und dem Commit wird die neue Version über GitHub Pages veröffentlicht. Durch den PWA-Cache kann es auf bereits installierten Geräten etwas dauern, bis die neue Version sichtbar wird.

## Version

Aktueller Stand: **v0.34**


### Änderungen in v0.34

- Im Boss-Modus stehen Boss-/Team-Plakette und Handkarten-Anzeige direkt unter Fraktionssymbol und Serienpunkten.
- Die Authority-Anzeigen sind in den Spielerfenstern vertikal zentriert.
- Die Fraktionsauswahl im Team-Modus wurde repariert. Eine Fraktion bleibt teamübergreifend auswählbar, solange sie nicht von beiden Spielern des gegnerischen Teams gleichzeitig verwendet wird.



### Änderungen in v0.34

- Hintergrundmusik und Soundeffekte wurden vollständig entfernt.
- Die Audio-Einstellungen im Zahnrad-Menü wurden entfernt.
- Das linke Hamburger-Menü bleibt entfernt.
- Alle übrigen Funktionen und Layout-Änderungen bleiben erhalten.


### Änderungen in v0.34

- Der kumulative 3-Sekunden-Änderungszähler ist jetzt auch im Team-Modus vorhanden.
- Die Änderungszahl erscheint in allen Modi oberhalb der großen Authority-Zahl und startet nicht mehr direkt in der Punktzahl.


### Änderungen in v0.34

- Der schwebende Änderungszähler im Team-Modus wurde weiter nach oben versetzt, damit er die große Authority-Zahl nicht mehr berührt.


### Änderungen in v0.34

- Im FFA-Modus werden fehlende Spielerfelder nicht mehr als leere große Flächen reserviert.
- Bei 2 Spielern füllen beide Spieler die verfügbare Fläche möglichst groß aus.
- Spieler 3 und 4 erscheinen als kleine `+ Spieler`-Buttons am unteren Rand.
- Bei 3 Spielern bleibt nur noch ein kleiner Button für Spieler 4.
- Bei 4 Spielern bleibt das vollständige FFA-Raster erhalten.


### Änderungen in v0.34

- Die Bedienfelder für Punkteänderungen wurden in FFA-, Boss- und Team-Modus ungefähr 50 % größer gemacht.
- Dies betrifft die −1/+1-Tasten, die −/+-Tasten für freie Werte und das Eingabefeld.


### Änderungen in v0.34

- Im FFA-Modus werden 2 Spieler jetzt übereinander statt nebeneinander dargestellt.
- Auch bei 3 Spielern werden die Spielerfelder vertikal untereinander angeordnet.
- Die kompakten Buttons für noch fehlende Spieler bleiben am unteren Rand.
- Die vergrößerten Punkte-Bedienfelder aus v0.31 bleiben erhalten.


### Änderungen in v0.34

- Im Zahnrad-Menü gibt es jetzt einen Regler für die Größe der Punkte-Bedienelemente.
- Der Regler hat 10 Stufen.
- Stufe 1 entspricht der ursprünglichen Bedienfeldgröße vor v0.31.
- Stufe 10 entspricht der 50 % größeren Variante aus v0.31/v0.32.
- Standardwert ist Stufe 1.
- Die gewählte Größe wird gespeichert und gilt für FFA, Boss und Team.


### Änderungen in v0.34

- Stufe 1 des Größenreglers basiert jetzt auf den tatsächlichen kompakten Bedienfeldmaßen aus den Versionen vor v0.31.
- Stufe 10 skaliert diese ursprünglichen Maße weiterhin bis auf 150 %.
- Die freie Punkteänderung ist fest auf 25 % Minus / 50 % Eingabefeld / 25 % Plus aufgeteilt.
- Eingabefeld und Tasten verwenden `min-width: 0` und `box-sizing: border-box`, damit nichts mehr überlappt.
