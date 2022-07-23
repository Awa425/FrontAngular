# Generation package.json
` npm init `

# Generation package de cnfig.json
` tsc --init `

# Actualisation automatique du projet sur le server
` npm install lite-server --save-dev` 

# Dist contient tous les fichiers .js des fichiers .ts trouvants dans le doc et pour l' avoir execute cette comande 
` tsc --watch` 

# puis aller dans tsconfig.json et decommente le outDir (dist represente le nom du dossier contenent les fichier .js)
`  "outDir": "./dist", `

# Dans package.json, dans la partie script, on met cette comm pour avoir la transpilation et le lance automatique du server
` "start": "tsc --watch | lite-server"`

# Pour lancer le srver : ` npm start`


# +++++++++++++++ ANGULAR +++++++++++++++++

# Angular Installation NMP` npm install -g @angular/cli`

# Lancer le serveur : ` ng serve`

