class Blog {
  constructor() {
    this.blogHeadings = $('#blog h3');
    this.handler = this.handler.bind();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    this.blogHeadings.click(this.handler);		
  }

  handler(e) {
    e.preventDefault();
    $('#blog').find('.reading').removeClass('reading').slideUp();
    $(e.currentTarget).siblings('p').addClass('reading').slideDown();		
  }
}

let blog = new Blog();
blog.init();
