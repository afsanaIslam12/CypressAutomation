describe('CSSLocators', () => {
    it('Xpathlocator', () => {
        //cy.visit("https://automationexercise.com/")
       // cy.visit("https://www.prothomalo.com/")
        //cy.visit("https://shop.shajgoj.com/product-category/skin/")
        //cy.xpath("//div[@class='ais-infinite-hits ais-hits']/div").should('have.length',7)
        cy.visit("https://automationexercise.com/brand_products/Polo")
        cy.xpath("//div[@class='col-sm-9 padding-right']/div").should('have.length',7)

  })
})
