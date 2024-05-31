describe('open',() =>{
    it('verify',() =>{
        cy.visit('https://vetcastle.com')
        cy.get(".btn-sm").click()
        cy.title().should("eq","VET CASTLE")
        cy.url().should("eq","https://vetcastle.com/signup")
        cy.get(".border-b-2").click()
        cy.get("#username").type("2dv_srivathsan_")
        cy.get("#first-name").type("Srivathsan")
        cy.get("#last-name").type("D V")
        cy.get('#hospitalCategory').select("Private Practices")
        cy.get(":nth-child(6) > .w-full > .react-tel-input > .form-control").type("9360511617")
        cy.get(":nth-child(7) > .w-full > .react-tel-input > .form-control").type("9658745632")
        cy.get("#email").type("sdemayim1@gmail.com")
        cy.get("#password").type("DVSrivathsan")
        cy.get("#address").type("TNHB, VIRUPATCHIPURAM")
        cy.get("#country").select("India")
        cy.get("#state").select("Tamil Nadu")
        cy.get("#city").select("Dharmapuri")
        cy.get("#pincode").type("636705")
        cy.get('.btn').click()
        cy.get('.MuiAlert-message').should("contain.text","Error creating Hospital Profile : Profile creation error.")
        // cy.get('.MuiButtonBase-root').click()
        // cy.get('.MuiAlert-message').should("not.exist")
//fail
    })
}
)