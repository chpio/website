{
  "title": "automatisch starten"
}
#####
Zu erst erstellen wir die Autostartdatei, da Ubuntu Upstart verwendet, befindet sich diese in dem Ordner */etc/init*.
Die Datei selbst wird */etc/init/cjdns.conf* heißen.

```
sudo gedit /etc/init/cjdns.conf
```

```
description "cjdns startup script"

start on (local-filesystems and net-device-up IFACE!=lo)
stop on runlevel [!2345]

respawn
respawn limit 2 300

pre-start script
if ! [ -e /etc/cjdroute.conf ]
then
  (
    umask 077
    /opt/cjdns/cjdroute --genconf > /etc/cjdroute.conf
  )
  echo 'WARNING: A new cjdns configuration file has been generated.'
fi
sed -i 's/"noBackground"\s*:\s*0/"noBackground":1/' /etc/cjdroute.conf
end script

exec /opt/cjdns/cjdroute < /etc/cjdroute.conf
```

Sie sagt im Grunde nur, dass die ausführbare Datei */opt/cjdns/cjdroute* mit der Datei */etc/cjdroute.conf*
als Einstellungen gestartet wird, wenn die Startparameter (hier, das Dateisystem und ein Netzwerkgerät) vorhanden sind.
Gestoppt wird es, wenn der "normale" Betriebsmodus verlassen wird. Außerdem soll es neu gestartet werden, wenn es mal
Abstürzen sollte. Sollten noch keine Einstellungen erzeugt worden sein, wird das nachgeholt.

Damit wird cjdns nicht nur automatisch gestartet, wir können es jetzt auch einfacher steuern:

```
# Stoppen:
sudo stop cjdns

# Starten:
sudo start cjdns

# Den aktuellen Status abrufen:
sudo status cjdns

# Neustarten:
sudo restart cjdns
```
