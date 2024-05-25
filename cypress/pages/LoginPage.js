class LoginPage {

    loadPage(){
        cy.visit(Cypress.env('baseUrl'));
    }
    standardUserlogin(){
        this.typeUsernamePassword(Cypress.env('username'),Cypress.env('password'));
        this.clickLoginButton();

    }
    typeUsernamePassword(username,password){
        if(username!=''){
            this.typeUsername(username);
        }
        if(password!=''){
            this.typePassword(password);
        }
    }
    typeUsername(username){
        cy.get('#user-name').type(username);
    }
    typePassword(password){
        cy.get('#password').type(password);
    }
    clickLoginButton(){
        cy.get('#login-button').click();
    }
    verifyLoginPageErrorMessage(message){
        cy.get('h3[data-test=\'error\']').contains(message);
    }

}

export default LoginPage