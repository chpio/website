{
  "title": "Firewall"
}
#####

Eine Firewall brauchen wir, damit unser Computer von ungewollten Zugriffen geschützt wird. Wir konfigurieren die Firewall, so dass sie Zugriffe von unserem Rechner
und die Antwort auf diese zulässt. Eingehende Verbindungen werden aber verhindert.

Alle cjdns-Verbindungen sind verschlüsselt. Das kann ein Vorteil, aber auch ein Nachteil, wie in diesem Fall, sein. Durch die Verschlüsselung können wir nicht mehr in
den Traffic hineinsehen. Somit sehen wir die für firewalling benötigten Parameter, wie Ports, Ziel- und Quelladresse eines Pakets nicht mehr.
Deshalb können wir nur dort ansetzen, wo die Daten nicht Verschlüsselt vorliegen, das ist nur auf dem cjdns-Rechner der Fall. Aus diesem Grund werden wir
eine ip6tables-Firewall auf diesem aufsetzten und einrichten.

Benötigt wird wieder ein möglichst aktuelles System mit zum Beispiel Ubuntu 14.04. Die Firewall-Konfiguration legen wir unter */etc/cjdns.firewall* an.

```
sudo gedit /etc/cjdns.firewall
```

Danach werden dort die Einstellungen eingefügt:

```bash
#!/bin/sh -e

# ----- Konfiguration -----

# virtuelle cjdns-Schnittstelle
CJDNS_TUN="tun0"

# Erlaubte TCP-Ports (für z.B. Server)
TCP_INPUT_PORTS=""

# Erlaubte UDP-Ports (für z.B. Server)
UDP_INPUT_PORTS=""

# ----- Konfiguration-Ende -----


# ist iptable überhaupt für IPv6 verfügbar?
which ip6tables

# eine eigene Verarbeitungskette für cjdns anlegen
ip6tables -N CJDNS_INPUT || ip6tables -F CJDNS_INPUT
# alle cjnds-Pakete auf die angelegte Kette leiten
ip6tables -C INPUT -i $CJDNS_TUN -j CJDNS_INPUT || ip6tables -I INPUT -i $CJDNS_TUN -j CJDNS_INPUT

# erlaube eingehende Pakete, wenn die Verbindung von innen aufgebaut wurde
ip6tables -A CJDNS_INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT

# pings erlauben
ip6tables -A CJDNS_INPUT -p icmpv6 --icmpv6-type echo-request -j ACCEPT

# erlaube eingehende TCP-Verbindungen (müssen in TCP_INPUT_PORTS eingetragen werden)
if [ -n "$TCP_INPUT_PORTS" ]
then
for PORT in $TCP_INPUT_PORTS
do
  ip6tables -A CJDNS_INPUT -m state --state NEW -p tcp --dport ${PORT} -j ACCEPT
done
fi

# erlaube eingehende UDP-Verbindungen (müssen in UDP_INPUT_PORTS eingetragen werden)
if [ -n "$UDP_INPUT_PORTS" ]
then
for PORT in $UDP_INPUT_PORTS
do
  ip6tables -A CJDNS_INPUT -m state --state NEW -p udp --dport ${PORT} -j ACCEPT
done
fi

# alle anderen Pakete blockieren
ip6tables -A CJDNS_INPUT -j DROP

echo "cjdns firewall up"
```

Jetzt machen wir die Datei noch ausführbar:

```
sudo chmod u+x /etc/cjdns.firewall
```

Und führen diese anschließend aus, es sollte `cjdns firewall up` am Ende der Ausgabe erscheinen:

```
sudo /etc/cjdns.firewall
```

Jetzt ist unser Computer durch Zugriffe aus dem cjdns-Netz geschützt, aber nur bis zum nächsten Neustart, danach muss die Firewall manuell gestartet werden.
Wir wollen aber natürlich, dass der Rechner automatisch nach dem Start von der Firewall geschützt wird und wir uns nicht mehr darum kümmern müssen.
Dazu erstellen wir ein Upstart-Script, diese platzieren wir unter */etc/init/cjdns.firewall.conf*.


```
sudo gedit /etc/init/cjdns.firewall.conf
```

In die Datei wird folgender Inhalt eingefügt:

```
description "cjdns firewall script"

start on started cjdns

task

exec /etc/cjdns.firewall
```

Das Script sagt dem Rechner, dass die Firewall zusammen mit cjdns gestartet werden soll.
