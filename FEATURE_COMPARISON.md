# Confronto Funzionalità: Vista Nutrizionista vs Vista Paziente

## VISTA NUTRIZIONISTA (Dashboard Dottore)

### 1. Dashboard Principale (`/doctor/dashboard`)
**Funzionalità:**
- Statistiche generali:
  - Numero pazienti attivi
  - Appuntamenti oggi
  - Richieste pending
  - Prossimi appuntamenti
- Richieste appuntamenti in attesa (con approvazione/rifiuto)
- Lista prossimi appuntamenti (5+)
- Top 3 collaborazioni del mese (ROI, pazienti attivi, revenue)
- Azioni rapide: nuovo paziente, piani alimentari, calendario
- ChatWidget (assistente AI)
- InstallPrompt (PWA)

---

### 2. Calendario (`/doctor/calendar`)
**Funzionalità:**
- Vista calendario completo
- Visualizzazione appuntamenti
- Creazione/modifica/cancellazione appuntamenti
- Gestione disponibilità
- Filtro per tipo appuntamento (online/presenza)

---

### 3. Gestione Pazienti (`/doctor/patients`)
**Funzionalità:**
- Lista completa pazienti
- Filtri e ricerca
- Aggiunta nuovo paziente
- Visualizzazione stato (attivo/inattivo)
- Accesso rapido a dettaglio paziente

---

### 4. Dettaglio Paziente (`/doctor/patients/:id`)
**Funzionalità complete su ogni paziente:**

#### a. **Body Assessment (Valutazione Corporea)**
- Valutazione composizione corporea
- Analisi antropometrica
- Grafici e trend corporei

#### b. **Anamnesi**
- Storia medica completa
- Patologie
- Allergie/intolleranze
- Farmaci
- Storia peso
- Obiettivi paziente
- Note cliniche

#### c. **Misurazioni**
- Peso, altezza
- Circonferenze (vita, fianchi, cosce, braccia)
- BMI automatico
- Grafici andamento peso
- Storico completo misurazioni
- Aggiunta/modifica/eliminazione misurazioni

#### d. **Metabolismo (Metodo Luvaro)**
- Calcolo metabolismo basale
- Calcolo fabbisogno calorico
- TDEE (Total Daily Energy Expenditure)
- Storico calcoli metabolici
- Aggiunta/modifica record metabolici

#### e. **Target Nutrizionali**
- Impostazione calorie target
- Distribuzione macronutrienti (proteine, carboidrati, grassi)
- Personalizzazione obiettivi
- Tracking progressi

#### f. **Piano Alimentare**
- Creazione piani personalizzati
- Pasti giornalieri (colazione, pranzo, cena, spuntini)
- Assegnazione ricette
- Modifica piano

#### g. **Ricette**
- Database ricette
- Aggiunta nuove ricette
- Categorie (colazione, pranzo, cena, spuntino)
- Ingredienti e valori nutrizionali
- Istruzioni preparazione
- Assegnazione a pazienti

#### h. **Documenti**
- Upload documenti (PDF, immagini, ecc.)
- Organizzazione per tipo documento
- Download documenti
- Eliminazione documenti
- Note per documento

#### i. **Appuntamenti**
- Storico appuntamenti paziente
- Creazione nuovo appuntamento
- Modifica/cancellazione
- Note appuntamento
- Stato (confermato, completato, cancellato)

#### j. **Pagamenti**
- Storico pagamenti paziente
- Aggiunta pagamento
- Modifica/eliminazione
- Metodi pagamento
- Stato pagamento (pagato, pending, scaduto)
- Fatture/ricevute

#### k. **Messaggi**
- Chat diretta con paziente
- Invio/ricezione messaggi
- Stato lettura messaggi
- Cronologia completa

#### l. **Subscription (Abbonamenti)**
- Visualizzazione stato abbonamento paziente
- Attivazione/disattivazione subscription
- Piano attivo
- Data scadenza
- Giorni rimanenti
- Storico subscriptions

**Azioni Aggiuntive:**
- Modifica dati anagrafici paziente
- Invio messaggi WhatsApp
- Export dati paziente
- Eliminazione paziente

---

### 5. Richieste Accesso (`/doctor/access-requests`)
**Funzionalità:**
- Lista richieste accesso pazienti
- Approvazione/rifiuto richieste
- Creazione account paziente
- Assegnazione credenziali

---

### 6. Messaggi (`/doctor/messages`)
**Funzionalità:**
- Lista conversazioni con tutti i pazienti
- Messaggi non letti evidenziati
- Risposta rapida
- Filtri per paziente
- Ricerca messaggi

---

### 7. Collaborazioni (`/doctor/collaborations`)
**Funzionalità:**
- Gestione partner (palestre, farmacie, centri estetici)
- Aggiunta nuovo partner
- Modifica/eliminazione partner
- Tracking pazienti referiti da partner
- Calcolo ROI per partner
- Costi mensili partnership
- Analytics collaborazioni

---

### 8. Controllo Economico (`/doctor/financial`)
**Funzionalità:**
- Dashboard finanziaria completa
- Revenue totale (mensile, annuale)
- Expense totali (fisse, variabili)
- Profitto netto
- Gestione spese:
  - Spese fisse (affitto, utenze, software)
  - Spese variabili
  - Frequenza spese
- Gestione entrate (revenues)
- Giorni lavorativi effettivi (calcolo automatico escludendo festività/ferie)
- Target economici
- Grafici entrate/uscite
- Export dati finanziari

---

### 9. Impostazioni Abbonamenti (`/doctor/subscription-settings`)
**Funzionalità:**
- Creazione/modifica piani subscription
- Prezzi e durata
- Funzionalità incluse per piano
- Attivazione/disattivazione piani
- Gestione trial period

---

### 10. Impostazioni Generali (`/doctor/settings`)
**Funzionalità:**
- Profilo dottore (nome, email, bio)
- Impostazioni calendario
- Orari disponibilità
- Giorni lavorativi
- Festività nazionali
- Periodo ferie
- Template messaggi WhatsApp
- Notifiche
- Preferenze applicazione
- Cambio password

---

---

## VISTA PAZIENTE (Dashboard Paziente)

### 1. Dashboard Paziente (`/patient/dashboard`)
**Funzionalità:**

**ACCESSO LIMITATO - RICHIEDE SUBSCRIPTION ATTIVA**

**Se NON abbonato:**
- Messaggio "Contenuto bloccato"
- Card "Abbonati per accedere"
- Link a pagina subscription

**Se abbonato:**
- Benvenuto personalizzato con nome paziente
- Info nutrizionista (nome, contatti)
- Card prossimo appuntamento:
  - Data/ora
  - Stato confermato
  - Link richiesta appuntamento
- Card messaggi:
  - Numero messaggi non letti
  - Link a messaggi
- Card piano alimentare:
  - Stato piano
  - Link a documenti
- Statistiche personali:
  - Ultimo peso registrato
  - Variazione peso (ultima vs precedente)
  - BMI attuale
  - Numero totale misurazioni
- Grafico andamento peso (ultimi 6 mesi)
- Storico misurazioni (tabella):
  - Data
  - Peso
  - BMI
  - Categoria BMI
- Info subscription attiva:
  - Nome piano
  - Giorni rimanenti

**Limitazioni:**
- NON può modificare dati
- NON può aggiungere misurazioni
- SOLO visualizzazione

---

### 2. Messaggi (`/patient/messages`)
**Funzionalità:**
- Visualizzazione messaggi ricevuti dal nutrizionista
- Invio messaggi al nutrizionista
- Cronologia completa chat
- Stato lettura messaggi

**Limitazioni:**
- NON può inviare allegati
- NON può eliminare messaggi

---

### 3. Appuntamenti (`/patient/appointments`)
**Funzionalità:**
- Visualizzazione prossimi appuntamenti confermati
- Storico appuntamenti passati
- Richiesta nuovo appuntamento:
  - Scelta data preferita
  - Scelta orario
  - Tipo (online/presenza)
  - Note aggiuntive
- Stato richieste:
  - Pending (in attesa approvazione)
  - Approved (approvato)
  - Rejected (rifiutato)

**Limitazioni:**
- NON può modificare appuntamenti esistenti
- NON può cancellare appuntamenti
- SOLO richiesta, deve attendere approvazione nutrizionista

---

### 4. Documenti (`/patient/documents`)
**Funzionalità:**
- Visualizzazione documenti caricati dal nutrizionista:
  - Piani alimentari
  - Referti
  - Ricette mediche
  - Guide/materiale educativo
- Download documenti
- Filtro per tipo documento

**Limitazioni:**
- NON può caricare documenti
- NON può eliminare documenti
- SOLO visualizzazione e download

---

### 5. Pagina Subscription (Non in sidebar) (`/patient/subscribe`)
**Funzionalità:**
- Visualizzazione piani disponibili
- Prezzi e durata
- Funzionalità incluse per piano
- Attivazione subscription (se configurato pagamento)

---

---

## RIEPILOGO DIFFERENZE CHIAVE

### Funzionalità SOLO Nutrizionista:
1. Gestione completa pazienti (CRUD)
2. Aggiunta/modifica misurazioni
3. Gestione anamnesi e dati clinici
4. Creazione/modifica piani alimentari
5. Database ricette completo
6. Gestione pagamenti
7. Gestione collaborazioni con partner
8. Controllo economico completo (entrate/uscite/profitti)
9. Impostazioni calendario e disponibilità
10. Approvazione richieste accesso pazienti
11. Approvazione/rifiuto richieste appuntamenti
12. Upload documenti per pazienti
13. Gestione subscriptions (attivazione/disattivazione)
14. Calcolo metabolismo (Metodo Luvaro)
15. Body assessment completo
16. ChatWidget AI
17. Analytics e statistiche avanzate

### Funzionalità SOLO Paziente:
1. Visualizzazione dati personali (READ-ONLY)
2. Richiesta appuntamenti (NO modifica/cancellazione)
3. Messaggi con nutrizionista
4. Download documenti (NO upload)
5. Visualizzazione piano alimentare
6. Tracking progress personale (peso, BMI)

### Funzionalità Comuni (con limitazioni per paziente):
1. **Messaggi**: Nutrizionista vede tutti i pazienti, paziente solo il proprio
2. **Appuntamenti**: Nutrizionista gestisce tutto, paziente solo richieste
3. **Documenti**: Nutrizionista upload/delete, paziente solo view/download
4. **Dashboard**: Nutrizionista vede overview completa, paziente solo dati personali

---

## DECISIONI DA PRENDERE

Per ogni funzionalità paziente esistente, decidere:

### Dashboard Paziente:
- [ ] Mantenere grafico andamento peso?
- [ ] Mantenere tabella storico misurazioni?
- [ ] Mostrare BMI e statistiche?
- [ ] Card subscription con giorni rimanenti?
- [ ] InstallPrompt PWA?

### Messaggi:
- [ ] Permettere invio messaggi o solo ricezione?
- [ ] Mostrare stato lettura messaggi?
- [ ] Allegati (sì/no)?

### Appuntamenti:
- [ ] Solo visualizzazione o anche richiesta?
- [ ] Mostrare storico completo o solo futuri?
- [ ] Cancellazione appuntamenti da parte paziente?

### Documenti:
- [ ] Solo download o anche preview in-app?
- [ ] Filtri per tipo documento?
- [ ] Ricerca documenti?

### Funzionalità da aggiungere?
- [ ] Calendario paziente (visualizzazione)?
- [ ] Notifiche push?
- [ ] Reminder appuntamenti?
- [ ] Tracking obiettivi settimanali?
- [ ] Area ricette pubbliche (senza assegnazione specifica)?
- [ ] FAQ o area supporto?
- [ ] Feedback/valutazioni consulenze?

---

## NOTE TECNICHE

### Access Control (RLS + Helper Front-end):
- Tutte le query sono protette da RLS policies su Supabase
- Helper front-end verificano subscription attiva per feature premium
- Paziente NON può accedere a dati di altri pazienti
- Paziente NON approvato vede pagina "Awaiting Approval"

### Subscription System:
- Feature "Metodo Luvaro" richiede subscription attiva
- Helper: `canAccessMetodoLuvaro()`, `getActiveSubscription()`
- Paziente senza subscription vede `LockedContentCard`

### Patient Approval:
- Nuovo paziente = status "pending"
- Accesso SOLO dopo approvazione dottore (approved_at NOT NULL)
- Pagina speciale: `AwaitingApprovalPage`
