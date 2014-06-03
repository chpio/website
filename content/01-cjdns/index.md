{
  "title": "cjdns"
}
#####

## Überwachung und Zensur

<div class="float-right">
  <div class="video-container youtube">
    <iframe src="https://www.youtube-nocookie.com/embed/iHlzsURb0WI?rel=0" allowfullscreen></iframe>
  </div>
  <div class="caption">Video von <a href="https://www.youtube.com/user/manniacmind">manniac</a></div>
</div>

In unserem Umfeld wird die Privatsphäre immer weiter abgebaut. Diesbezüglich lassen die anhaltenden Veröffentlichungen zu dem NSA-Skandal nur wenig Hoffnung.
Anstatt die Macht der Geheimdienste einzuschränken, wird diese nur weiter [ausgebaut](http://blog.fefe.de/?ts=adcffb0c).

Durch die Maßnahmen, wie zum Beispiel den "[Pornofilter](http://www.gamestar.de/hardware/news/internet/3031353/internet_zensur_in_grossbritannien.html)"
in Großbritannien wird das Internet zensiert.
Dieselbe Technik kann auch zum Blockieren von politischen Meinungen oder der Regierung schadenden Informationen verwendet werden.
Da ist es kein Wunder, dass die [Filtertechnik](http://blog.fefe.de/?ts=af0cd1df) für GB aus einem für Unterdrückung bekanntem Land -*China*- kommt.
Noch ist so ein Filter für Deutschland nicht geplant doch die
[Rufe nach dieser Filterinfrastruktur](http://www.heise.de/newsticker/meldung/Landesmedienchef-will-Pornofilter-fuer-das-Internet-in-Deutschland-2110803.html)
werden immer lauter.

Die zentrale Struktur des Internets stellt hier die Schwachstelle dar. Erst an diesen zentralen Punkten (Internetdienstanbietern und
[zentralen Verbindungsknoten](http://www.heise.de/newsticker/meldung/Bericht-Briten-schnueffeln-Internet-noch-massiver-aus-als-die-USA-1894852.html))
kann eine Filterung und Überwachung der durchgeleiteten Daten stattfinden.


## Netzneutralität

<div class="float-right">
  <div class="video-container youtube">
    <iframe src="https://www.youtube-nocookie.com/embed/AQTkUhjVUf4?rel=0" allowfullscreen></iframe>
  </div>
  <div class="caption">Video von <a href="https://www.youtube.com/user/alexanderlehmann">Alexander Lehmann</a></div>
</div>

Internetdienstanbieter sind Unternehmen, als solche sind sie bemüht einen möglichst hohen Gewinn aus jeder Unternehmenstätigkeit zu erhalten, auch vor unmoralischen
Versuchen der Gewinnmaximierung machen sie nicht Halt.

In einem normalen Netzwerk jeder  Teilnehmer Datenpakete senden und empfangen. Das Netzwerk macht keine Unterscheidung zwischen den Teilnehmern. Dem Netz ist
es egal wer wem etwas schickt, es überträgt nur Datenpakete.

Die Internetdienstanbieter versuchen nun durch den Aufbau einer "Bezahlschranke" ihre Profite zu erhöhen. Die Netzteilnehmer, die Geld dafür ausgeben, werden
bevorzugt behandelt, für die Anderen bleibt dafür weniger Bandbreite übrig.
Dabei kommt es aber auch unweigerlich dazu, dass einige Teilnehmer nicht imstande sind diese Kosten an die Internetanbietern zu entrichten.
Es findet eine Unterteilung des Internets in verschiedene Klassen, eine Klasse für die "lahmen" nicht-Zahler und
eines für die "Premium"-Kunden. Unter diesen Umständen schrumpft das Angebot immer weiter, es bleiben nur noch die zahlenden Kunden. Neue
Konkurrenz kann sich nicht bilden, ohne Konkurrenz kommt es zu keinen Umsetzungen von neuen Ideen und Innovation bleibt außen vor.

## ein Netzwerk in Bürgerhand

Nur eine <a href="https://de.wikipedia.org/wiki/Vermaschtes_Netz">dezentrale</a> Netzwerkstruktur kann gegen die oben genannten Gründe etwas ausrichten.
Das deutsche Projekt [Freifunk](http://freifunk.net/) stellt dazu offene W-Lan Zugangspunkte bereit. An diesen kann man sich in das Freifunk Netzwerk einbuchen.
Das Netzwerk besteht aus vielen, vermaschten W-Lan Punkten, die miteinander verbunden sind. Sie werden von Freiwilligen betrieben.

<div class="float-right">
  <div class="video-container youtube">
    <iframe src="https://www.youtube-nocookie.com/embed/cK73sYM3g0Q?rel=0" allowfullscreen></iframe>
  </div>
  <div class="caption">Video von <a href="https://www.youtube.com/user/ArcanisLupus">ArcanisLupus</a></div>
</div>

Die opensource Software [cjdns](https://github.com/cjdelisle/cjdns/blob/master/README.md) geht einen ähnlichen Ansatz. Diese bietet aber einige Vorzügen gegenüber
der von Freifunk eingesetzten Software an. So werden die übertragenden Daten beim Abschicken von dem Sender verschlüsselt und können nur von dem Empfänger wieder
entschlüsselt (genannt [Ende-zu-Ende-Verschlüsselung](https://de.wikipedia.org/wiki/Ende-zu-Ende-Verschl%C3%BCsselung)) werden. Zusätzlich wird jede Verbindung
mit einem temporären Schlüssel gesichert, dieser wird nur eine kurze Zeit lang verwendet. Gelangt dieser kurzlebige Schlüssel in die Hände von Dritten, können
diese nur den entsprechenden kleinen Teil der Kommunikation entschlüsseln, die Restliche Kommunikation bleibt unangetastet
([Perfect Forward Secrecy](https://de.wikipedia.org/wiki/Perfect_Forward_Secrecy)).

Cjdns hat einen weiteren Vorteil, es muss nämlich nicht oder nur geringfügig konfiguriert werden. Einmal eingerichtet findet es den schnellsten und kürzesten
Weg von alleine. Hierfür wird das Routing einer [verteilten Hashtabelle](https://de.wikipedia.org/wiki/Verteilte_Hashtabelle) verwendet.

Für die Kommunikation wird [IPv6](https://de.wikipedia.org/wiki/Ipv6) eingesetzt. Das bedeutet, dass die vorhandene Software nicht extra an cjdns angepasst werden
muss. Da es einen Standard verwendet, den die meiste Software heutzutage schon nutzen.

Um Missverständnisse gegenüber cjdns nicht aufkommen zulassen, muss noch erwähnt werden, dass cjdns kein vollständiges "Darknet" ist, auch wenn es im Internet
oft als solches bezeichnet wird. Ein [Darknet](https://de.wikipedia.org/wiki/Darknet) versucht durch seine Arbeitsweise den Absender und Empfänger einer
Nachricht zu verschleiern, das tut cjdns nicht, es bietet nur eine Absicherung der Kommunikation. Sollte diese Anonymität einmal benötigt werden, lässt sich ein
Anonymisierungsdienst, wie etwa [Tor](https://www.torproject.org/) oder [i2p](https://geti2p.net/de/), genauso wie jetzt auch im Internet, über cjdns betreiben.


