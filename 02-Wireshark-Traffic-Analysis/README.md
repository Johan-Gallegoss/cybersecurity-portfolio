# Project 02: Network Traffic Analysis with Wireshark

## 📌 Description
This project focuses on analyzing real network traffic using Wireshark in a Kali Linux environment.  
The objective is to understand how different network protocols behave in real communication scenarios, specifically ICMP, DNS, and TCP.

---

## 🎯 Objective
The main goal of this lab is to identify and analyze network packets in real time, understanding how communication occurs between a local machine and external servers.

---

## 🛠️ Tools Used
- Kali Linux
- Wireshark
- Terminal (CLI)
- Network utilities (ping, curl)

---

## 📡 Activities Performed

### 1. ICMP Traffic Analysis
ICMP packets were captured using Wireshark during a `ping` command execution.

- Echo Request packets were sent from the local machine (10.0.2.15).
- Echo Reply packets were received from the remote server.
- This confirmed active network connectivity between both hosts.

---

### 2. DNS Traffic Analysis
DNS queries were observed when resolving domain names such as `google.com` and `openai.com`.

- The local machine sent DNS queries to the configured DNS server.
- The DNS server responded with multiple IPv4 and IPv6 addresses.
- This process demonstrated how domain names are translated into IP addresses.

---

### 3. TCP and TLS Analysis
A secure HTTPS request was generated using `curl`.

- A TCP 3-way handshake (SYN, SYN-ACK, ACK) was observed, establishing a connection.
- After the TCP connection, a TLS handshake (Client Hello) was initiated.
- This confirmed the use of encrypted communication over HTTPS.

---

## 📸 Evidence
All captured traffic screenshots are available in the `/capturas` folder:

- ICMP Echo Request/Reply
- DNS Queries and Responses
- TCP 3-Way Handshake + TLS Client Hello

---

## 🧠 Key Learnings
- Understanding how ICMP is used for connectivity testing
- DNS resolution process (domain to IP translation)
- TCP 3-way handshake for connection establishment
- TLS handshake for secure communication
- How multiple protocols interact in a single web request

---

## 📌 Conclusion
This lab demonstrates how real network communication is composed of multiple protocol layers working together.  
Using Wireshark, it was possible to observe ICMP, DNS, TCP, and TLS traffic in a real environment, providing foundational skills for network analysis and SOC-level monitoring.