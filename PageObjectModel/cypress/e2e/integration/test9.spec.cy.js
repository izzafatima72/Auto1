
//Confirm successful navigation to order history.

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

  it('should verify account settings page', ()=>{

    amazon.visit()
   
    amazon.verifyAccountSettings();
    amazon.verifyAccountList();

  })
  
})


