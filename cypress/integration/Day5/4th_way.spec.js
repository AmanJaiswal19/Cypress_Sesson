///<reference types = "cypress"/>

import MultipalData from "../../fixtures/MultipalData.json"

// multiple users data access from fixture file 

describe('verify the multiple user data access from fixture',function(){

    MultipalData.forEach(function(el,index){

        it(`TC_0${index+1}verify the multiple user data `,function(){
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(el.firstName)
        cy.get('input[name="last_name"]').type(el.lastName)
        cy.get('input[name="email"]').type(el.email)
        cy.get('textarea[name="message"]').type(el.message)
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text',"Thank You for your Message!")
        })
    })  
})