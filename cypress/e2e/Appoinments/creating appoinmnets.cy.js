describe('sick',()=>{
    it('sickes',()=>{
        cy.visit("http://vetcastle.com")
        cy.url().should('eq','https://vetcastle.com/')
        cy.get('.grow > :nth-child(2) > .font-medium').click()
        cy.url().should('eq',"https://vetcastle.com/signin")
        cy.get('.justify-center > :nth-child(3)').click()
        cy.get('#username').type('srivathsandv2')
        cy.get('#password').type('1SDE@mayim')  
        cy.get('.btn').click()
        cy.visit("https://vetcastle.com/maindashboard")
        cy.get('[href="/asd"] > .MuiListItemText-root > .MuiTypography-root').click()
        cy.url().should('eq',"https://vetcastle.com/asd")
        cy.get('.MuiGrid-container > :nth-child(3) > .MuiButtonBase-root').click()
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-select').click()
        cy.get('[data-value=400001]').click()
        cy.get('.MuiDialogContent-root > .MuiGrid-container > :nth-child(2)').click()
        cy.get('[data-value="300004"]').click()
        cy.get('.MuiDialogContent-root > .MuiGrid-container > :nth-child(3)').click()




        
    })
})