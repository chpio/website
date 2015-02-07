{
  "title": "updaten"
}
#####

Cjdns befindet sich in dauerhafter entwicklung. Daher wird es auch ständig
verbessert. Um diese Verbesserungen nutzen zu können, muss unser Router auf dem
neusten Stand bleiben.

Der Router läuft aber schon eine Weile und daher wollen wir ihn jetzt updaten.

1. Dazu begeben wir uns in das cjdns Installationsverzeichnis:
```
cd /opt/cjdns
```
2. aktuallisieren den Quellcode:
```
sudo git pull
```
3. und werfen den Compiler an:
```
sudo ./do
```
4. im Anschluss muss der Router neugestarten werden:
```
sudo restart cjdns
```

