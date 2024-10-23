// e2e/earning_wallet.test.js

describe('Earnings and Wallet Screen Tests', () => {
    beforeAll(async () => {
      // Launch the app before running tests
      await device.launchApp();
    });
  
    it('should display MXRF11 on Earnings screen and in Wallet', async () => {
      await element(by.text('Earnings')).tap();
      await expect(element(by.text('MXRF11'))).toBeVisible();
      await element(by.text('Wallet')).tap();
      await expect(element(by.text('MXRF11'))).toBeVisible();
    });


    it('should display VISC11 on Earnings screen and in Wallet', async () => {
      await element(by.text('Earnings')).tap();
      await expect(element(by.text('VISC11'))).toBeVisible();
      await element(by.text('Wallet')).tap();
      await expect(element(by.text('VISC11'))).toBeVisible();
    });
    
    
    it('should display RVBI11 on Earnings screen and in Wallet', async () => {
      await element(by.text('Earnings')).tap();
      await expect(element(by.text('RVBI11'))).toBeVisible();
      await element(by.text('Wallet')).tap();
      await expect(element(by.text('RVBI11'))).toBeVisible();
    });

    afterAll(async () => {
      // Close the app before running tests
      await device.terminateApp( );
    });
  });
  