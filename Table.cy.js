describe('Table', () => {

beforeEach('Login',()=>{
    cy.visit("https://demo.opencart.com/admin/index.php");
    cy.get("#input-username").type("demo");
    cy.get("#input-password").type("demo");
    cy.get("button[type='submit']").click();
    cy.get(".btn-close").click();
    cy.get("#menu-customer>a").click();//custtomer main menu
    cy.get("#menu-customer>ul>li:first-child").click(); //submenu

})

    it.skip('Check No of rows & Columns', () => {

        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10'); 
        cy.get("table[class='table table-bordered table-hover']>tbody>tr>td").should('have.length','7'); 

  })
  it.skip('Check specific No of rows & Columns', () => {

    cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(6)>td:nth-child(3)")
    .contains('ghh56@gmail.com'); 
    //cy.get("table[class='table table-bordered table-hover']>tbody>tr>td").should('have.length','7'); 

 })
 it.skip('Check all No of rows & Columns', () => {

    cy.get("table[class='table table-bordered table-hover']>tbody>tr")
    .each(($row, index, $rows)=>{
        cy.wrap($row).within(()=>{
        
        
        
        cy.get("td").each(($col, index, $cols)=>{
        cy.log($col.text())
        
        })

    })
    //cy.get("table[class='table table-bordered table-hover']>tbody>tr>td").should('have.length','7'); 

 })

})
it.skip('Check all No of rows & Columns', () => {

    cy.get("table[class='table table-bordered table-hover']>tbody>tr")
    .each(($row, index, $rows)=>{
        cy.wrap($row).within(()=>{
        
        
        
        cy.get("td").each(($col, index, $cols)=>{
        cy.log($col.text())
        
        })

    })
    //cy.get("table[class='table table-bordered table-hover']>tbody>tr>td").should('have.length','7'); 

 })

})
it.only('Pagination', () => {
//find total no of pages
    cy.get(".col-sm-6 text-end").then((e)=>{
        let mytext=e.text();//showing 1 to 
    })

    //cy.get("table[class='table table-bordered table-hover']>tbody>tr>td").should('have.length','7'); 

 })

})
