class Utils {

    skipError(){
        cy.on('uncaught:exception', (e) => {
            if (e.message.includes('Things went bad')) {
                // we expected this error, so let's ignore it
                return false
            }
        });
    }
    manualTest(){
        cy.expect(true).to.be.true
    }
}
export default Utils;