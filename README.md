# Star Realm Counter v0.18

Ein einfacher, installierbarer PWA-Punktezähler für Star-Realms-artige Kartenspiele.  
Die App läuft vollständig statisch ohne Backend und kann über GitHub Pages bereitgestellt werden.

## Funktionen

- 2 bis 4 Spieler im FFA- und Boss-Modus
- 4 Spieler im Team-Modus
- Frei editierbare Spielernamen
- Fraktionswahl direkt über das Fraktionslogo
- Jede Fraktion kann nur einmal gleichzeitig vergeben werden
- Große Authority-/Punkteanzeige
- Schnelländerung um ±1
- Eigene Punktänderung über Zahlenfeld und separate Minus-/Plus-Schaltflächen
- Punktestand kann direkt manuell gesetzt werden
- Undo-Funktion
- Spiel- und Serienverwaltung
- Lokale Speicherung per `localStorage`
- Offline-Nutzung über Service Worker
- Wake Lock, damit der Bildschirm beim Spielen anbleibt
- Änderungs-Log
- Dunkles, mobil optimiertes Sci-Fi-Layout

## Spielmodi

### FFA

Jeder spielt gegen jeden.

- Bei 2 Spielern endet die Partie, sobald ein Spieler 0 Authority erreicht.
- Bei 3 oder 4 Spielern läuft die Partie weiter, bis nur noch ein Spieler über 0 Authority verfügt.
- Der letzte aktive Spieler erhält 1 Serienpunkt.

### Boss

Ein Spieler ist der Boss, alle anderen spielen gemeinsam gegen ihn.

Für die von der App unterstützten Spielerzahlen gelten:

- Boss + 2 Gegner: Boss startet mit 50 Authority.
- Boss + 3 Gegner: Boss startet mit 70 Authority.
- Die übrigen Spieler starten mit jeweils 50 Authority.
- Der Boss hat eine normale Handgröße von 7 Karten.
- Die übrigen Spieler haben eine normale Handgröße von 5 Karten.

Die Handgröße wird im Boss-Modus als kleiner Kartenfächer angezeigt.

Siegbedingungen:

- Besiegt das Team den Boss, erhalten alle Nicht-Boss-Spieler jeweils 1 Serienpunkt.
- Besiegt der Boss alle Gegner, erhält der Boss 2 Serienpunkte.
- Nach einer Partie wechselt die Boss-Rolle zum nächsten Spieler.

### Team

Der Team-Modus bildet die 2-gegen-2-Hydra-Variante ab, wird in der App aber bewusst nur **Team** genannt.

- Genau 4 Spieler
- Spieler 1 und 2 bilden Team A.
- Spieler 3 und 4 bilden Team B.
- Jedes Team startet mit gemeinsam 75 Authority.
- Jeder Spieler behält seinen eigenen Namen und seine eigene Fraktion.
- Sinkt die gemeinsame Authority eines Teams auf 0, gewinnt das andere Team.
- Beide Spieler des Siegerteams erhalten jeweils 1 Serienpunkt.

## Fraktionen

Zur Auswahl stehen:

- Star Empire – Gold/Gelb
- Machine Cult – Rot
- Trade Federation – Blau
- Blob – Grün

Der Fraktionsname wird nicht als zusätzliches Dropdown angezeigt.  
Stattdessen wird direkt auf das Fraktionslogo getippt. Danach erscheint eine kompakte Auswahl der verfügbaren Logos.

Bereits von anderen Spielern verwendete Fraktionen sind deaktiviert.

## Bedienung

Der Spielername befindet sich oben auf jeder Spielerkarte.  
Die Entfernen-Schaltfläche `×` sitzt direkt daneben.

Darunter befinden sich:

1. Fraktionslogo und Serienpunkte
2. im Boss-Modus die Rollenanzeige und der Kartenfächer
3. der aktuelle Authority-/Punktestand
4. die Steuerelemente zum Ändern des Werts

Beim Erreichen von 0 Authority wird ein Spieler entsprechend der Regeln des aktiven Spielmodus ausgeschieden beziehungsweise die Partie beendet.

## Serien

Nach einem Spiel erscheinen zwei runde Schaltflächen:

- `↻` startet die nächste Partie der laufenden Serie.
- `×` beendet die Serie und setzt die Serienpunkte zurück.

Undo kann auch den Zustand vor einem spielentscheidenden Zug wiederherstellen.

## Installation über GitHub Pages

Alle Dateien können direkt im Hauptverzeichnis des Repositorys liegen.  
Ein zusätzlicher `assets`-Ordner ist nicht erforderlich.

Beispiel:

```text
index.html
manifest.webmanifest
sw.js
icon.svg
README.md
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

Bei zukünftigen Updates müssen nur die tatsächlich geänderten Dateien ersetzt werden.  
Die großen Artwork- und Icon-Dateien müssen nicht erneut hochgeladen werden, solange sie unverändert bleiben.

## PWA und Cache

Die App verwendet einen Service Worker für die Offline-Nutzung.

Nach einem Update auf GitHub Pages kann auf dem Smartphone zunächst noch eine ältere Version aus dem Cache erscheinen. In diesem Fall:

- Seite vollständig neu laden
- installierte PWA schließen und erneut öffnen
- falls nötig die Website-Daten beziehungsweise den Cache der Seite löschen

Die aktuell geladene Version wird oben in der App angezeigt.

## Grafiken

Die eingebundenen Sci-Fi-Artworks und Fraktionssymbole wurden speziell für dieses Projekt erstellt und sind keine offiziellen Star-Realms-Grafiken.

## Version

Aktueller Stand: **v0.18**
