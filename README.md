# Design dell'interfaccia II (DI.II)
Sito web per i risultati del corso di Design dell'interfaccia II, tenuto da [Calibro](https://calib.ro/) presso ISIA Urbino. Il sito è costruito con Jekyll, e utilizza la libreria di Bootstrap 4.

# File editabili
## Esercitazioni
```
root
├── _verbs
│   ├── osservare.md
│   ├── alterare.md
│   ├── svelare.md
│   ├── pubblicare.md
```
### Metatags
1. *title*: Titolo dell'esercitazione. Genera il titolo della pagina e nella pagina stessa.
2. *digest*: Breve descrizione dell'esercitazione. Usato nella generazione del *Syllabus* alla fine della pagina.
3. *order*: Ordine dell'esercitazione rispetto alle altre. Ordina le esercitazioni nel *Syllabus*.
4. *layout*: Tipologia di layout utilizzato.
5. *url*: Identificativo dell'esercitazione.

## Dataset delle esercitazioni
```
root
├── _data
│   ├── osservare.yml
│   ├── alterare.yml
│   ├── svelare.yml
│   ├── pubblicare.yml
```
Ad ogni esercitazione è associato un dataset YAML con i progetti ed ulteriori informazioni.

### Colonne del dataset
1. *title*: Identificativo dell'esercitazione.
2. *desc*: Descrizione dell'esercitazione. Per adesso non è usato in nessun componente.
3. *projects*: Lista di tutti i progetti.

Al loro interno, i progetti possono avere:
  - *authors*: Autori del progetto, già riportati in sequenza e separati da virgole.
  - *project-title*: Titolo del progetto.
  - *link*: URL al progetto esterno.
  - *img*: Immagini associate al progetto. Possono essere ulteriormente divise in *item* se più di una per progetto.
  - *id*: Identificativo univoco.
  
## Ulteriori dataset
```
root
├── _data
│   ├── ...
│   ├── bibliografia.yml
```
### Bibliografia
Dataset costruito in maniera simile ai progetti delle esercitazioni. Le informazioni sono riportate nel *Syllabus* alla fine della pagina.

**TODO: Da tradurre i metatags in inglese.**

## Test locale
Per visualizzare il sito in locale:
```
$ jekyll serve
```

Per un'installazione più dettagliata: https://jekyllrb.com/docs/installation/
