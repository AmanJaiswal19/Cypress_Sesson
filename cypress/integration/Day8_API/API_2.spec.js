/// <reference types="cypress" />

describe('verify the user per page', function () {

    it('count the user per page', function () {

        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2"
        })
            .then(function (res) {
                //cy.log(res)
                //cy.log(res.status)
                expect(res.status).to.eq(200)
                expect(res.duration).to.be.lessThan(50)
                expect(res.body.per_page).to.eq(res.body.data.length)
            })
    })

    it('validate the keys in object', function () {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2"
        })
            .then(function (res) {
                //cy.log(res.body.data)
                res.body.data.forEach(element => {
                    //cy.log(element)
                    expect(element).to.have.keys('id', 'email', 'first_name', 'last_name', 'avatar')
                });
            })
    })

    it('validate the keys in object', function () {
        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users",
            body: {
                name: "morpheus",
                job: "leader"
            }
        })
            .then(function (res) {
                cy.log(res)
                expect(res.status).to.eql(201)
                expect(res.body).to.have.keys('name', 'job', 'id', 'createdAt')
                for (let val of Object.values(res.body)) {
                    expect(val).not.to.null
                }
            })
    })
})