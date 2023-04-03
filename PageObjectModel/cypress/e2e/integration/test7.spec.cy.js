
//Verify unsuccessful search for an invalid product.

import amazonPage from '../page-objects/amazon.cy';

describe('Amazon page', () => {
    const amazon = new amazonPage();

  beforeEach(() => {
    amazon .visit()
  })

  it('should load without errors', () => {
    amazon.verifyPageTitle();
    amazon .verifyPageLoadWithoutErrors()
    amazon.verifyinValidSearch();
    amazon.verifyClick();
    amazon.varifyInvalidURL();
    amazon.verifyLength();

  })
  
})



















