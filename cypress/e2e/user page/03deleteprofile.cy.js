describe('editing',()=>{
    it('editing',()=>{
        cy.visit('/')
        cy.get(".grow > :nth-child(2) > .font-medium").click()
        cy.title().should("eq","VET CASTLE")
        cy.url().should("eq","https://vetcastle.com/signin")
        cy.get(".justify-center > :nth-child(3)").click()
        cy.get("#username").type("srivathsandv2")
        cy.get("#password").type("1SDE@mayim")
        cy.get(".btn").click()
        cy.url().should("eq","https://vetcastle.com/maindashboard")
        cy.reload()
        cy.get('[href="/hsd"]').click()
        cy.get("#:r2:").select(10)//fail


        /*pass : cy.get('[aria-label="Go to next page"]').click()
        cy.get('[aria-label="Go to next page"]').click()
        cy.get('[aria-label="Go to next page"]').click()
        cy.get('[aria-label="Go to next page"]').click()
        cy.get('[aria-label="Go to next page"]').click()
        cy.get('[aria-label="Go to next page"]').click()
        cy.get('[aria-label="Go to next page"]').click()
        cy.get('[aria-label="Go to next page"]').click()
        cy.get('[data-id="100051"] > [data-field="action"] > .cellAction > .viewbutton').click()
        cy.get("[data-testid='EditIcon']").click()
        cy.get("[data-testid='DeleteIcon']").click()*/
    })
})