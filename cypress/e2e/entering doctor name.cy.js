
describe('open',() =>{
    it('verify',() =>{
          cy.visit('https://vetcastle.com')
          cy.get('.grow > :nth-child(2) > .font-medium').click()
          cy.url().should('eq','https://vetcastle.com/signin')
          cy.get('.justify-center > :nth-child(3)').click()
          cy.get('#username').type("srivathsandv2")
          cy.get('#password').type("1SDE@mayim")
          cy.get('.btn').click()
      cy.visit("https://vetcastle.com/maindashboard")
      cy.get('[href="/hsd"] > .MuiListItemText-root > .MuiTypography-root').click()
      cy.get('[data-id="100002"] > [data-field="action"] > .cellAction > .viewbutton').click()
       cy.get('[data-testid="EditIcon"]').click()
       cy.get('.MuiDialogContent-root > :nth-child(2) > :nth-child(4)').clear()
       cy.get('.MuiDialogContent-root > :nth-child(2) > :nth-child(3)').click()  
       cy.get('.MuiDialogContent-root > :nth-child(2) > :nth-child(4)').should('be.exist')  
    })
})
