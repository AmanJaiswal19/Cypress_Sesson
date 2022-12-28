///<reference types ="cypress"/>

// Drag & Drop
 describe('verift the drag & drop ', () => {

    it.only('mouse down , mouse up, mousemove', () => {
        cy.visit('https://jqueryui.com/resources/demos/droppable/default.html')
        cy.get('div[id="draggable"]').trigger('mousedown', { which: 1 })
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true })
        cy.get('#droppable').should('have.class', 'ui-widget-header ui-droppable ui-state-highlight')
    })
})

