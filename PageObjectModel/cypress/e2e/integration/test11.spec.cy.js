
//Test Cross-browser compatibility (the website works 
//correctly in all major browsers, including Chrome, Firefox, 
//Safari, and Edge).

import amazonPage from '../page-objects/amazon.cy';

describe('Cross-Browser Compatibility', () => {
    const amazon = new amazonPage();

    const browsers = [    { name: 'firefox', width: 1280, height: 800 },    { name: 'safari', width: 1280, height: 800 },    { name: 'chrome', width: 1280, height: 800 },    { name: 'edge', width: 1280, height: 800 },  ]
  
    browsers.forEach((browser) => {
      it(`Works correctly in ${browser.name}`, () => {

        cy.viewport(browser.width, browser.height)
         amazon .visit()

      })

    })
    
  })

  