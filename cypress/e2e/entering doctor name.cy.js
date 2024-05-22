const password=require('../fixtures/password.json');
describe('open',() =>{
    it('verify',() =>{
          cy.visit('/')
          cy.get('.grow > :nth-child(2) > .font-medium').click()
          cy.url().should('eq','https://vetcastle.com/signin')
          cy.get('.justify-center > :nth-child(3)').click()
          cy.login(password.username,password.password)
          cy.get('.btn').click()
          cy.visit("/maindashboard")
    //    cy.get('.viewbutton').click()
    //    cy.get('[data-testid="EditIcon"]').click()
    //    cy.get('.MuiDialogContent-root > :nth-child(2) > :nth-child(4)').clear()
    //    cy.get('.MuiDialogContent-root > :nth-child(2) > :nth-child(3)').click()  
    //    cy.get('.MuiDialogContent-root > :nth-child(2) > :nth-child(4)').should('be.exist')  
    })
})
