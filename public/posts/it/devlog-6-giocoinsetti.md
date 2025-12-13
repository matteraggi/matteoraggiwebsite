Oggi puntata corta. Molto lavoro perché non sono ancora capace di fare animazioni, ma poco da raccontare.

Ho preso il design molto semplice della formica che avevo creato prima, e ho aggiunto una animazione.
La formica adesso fuma una sigaretta.

L'animazione è composta da 4 tag, quindi 4 micro-animazioni differenti:

- idle_bottom
- smoke_up
- idle_top
- smoke_down

Questa separazione serve a gestire in modo variabile la durata degli step di animazione.
Infatti ho potuto decidere e regolare la durata di ogni fase da Godot. E volendo potrei anche eseguire una singola parte dell'animazione in determinati momenti.

Un esempio di utilizzo sarebbe muovere la sigaretta dal basso verso l'alto nel mezzo del dialogo con l'NPC.

Ed ecco il risultato finale:

![gif animazione formica](/foto_giocoinsetti/devlog6-gif.gif)

Al prossimo devlog :)