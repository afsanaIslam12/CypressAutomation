describe('Check UI elements', () => {
   /*  it('Check radio button', () => {
        //Visibility check radio button
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("#male").should('be.visible')
        cy.get("#female").should('be.visible')

        //Selecting radio button
        cy.get("#female").check().should('be.checked')
        cy.get("#male").should('not.be.checked')
        cy.get("#male").check().should('be.checked')
        cy.get("#female").should('not.be.checked')

  }) */


  it('Check checkbox ', () => {
    //Visibility check checkbox
    cy.visit("https://testautomationpractice.blogspot.com/")
    cy.get("input#monday").should('be.visible')
    

    //Selecting  checkbox -monday
    //cy.get("input#monday").check().should('be.checked')
        //Selecting  checkbox -monday
   // cy.get("input#monday").uncheck().should('not.be.checked')

    //Selecting all checkbox 
    //cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')


    
    //Selecting first and last checkbox 
    cy.get("input.form-check-input[type='checkbox']").first().check()
    cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')
})

})
