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

Normalerweise wird die Netzneutralität in einem Netzwerk beachtet, das heißt dass alle Teilnehmer ungehindert Daten austauschen können. Das Netzwerk
macht dabei keine Unterscheidung zwischen den Teilnehmern, so wird jeder gleich behandelt.

Die Internetdienstanbieter versuchen, durch das Einrichten einer künstlichen Priorisierung bestimmter Teilnehmer, ihre Profite zu erhöhen.
Die Netzteilnehmer, die Geld bezahlen, werden bevorzugt behandelt. Da die Bandbreite begrenzt ist, bleibt für die Anderen weniger möglicher Bandbreite übrig.

Dabei kommt es aber auch unweigerlich dazu, dass einige Teilnehmer nicht imstande sind diese Kosten zu entrichten, dazu können zum Beispiel Startups zählen.
Es findet eine Unterteilung des Internets in verschiedene Klassen, eine Klasse für die "lahmen" nicht-Zahler und
eines für die "Premium"-Teilnehmer. Unter diesen Umständen schrumpft das Angebot immer weiter, es bleiben nur noch die Zahlenden. Neue
Konkurrenz kann sich nicht bilden, ohne Konkurrenz kommt es zu keinen Umsetzungen von neuen Ideen und Innovation bleibt außen vor.

## ein Netzwerk in Bürgerhand

Nur eine [dezentrale](https://de.wikipedia.org/wiki/Vermaschtes_Netz) Netzwerkstruktur kann gegen die oben genannten Fehler etwas ausrichten.
Das in Deutschland gegründete Projekt [Freifunk](http://freifunk.net/) stellt dazu offene W-Lan Zugangspunkte bereit.
An diesen kann man sich in das Freifunk Netzwerk einbuchen.
Das Netzwerk besteht aus vielen, vermaschten W-Lan Punkten, die miteinander verbunden sind. Diese werden meist von Freiwilligen unentgeltlich betrieben.

<div class="float-right">
  <div class="video-container youtube">
    <iframe src="https://www.youtube-nocookie.com/embed/cK73sYM3g0Q?rel=0" allowfullscreen></iframe>
  </div>
  <div class="caption">Video von <a href="https://www.youtube.com/user/ArcanisLupus">ArcanisLupus</a></div>
</div>

Die opensource Software [cjdns](https://github.com/cjdelisle/cjdns/blob/master/README.md) geht einen ähnlichen Ansatz. Diese bietet aber einige Vorzügen gegenüber
der von Freifunk eingesetzten Software an. So werden die übertragenden Daten beim Abschicken von dem Sender verschlüsselt und können nur von dem Empfänger wieder
entschlüsselt (genannt [Ende-zu-Ende-Verschlüsselung](https://de.wikipedia.org/wiki/Ende-zu-Ende-Verschl%C3%BCsselung)) werden.

Cjdns hat einen weiteren Vorteil, es muss nämlich nicht oder nur geringfügig konfiguriert werden. Einmal eingerichtet findet es den schnellsten und kürzesten
Weg von alleine. Hierfür wird das Routing einer [verteilten Hashtabelle](https://de.wikipedia.org/wiki/Verteilte_Hashtabelle) verwendet.

Für die Kommunikation wird [IPv6](https://de.wikipedia.org/wiki/Ipv6) eingesetzt. Das bedeutet, dass die vorhandene Software nicht extra an cjdns angepasst werden
muss. Da es einen Standard verwendet, den die meiste Software heutzutage schon beherrschen.

Um Missverständnisse gegenüber cjdns nicht aufkommen zulassen, muss noch erwähnt werden, dass cjdns kein vollständiges "Darknet" ist, auch wenn es im Internet
oft als solches bezeichnet wird. Ein [Darknet](https://de.wikipedia.org/wiki/Darknet) versucht durch seine Arbeitsweise den Absender und Empfänger einer
Nachricht zu verschleiern, das tut cjdns nicht Sollte diese Anonymität einmal benötigt werden, lässt sich ein
Anonymisierungsdienst, wie etwa [Tor](https://www.torproject.org/) oder [i2p](https://geti2p.net/de/), genauso wie jetzt auch im Internet, über cjdns betreiben.


