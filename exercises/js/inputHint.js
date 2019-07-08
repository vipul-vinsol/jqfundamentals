class InputHint {
  constructor() {
    this.searchInput = $("input[name='q']");
    this.searchLabel = $('#search label'); 
    this.labelValue = this.searchLabel.text();
    this.focusHandler = this.focusHandler.bind(this);
    this.blurHandler = this.blurHandler.bind(this);
  }

  init() {
    this.setup();
    this.bindEvents();
  }

  setup() {
    // 1
    this.searchInput.val(this.labelValue);

    // 2 
    this.searchInput.addClass('hint');
    // 3
    this.searchLabel.remove();    
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

let inputHint = new InputHint();
inputHint.init();
