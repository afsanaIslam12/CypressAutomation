describe('Assertion demo', () => {
    it('Implicit Assertion', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        // Should    and 
        // cy.url().should('include','orangehrmlive.com') 
        // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('contain','orangehrmlive')
/*         cy.url().should('include','orangehrmlive.com') 
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain','orangehrmlive') */

      /*   cy.url().should('include','orangehrmlive.com') 
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrmlive') */
///neg assertion
        cy.url().should('include','orangehrmlive.com') 
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('not.contain','afsana')

        cy.title().should('include','OrangeHRM')
        .and('eq','OrangeHRM')
        .and('not.contain','afsana')

        cy.get('.orangehrm-login-branding > img').should('be.visible')//to check elemet visible
        //cy.get('.orangehrm-login-branding > img').should('exist')//to check elemet exist
        .and('exist')

        cy.xpath("//a").should('have.length','5') // No of links

        cy.get('input[name="username"]').type('Admin'); // provide a value into inputtbox
        cy.get('input[name="username"]').should('have.value','Admin') //value check assertion
        cy.get('input[name="password"]').type('admin123');

  })


  it('Explicit Assertion', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('input[name="username"]').type('Admin'); // provide a value into inputtbox
        cy.get('input[name="password"]').type('admin123');
      // Click the login button
        cy.get('button[type="submit"]').click();


        let expName="Lawrence#$^#% Larry";
        cy.get(".oxd-userdropdown-name").then((x)=>{   //x is variable used as arg of function
                let actName=x.text()

                //BDD STYLE
                expect(actName).to.equal(expName) //pos assertion
                expect(actName).to.not.equal(expName) //neg assertion

                //TDD STYLE
                assert.equal(actName,expName) //pos assertion
                assert.notEqual(actName,expNam) //neg assertion


        }
        
        )

        

  })

})
