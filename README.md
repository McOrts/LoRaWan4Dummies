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

## 1º Conectamos todo

La única aplicación que necesitaremos en el ordenador es un navegador de internet. Recomiendo Chrome. 
Abrimos el buscador Google para encontrar la aplicación web: **Makecode Microbit** [La dirección actual es https://makecode.microbit.org/](https://makecode.microbit.org/)

Una vez dentro de la aplicación podremos **cambiar el idioma** Desde el icono de configuración situado arriba a la derecha.
<img src="./images/makecodemicrobitorg_home.png"  align="center" />

En esta pantalla principal seleccionaremos *Nuevo Proyecto* y ejegimos un nombre. Ahora es el momento de conectar todo incluyendo el cable USB con tu PC. Si al enchufarlo se te muestra algún mensaje de instalar o actualizar controladores (drives), acepta y continúa hasta completar la instalación.

Ahora es el momento de activar el dispositivo. De nuevo, desde en icono de configuración, selecciona la opción de emparejar dispositivo (Pair Device). Aparecerá una ventana con la misma opción de nuevo.
Y con esto tú MicroBit ya estará preparada para programarse.

## Ejercicio 1: "Hola mundo" 



## Ejercicio 2: Sensor de movimiento

## Ejercicio 3: Alertas en el el móvil.

La forma más fácil y _Maker_ para llevar los mensajes de este dispositivo a nuestro móvil. Es utilizar los servicios de 
