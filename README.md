# BirdCatalog

TOOD: Project description

## GitHub pages deployment

- checkout branch gh-pages
- merge latest changes from main `git merge main`
- build the app `ng build -c production --base-href 'bird-catalog'`
- deploy files `ngh --dir dist/bird-catalog/browser --no-silent`

### Deployed url

https://tomas3093.github.io/bird-catalog/bird-catalog

TODO: fix routing

## How to add new species

- open cypress with command `npm run cy:open`
- prepare input data in cypress/fixtures/data.json
- run spec.cy.ts file from cypress UI
- see cypress/results/result.json for result

## Roadmap

### Phase 1 ✓

- catalog of birds with various attributes
  - embedded photos & sounds
  - sk, en, latin name
  - completely without BE, all data in JSON structure provided by angular service

### Phase 2 ✓

- comparator component
  - button in detail component for adding into comparison
  - similar as in swannson app
- catalog component
  - displays also categories and subcategories
  - filtering in catalog will hide group structure, only list of matching species will be shown
  - works as a home component

### Phase 3

- add all remaining species (find some automated way to do that) ✓
- switch in settings - "Include rare species"
- size comparison - silhouetes drawed on canvas
  - waders
  - ducks
  - birds of prey
- new "db table" for similar species
- add custom gallery component
- quizzes
  - learn scientific/english names
  - photo
  - sound

### Phase 4

- nice UI, polished styling

### Nice to have

- species description, info, breeding, diet, interesting fact
- order > family > genus > species (tree structure?)
- filtering by habitat, order, family, genus
- translations or legend for image metadata (adult, breeding male...)
- sound recordings - for each species display calls, song... (if available)
