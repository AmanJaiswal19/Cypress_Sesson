///<reference types = "cypress"/>

import * as login from "../../support/login"
import * as dashboard from "../../support/dashboard"

describe('verify the login functionality of OrangeHRM Form', function () {

     beforeEach(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
     })

    it('verify the login functionality', function () {
        login.login('Admin', "admin123")
        dashboard.verifyDashboardPageUrl()
    })

    it('verify the forgetPassword link', function () {
        login.forgetPasswordLink()
    })

    it('verify the logo of orangHRM', function () {
        login.verifyLogo()
    })

    it('verify the url on login page', function () {
        login.verifyLoginPageUrl()
    })
})