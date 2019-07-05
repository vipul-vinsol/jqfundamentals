class InputHints {
  constructor() {
    this.searchInput = $("input[name='q']");
    this.labelValue = $('#search label').text();
    this.focusHandler = this.focusHandler.bind(this);
    this.blurHandler = this.blurHandler.bind(this);
  }

  init() {
    this.setup();
    this.bindEvents();
  }

  setup() {
    console.log("this should come up");
    // 1
    this.searchInput.val(this.labelValue);

    // 2 
    this.searchInput.addClass('hint');
    // 3
    $('#search label').remove();    
  }

  bindEvents() {
    this.searchInput.focus(this.focusHandler);
    this.searchInput.blur(this.blurHandler);
  }

  focusHandler(e) {
    $(e.currentTarget)
    .removeClass('hint')
    .val('');
  }

  blurHandler(e) {
    $(e.currentTarget)
    .addClass('hint')
    .val(this.labelValue);  
  }
}

let inputHint = new InputHints();
inputHint.init();