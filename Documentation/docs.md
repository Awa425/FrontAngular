# Qu'est ce qu'une applicatin front:

# 1-Multiple page app (MPA): `Chaque echange avec le serveur nècéssite une rechargement de la page`

# 2-Single page app (SPA): `Chaque echange avec le navigateur,la page est actualisé par le navigateur (Sans nouveau chargement systématique contrairement au MPA)`

# Qu'est ce qu'un framework :`C'est un ensemble d'outil qui permet de gérer les opérations courantes d'une application.En fait, c'est un ensemble d'outils qui nous permettent d'éviter de toujours « réinventer la roue »`

# Application Clients : `Gestion de 'l'interface,Gestion des évènnements,modification du DOM,etc.`

# Framework vs Library : ` Il existe une différence un peu officielle qui consiste à dire que, il y a une inversion de contrôle dans un framework par rapport à une librairie,c'est-à-dire que dans un framework, ce serait le framework qui appelleraitle code que nous écrirons tandis que dans le cas d'une librairie,c'est notre code, c'est nous qui appelons la librairie.En pratique, et je pense que c'est le plus important,la librairie est, je trouve, plus concentrée sur la gestion de l'UI,tandis que dans le framework, on trouve plus de briques applicatives.`

# Par exemple : `des outils qui nous permettent de gérer une requête HTTP,le routage, etc.De plus, le framework a tendance à fournir un canevas plus conséquent que ce que ferait une librairie.`

# Directive: ` Proprietes specifique de Angular qui permet d'injecter des comportements dans le code HTML`

# Pour la creation des form basee sur des form on import:  ` FormsModule`

# Pour dire a angular de vous gerer un champs(input) :  ` FormsModel dans import de app.module.ts`

# Reactive Form Module  ` Permet de manipuler dynamiquement le formulaire. Il a 4 classe a utiliser y compris FormControl `
` Pour relier le formulaire et le ts, on utilise [formGroup]`
` Pour relier le champs du formulaire et le ts, on utilise [formControlName]`

# Installation bootstrap dans angular: 
` npm install bootstrap`

# Ensuite on l'import dans le style.css 
` @import "~bootstrap/dist/css/bootstrap.css"`

# Pipe : ` Fonction qui transforme l'affichage d'une donnee dans le html`
# Filtre avec les Pipes

# Service: ` On l'utiliser si on veut partager des donnees (c'est un fournisseur de donnees)`

# Routes: 
` 1. Aller dans AppModule et definir votre tabRoute de route et chaque route represente un objet : `
* const tabRoute: Route[ {path: 'produits', component: CatalogComponent}, {},... ]

` 2. Dans le import en bas, on met ce qui permet de gerer les route sur angular `
* RouterModule.forRoot(tabRoute)

` 2. Dire ou est ce qu'on charge ces composant: Dans AppComponent.html, on met :`
* <router-outlet></router-outlet>
# NB: ` Ne faut pas utiliser les href (chargement page) mais plutot routerLink(empeche le chargement)`

# Filter: 
` 1) cree une pipe ng g p "nomPipe"`  
` 2) `