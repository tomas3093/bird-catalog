import { ITranslation } from '../../app/core/services/translate/ITranslation';

export class Sk implements ITranslation {
  public layout = {
    title: 'Vtáky Slovenska',
    menu: {
      settings: 'Nastavenia',
      appLanguage: 'Jazyk aplikácie',
      speciesLanguage: 'Jazyk názvoslovia',
      languages: {
        en: 'Angličtina',
        sk: 'Slovenčina',
      },
    },
    footer: 'Vytvoril Tomas Blazy',
  };
  public catalog = {
    search: 'Vyhľadať',
    clearFilters: 'Zrušiť filtre',
    groupView: 'Prehľad skupín',
    speciesView: 'Prehľad druhov',
    view: 'Zobraziť',
  };
  public detail = {
    back: 'Späť',
    compare: 'Porovnať',
  };
  public comparator = {
    title: 'Porovnanie druhov',
    save: 'Uložiť',
    change: 'Zmeniť druhy',
  };
  public quiz = {
    title: 'Kvíz určovania vtákov',
    difficulty: {
      beginner: 'Začiatočník',
      advanced: 'Pokročilý',
      expert: 'Expert',
    },
    mode: {
      group: {
        open: 'Otvorené odpovede',
        options: 'Výber z možností',
      },
      latinNames: 'Latinské názvy',
      enNames: 'Anglické názvy',
      skNames: 'Slovenské názvy',
      images: 'Obrázky',
    },
    start: 'Spustiť',
    stop: 'Ukončiť',
    question: 'Otázka',
    correctAnswerLabel: 'Správna odpoveď',
    correct: 'Správne!',
    check: 'Skontrolovať',
    next: 'Ďalej',
    score: 'Vaše skóre',
    changeMode: 'Zmeniť kvíz',
    playAgain: 'Hrať znovu',
    latinNameQuestion: 'Aký je latinský názov pre <strong>{{name}}</strong>?',
    enNameQuestion: 'Aký je anglický názov pre <strong>{{name}}</strong>?',
    skNameQuestion: 'Aký je slovenský názov pre <strong>{{name}}</strong>?',
    guessImageQuestion: 'Aký druh je na obrázku? (latinský názov)',
    chooseImageQuestion: 'Aký druh je na obrázku?',
  };
  public primeNg = {
    accept: 'Áno',
    addRule: 'Pridať pravidlo',
    am: 'ráno',
    apply: 'Použiť',
    cancel: 'Zrušiť',
    choose: 'Vybrať',
    chooseDate: 'Vyberte dátum',
    chooseMonth: 'Vyberte mesiac',
    chooseYear: 'Vyberte rok',
    clear: 'Vyčistiť',
    completed: 'Dokončené',
    contains: 'Obsahuje',
    custom: 'Vlastné',
    dateAfter: 'Dátum je po',
    dateBefore: 'Dátum je pred',
    dateFormat: 'dd.mm.rrrr',
    dateIs: 'Dátum je',
    dateIsNot: 'Dátum nie je',
    dayNames: ['Nedeľa', 'Pondelok', 'Utorok', 'Streda', 'Štvrtok', 'Piatok', 'Sobota'],
    dayNamesMin: ['Ne', 'Po', 'Ut', 'St', 'Št', 'Pi', 'So'],
    dayNamesShort: ['Ned', 'Pon', 'Uto', 'Str', 'Štv', 'Pia', 'Sob'],
    emptyFilterMessage: 'Neboli nájdené žiadne výsledky',
    emptyMessage: 'Žiadne dostupné možnosti',
    emptySearchMessage: 'Neboli nájdené žiadne výsledky',
    emptySelectionMessage: 'Žiadna vybraná položka',
    endsWith: 'Končí na',
    equals: 'Rovná sa',
    fileSizeTypes: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    filter: 'Filter',
    firstDayOfWeek: 1,
    gt: 'Väčšie než',
    gte: 'Väčšie než alebo rovné',
    lt: 'Menšie než',
    lte: 'Menšie než alebo rovné',
    matchAll: 'Zodpovedá všetkým',
    matchAny: 'Zodpovedá akémukoľvek',
    medium: 'Stredné',
    monthNames: [
      'Január',
      'Február',
      'Marec',
      'Apríl',
      'Máj',
      'Jún',
      'Júl',
      'August',
      'September',
      'Október',
      'November',
      'December',
    ],
    monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Máj', 'Jún', 'Júl', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
    nextDecade: 'Nasledujúce desaťročie',
    nextHour: 'Nasledujúca hodina',
    nextMinute: 'Nasledujúca minúta',
    nextMonth: 'Nasledujúci mesiac',
    nextSecond: 'Nasledujúca sekunda',
    nextYear: 'Nasledujúci rok',
    noFilter: 'Bez filtra',
    notContains: 'Neobsahuje',
    notEquals: 'Nerovná sa',
    now: 'Teraz',
    passwordPrompt: 'Zadejte heslo',
    pending: 'Čakajúce',
    pm: 'popoludní',
    prevDecade: 'Predchádzajúce desaťročie',
    prevHour: 'Predchádzajúca hodina',
    prevMinute: 'Predchádzajúca minúta',
    prevMonth: 'Predchádzajúci mesiac',
    prevSecond: 'Predchádzajúca sekunda',
    prevYear: 'Predchádzajúci rok',
    reject: 'Nie',
    removeRule: 'Odstrániť pravidlo',
    searchMessage: 'Je k dispozícií {0} výsledkov',
    selectionMessage: 'Vybraných {0} položiek',
    showMonthAfterYear: false,
    startsWith: 'Začína na',
    strong: 'Silné',
    today: 'Dnes',
    upload: 'Nahrať súbor',
    weak: 'Slabé',
    weekHeader: 'Týž.',
    aria: {
      cancelEdit: 'Zrušiť úpravu',
      close: 'Zavrieť',
      collapseRow: 'Zbaliť riadok',
      editRow: 'Upraviť riadok',
      expandRow: 'Rozbaliť riadok',
      falseLabel: 'Nepravda',
      filterConstraint: 'Obmedzenie filtra',
      filterOperator: 'Operátor filtra',
      firstPageLabel: 'Prvá strana',
      gridView: 'Zobrazenie mriežky',
      hideFilterMenu: 'Skryť filter menu',
      jumpToPageDropdownLabel: 'Prejsť na stránku Dropdown',
      jumpToPageInputLabel: 'Prejsť na stránku Input',
      lastPageLabel: 'Posledná strana',
      listView: 'Zobrazenie zoznamu',
      moveAllToSource: 'Presunúť všetko ku zdroju',
      moveAllToTarget: 'Presunúť všetko na cieľ',
      moveBottom: 'Presunúť dole',
      moveDown: 'Presunúť dole',
      moveTop: 'Presunúť hore',
      moveToSource: 'Presunúť ku zdroju',
      moveToTarget: 'Presunúť na cieľ',
      moveUp: 'Presunúť hore',
      navigation: 'Navigácia',
      next: 'Ďalší',
      nextPageLabel: 'Dalšia strana',
      nullLabel: 'Nevybrané',
      otpLabel: 'Zadajte jednorazový znak hesla {0}',
      pageLabel: '{page}',
      passwordHide: 'Skryť heslo',
      passwordShow: 'Ukázať heslo',
      previous: 'Predchádzajúci',
      previousPageLabel: 'Predchádzajúca strana',
      rotateLeft: 'Otočiť doľava',
      rotateRight: 'Otočiť doprava',
      rowsPerPageLabel: 'Riadkov na stranu',
      saveEdit: 'Uložiť úpravu',
      scrollTop: 'Posunúť hore',
      selectAll: 'Všetky položky vybrané',
      selectRow: 'Vybrať riadok',
      showFilterMenu: 'Zobraziť filter menu',
      slide: 'Snímka',
      slideNumber: '{slideNumber}',
      star: '1 hviezda',
      stars: '{star} hviezd',
      trueLabel: 'Pravda',
      unselectAll: 'Všetky položky zrušené',
      unselectRow: 'Zrušiť výber riadku',
      zoomImage: 'Priblížiť obrázok',
      zoomIn: 'Priblížiť',
      zoomOut: 'Oddialiť',
    },
  };
}
