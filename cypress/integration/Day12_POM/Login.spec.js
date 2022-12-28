/// <reference types = "cypress"/>

import LoginPanel from "../Login";

describe('verify the Login Functionality of OrangeHRM', function () {

    it('verify the loginHRM functionality', function () {
        const lp = new LoginPanel()
        lp.visit()
        lp.fillUserName('Admin')
        lp.fillPassword('admin123')
        lp.LogButton()
        cy.title().should('eq', "OrangeHRM")
    })
})