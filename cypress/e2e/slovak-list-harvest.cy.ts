describe('Generate species data from slovak species list of ebird database', () => {
  it('Generate data', () => {
    const result: string[] = [];

    // Navigate to species page
    cy.visit('https://ebird.org/region/SK/bird-list');

    // Assuming you want to get elements with the class 'your-class'
    cy.get('[aria-labelledby="nativeNaturalized"]')
      .first()
      .get('ol')
      .first()
      .get('li.BirdList-list-list-item.countable')
      .then(($elements) => {
        cy.wrap($elements.slice(350, 377)).each(($el, index, $list) => {
          cy.wrap($el)
            .find('span.Species-sci.Species-sub')
            .first()
            .then(($span) => {
              // Get the text of the span element
              result.push($span.text());
            });
          cy.wait(100);
        });
      })
      .then(() => {
        cy.writeFile('cypress/results/result2.json', result);
      });
  });
});
