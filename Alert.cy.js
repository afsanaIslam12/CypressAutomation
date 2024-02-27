// cypress/integration/login.spec.js

describe('Alert Test', () => {

    it.skip('JavaScript Alert', () => {
      // JavaScript Alert
      cy.visit('https://practice.cydeo.com/javascript_alerts');
  
      cy.get("button[onclick='jsAlert()']").click();
      cy.on('window:alert',(t)=>{
        //assertions
        expect(t).to.contains('I am a JS Alert');
     })
     cy.get("#result").should('have.text','You successfully clicked an alert')

    });
 
    // Hs confirm alert qith ok and cancel button

    it.skip('JavaScript Confirmation Alert - ok', () => {
      // JavaScript Alert
      cy.visit('https://practice.cydeo.com/javascript_alerts');
  
      cy.get("button[onclick='jsConfirm()']").click();
      cy.on('window:confirm',(t)=>{
        //assertions
        expect(t).to.contains('I am a JS Confirm');
     })
     cy.get("#result").should('have.text','You clicked: Ok')

    });
    it.skip('JavaScript Confirmation Alert - cancel', () => {
      // JavaScript Alert
      cy.visit('https://practice.cydeo.com/javascript_alerts');
  
      cy.get("button[onclick='jsConfirm()']").click();
      cy.on('window:confirm',(t)=>{
        //assertions
        expect(t).to.contains('I am a JS Confirm');
     })

     cy.on('window:confirm',()=>false);//cypress close using 
     cy.get("#result").should('have.text','You clicked: Cancel')

    });


    it.skip('JavaScript Prompt Alert', () => {
      // JavaScript Alert
      cy.visit('https://practice.cydeo.com/javascript_alerts');
      cy.window().then((win)=>{
        cy.stub(win,'prompt').returns('afsana');
        
      })
      cy.get("button[onclick='jsPrompt()']").click();

     cy.get("#result").should('have.text','You entered: afsana')

    });
    it.only('JavaScript Authentication  Alert', () => {
      // JavaScript Alert ex1
/*       cy.visit('https://the-internet.herokuapp.com/basic_auth',{ auth:{
                                                              username: "admin",
                                                              password: "admin"
                                                            }
                                                          });
      cy.get("div[class='example'] p").should('have.contain',"Congratulation") */

           // JavaScript Alert ex2
      cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth');
    });
  });
    