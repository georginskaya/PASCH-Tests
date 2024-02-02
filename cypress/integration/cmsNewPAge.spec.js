describe('Veröffentlichen der Seite im CMS und Überprüfung des Kommentarbereichs', () => {
  it('Loggt sich im CMS ein, veröffentlicht die Seite und überprüft den Kommentarbereich', () => {
    // Fülle die Anmeldeinformationen aus (ersetze die Daten durch deine echten Anmeldeinformationen)
    cy.visit('https://cms.goethe.de/goethe/contens/index.cfm?page_id=1490922');
    cy.get('#username').type('Aljona.Heorhinska@goethe.de');
    cy.get('#password').type('GI-Y?ut9KQp');

    // Klicke auf den Anmeldebutton mit der Klasse con-button con-button-save
    cy.get('.con-button-save').click();

    cy.on('uncaught:exception', (err, runnable) => {
      // Check if the error message contains the specific text you want to suppress
      if (err.message.includes("Cannot read properties of undefined (reading 'cBaseApp')")) {
        // Suppress the error and let the test continue
        return false;
      }

      // For other errors, let them propagate
      return true;
    });

    cy.wait(30000);
    // Warte auf die erfolgreiche Anmeldung 
    cy.log('Überprüfe, ob die Publizieren-Button vorhanden ist');
    cy.get('#cms-publishimmediatebutton').should('exist');

    // Klicke auf den Veröffentlichen-Button 
    cy.log('Publiziere die Seite');
    cy.get('#cms-publishimmediatebutton').click();

    // Warte 1 Minute auf die Veröffentlichung (optional: du kannst die Wartezeit anpassen)
    cy.wait(60000);

    // Überprüfe, ob der Kommentarbereich auf der Zielseite vorhanden ist

    cy.log('Überprüfe, ob der Kommentarbereich auf der Zielseite vorhanden ist');
    cy.origin('https://www.pasch-net.de', () => {
      cy.visit('/de/test-pages/fgf.html');
      cy.get('#comment-area-box').should('exist');

      cy.log('Überprüfe, ob die Uploadbutton auf der Zielseite vorhanden ist');
      cy.get('#upload-btn').should('exist');
    });
  });
});
