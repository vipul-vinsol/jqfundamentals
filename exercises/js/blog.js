class Blog {
  constructor() {
    this.blog = $('#blog');
    this.handler = this.handler.bind();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    this.blog.find('h3').click(this.handler);    
  }

  handler(e) {
    e.preventDefault();
    this.blog.find('.reading').removeClass('reading').slideUp();
    $(e.currentTarget).siblings('p').addClass('reading').slideDown();   
  }
}

let blog = new Blog();
blog.init();
