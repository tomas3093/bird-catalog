export interface ITranslation {
  layout: {
    title: string;
    menu: {
      settings: string;
      appLanguage: string;
      speciesLanguage: string;
      languages: {
        en: string;
        sk: string;
      };
    };
    footer: string;
  };
  catalog: {
    search: string;
    clearFilters: string;
    groupView: string;
    speciesView: string;
    view: string;
  };
  detail: {
    back: string;
    compare: string;
  };
  comparator: {
    title: string;
    save: string;
    change: string;
  };
  primeNg: {
    startsWith: string;
    contains: string;
    notContains: string;
    endsWith: string;
    equals: string;
    notEquals: string;
    noFilter: string;
    filter: string;
    lt: string;
    lte: string;
    gt: string;
    gte: string;
    dateIs: string;
    dateIsNot: string;
    dateBefore: string;
    dateAfter: string;
    custom: string;
    clear: string;
    apply: string;
    matchAll: string;
    matchAny: string;
    addRule: string;
    removeRule: string;
    accept: string;
    reject: string;
    choose: string;
    upload: string;
    cancel: string;
    completed: string;
    pending: string;
    dayNames: string[];
    dayNamesShort: string[];
    dayNamesMin: string[];
    monthNames: string[];
    monthNamesShort: string[];
    chooseYear: string;
    chooseMonth: string;
    chooseDate: string;
    prevDecade: string;
    nextDecade: string;
    prevYear: string;
    nextYear: string;
    prevMonth: string;
    nextMonth: string;
    prevHour: string;
    nextHour: string;
    prevMinute: string;
    nextMinute: string;
    prevSecond: string;
    nextSecond: string;
    am: string;
    pm: string;
    today: string;
    weekHeader: string;
    firstDayOfWeek: number;
    dateFormat: string;
    weak: string;
    medium: string;
    strong: string;
    passwordPrompt: string;
    emptyFilterMessage: string;
    searchMessage: string;
    selectionMessage: string;
    emptySelectionMessage: string;
    emptySearchMessage: string;
    emptyMessage: string;
    aria: {
      trueLabel: string;
      falseLabel: string;
      nullLabel: string;
      star: string;
      stars: string;
      selectAll: string;
      unselectAll: string;
      close: string;
      previous: string;
      next: string;
      navigation: string;
      scrollTop: string;
      moveTop: string;
      moveUp: string;
      moveDown: string;
      moveBottom: string;
      moveToTarget: string;
      moveToSource: string;
      moveAllToTarget: string;
      moveAllToSource: string;
      pageLabel: string;
      firstPageLabel: string;
      lastPageLabel: string;
      nextPageLabel: string;
      previousPageLabel: string;
      rowsPerPageLabel: string;
      jumpToPageDropdownLabel: string;
      jumpToPageInputLabel: string;
      selectRow: string;
      unselectRow: string;
      expandRow: string;
      collapseRow: string;
      showFilterMenu: string;
      hideFilterMenu: string;
      filterOperator: string;
      filterConstraint: string;
      editRow: string;
      saveEdit: string;
      cancelEdit: string;
      listView: string;
      gridView: string;
      slide: string;
      slideNumber: string;
      zoomImage: string;
      zoomIn: string;
      zoomOut: string;
      rotateRight: string;
      rotateLeft: string;
    };
  };
}
