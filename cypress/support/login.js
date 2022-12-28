/// <reference types = "cypress"/>

export let LOGINELEMENT = {
    userName: 'input[name="username"]',
    passWord: 'input[name="password"]',
    loginButton: 'button[type="submit"]',
    forgetPasswordLink: 'p[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]',
    logo: '.orangehrm-login-branding > img'
}

export function login(userName, passWord) {
    cy.get(LOGINELEMENT.userName).type(userName)
    cy.get(LOGINELEMENT.passWord).type(passWord)
    cy.get(LOGINELEMENT.loginButton).click()
}

export function forgetPasswordLink() {
    cy.get(LOGINELEMENT.forgetPasswordLink).should('be.visible')
}

export function verifyLogo() {
    cy.get(LOGINELEMENT.logo).should('be.visible')
}

export function verifyLoginPageUrl() {
    cy.url().should('contain', "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
}