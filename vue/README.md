# Esame 2021/07/19 SPA

Questo documento serve a spiegare nel dettaglio come far partire l'applicativo

### Requisiti per il funzionamento dell'applicativo:
- `Node.js` scaricare ed installare da [Node.js](https://nodejs.org/). scaricare la versione `LTS` e seguire i passaggi per l'installazione.
- Scaricare json-server dopo aver installato node aprendo un terminale e digitando `npm i -g json-server`
- Un broswer 

##### Passaggi per il funzionamento dell'applicativo:
- Scaricare il codice da github (se si scarica il file zip, scompattarlo)
- Aprire il `terminale` all'interno della cartella scaricata
- Da terminale entrare nella cartella myapp
- Digitare sul terminale `npm i` (nel caso non funzioni bisogna controllare che node sia installato)
- Dopo digitare `npm run serve`
- Aprire un altro `terminale` all'interno della cartella scaricata
- Digitare `json-server` --watch db.json
- Aprire il `broswer` (preferibilmente chrome) e recarsi all'indirizzo `http://localhost:8080/`