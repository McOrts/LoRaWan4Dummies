# Taller de Internet de las cosas y LoRa para principiantes. Construye tu sensor
La tecnología cada vez es más fácil de usar. Hasta hace poco, la construcción de un sensor típico de temperatura, su programación y la configuración de su conectividad era una tarea complicada. Pero ya existen tecnologías fiables y probadas; muy fáciles de usar como Micro:bit, Scratch y The Thing Networks.

<img src="images/Taller_LoRaWan4Dummies.png" align="center"/>

## En este taller vamos a
* Saber qué son y para qué sirven las comunicaciones LoRaWAN. 
* Montar un multisensor para que nos envíe a nuestro móvil datos de movimiento, temperatura, luz y posición desde casi cualquier parte del mundo y sin coste.
* Aprender a programar en Scratch
* Aprender a configurar un nodo en The Things Networks
* Aprender a enviar alertas a tu móvil

## Necesitarás
Si quieres participar plenamente en este taller y llevarte tu sensor funcionando. Te sugerimos que compres las siguientes placas con anticipación. Aquí tienes los sitios más baratos que hemos encontrado:
<img src="images/BBCmicroBit.png" width="250" align="right"/>

* **BBC micro:bit** [bulk micro-controller with motion detection, compass, LED display and Bluetooth](https://a.aliexpress.com/_d6tASCS)
<img src="images/BitLoranodo.png" width="200" align="right"/>

* **IOT Micro**: [Bit Lora nodo (frecuencia EU 868 - 870 MHz)](https://ebay.us/Abt9Uj)
* **Cable micro-USB** de datos.

## ¿Que es LoRaWAN y para que sirve?

Estamos hablando de un tipo de comunicación inalámbrica que permite transmitir datos a muy larga distancia y con bajo consumo de energía (~100mW). Es ideal para pequeños dispositivos que solo necesitan enviar información discreta como un dato de temperatura o una posición PGS.

<img src="images/LoRa-logo-transp-400x231-300x173.png" width="100" align="left"/>

LoRa es un tipo de modulación de señal de radio desarrollada entre 2008 y 2013 en Francia y adquirida y patentada por la compañía Semtech.

La señal LoRa alcanza fácilmente los 2km en área urbana y más de 10km en zonas rurales. Actualmente el récord tierra-tierra es de 210km con una shield de Arduino de 16$ (febrero 2017) y globo-tierra 832km a principios del 2020 desde Alemania a Países Bajos.

### ¿Por qué TTN?
<img src="images/ttn_logo.png" width="100" align="left"/>

La vuelta de tuerca a esta solución de interconectividad de dispositivos la ha dado la red [The Things Network](https://www.thethingsnetwork.org). Que ha formado una comunidad abierta de *gateways* y nodos que permite la conectividad de dispositivos IoT sin 3G ni WiFi y sin coste. En realidad solo vamos a pagar el copywrite del chip LoRa de los dispositivos que compremos.

### ¿Cómo funciona todo esto
<img src="./images/Arquitectura_LoRaWAN.png"  align="center" />

### ¿tengo cobertura?
Existe un servicio que representa un mapa de alcance y intensidad de señal de los _gateways_ públicos de TTN. Se llama [TTNMapper](https://ttnmapper.org/) y hay una aplicación móvil detrás para hacer este mapeo de alcance.
<img src="images/ttnmapper.png" align="center"/>

## 1º Conectamos todo
La única aplicación que necesitaremos en el ordenador es un navegador de internet para lo que se recomienda Google Chrome. 
Abrimos el buscador Google para encontrar la aplicación web: **Makecode Microbit** [La dirección actual es https://makecode.microbit.org/](https://makecode.microbit.org/)

Una vez dentro de la aplicación podremos **cambiar el idioma** Desde el icono de configuración situado arriba a la derecha.
<img src="./images/makecodemicrobitorg_home.png" align="center" />

En esta pantalla principal seleccionaremos *Nuevo Proyecto* y elegimos un nombre. 

Ahora es el momento de conectar todo incluyendo el cable USB con tu PC. **IMPORTANTE** Asegurate primero de tener la antena conectada a la placa LoRa. Emitir señal sin antena puede sobrecargar el circuito. Si al enchufarlo se te muestra algún mensaje de instalar o actualizar controladores (drives), acepta y continúa hasta completar la instalación.

<img src="images/MicroBit_emparejar_makecode.png" width="200" align="left"/>
Ahora es el momento de activar el dispositivo. De nuevo, desde en icono de configuración, selecciona la opción de emparejar dispositivo (Pair Device). Aparecerá una ventana con la misma opción de nuevo.
Si la matriz de LEDs muestra muestra las letras "lora " desplaz'andose, tu MicroBit LoRa ya estará preparado para programarse. 

## Ejercicio 1: "Hola mundo" 
El lenguaje que vamos a utilizar es, posiblemente uno de los mas sencillos que existen, el [Scratch](https://scratch.mit.edu/). Que es un lenguaje de programación visual pero muy completo y orientado a la educación y a la robótica que ha sido desarrollado por el _MIT Media Lab_. 

En la configuración inicial del nuestro entorno de programación no hay funciones de comunicación LoRa. Por lo que tendremos que añadir esta libreria. De nuevo desde el icono de configuración buscaremos:
<img src="./images/Extension_LoRa_Scratch.png"  align="center" />

<img src="./images/SET_dispositivo_TTN.png"  align="left" />
Ahora ya podemos empezar a programar. Lo primero será añadir los proques para inializar e identificar nuestro dispositivo en la red LoRaWAn de TTN.

### Registro del sensor en la nube TTN
Vamos a utilizar los servicios de TTN que enrutarán el mensaje desde el _gateway_ que reciba por radiofrecuencia el paquete de datos hasta el _endpoint_ que consumirá la aplicación que tome acción con la información contenida en la trama da datos. 

Este dispositivo es del tipo ABP (Activation-by-personalisation) lo que significa que se identificará en la red con un _DevAddr_ y una _Session key_ preconfigurada. Para ello tenemos que completar el registro de una aplicación y un dispositivo. Estos son los pasos a seguir:

### Registro de la aplicación
Nuestro dispositivo se comunicará con la aplicación en la que ha sido registrado. Para registrar un dispositivo por lo tanto, primero hay que añadir una aplicación.

<img src="./images/ttn-add-application.png" width="500" align="right" />

En la consola, selecciona _APPLICATION_ y pulsa _add application_ en la siguiente pantalla. 
- Para el _Application ID_, elige un identificador único, en minúsculas, puedes usar caracteres alfanuméricos peor no guiones ´-´ consecutivos.
- Para  _Description_, elige la descripcion que prefieras.
- No hace falta poner nada en _Application EUI_ 
- En _Handler registration_ deja el valor predeterminado: ttn-handler-eu
- Presiona _Add Application_ para finalizar

Ahora seremos redirigidos a la página con la nueva aplicación añadida donde puedes encontrar la _app EUI_ y el _Access Keys_ generados.
<br>
<img src="./images/ttn-application.png" width="600" align="center" />

### Registro del dispositivo
<img src="./images/ttn-add-device.png" width="400" align="right" />

En TTN un dispositivo (devide) representa la configuración de lo que también llama nodo (node) que a fin de cuentas es nuestro circuito. 
Al acceder al formulario de registro, únicamente tenemos que rellenar el _Device ID_ que será el nombre único de este nodo. Es preferible pulsar el icono marcado en la imagen para que se genere automáticamente el _Device EUI_.

<img src="./images/ttn-add-device_settings.png" width="400" align="right" />

Ahora solo queda cambiar en _settings_ los parámetros de:
* Poner a ABP el _Activation Method_
* Desmarcar _Frame Counter Checks_
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

<img src="./images/ttn-add-device_params.png" width="400" align="right" />

Finalmente pulsaremos _Register_ y pulsaremos el icono con el nombre de nuestro nuevo dispositivo para ver sus datos de configuración. Aquí encontraremos los parámetros que necesitamos por ser un dispositivo de tipo ABP que trasladaremos al bloque de configuraciób de Scratch.

En este punto debemos "Descargar" esta parte del programa en el Microbit para inicializar el dispositivo antes de añadir el bloque de datos a transmitir.

<img src="./images/enviar_dispositivo_TTN.png" width="400" align="right" />

### Bloque de datos
Ahora ya podemos añadir algo de información para transmitir:

### Formato de la trama
La información contenida en la transmisión (payload) está empaquetada en un formato que debemos identificar a fin de poder visualizar los datos contenidos en ella.
las librería que hemos usado utiliza un formato estándar llamado Cayenne LPP. Que permite multiples canales de transmisión de datos simultaneos. Esto lo veremos en el siguiente ejercicio. Para esto, tendremos que volver a la configuración de aplicación y pulsando en la pestaña de _Payload Formats_ accedemos al formulario donde se permite cambiar esto:
<img src="./images/Formato_LPP.png" align="center" />

Ahora ya podemos ver cómo llega la información al cloud de TTN con un formato legible donde veremos nuestro _Hola Mundo_ en forma de un 1 (Verdadero), tal y como pusimos en el bloque del programa:
<img src="./images/data_device_holamundo.png" align="center" />

## Ejercicio 2: Sensor de movimiento

## Ejercicio 3: Alertas en el el móvil.

La forma más fácil y _Maker_ para llevar los mensajes de este dispositivo a nuestro móvil. Es utilizar los servicios de IFTTT (If This Then That).
