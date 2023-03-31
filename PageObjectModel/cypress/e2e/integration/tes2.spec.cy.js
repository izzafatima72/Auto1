
//Verify that the homepage loads without errors.

import amazonPage from '../page-objects/amazon.cy';

describe('Amazon page', () => {
    const amazon = new amazonPage();

  beforeEach(() => {
    amazon .visit()
  })

  it('should load without errors', () => {
    amazon.verifyPageTitle();
    amazon.verifyPageLoadWithoutErrors()

  })
  
})
