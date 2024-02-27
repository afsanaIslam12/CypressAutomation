// cypress/integration/login.spec.js

describe('Login Test', () => {
    it('should log in with valid credentials', () => {
      // Visit the login page
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
      // Enter username and password
      cy.get('input[name="username"]').type('Admin');
      cy.get('input[name="password"]').type('admin123');
  
      // Click the login button
      cy.get('button[type="submit"]').click();
  
      // Check if the login was successful (you can adjust this assertion based on your application)
      cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
      cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-modulec").contains("Dashboard") //Assertion
      //cy.get('.welcome-message').should('contain.text', 'Welcome, Your Name!');
    });
  
    // Additional tests for invalid credentials, forgot password, etc. can be added
  });
  