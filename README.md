# HaustierTinder

## Entscheidungen
* Sprache: TypeScript
* Frontend: Vue 3
* Datenbank: Localstorage
* Datenanalyse-Tool: JupyterNotebook
* Aufteilung der Arbeit: nach Features

## Features
* Profil (Suchende): [Tim]
    - Präferenzen (registration (überprüfbar) + nachträglich) 
        -> Filter
    - "Matches" anzeigen
* Profil (Tierheim): [Vicky]
    - Tierinserate anlegen
    - Informationen -> Kontakt

* Administration: [Matthes, Danny]
    - Tierheimprofile anlegen
 
* Login [Danny, Matthes]
    - Enduser, Admin, Tierheime

* Default- / Start-Seite [Tobias, Fabian, Vincent]
    - swipen
    - buttons (match, ablehnen, zurück, history, Filter)
      -> history getrennt nach Matches / abgelehnt 
    - Filter
        * Art -> Unterart
        * Entfernung
        * Alter
    - Tutorial (erstes Öffnen)
 
* Repository-Management [Danny]
    - Dependency Management
    - PR Testing Workflows
    - QoL-Dateien (CODEOWNERS, nvmrc, etc.)
 
* Datenanalyse vorbereiten [Johannes]

![](assets/mockup.png)

### Datenbank:
![](assets/datenbank.jpg)

### Datenstruktur

id: string

User[]

    name: string
    email: email
    password: string
    role: "user"| "admin"|"tierheim"
    id:id
    geseheneTiere:
        {
        ids:[Tierheim_id,Tier_id]
        anzahl:number
        liked:boolean
        }[]

Tierheim[]

    name: string
    standort: string
    id:id
    telefonnummer:string
    email:email
    homepage: string
    tier[]
        name: string
        id: id
        alter: number
        art:string
        rasse:string
        farbe: string
        besonderheiten: string
        


