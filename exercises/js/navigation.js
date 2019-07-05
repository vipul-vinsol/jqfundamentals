class Navigation {
  constructor() {
    this.nav = $('#nav li');
    this.mouseOn = this.mouseOn.bind();
    this.mouseLeave = this.mouseLeave.bind();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    this.nav.hover(this.mouseOn, this.mouseLeave);    
  }

  mouseOn(e) {
    $(e.currentTarget).find('ul').css('display', 'block');
  }

  mouseLeave(e) {
    $(e.currentTarget).find('ul').css('display', 'none'); 
  }
}

let navigation = new Navigation();
navigation.init();