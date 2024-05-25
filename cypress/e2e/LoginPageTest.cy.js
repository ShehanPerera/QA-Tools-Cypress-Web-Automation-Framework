import LoginPage from  "../pages/LoginPage";
import InventoryPage from "../pages/InventoryPage";
import Utils from "../utils/Utils";


describe('Login Page Test', () => {

    const loginPage = new LoginPage();
    const inventoryPage = new InventoryPage();

    it('Verify invalid inputs for username and password', () => {
        cy.fixture('LoginPageFields').then((data) => {
            data.forEach((inputs) => {
                loginPage.loadPage();
                loginPage.typeUsernamePassword(inputs.username,inputs.password);
                loginPage.clickLoginButton();
                loginPage.verifyLoginPageErrorMessage(inputs.message);

            });

        });
    });

    it('Verify invalid user login', () => {
        loginPage.loadPage();
        loginPage.typeUsernamePassword("standard_user1","secret_sauce");
        loginPage.clickLoginButton();
        loginPage.verifyLoginPageErrorMessage('Epic sadface: Username and password do not match any user in this service');
    });

    it('Verify standard user login', () => {
        loginPage.loadPage();
        loginPage.typeUsernamePassword("standard_user","secret_sauce");
        loginPage.clickLoginButton();
        inventoryPage.verifyProductTitle();
    });
});