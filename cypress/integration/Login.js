class LoginPanel {

    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    fillUserName(values) {
        const fill = cy.get('input[name="username"]')
        fill.type(values)
        return this
    }
    // .type('Admin')

    fillPassword(values) {
        const fill = cy.get('input[name="password"]')
        fill.type(values)
        return this
    }

    LogButton() {
        const button = cy.get('button[type="submit"]')
        button.click()
    }
}
export default LoginPanel