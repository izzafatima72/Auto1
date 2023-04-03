
//Verify that the Amazon website is loaded successfully.

import amazonPage from '../page-objects/amazon.cy';


describe('Amazon Website', () => {
  const amazon = new amazonPage();

  it('load the homepage successfully', () => {
    // Navigate to the Amazon homepage
    amazon.visit();
    amazon.verifyPageTitle();
    amazon.getSearchInput().should('be.visible');

  });

});
