class TabNavigation {
  constructor(targetClass) {
    this.modules = $(`div.${targetClass}`);
    this.handler = this.handler.bind(this);
  }

  init() {
    this.setup();
    this.modules.first().show();
  }

  setup() {
    this.modules.hide();

    let navContainer = $('<ul />', { id: 'tabNavigation' });

    this.modules.each((index, ele) => {
      let data = $(ele).find('h2').text();
      let navItem = $('<li />').text(data);
      navItem.click(this.handler);
      navContainer.append( navItem );
    });

    this.modules
      .first()
      .before( navContainer );
  }

  handler(e) {
    let item = e.currentTarget;
    let eleIdAttr = $(item).addClass('current').text().toLowerCase();
    $(item).siblings().removeClass('current');
    this.modules.hide();
    $(`#${eleIdAttr}`).show();
  }
}

let tabNav = new TabNavigation('module');
tabNav.init();
