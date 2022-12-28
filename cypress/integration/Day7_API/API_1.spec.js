// Get --- Read --- 200
// Put --- Update/Replace --- 201
// Post --- Create --- 201
// Delete --- Delete --- 204

describe('verify the user APIs', function () {

    it('Retrive user page wise', function () {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2"
        }).then(function (res) {
            // cy.log(res)
            expect(res.status).to.eq(200)
        })
    })

    it('Create user', function () {
        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users",
            body: {
                name: "morpheus",
                job: "leader"
            }
        }).then(function (res) {
            expect(res.status).to.equal(201)
        })
    })

    it('Update User', function () {
        cy.request({
            method: "PUT",
            url: "https://reqres.in/api/users/2",
            body: {
                name: "chinmay",
                job: "trainer"
            }
        }).then(function (res) {
            expect(res.status).to.equal(200)
        })
    })

    it('Delete User', function () {
        cy.request({
            method: "DELETE",
            url: "https://reqres.in/api/users/2"
        }).then(function (res) {
            expect(res.status).to.eq(204)
        })
    })
})
