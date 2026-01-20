# Registre de Camps de Cultiu 🌾

Aplicació web per a gestionar i registrar camps de cultiu amb dades sobre hectàrees, tipus de cultiu i altres informacions rellevants.

## Descripció

Aquest projecte és una aplicació web que permet als usuaris:
- Registrar nous camps de cultiu
- Especificar el nom, hectàrees i tipus de cultiu
- Gestionar la informació de manera centralitzada
- Sincronitzar les dades amb Firebase Firestore

## Tecnologies utilitzades

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Base de dades**: Firebase Firestore
- **Gestor de dependències**: npm

## Requisits

- Node.js (versió 14 o superior)
- npm o yarn
- Navegador web modern

## Instal·lació

1. **Clona o descarrega el repositori**
```bash
git clone https://github.com/MarcArbiolR/DWM-AEA4.git
cd DWM-AEA4
```

2. **Instal·la les dependències**
```bash
npm install
```

3. **Executa l'aplicació**
Obre el fitxer `index.html` directament en el navegador o utilitza un servidor local:
```bash
npx http-server
```

## Estructura del projecte

```
DWM-AEA4/
├── index.html      # Fitxer principal HTML
├── style.css       # Fulles d'estil
├── app.js          # Lògica de l'aplicació
├── package.json    # Dependències del projecte
├── .gitignore      # Fitxers a ignorar en Git
└── README.ca.md    # Aquest fitxer
```

## Característiques

- ✅ Interface senzilla i intuïtiva
- ✅ Integració amb Firebase Firestore
- ✅ Validació de formularis
- ✅ Suport en català

## Configuració de Firebase

L'aplicació utilitza Firebase Firestore per emmagatzemar les dades. Si vols executar-la en el teu projecte personal, necessitaràs:

1. Crear un projecte a [Firebase Console](https://console.firebase.google.com/)
2. Obtenir les credencials de configuració
3. Actualitzar la configuració al fitxer `app.js`

## Ús

1. Obri l'aplicació al navegador
2. Completa el formulari amb les dades del camp:
   - Nom del camp
   - Hectàrees
   - Tipus de cultiu
3. Fes clic a "Afegir camp" per registrar-lo
4. Les dades es sincronitzaran automàticament amb Firebase

## Contribucions

Les contribucions són benvingudes. Per a canvis importants, obri primer una qüestió (issue) per discutir els canvis proposats.

## Llicència

Aquest projecte està disponible sota la llicència MIT.

## Autor

Marc Arbiol Ríos

## Contacte

Per a més informació o preguntes, pots contactar-me a través del repositori.
