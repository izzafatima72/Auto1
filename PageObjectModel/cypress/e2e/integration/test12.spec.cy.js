
//Sign-Up 

import loginPage from '../page-objects/login.cy'


describe('Login', () => {
  const login = new loginPage()


  beforeEach(() => {
    login.visit()
    
  })

  it('should log in successfully', () => {

    login.login()

    login.signUp();

    login.firstName('IzzaFatima');
    login.fillEmail('izzafatima@devsinc.com');
    login.fillPassword('12134567890');
    login.reenterPassword('12134567890')
    login.signupContinue();
 

  })

})
