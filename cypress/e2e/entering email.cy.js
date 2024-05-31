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
       cy.reload()
       cy.visit("https://vetcastle.com/maindashboard")
       cy.get('[href="/dsd"] > .MuiListItemText-root > .MuiTypography-root').click()
       cy.url().should('eq',"https://vetcastle.com/dsd")
       cy.get('[data-id="300001"] > [data-field="action"] > .cellAction > .viewbutton').click()
       cy.get('[data-testid="EditIcon"]').click()
       cy.get(':nth-child(2) > :nth-child(9)').clear().type("sjchristo2gmail.com")//clear the mail and entering new email
       cy.get(':nth-child(2) > :nth-child(9)').type("sjchristo@gmail.com")//entering email with existing email
       cy.get('.MuiDialogActions-root > .MuiGrid-container > :nth-child(2) > :nth-child(1)').click()
    })
})