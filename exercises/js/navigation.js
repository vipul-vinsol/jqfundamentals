class Navigation {
  constructor() {
    this.nav = $('#nav li');
    this.mouseOn = this.mouseOn.bind();
    this.mouseLeave = this.mouseLeave.bind();
  }
  
  setElementDisplay(e, displaType) {
    $(e.currentTarget).find('ul').css('display', displayType);
  }
  
  init() {
    this.bindEvents();
  }

  bindEvents() {
    this.nav.hover(this.mouseOn, this.mouseLeave);    
  }

  mouseOn(e) {
    setElementDisplay(e, 'block');
  }

  mouseLeave(e) {
    setElementDisplay(e, 'none'); 
  }
  

}

let navigation = new Navigation();
navigation.init();
