describe('open',() =>{
    it('verify',() =>{
        cy.visit('/')
        cy.get(".btn-sm").click()
        cy.title().should("eq","VET CASTLE")
        cy.url().should("eq","https://vetcastle.com/signup")
    })
}
)