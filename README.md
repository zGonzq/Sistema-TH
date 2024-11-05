# Presentación y Descripción del Caso
Una empresa que se dedica al cultivo y venta de orquídeas nos explica que está teniendo problemas con el correcto manejo de estas flores dado que los puntos de ajuste óptimos de humedad y temperatura para el cultivo en invernadero son: Nivel de humedad relativa alrededor del 80% y Rango de temperatura de 18ºC – 24ºC (noche – día).

Por lo anterior, ustedes como equipo deberán desarrollar un prototipo web que permita monitorear el cultivo de orquídeas de acuerdo a los siguientes requerimientos:
-	El sistema deberá permitir que se establezca un calendario de riego para las orquídeas y la aplicación recordará cuándo es el momento de regarlas. 
-	La aplicación deberá integrar sensores de humedad que se conecten a través de Bluetooth o Wi-Fi para monitorear el nivel de humedad del aire alrededor de tus orquídeas para ayudar a mantener un ambiente húmedo óptimo para su crecimiento.
-	La aplicación debe mantener un registro histórico de las condiciones ambientales con una frecuencia seleccionada por el usuario (por ejemplo, cada 1 hora) 

#### Se pide lo siguiente:
-	Evaluar la complejidad y viabilidad técnica del prototipo web considerando la incorporación y la integración de tecnologías emergentes de la industria 4.0 (sensores y microcontroladores) proyectando capacidad del prototipo web para realizar las funciones previstas de manera efectiva y eficiente. proponiendo originalidad en la combinación de los elementos tecnológicos.
-	El prototipo debe estar conectando con una base de datos para almacenamiento de los datos ambientales históricos.
-	Finalmente, debe diseñar, ejecutar y documentar Pruebas de funcionamiento del sistema.



## 1.	Requerimientos Funcionales
Descripción detallada de las funciones y características que el software debe cumplir.
ID	Requerimiento	Descripción

### RF1	Establecer Calendario de Riego	
- El sistema debe permitir al usuario establecer un calendario de riego para las orquídeas.

### RF2	Notificar hora de riego	   
- El sistema debe recordar al usuario cuándo es el momento de regar las orquídeas a través de notificaciones.

### RF3	Integración de Sensores de Humedad	   
- El sistema debe integrar sensores de humedad que se conecten a través de Bluetooth o Wi-Fi.

### RF4	Monitorear nivel de humedad	   
- Los sensores deben monitorear el nivel de humedad del aire alrededor de las orquídeas.

### RF5	Registro Histórico de Condiciones Ambientales	   
- El sistema debe mantener un registro histórico de las condiciones ambientales con una frecuencia seleccionada por el usuario (por ejemplo, cada 1 hora).

### RF6	Crear base de datos	   
- Se debe crear base de datos para almacenar los datos históricos. 

### RF7	Visualización de Datos en Tiempo Real	   
- El sistema debe permitir a los usuarios visualizar en tiempo real los datos de humedad y temperatura.

## Como realizaremos el proyecto

### 1.	Definición de la Arquitectura (MVC)
    - Modelo: Base de datos
    - Vista: Interfaz de usuario
    - Controlador: Lógica de negocio

-	Definir la arquitectura del sistema, identificando los componentes y tecnologías a utilizar.

    - Base de datos: MySQL
        - Tablas: 
            - Historico
                - Id (PK): INT
                - Fecha: DATETIME
                - Humedad: FLOAT
                - Temperatura: FLOAT
                - Orquidea: VARCHAR(50)
            - Calendario
                - Id (PK): INT
                - Fecha: DATE
                - Orquidea: VARCHAR(50)
                - Riego: TIME
            - Usuarios
                - Id (PK): INT
                - Nombre: VARCHAR(50)
                - Correo: VARCHAR(50)
                - Rut: VARCHAR(50)
                - Contraseña: VARCHAR(50)

    - Backend: Node.js
        - Dependencias:
            - express
            - mysql
            - mqtt
            - typescript
            - bcrypt
            - jsonwebtoken
            - express-session

        - Rutas:
            - /api
                - /hist/list
                - /hist/:id
                - /hist/add
                - /hist/update
                - /hist/delete

                - /cal/list
                - /cal/:id
                - /cal/add
                - /cal/update
                - /cal/delete

                - /cfg/list
                - /cfg/:id
                - /cfg/add
                - /cfg/update
                - /cfg/delete

                - /usr/list
                - /usr/:id
                - /usr/add
                - /usr/update
                - /usr/delete


    - Frontend: EJS y Bootstrap
        - Páginas:
            - index.ejs
            - historico.ejs
            - calendario.ejs
            - login.ejs
            - registro.ejs

    - Microcontrolador: ESP8266
        - Sensor: DHT11
        - Protocolo de comunicación: MQTT

### 2. Variables de desarrollo

- Base de datos
    - Host: localhost
    - Usuario: root
    - Contraseña: 
    - Base de datos: orquideas

- Backend
    - Puerto: 3000

- Frontend
    - Puerto: 3001

- MQTT
    - Host: mqtt://localhost
    - Puerto: 1883

### 3. Preguntas de Investigación

    - ¿Cómo se conecta un microcontrolador ESP8266 a un servidor MQTT?
    - ¿Cómo se envían datos de un sensor DHT11 a un servidor MQTT?
    - ¿Cómo se conecta un servidor MQTT a una base de datos MySQL?

