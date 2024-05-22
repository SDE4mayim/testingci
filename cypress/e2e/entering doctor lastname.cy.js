describe('open',() =>{
    it('verify',() =>{
       cy.visit('/')
       cy.get('.grow > :nth-child(2) > .font-medium').click()
       cy.url().should('eq','https://vetcastle.com/signin')
       cy.get('.w-full > .text-gray-400').should('contain','Pet Owners can use this login')
       cy.get('.justify-center > :nth-child(3)').click()
       cy.get('#username').type("srivathsandv2")
       cy.get('#password').type("1SDE@mayim")
       cy.get('.btn').click()
       cy.visit("/maindashboard")
       cy.get('[href="/dsd"] > .MuiListItemText-root > .MuiTypography-root').click()
       //cy.get('.viewbutton').click()
       cy.get('[data-id="300001"] > [data-field="action"] > .cellAction > .viewbutton').click()
     //  cy.get('.MuiDialogContent-root > :nth-child(2) > :nth-child(5)').type("christopher")//adding first name with existing name
      cy.get('.MuiDialogContent-root > :nth-child(2) > :nth-child(5)').clear().type("christopher")//clearing first name wntering new name
    })
})