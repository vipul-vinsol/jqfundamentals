class TabNavigation {
  constructor() {
    this.modules = $('div.module');
    this.handler = this.handler.bind(this);
  }

  init() {
    this.setup();
    this.bindEvents();
    this.modules.first().show();
  }

  setup() {
    this.modules.hide();

    this.modules
      .first()
      .before('<ul id="tabNavigation"></ul>');

    this.modules.each((index, ele) => {
      let data = $(ele).find('h2').text();
      $('#tabNavigation').append(`<li>${data}</li>`);
    });

    this.listItems = $('#tabNavigation li');
  }

  bindEvents() {
    this.listItems.click(this.handler);
  }

  handler(e) {
    let item = e.currentTarget;
    let eleIdAttr = $(item).addClass('current').text().toLowerCase();
    $(item).siblings().removeClass('current');
    this.modules.hide();
    $(`#${eleIdAttr}`).show();
  }
}

let tabNav = new TabNavigation();
tabNav.init();