describe('open',() =>{
    it('verify',() =>{
       cy.visit('/')
       cy.get('.grow > :nth-child(2) > .font-medium').click()
       cy.url().should('eq','https://vetcastle.com/signin')
      
    })
}
)