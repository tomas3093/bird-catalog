import { ITranslation } from '../../app/core/services/translate/ITranslation';

export class En implements ITranslation {
  public layout = {
    footer: 'Created by Tomas Blazy',
  };
  public catalog = {
    search: 'Search',
    clearFilters: 'Clear filters',
    compare: 'Compare',
    view: 'View',
  };
  public primeNg = {
    accept: 'Yes',
    addRule: 'Add Rule',
    am: 'AM',
    apply: 'Apply',
    cancel: 'Cancel',
    choose: 'Choose',
    chooseDate: 'Choose Date',
    chooseMonth: 'Choose Month',
    chooseYear: 'Choose Year',
    clear: 'Clear',
    completed: 'Completed',
    contains: 'Contains',
    custom: 'Custom',
    dateAfter: 'Date is after',
    dateBefore: 'Date is before',
    dateFormat: 'mm/dd/yy',
    dateIs: 'Date is',
    dateIsNot: 'Date is not',
    dayNames: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    emptyFilterMessage: 'No results found',
    emptyMessage: 'No available options',
    emptySearchMessage: 'No results found',
    emptySelectionMessage: 'No selected item',
    endsWith: 'Ends with',
    equals: 'Equals',
    fileSizeTypes: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    filter: 'Filter',
    firstDayOfWeek: 0,
    gt: 'Greater than',
    gte: 'Greater than or equal to',
    lt: 'Less than',
    lte: 'Less than or equal to',
    matchAll: 'Match All',
    matchAny: 'Match Any',
    medium: 'Medium',
    monthNames: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    monthNamesShort: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    nextDecade: 'Next Decade',
    nextHour: 'Next Hour',
    nextMinute: 'Next Minute',
    nextMonth: 'Next Month',
    nextSecond: 'Next Second',
    nextYear: 'Next Year',
    noFilter: 'No Filter',
    notContains: 'Not contains',
    notEquals: 'Not equals',
    now: 'Now',
    passwordPrompt: 'Enter a password',
    pending: 'Pending',
    pm: 'PM',
    prevDecade: 'Previous Decade',
    prevHour: 'Previous Hour',
    prevMinute: 'Previous Minute',
    prevMonth: 'Previous Month',
    prevSecond: 'Previous Second',
    prevYear: 'Previous Year',
    reject: 'No',
    removeRule: 'Remove Rule',
    searchMessage: '{0} results are available',
    selectionMessage: '{0} items selected',
    showMonthAfterYear: false,
    startsWith: 'Starts with',
    strong: 'Strong',
    today: 'Today',
    upload: 'Upload',
    weak: 'Weak',
    weekHeader: 'Wk',
    aria: {
      cancelEdit: 'Cancel Edit',
      close: 'Close',
      collapseRow: 'Row Collapsed',
      editRow: 'Edit Row',
      expandRow: 'Row Expanded',
      falseLabel: 'False',
      filterConstraint: 'Filter Constraint',
      filterOperator: 'Filter Operator',
      firstPageLabel: 'First Page',
      gridView: 'Grid View',
      hideFilterMenu: 'Hide Filter Menu',
      jumpToPageDropdownLabel: 'Jump to Page Dropdown',
      jumpToPageInputLabel: 'Jump to Page Input',
      lastPageLabel: 'Last Page',
      listView: 'List View',
      moveAllToSource: 'Move All to Source',
      moveAllToTarget: 'Move All to Target',
      moveBottom: 'Move Bottom',
      moveDown: 'Move Down',
      moveToSource: 'Move to Source',
      moveToTarget: 'Move to Target',
      moveTop: 'Move Top',
      moveUp: 'Move Up',
      navigation: 'Navigation',
      next: 'Next',
      nextPageLabel: 'Next Page',
      nullLabel: 'Not Selected',
      pageLabel: 'Page {page}',
      otpLabel: 'Please enter one time password character {0}',
      passwordHide: 'Hide Password',
      passwordShow: 'Show Password',
      previous: 'Previous',
      previousPageLabel: 'Previous Page',
      rotateLeft: 'Rotate Left',
      rotateRight: 'Rotate Right',
      rowsPerPageLabel: 'Rows per page',
      saveEdit: 'Save Edit',
      scrollTop: 'Scroll Top',
      selectAll: 'All items selected',
      selectRow: 'Row Selected',
      showFilterMenu: 'Show Filter Menu',
      slide: 'Slide',
      slideNumber: '{slideNumber}',
      star: '1 star',
      stars: '{star} stars',
      trueLabel: 'True',
      unselectAll: 'All items unselected',
      unselectRow: 'Row Unselected',
      zoomImage: 'Zoom Image',
      zoomIn: 'Zoom In',
      zoomOut: 'Zoom Out',
    },
  };
}
