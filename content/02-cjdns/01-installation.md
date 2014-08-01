{
  "title": "Installation"
}
#####

## Installation

Für die Installation wird das neuste Ubuntu empfohlen, das ist zur Zeit die Version 14.04.

Zu erst wird das System geupdatet. Beim Ausführen der ersten Zeile kommt eine Passwortabfrage, damit gewährt ihr dem System erweiterte Benutzerrechte, nur
damit kann es die Updates installieren.

```
sudo apt-get update
sudo apt-get upgrade
```

Nach dem das erledigt ist, können alle benötigten Pakete installiert werden.

```
sudo apt-get install nodejs nodejs-legacy git build-essential
```

Dann wechseln wir in den Ordner, in dem cjdns installiert werden soll, bei mir ist das */opt*.

```
cd /opt
```

Im Anschluss wird der cjdns-Code runtergeladen und compiliert.

```
sudo git clone https://github.com/cjdelisle/cjdns.git cjdns
cd cjdns
sudo ./do
```

Das kann schon mal eine Minute dauern.

Wenn alles erfolgreich verlaufen ist, sollte am Ende die Ausgabe `Build completed successfully, type ./cjdroute to begin setup.` am Bildschirm erscheinen.


## Konfiguration erstellen
Die Konfigurationsdatei wird nun von cjdns erzeugt und unter */etc/cjdroute.conf* abgelegt.

```
sudo su -c "(umask 077 && ./cjdroute --genconf > /etc/cjdroute.conf)"
```

Danach können wir cjdns starten.

```
sudo su -c "/opt/cjdns/cjdroute < /etc/cjdroute.conf"
```
Es folgen viele Zeilen über den Start von cjdns, die mit `Cjdns has started up in the background` enden. Danach läuft cjdns im Hintergrund.

Mit dem Befehl

```
sudo killall /opt/cjdns/cjdroute
```

kann cjdns wieder beendet werden Anschließend muss die cjdns richtig eingestellt und abgesichert werden. Das wird in nachfolgenden Tutorials abgehandelt.
