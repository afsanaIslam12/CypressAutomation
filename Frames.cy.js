import 'cypress-iframe'


describe('Handle  Frames', () => {

    it.skip('Approch1', () => {
      // JavaScript Alert
      cy.visit('https://the-internet.herokuapp.com/iframe');
  
      const iframe=cy.get("#mce_0_ifr")
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);

        iframe.clear().type("Welcome {cmd+a}") ;
        cy.get("[aria-label='Bold']").click();

    });
    it.skip('Approch2 -by using command', () => {
        // JavaScript Alert
        cy.visit('https://the-internet.herokuapp.com/iframe');
        
/*         const iframe=cy.get("#mce_0_ifr")
          .its('0.contentDocument.body')
          .should('be.visible')
          .then(cy.wrap); */
  
          cy.getIframe("#mce_0_ifr").clear().type("Welcome {cmd+a}") ;
          cy.get("[aria-label='Bold']").click();
  
      });

      it.only('Approch3 -by using command', () => {
        // JavaScript Alert
        cy.visit('https://the-internet.herokuapp.com/iframe');
        
        cy.frameLoaded("#mce_0_ifr")  //load the frame
          cy.getIframe("#mce_0_ifr").clear().type("Welcome {cmd+a}") ;
          cy.get("[aria-label='Bold']").click();
  
      });
   
})