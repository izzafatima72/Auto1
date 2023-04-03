
//Verify when a product is added to the cart, the cart count 
//is revised accordingly.

import loginPage from '../page-objects/login.cy'
import amazonPage from '../page-objects/amazon.cy';

describe('Login', () => {
  const login = new loginPage()
  const amazon = new amazonPage()

  beforeEach(() => {
    login.visit()
    
  })

  it('should log in successfully', () => {

    login.login()
    login.fillEmail('izza.fatima@devsinc.com');

    amazon.getEmail();

   login.fillPassword('IzzaFatima123');
   login.submit()

  })

  it('should go to the homepage', ()=>{

    //amazon.visit()
    amazon.verifySearch();
    amazon.verifyClick();
    amazon.searchProduct();
    amazon.addToCart();
    amazon.searchProduct2()
    amazon.addToCart();
    

  })
  
})


