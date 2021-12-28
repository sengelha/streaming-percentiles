describe('ckms_hbq', () => {
    it('should calculate a correct result', () => {
        cy.visit('http://localhost:3000/static/ckms_hbq.html');
        cy.get('#p50').invoke('text').then(parseFloat).should('be.within', 498, 502);
        cy.get('#p99').invoke('text').then(parseFloat).should('be.within', 988, 992);
    });
});

describe('gk', () => {
    it('should calculate a correct result', () => {
        cy.visit('http://localhost:3000/static/gk.html');
        cy.get('#p50').invoke('text').then(parseFloat).should('be.within', 498, 502);
        cy.get('#p99').invoke('text').then(parseFloat).should('be.within', 988, 992);
    });
});

describe('require', () => {
    it('should calculate a correct result', () => {
        cy.visit('http://localhost:3000/static/requirejs.html');
        cy.get('#p50').invoke('text').then(parseFloat).should('be.within', 498, 502);
        cy.get('#p99').invoke('text').then(parseFloat).should('be.within', 988, 992);
    });
});