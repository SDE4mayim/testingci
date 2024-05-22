describe('open',() =>{
    it('verify',() =>{
        cy.visit('/')
        cy.title().should("eq","VET CASTLE")
    })
}
)