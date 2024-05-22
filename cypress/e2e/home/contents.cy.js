describe('contents',()=>{
    it('contents',()=>{
        cy.visit('/')
        cy.title().should("eq","VET CASTLE")
        cy.get('.h1').should("exist")
        cy.get('marquee').should("exist")
        cy.get('.pt-32 > .max-w-3xl > .text-xl').should("contain.text","A single stop solution for all the veterinary hospitals and doctors.")
        cy.get('.aos-init > .btn').should("be.visible")
        cy.get('.pt-32 > :nth-child(2) > .aos-init > .mx-auto').should("exist")
        cy.get(':nth-child(3) > .max-w-6xl > .py-12 > .max-w-3xl > .h2').should("contain.text","The majority our customers do not understand their needs.")
        cy.get('.max-w-sm .h4').should("exist")
        cy.get('.max-w-sm').should("be.visible")
        cy.get(':nth-child(3) > .max-w-6xl > .py-12 > .max-w-3xl > .text-xl').should("contain.text","This solution will be a one stop for all veterinarians.")
        cy.get('.max-w-3xl > .inline-flex').should("be.visible").and("contain.text","Unlock Unlimited Solutions")
        cy.get(':nth-child(4) > .max-w-6xl > .py-12 > .max-w-3xl > .h2').should("be.visible").and("contain.text","Empower Your Veterinary Practice")
        cy.get(':nth-child(4) > .max-w-6xl > .py-12 > .max-w-3xl > .text-xl').should("be.visible").and("contain.text","Meet all your veterinary needs with Vet Castle.")
        cy.get(':nth-child(1) > .md\:col-span-7 > .md\:pr-4').should("be.visible")
        cy.get(':nth-child(1) > .md\:col-span-5 > .max-w-full').should("be.visible")
        cy.get(':nth-child(2) > .md\:col-span-5 > .max-w-full').should("be.visible")
        cy.get('.md\:pl-4').should("be.visible")
        cy.get(':nth-child(3) > .md\:col-span-7 > .md\:pr-4').should("be.visible")
        cy.get(':nth-child(3) > .md\:col-span-5 > .max-w-full').should("be.visible")
        cy.get(':nth-child(5) > .max-w-6xl').should("be.visible")
        cy.get('.md\:col-span-4 > .text-gray-400').should("be.visible")
        cy.get('.md\:col-span-4 > .mb-2').should("exist")
        cy.get('.md\:col-span-8 > :nth-child(1)').should("be.visible")
        cy.get('.md\:col-span-8 > :nth-child(2)').should("be.visible")
        cy.get('.md\:flex > .text-gray-400').should("be.visible")
        cy.get('.md\:flex > .mb-4').should("be.visible")
    })
})
