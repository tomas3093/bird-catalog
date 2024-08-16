interface ImageAsset {
  assetId: string;
  metadata: string;
}

interface Species {
  name: {
    latin: string;
    localized: { en: string; sk: string };
  };
  imageAssets: ImageAsset[];
}

interface InputData {
  data: { sci: string; sk: string }[];
}

describe('generate species data from ebird database', () => {
  let data: InputData | null = null;

  // Load input data from fixtures/data.json
  before(() => {
    cy.fixture('data.json').then((loadedData: InputData) => {
      data = loadedData;
      cy.log(`Input data loaded. Count: ${data.data.length}`);
    });
  });

  it('Generate species assets from ebird database', () => {
    const result: Species[] = [];

    const targetSpecies = data?.data;
    if (targetSpecies) {
      targetSpecies.forEach((item) =>
        getSpeciesAssets(item.sci, item.sk, (fetchedSpecies) => {
          result.push(fetchedSpecies);

          if (result.length === data?.data.length) {
            cy.writeFile('results/result.json', result);
            cy.log('Result has been written to the file results/result.json');
          }
        }),
      );
    }
  });

  function moveToNextImage(callback: () => void) {
    cy.get('div.Lightbox-navigation')
      .get('button.Lightbox-next')
      .then((button) => {
        if (!button.is(':disabled')) {
          cy.wrap(button).click();
          cy.wait(400); // Time delay between images
          callback();
        }
      });
  }

  function getCurrentImgData(imageAssets: ImageAsset[], callback: () => void) {
    cy.get('body').then((body) => {
      // Get image ID
      cy.get('div.Lightbox-caption-inner')
        .filter(':visible')
        .get('a[href*="https://macaulaylibrary.org/photo/"]')
        .filter(':visible')
        .last()
        .should('exist')
        .invoke('attr', 'href')
        .then((hrefValue) => {
          if (hrefValue) {
            const imageId = hrefValue.replace(/\?.*/, '').replace('https://macaulaylibrary.org/photo/', '');

            // Get image metadata (adult, immature, juv...)
            if (body.find('div.Lightbox-galleryLabels:visible').length > 0) {
              // Image metadata is present
              cy.get('div.Lightbox-galleryLabels:visible')
                .get('div.Heading.Lightbox-galleryTitle:visible')
                .first()
                .should('exist')
                .invoke('text')
                .then((text) => {
                  imageAssets.push({ assetId: imageId ?? '', metadata: text.toLocaleLowerCase() });
                  callback();
                });
            } else {
              // No image metadata
              imageAssets.push({ assetId: imageId ?? '', metadata: 'unknown' });
              callback();
            }
          }
        });
    });
  }

  function getSpeciesAssets(scientificName: string, skName: string, callback: (species: Species) => void) {
    let nameEn: string | null = null;
    const imageAssets: ImageAsset[] = [];

    // Navigate to species page
    cy.visit('https://ebird.org/explore');
    cy.get('#species').type(scientificName);

    // Choose required species
    const searchResult = cy.get('[id^=Suggest-suggestion-]');
    searchResult.filter(`:contains("${scientificName}")`).should('have.length', 1).click();

    // Open first image in gallery
    cy.get('figure.Media.Media--overlay').should('exist').first().click();

    cy.get('div.Lightbox-speciesLabels')
      .get('span.Heading-main')
      .should('exist')
      .first()
      .invoke('text')
      .then((text) => (nameEn = text));

    // Get 5 images
    getCurrentImgData(imageAssets, () =>
      moveToNextImage(() =>
        getCurrentImgData(imageAssets, () =>
          moveToNextImage(() =>
            getCurrentImgData(imageAssets, () =>
              moveToNextImage(() =>
                getCurrentImgData(imageAssets, () =>
                  moveToNextImage(() =>
                    getCurrentImgData(imageAssets, () => {
                      cy.wait(1000);
                      const species: Species = {
                        name: {
                          latin: scientificName,
                          localized: { en: nameEn ?? '', sk: skName },
                        },
                        imageAssets: imageAssets,
                      };

                      callback(species);
                    }),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
});
