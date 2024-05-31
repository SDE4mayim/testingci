describe('open',() =>{
    it('verify',() =>{
       cy.visit('https://vetcastle.com')
       cy.get('.grow > :nth-child(2) > .font-medium').click()
       cy.url().should('eq','https://vetcastle.com/signin')
       cy.get('.w-full > .text-gray-400').should('contain','Pet Owners can use this login')
       cy.get('.justify-center > :nth-child(3)').click()
       cy.get('#username').type('srivathsandv2')
       cy.get('#password').type('1SDE@mayim')
       cy.get('.btn').click()
       cy.wait(1000)
       cy.visit("https://vetcastle.com/maindashboard")
       cy.url().should('eq',"https://vetcastle.com/maindashboard")
       cy.get('[href="/csd"] > .MuiListItemText-root > .MuiTypography-root').click()   
       cy.url().should('eq',"https://vetcastle.com/csd")
       cy.get('[data-id="400003"] > [data-field="user_name"]').click()
    })
})



