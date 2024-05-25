import LoginPage from  "../pages/LoginPage";
import InventoryPage from "../pages/InventoryPage";
import Utils from "../utils/Utils";



describe('Inventory Page Test', () => {

    const loginPage = new LoginPage();
    const inventoryPage = new InventoryPage();

    it('Verify Details on Inventory page', () => {
        loginPage.loadPage();
        loginPage.standardUserlogin();
        inventoryPage.verifyProductTitle();
        inventoryPage.verifyCartIcon();
        inventoryPage.verifyItems();
    });
    it('Verify Add/Remove to cart', () => {
        loginPage.loadPage();
        loginPage.standardUserlogin();
        inventoryPage.verifyProductTitle();
        inventoryPage.verifyCartIcon();
        inventoryPage.verifyItemStatus('Sauce Labs Backpack','Add to cart');
        inventoryPage.clickAddtoCart('Sauce Labs Backpack');
        inventoryPage.verifyItemStatus('Sauce Labs Backpack','Remove');
        inventoryPage.clickRemovefromCart('Sauce Labs Backpack');


    });
    it('Verify Cart item count function', () => {
        loginPage.loadPage();
        loginPage.standardUserlogin();
        inventoryPage.verifyProductTitle();
        inventoryPage.verifyCartIcon();
        inventoryPage.clickAddtoCart('Sauce Labs Backpack');
        inventoryPage.verifyCartItemCount(1);
        inventoryPage.clickAddtoCart('Sauce Labs Bolt T-Shirt');
        inventoryPage.verifyCartItemCount(2);
        inventoryPage.clickRemovefromCart('Sauce Labs Backpack');
        inventoryPage.verifyCartItemCount(1);

    });
});