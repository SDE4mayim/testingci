escribe('contents',()=>{
    it('contents',()=>{
        cy.visit('/')
        cy.title().should("eq","VET CASTLE")
        cy.get("w-8 h-8 fill-current text-purple-600").click()
    })
})