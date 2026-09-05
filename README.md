# Star Realm Counter v.0.12

Neues Design:
- Sci-Fi/Star-Realms-inspirierte Oberfläche
- FFA/Boss-Umschalter prominent oben
- Vier Fraktionen auswählbar:
  - Star Empire
  - Machine Cult
  - Trade Federation
  - Blob
- Jede Fraktion kann innerhalb einer Partie nur einmal vergeben werden
- Fraktionsabhängige Kartenfarben und visuelle Identität
- Boss bleibt oben, Gegner darunter
- Serienpunkte als Stern-Anzeige
- Spielende-Aktionen direkt in der Oberfläche

Bestehende Logik:
- FFA: letzter aktiver Spieler gewinnt 1 Serienpunkt
- Boss-Sieg: 2 Serienpunkte
- Team-Sieg: jeder Nicht-Boss-Spieler +1 Serienpunkt
- Boss rotiert bei neuer Partie
- Eliminierung bei 0
- 2–4 Spieler, Undo, Log, Wake Lock, Offline-PWA
