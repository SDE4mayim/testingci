describe('open',() =>{
    it('verify',() =>{
        cy.visit('/')
        cy.get(".grow > :nth-child(1) > .font-medium").click()
        cy.title().should("eq","VET CASTLE")
        cy.url().should("eq","https://vetcastle.com/pricing")
    })
}
)