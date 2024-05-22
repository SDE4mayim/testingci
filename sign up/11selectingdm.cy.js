describe('logo',() => {
    it('logo',()  =>{
        cy.visit('/')
        cy.get(".grow > :nth-child(1) > .font-medium").click()
        cy.title().should("eq","VET CASTLE")
        cy.url().should("eq","https://vetcastle.com/pricing")
        cy.get(':nth-child(1) > .btn-sm').click()
        cy.url().should("eq","https://vetcastle.com/gsignup")
        cy.get('.justify-center > :nth-child(2)').click()
        cy.url().should("eq","https://vetcastle.com/gsignup")
        cy.get(".text-gray-400").should("contain.text","Rs.3,500 per month")
        cy.get(".text-red-400").should("contain.text","Special Offer: 50% Discount on Yearly Plans. Pay Only Rs. 21,000 Annually (Originally Rs. 42,000)")
        
    })
 })
 