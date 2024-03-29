# Frontend - Documentación

¡Bienvenido!

Este repositorio contiene el código fuente para el frontend de nuestra aplicación. A continuación, encontrarás instrucciones detalladas sobre cómo ejecutar el frontend localmente, configurar el entorno de desarrollo, así como desplegar la aplicación en un entorno de producción.

## Ejecutar el Frontend Localmente

### Instalación de Dependencias:

Asegúrate de tener Node.js y npm instalados en tu sistema. Luego, en la raíz del proyecto, ejecuta el siguiente comando para instalar las dependencias necesarias:

npm install

### Configuración del Entorno:

Antes de iniciar el servidor de desarrollo, asegúrate de configurar cualquier variable de entorno necesaria. Puedes encontrar un archivo `.env.example` que contiene las variables necesarias. Crea un archivo `.env` y asigna los valores adecuados a cada variable.

### Inicio del Servidor de Desarrollo:

Una vez completada la instalación de las dependencias y la configuración del entorno, puedes iniciar el servidor de desarrollo ejecutando el siguiente comando:

npm run dev

Esto iniciará el servidor de desarrollo y podrás acceder a la aplicación en tu navegador en la dirección `http://localhost:5173`.

## Clonar y Configurar el Proyecto

### Clonar el Repositorio:

Clona este repositorio en tu máquina local utilizando el siguiente comando:

git clone https://github.com/Lucas-Quiroga/kiura-pruebatecnica.git

### Instalar Dependencias:

Una vez clonado el repositorio, navega hasta el directorio del proyecto y ejecuta:

npm install

### Configurar el Entorno:

Sigue los pasos de configuración del entorno mencionados anteriormente.

## Desplegar el Frontend en un Entorno de Producción

### Compilación de Archivos Estáticos:

Antes de desplegar, debes compilar los archivos estáticos de la aplicación. Ejecuta el siguiente comando:

npm run build

Esto generará una carpeta `build` con los archivos estáticos listos para ser desplegados.

### Implementación de la Aplicación:

Copia los archivos estáticos generados en la carpeta `build` a tu servidor web y configura la aplicación para que sea servida adecuadamente.
