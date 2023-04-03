class amazonPage {


   
    visit() {
      cy.visit('https://www.amazon.com/');
    }
  
    verifyPageTitle() {
        cy.title().should('include', 'Amazon')
    }
  
    getSearchInput() {
      return cy.get('#twotabsearchtextbox');
    }

    getEmail() {
        return cy.get('.a-button-inner > #continue').click();
      }
  
    verifyPageLoadWithoutErrors() {
        cy.get('body').should('not.contain', 'Page Not Found')
        
      }

      verifySearch(){

        cy.get('#twotabsearchtextbox').type('android');

      }

      verifyinValidSearch(){

        cy.get('#twotabsearchtextbox').type('zxcasdqwe');
      }
      verifyClick(){

        cy.get('#nav-search-submit-button').click();
      }

      verifyURL(){

        cy.url().should('include', 'k=android');
      }

      varifyInvalidURL(){
        cy.url().should('include', 'k=zxcasdqwe');


      }

      verifyLength(){

        cy.get('.s-result-item').should('have.length.gt', 0);
      }

      verifyAccountSettings(){

        cy.get('#nav-link-accountList-nav-line-1').click();
      }

      verifyAccountList(){

        cy.get('#nav-link-accountList-nav-line-1').click()

      }

      verifyproductURL(){

        cy.visit('https://www.amazon.com/dp/B0BGYF4CZF')

       
      }

      productTitle(){

        cy.get('#productTitle')
        .should('be.visible')
      }

      productPrice(){

        cy.get('#price_inside_buybox')
        .should('be.visible')
      }

      productavailable(){

        cy.get('#availability')
        .should('be.visible')
      }

      productImage(){

        cy.get('#imgTagWrapperId > img')
        .should('be.visible')
      }

      productFeatures(){

        cy.get('#feature-bullets > ul > li')
        .should('have.length.gt', 0)


      }

      searchProduct(){
        cy.get('[data-asin="B0BLP2G96N"]').click()
      }

      searchProduct2(){

        cy.get('#attach_accessory_dp_1').click()
      }

      addToCart(){

        cy.get('#add-to-cart-button').click()
      }

   
  }
  
  export default amazonPage;

//////////////////////////////////////////

  