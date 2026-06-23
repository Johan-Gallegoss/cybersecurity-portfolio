# Proyecto 01: Descubriendo mi Red

## 📌 Descripción
Este proyecto corresponde al primer laboratorio de fundamentos de redes en un entorno Kali Linux. El objetivo es comprender cómo se configura la red en un sistema operativo Linux y cómo se comunica con Internet.

---

## 🎯 Objetivo
Identificar y analizar la configuración básica de red del sistema, incluyendo:
- Dirección IP
- Puerta de enlace (Gateway)
- Servidores DNS
- Conectividad a Internet
- Ruta de los paquetes hacia un destino externo

---

## 🛠️ Herramientas utilizadas
- Kali Linux
- Terminal Linux
- Comandos de red:
  - ip a
  - ip route
  - cat /etc/resolv.conf
  - ping
  - traceroute

---

## 📡 Actividades realizadas

### 1. Identificación de dirección IP
Se utilizó el comando `ip a` para identificar la IP asignada a la máquina virtual dentro de una red privada (NAT).

### 2. Identificación de Gateway
Se utilizó `ip route` para identificar la puerta de enlace utilizada para la salida a Internet.

### 3. Identificación de DNS
Se revisó el archivo `/etc/resolv.conf` para identificar los servidores DNS configurados.

### 4. Verificación de conectividad
Se utilizó `ping google.com` para comprobar la conectividad hacia Internet mediante ICMP.

### 5. Análisis de ruta de red
Se utilizó `traceroute google.com` para observar los saltos que realizan los paquetes hasta llegar al destino.

---

## 📸 Evidencias
Todas las capturas del laboratorio se encuentran en la carpeta `/capturas`.

---

## 🧠 Conocimientos adquiridos
- Concepto de IP privada y redes NAT
- Función del gateway como puerta de salida
- Resolución de nombres mediante DNS
- Verificación de conectividad con ICMP
- Análisis de rutas de red con traceroute

---

## 📌 Conclusión
Este laboratorio permitió comprender los fundamentos de comunicación en redes, identificando cómo un sistema Linux interactúa con redes internas y externas a través de NAT. Además, se reforzaron conceptos esenciales para análisis de tráfico y diagnóstico de conectividad, base fundamental para roles de ciberseguridad como SOC Analyst. 
