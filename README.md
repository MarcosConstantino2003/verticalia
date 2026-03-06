# 🌿 Verticalia - Sistema IoT de Riego Sustentable

[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://verticalia.vercel.app/)
[![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)](#)
[![IoT](https://img.shields.io/badge/Hardware-ESP32-red?logo=espressif)](#)
[![Rally](https://img.shields.io/badge/Rally_Latinoamericano-1er_Puesto_UNS-gold)](#)

**Verticalia** es una huerta vertical automatizada y modular orientada a la economía circular. El sistema recicla aguas grises domésticas (como el agua de cocción) mediante un sistema de filtrado físico y biológico, y gestiona el riego de forma inteligente mediante un microcontrolador ESP32 y una aplicación web.

🏆 **Proyecto Ganador (1er Puesto) - Sede UNS | Rally Latinoamericano de Innovación 2025**

<div align="center">
  <img src="public/images/logo.png" alt="Logo" width="300"/>
  
  <h3>An AI-powered Math, Physics, and Statistics Solver<br/><i>Un solucionador impulsado por IA para Matemáticas, Física y Estadística</i></h3>

  <p>
    <a href="#español">Español</a> •
    <a href="#english">English</a>
  </p>
</div>
---

## 🚀 Características Principales

* **Aplicación de Monitoreo:** Permite visualizar métricas del tanque y de cada módulo de la huerta de manera individual, registrar riegos manuales y acceder a guías de cuidado por tipo de plantación.
* **Edge Computing (Offline-First):** El microcontrolador ESP32 almacena localmente las instrucciones de riego. El sistema sigue funcionando y calculando tiempos de apertura de válvulas incluso si la conexión WiFi o la app no están disponibles.
* **Reciclaje de Aguas Grises:** El tanque superior cuenta con un sistema de filtrado en tres etapas (colador/rejilla, sedimentador y filtro biológico) para tratar el agua antes de su uso.
* **Diseño Modular Inteligente:** Mueble en forma de "C" que facilita el ingreso manual del agua en la parte superior y la extracción sencilla de piezas para mantenimiento (especialmente el filtro biológico).
* **Riego Automatizado:** Apertura calculada de servomotores basada en lógica de fechas, tipo de cultivo y señales de sensores.

## 🛠️ Stack Tecnológico

**Software (Aplicación Móvil / Web)**
* **Frontend:** React, TypeScript, CSS (Responsive Design).
* **Hosting:** Vercel (PWA ready).
* **Lógica:** Algoritmos de cálculo de riego e interfaz de control.

**Hardware (IoT & Infraestructura)**
* **Microcontrolador:** ESP32 (Procesamiento centralizado y conectividad).
* **Sensores:** Humedad de suelo (por módulo) y nivel de agua (tanque principal).
* **Actuadores:** Servomotores para apertura/cierre de válvulas.
* **Estructura:** Tuberías de PVC para la línea de riego, cableado electrónico estándar y mueble modular en C.

## ⚙️ Arquitectura del Sistema

1. **Ingreso de Agua:** El usuario introduce aguas grises manualmente en la primera sección del tanque superior.
2. **Filtrado:** El agua pasa por la rejilla, el sedimentador (donde quedan los residuos físicos) y el filtro biológico.
3. **Almacenamiento:** El agua tratada pasa a la segunda sección del tanque, donde sensores de nivel reportan el estado a la app.
4. **Distribución:** El ESP32 lee los sensores de humedad de cada módulo. Cuando es necesario, envía una señal para abrir los servos durante un tiempo lógicamente calculado, distribuyendo el agua por los tubos de PVC.

## 🧑‍💻 Equipo de Desarrollo

Este proyecto fue desarrollado en un plazo de 28 horas durante el Rally Latinoamericano de Innovación 2025 por un equipo multidisciplinario, y si bien el proyecto engloba nueve personas, el equipo de software que llevó a cabo esta aplicación complementaria está compuesto por:

* **Marcos Constantino:** Desarrollo Frontend y DevOps. [Github](https://github.com/MarcosConstantino2003) &  [Linkedin](https://www.linkedin.com/in/marquitosconstantino/)
* **Franco Feullies:** Desarrollo Frontend y DevOps. [Github](https://github.com/francofeuilles/) &  [Linkedin](https://www.linkedin.com/in/francofeuilles/)
* **Tobías Afonso:** Integración de Lógica IoT (ESP32), port a Apk. [Github](https://github.com/TobiasAfonso1234) &  [Linkedin](https://www.linkedin.com/in/tobias-afonso-8abb94241/)


## 🔗 Enlaces

* **Live Demo:** [verticalia.vercel.app](https://verticalia.vercel.app/)
