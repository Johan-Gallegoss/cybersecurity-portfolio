# Project 01: Discovering My Network

## 📌 Description
This project is the first networking fundamentals lab performed in a Kali Linux environment. The goal is to understand how network configuration works in a Linux system and how it communicates with the Internet.

---

## 🎯 Objective
To identify and analyze the basic network configuration of the system, including:
- IP address
- Gateway
- DNS servers
- Internet connectivity
- Packet routing to an external destination

---

## 🛠️ Tools used
- Kali Linux
- Linux Terminal
- Network commands:
  - ip a
  - ip route
  - cat /etc/resolv.conf
  - ping
  - traceroute

---

## 📡 Activities performed

### 1. IP address identification
The `ip a` command was used to identify the IP address assigned to the virtual machine within a private NAT network.

### 2. Gateway identification
The `ip route` command was used to identify the default gateway used for external network access.

### 3. DNS identification
The `/etc/resolv.conf` file was checked to identify the configured DNS servers.

### 4. Connectivity test
The `ping google.com` command was used to verify Internet connectivity using the ICMP protocol.

### 5. Network route analysis
The `traceroute google.com` command was used to observe the different hops packets take to reach the destination.

---

## 📸 Evidence
All screenshots for this lab are stored in the `/capturas` folder.

---

## 🧠 Knowledge gained
- Understanding of private IP addressing and NAT networks
- Role of the gateway as an exit point to external networks
- DNS name resolution process
- Network connectivity verification using ICMP
- Route analysis using traceroute

---

## 📌 Conclusion
This lab provided a clear understanding of basic network communication in a Linux environment. It demonstrated how a system interacts with internal and external networks through NAT. These concepts are fundamental for cybersecurity roles such as SOC Analyst.