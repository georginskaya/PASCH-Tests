// cypress/integration/comment_spec.js

// Liste der zu testenden URLs
const urlsToTest = [
  
  'https://www.pasch-net.de/de/lernmaterial/politik-geschichte/30-jahre-wiedervereinigung.html',
  'https://www.pasch-net.de/de/lernmaterial/sport-gesundheit/hast-du-fieber.html',
  'https://www.pasch-net.de/de/lernmaterial/politik-geschichte/30-jahre-wiedervereinigung/24787675.html',
  'https://www.pasch-net.de/de/lernmaterial/politik-geschichte/30-jahre-wiedervereinigung/24787654.html',
  'https://www.pasch-net.de/de/lernmaterial/politik-geschichte/30-jahre-wiedervereinigung/24787630.html',
  'https://www.pasch-net.de/de/lernmaterial/politik-geschichte/30-jahre-wiedervereinigung/24787609.html',
  'https://www.pasch-net.de/de/lernmaterial/politik-geschichte/30-jahre-wiedervereinigung/24787588.html',
  'https://www.pasch-net.de/de/lernmaterial/politik-geschichte/30-jahre-wiedervereinigung/24787564.html',
  'https://www.pasch-net.de/de/lernmaterial/politik-geschichte/30-jahre-wiedervereinigung/24787525.html',
  'https://www.pasch-net.de/de/lernmaterial/politik-geschichte/30-jahre-wiedervereinigung/24787495.html',
  'https://www.pasch-net.de/de/lernmaterial/unterricht/onlineseminar.html',
  'https://www.pasch-net.de/de/lernmaterial/stadt-leben/meine-stadt.html',
  'https://www.pasch-net.de/de/lernmaterial.html',
  'https://www.pasch-net.de/de/lernmaterial/stadt-leben/geburtstag.html',
  'https://www.pasch-net.de/de/lernmaterial/sport-gesundheit/lieblingssport-fussball-robin.html',
  'https://www.pasch-net.de/de/lernmaterial/sport-gesundheit/lieblingssport-fussball-jasmin.html',
  'https://www.pasch-net.de/de/lernmaterial/wissen-umwelt/marwah-kocht-ein-herbstmenue.html',
  'https://www.pasch-net.de/de/lernmaterial/wissen-umwelt/bunter-herbst-auf-dem-markt.html',
  'https://www.pasch-net.de/de/lernmaterial/stadt-leben/mein-zimmer-finn.html',
  'https://www.pasch-net.de/de/lernmaterial/stadt-leben/mein-zimmer-kim.html',
  'https://www.pasch-net.de/de/lernmaterial/stadt-leben/bunt-und-vielfaeltig-familien.html',
  'https://www.pasch-net.de/de/lernmaterial/stadt-leben/bunt-und-vielfaeltig-familien/24835126.html',
  'https://www.pasch-net.de/de/lernmaterial/stadt-leben/bunt-und-vielfaeltig-familien/24835108.html',
  'https://www.pasch-net.de/de/lernmaterial/stadt-leben/bunt-und-vielfaeltig-familien/24835078.html',
  'https://www.pasch-net.de/de/lernmaterial/stadt-leben/bunt-und-vielfaeltig-familien/24835036.html',
  'https://www.pasch-net.de/de/lernmaterial/sternchentexte/zukunft-des-reisens.html',
  'https://www.pasch-net.de/de/lernmaterial/sternchentexte/zukunft-des-reisens/24643025.html',
  'https://www.pasch-net.de/de/lernmaterial/sternchentexte/zukunft-des-reisens/24643217.html',
  'https://www.pasch-net.de/de/lernmaterial/sternchentexte/zukunft-des-reisens/tourism-watch.html',
  'https://www.pasch-net.de/de/lernmaterial/sternchentexte/zukunft-des-reisens/24643178.html',
  'https://www.pasch-net.de/de/lernmaterial/sternchentexte/zukunft-des-reisens/24643085.html',
  'https://www.pasch-net.de/de/lernmaterial/stadt-leben/podcasts-kulturweit.html',
  'https://www.pasch-net.de/de/lernmaterial/stadt-leben/podcasts-kulturweit/22794019.html',
  'https://www.pasch-net.de/de/lernmaterial/stadt-leben/podcasts-kulturweit/24835360.html',
  'https://www.pasch-net.de/de/lernmaterial/stadt-leben/podcasts-kulturweit/24835306.html',
  'https://www.pasch-net.de/de/lernmaterial/sternchentexte/fleischlos-leben-ernaehrung.html',
  'https://www.pasch-net.de/de/lernmaterial/sternchentexte/fleischlos-leben-ernaehrung/24701113.html',
  'https://www.pasch-net.de/de/lernmaterial/sternchentexte/fleischlos-leben-ernaehrung/24643141.html',
  'https://www.pasch-net.de/de/lernmaterial/sternchentexte/fleischlos-leben-ernaehrung/24701213.html',
  'https://www.pasch-net.de/de/lernmaterial/kultur-musik/silvester-und-neujahr-in-dtl.html'


];

// Cypress-Test für jeden Link
urlsToTest.forEach(url => {
  describe('Kommentarbereich überprüfen', () => {
    it(`Besuche die Seite und überprüfe kommentrae für ${url}`, () => {
      // Besuche die Webseite
      cy.visit(url);

      // Hier könntest du den Code für das Schließen des Cookie-Banners einfügen, falls erforderlich

      // Überprüfe das Textarea-Element
      cy.get('#comment-area-box').should('exist');
    });
  });
});