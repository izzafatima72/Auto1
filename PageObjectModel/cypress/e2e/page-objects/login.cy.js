class loginPage {

    signUp(){

        cy.get('#createAccountSubmit').click();
    }

    firstName(fname){

        const field = cy.get('#ap_customer_name')
      field.clear()
      field.type(fname)
      return this


        //cy.get('#ap_customer_name');
    }




    visit() {
        cy.visit('https://www.amazon.com/');
      
    }

    login(){

        cy.get('#nav-signin-tooltip ').click()

    }
  
    fillEmail(email) {
      const field = cy.get('#ap_email')
      field.clear()
      field.type(email)
      return this
      //
    }

   
    fillPassword(password) {
      const field = cy.get('#ap_password')
      field.clear()
      field.type(password)
      return this
    }

    reenterPassword(password) {
        const field = cy.get('#ap_password_check')
        field.clear()
        field.type(password)
        return this
      }

      signupContinue(){

       const enter= cy.get('#continue')
       enter.click()

      }
  
    submit() {
      const button = cy.get('#signInSubmit')
      button.click()
    }
  
   verifyLoggedIn() {
    cy.url().should('not.include', '/login')
    cy.get('#welcome-message').should('contain', 'Welcome')
    }
  }
  
  export default loginPage
  