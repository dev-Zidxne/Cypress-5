/// <reference types="Cypress" />

describe('newletter signup', () => {
	beforeEach(() => {
		cy.task('seedDatabase');
	});
	it('should signup user to newlsetter', () => {
		cy.visit('/');
		cy.get('[data-cy="newsletter-email"]').type('test@example.com');
		cy.get('[data-cy="newsletter-submit"]').click();
		cy.contains('Thanks for signing up');
	});
});
