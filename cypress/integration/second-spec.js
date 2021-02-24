/// <reference types="cypress" />
describe('second feature', () => {
  it('works', () => {
		cy.wait(3000);
		cy.log('second');
  })
})
