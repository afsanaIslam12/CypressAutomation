describe('CSSLocators', () => {
    it('Csslocator', () => {
        //cy.visit("https://automationexercise.com/")
       // cy.visit("https://www.prothomalo.com/")
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.get('h1').should('have.text', 'Automation Practice Website');
        cy.get("#search_query_top").type("T-Shirts") // id tag is optional
        cy.get("[name='submit_search']").click()
        cy.get(". lighter").contains("T-Shirts") //Assertion
        

  })
})
