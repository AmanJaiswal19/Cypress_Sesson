/// <reference types="cypress" />

describe('verify the Table functionality', function () {

    it('Validate sum of table-1', function () {
        let sum = 0
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#t01').find('tr').each(function (el, index) {
            if (index != 0) {
                cy.log(el.find('td').last().text())
                sum = sum + Number(el.find('td').last().text())
            }
        }).then(function () {
            cy.log(sum)
            expect(sum).be.equals(159)
        })
    })

    function verifyTable(id, expected) {
        let sum = 0
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get(`#${id}`).find('tr').each(function ($el, index) {
            if (index != 0) {
                cy.log($el.children().last().text())
                sum = sum + Number($el.children().last().text())
            }
        }).then(function () {
            expect(sum).to.equal(expected)
        })

    }

    it('verify the sum of age in multiples table', function () {

        verifyTable('t01', 159)
        verifyTable('t02', 163)
    })
})

//------- Datepicker -------//

// Previous Date
it.only('verify the calender', () => {
    cy.visit('https://webdriveruniversity.com/Datepicker/index.html')
    cy.get('#datepicker').click()
    let dateToSelect = new Date()
    dateToSelect.setDate(dateToSelect.getDate() - 0)

    let year = dateToSelect.getFullYear()
    let day = dateToSelect.getDate()
    let wordM = dateToSelect.toLocaleString('default', { month: 'long' })

    function selectMonthAndDate() {
        // year
        cy.get('.datepicker-switch').first().then(el => {
            if (!el.text().includes(year)) {
                cy.get('.prev').first().click()
                selectMonthAndDate()
            }
        }).then(() => {
            // month
            cy.get('.datepicker-switch').first().then(el => {
                if (!el.text().includes(wordM)) {
                    cy.get('.prev').first().click()
                    selectMonthAndDate()
                }
            })
        })
    }
    function selectDate() {
        cy.contains('[class="day"]', day).click()
    }
    selectMonthAndDate()
    selectDate()
})

// Next Date
it('verify the calender', () => {
    cy.visit('https://webdriveruniversity.com/Datepicker/index.html')
    cy.get('#datepicker').click()
    let dateToSelect = new Date()
    dateToSelect.setDate(dateToSelect.getDate() + 255)

    let year = dateToSelect.getFullYear()
    let day = dateToSelect.getDate()
    let wordM = dateToSelect.toLocaleString('default', { month: 'long' })

    function selectMonthAndDate() {
        // year
        cy.get('.datepicker-switch').first().then(el => {
            if (!el.text().includes(year)) {
                cy.get('.next').first().click()
                selectMonthAndDate()
            }
        }).then(() => {
            // month
            cy.get('.datepicker-switch').first().then(el => {
                if (!el.text().includes(wordM)) {
                    cy.get('.next').first().click()
                    selectMonthAndDate()
                }
            })
        })
    }
    function selectDate() {
        cy.contains('[class="day"]', day).click()
    }
    selectMonthAndDate()
    selectDate()
})