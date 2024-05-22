describe('open',() =>{
    it('verify',() =>{
        cy.log("visit the website")
        cy.visit('/')
        cy.title().should('eq','VET CASTLE')
        cy.url().should('eq','https://vetcastle.com/')
        
    })
}
)