# Registro de Campos de Cultivo 🌾

Aplicación web para gestionar y registrar campos de cultivo con datos sobre hectáreas, tipo de cultivo y otra información relevante.

## Descripción

Este proyecto es una aplicación web que permite a los usuarios:
- Registrar nuevos campos de cultivo
- Especificar el nombre, hectáreas y tipo de cultivo
- Gestionar la información de manera centralizada
- Sincronizar los datos con Firebase Firestore

## Tecnologías utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Base de datos**: Firebase Firestore
- **Gestor de dependencias**: npm

## Requisitos

- Node.js (versión 14 o superior)
- npm o yarn
- Navegador web moderno

## Instalación

1. **Clona o descarga el repositorio**
```bash
git clone https://github.com/MarcArbiolR/DWM-AEA4.git
cd DWM-AEA4
```

2. **Instala las dependencias**
```bash
npm install
```

3. **Ejecuta la aplicación**
Abre el archivo `index.html` directamente en el navegador o utiliza un servidor local:
```bash
npx http-server
```

## Estructura del proyecto

```
DWM-AEA4/
├── index.html      # Archivo principal HTML
├── style.css       # Hojas de estilo
├── app.js          # Lógica de la aplicación
├── package.json    # Dependencias del proyecto
├── .gitignore      # Archivos a ignorar en Git
└── README.es.md    # Este archivo
```

## Características

- ✅ Interfaz simple e intuitiva
- ✅ Integración con Firebase Firestore
- ✅ Validación de formularios
- ✅ Soporte en español y catalán

## Configuración de Firebase

La aplicación utiliza Firebase Firestore para almacenar los datos. Si deseas ejecutarla en tu proyecto personal, necesitarás:

1. Crear un proyecto en [Firebase Console](https://console.firebase.google.com/)
2. Obtener las credenciales de configuración
3. Actualizar la configuración en el archivo `app.js`

## Uso

1. Abre la aplicación en el navegador
2. Completa el formulario con los datos del campo:
   - Nombre del campo
   - Hectáreas
   - Tipo de cultivo
3. Haz clic en "Añadir campo" para registrarlo
4. Los datos se sincronizarán automáticamente con Firebase

## Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes, abre primero una incidencia (issue) para discutir los cambios propuestos.

## Licencia

Este proyecto está disponible bajo la licencia MIT.

## Autor

Marc Arbiol Ríos

## Contacto

Para más información o preguntas, puedes contactarme a través del repositorio.
