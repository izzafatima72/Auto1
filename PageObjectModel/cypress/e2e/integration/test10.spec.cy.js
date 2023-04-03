
//Test that product pages depict all relevant details.

import amazonPage from '../page-objects/amazon.cy';

describe('Amazon product page', () => {
    
    it('Test that product pages depict all relevant details.', () => {

        const amazon = new amazonPage()

        amazon.verifyproductURL();
        amazon.productTitle();
        amazon.productavailable();
        amazon.productImage();
        amazon.productFeatures();     

    })

  })
  

  
  
  