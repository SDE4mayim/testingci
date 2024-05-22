describe('open',() =>{
    it('verify',() =>{
        cy.log("visit the website")
        cy.visit('/')
        cy.title().should('eq','VET CASTLE')
        cy.url().should('eq','https://vetcastle.com/')
        cy.get('.grow > :nth-child(1) > .font-medium').click()
        cy.url().should('eq','https://vetcastle.com/pricing')
        cy.get(':nth-child(1) > .btn-sm').click()
        cy.url().should('eq','https://vetcastle.com/gsignup')

    })
    it('verify',() =>{
        cy.log("visit the website")
        cy.visit('/')
        cy.title().should('eq','VET CASTLE')
        cy.url().should('eq','https://vetcastle.com/')
        cy.get('.grow > :nth-child(1) > .font-medium').click()
        cy.url().should('eq','https://vetcastle.com/pricing')
        cy.get(':nth-child(2) > .btn-sm').click()
        cy.url().should('eq','https://vetcastle.com/dsignup')

    })
    it('verify',() =>{
        cy.log("visit the website")
        cy.visit('/')
        cy.title().should('eq','VET CASTLE')
        cy.url().should('eq','https://vetcastle.com/')
        cy.get('.grow > :nth-child(1) > .font-medium').click()
        cy.url().should('eq','https://vetcastle.com/pricing')
        cy.get('.max-w-sm > :nth-child(3) > .btn-sm').click()
        cy.url().should('eq','https://vetcastle.com/psignup')

    })




})