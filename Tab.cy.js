describe('Tab Test', () => {

    it.skip('Approch1', () => {
      // JavaScript Alert
      cy.visit('https://the-internet.herokuapp.com/windows');
  
      cy.get('.example >a').invoke('removeAttr','target').click();
      cy.url().should('include','https://the-internet.herokuapp.com/windows/new');
      cy.wait(5100)
      cy.go('back')  

    });

    it('Approch2', () => {
        // JavaScript Alert
        cy.visit('https://the-internet.herokuapp.com/windows');
    
        cy.get('.example >a').then((e)=>{
            let url=e.prop('href')
            cy.visit(url)
        })
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new');
        cy.wait(5100)
        cy.go('back')  //back to parent
        
      });
})