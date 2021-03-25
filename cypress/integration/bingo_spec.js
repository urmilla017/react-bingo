describe('Bingo Board', function() {
    beforeEach(function() {
        cy.visit('http://localhost:3000/');
        cy.waitForReact(1000, '#root'); 

    });
    it.only('has a title', function() {
        cy.get('h3').invoke("text").should('eq', 'Conference Call Bingo Board');
    });

    it.only('has a bingo board', function() {
        cy.get('.tileWrapper');
    });

    it.only('has an uncliked bingo box with initial style', function() {
        cy.get('.tileWrapper > :nth-child(1)')
            .should('have.class', 'tileStyle')
            .and('not.have.class', 'clickedTile');
    });

    it.only('click a bingo box and check for change in style', function() {
        cy.get('.tileWrapper > :nth-child(2)').click();
        cy.get('.tileWrapper > :nth-child(2)').should('have.class', 'tileStyle clickedTile')
    });

    it.only('should have a bingo row and display B', function() {
        cy.get('.tileWrapper > :nth-child(2)').click();
        cy.get('.tileWrapper > :nth-child(7)').click();
        cy.get(':nth-child(12)').click();
        cy.get(':nth-child(17)').click();
        cy.get(':nth-child(22)').click();

        cy.get('.bingoBoxDiv').invoke('text').should('eq', 'Bingo Status: B');
    });

    it.only('should have two diagonal bingos', function() {
        cy.get('.tileWrapper > :nth-child(1)').click();
        cy.get('.tileWrapper > :nth-child(7)').click();
        cy.get('.tileWrapper > :nth-child(19)').click();
        cy.get('.tileWrapper > :nth-child(25)').click();

        cy.get('.tileWrapper > :nth-child(5)').click();
        cy.get('.tileWrapper > :nth-child(9)').click();
        cy.get('.tileWrapper > :nth-child(17)').click();
        cy.get('.tileWrapper > :nth-child(21)').click();

        cy.get('.bingoBoxDiv').invoke('text').should('eq', 'Bingo Status: BI');
    });

    it.only('should win the game and show confetti', function() {
        cy.get('.tileWrapper > :nth-child(2)').click();
        cy.get('.tileWrapper > :nth-child(7)').click();
        cy.get('.tileWrapper > :nth-child(12)').click();
        cy.get('.tileWrapper > :nth-child(17)').click();
        cy.get('.tileWrapper > :nth-child(22)').click();

        cy.get('.tileWrapper > :nth-child(9)').click();
        cy.get('.tileWrapper > :nth-child(1)').click();
        cy.get('.tileWrapper > :nth-child(19)').click();
        cy.get('.tileWrapper > :nth-child(25)').click();

        cy.get('.tileWrapper > :nth-child(6)').click();
        cy.get('.tileWrapper > :nth-child(11)').click();
        cy.get('.tileWrapper > :nth-child(16)').click();
        cy.get('.tileWrapper > :nth-child(21)').click();

        cy.get('.tileWrapper > :nth-child(3)').click();
        cy.get('.tileWrapper > :nth-child(4)').click();
        cy.get('.tileWrapper > :nth-child(5)').click();

        cy.get('.tileWrapper > :nth-child(14)').click();
        cy.get('.tileWrapper > :nth-child(20)').click();
        cy.get('.tileWrapper > :nth-child(15)').click();

        cy.get('.bingoBoxDiv').invoke('text').should('eq', 'Bingo Status: BINGO')
        cy.get('.overlayScreen').should('have.class', 'overlayScreenDisplay');

        cy.react('Confetti').should('have.length', '1');
    });
});