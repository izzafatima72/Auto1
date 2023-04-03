
//Verify that the search results page shows appropriate
//results related to the search term.

import amazonPage from '../page-objects/amazon.cy';

describe('Amazon page', () => {
    const amazon = new amazonPage();

  beforeEach(() => {
    amazon .visit()
  })

  it('should load without errors', () => {
    amazon.verifyPageTitle();
    amazon .verifyPageLoadWithoutErrors()
    amazon.verifySearch();
    amazon.verifyClick();
    amazon.verifyURL();
    amazon.verifyLength();

  })
  
})
