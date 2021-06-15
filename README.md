
# MPay Link Builder

[MPay Link Builder](https://etino.github.io/mpay-link-builder/) è un utility tool per la creazine dell'Url di collegamento alle sotto pagine dei servizi di pagamento degli enti che utilzzano il sistema MPay della Regine Marche (Intermediario tecnologico per il sistema dei pagamenti pagoPA).


## Perché MPay Link Builder?

La Regione Marche mette a disposizione degli enti aderenti un portale  raggiungibile attraverso l'indirizzo [https://mpay.regione.marche.it/](https://mpay.regione.marche.it/mpay/default/homepage.do) per permettere agli utenti di effettuare pagamenti online ([Sezione **Pagamenti Online**](https://mpay.regione.marche.it/mpay/pagonet/default.do)).

Il portale non mette a disposizione un url di accesso univoco per i pagamenti del singolo ente (la selezione avviene attraverso chiamate *POST*). 

L'accesso alla pagina dell'ente e dei servizi di pagamento attivati dall'ente stesso, avviene attraveso un endpoint ([https://mpay.regione.marche.it/mpay/pagonet/extern.do](https://mpay.regione.marche.it/mpay/pagonet/extern.do)) con parametri in query string che consentono di accedere attraverso una chiamata *GET* alla pagina dell'ente o alla sotto pagina del servizio di pagamento attivo.

## Come è fatto un link di accesso ai servizi MPay
```
https://mpay.regione.marche.it/mpay/pagonet/extern.do?formName=formExtern&payerTipoBollettino=SPOM&payerCodiceUtente=000RM&payerTipologiaServizio=UBC&payerCodiceEnte=05671
```

I link di collegamento vengono forniti in fase di attivazione agli enti con i parametri configurati per il singolo servizio di pagamento.

[MPay Link Builder](https://etino.github.io/mpay-link-builder/) espone in modo agevole i parametri di configurazione previsti nelle specifiche presenti nella [documentazione sul sito della Regione Marche](https://www.regione.marche.it/Regione-Utile/Agenda-Digitale/Pagamenti-e-fatturazione-elettronica#MPAY-principali-funzioni-e-configurazione).

[MPay Link Builder](https://etino.github.io/mpay-link-builder/) è uno strumento che consente agli addetti degli enti di creare agevolmente dei link di collegamento:

- alle pagine dei servizi da inserire nei propri siti web
- con i campi precompilati per agevolare le operazioni di pagamento agli  utenti dei servizi

### Esempi generati con MPay Link Builder

- Link al servizio di pagamento con importo e causale precompilati [Link](https://mpay.regione.marche.it/mpay/pagonet/extern.do?formName=formExtern&payerTipoBollettino=SPOM&payerCodiceUtente=000RM&payerTipologiaServizio=UBC&payerCodiceEnte=05671&payerImporto=50&payerImportoCent=0&payerCausale=CANONE+UTILIZZO+IMMOBILE)

- Link al servizio di pagamento con importo, causale e nome del contribuente precompilati [Link](https://mpay.regione.marche.it/mpay/pagonet/extern.do?formName=formExtern&payerTipoBollettino=SPOM&payerCodiceUtente=000RM&payerTipologiaServizio=UBC&payerCodiceEnte=05671&payerImporto=50&payerImportoCent=0&payerCausale=CANONE+UTILIZZO+IMMOBILE&payerCognomeContribuente=Rossi&payerNomeContribuente=Mario&payerIndirizzoContribuente=Via+Vittorio+Venento%2C+32&payerCittaContribuente=San+Costanzo&payerProvinciaContribuente=PU)



## Supporto

Per segnalazioni di bug aprire un ticket nella sezione Issues.

  
## Tecnologie Utilizzate

**Client:** Vue.js (Vue 3), Vite.js, Bootstrap Italia

**Server:** Gitub Pages

  
## Autore

- [@etino (Stefano Giraldi)](https://www.github.com/etino)

  
## License

[MIT](https://choosealicense.com/licenses/mit/)

  