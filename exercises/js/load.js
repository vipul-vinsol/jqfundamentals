class BlogLoader {
  constructor() {
    this.targetEle = $('#blog ul li h3');
  }

  init() {
    this.setup();
    this.bindEvents();
  }

  generateDiv(index, ele) {      
    let targetDiv = $('<div>').text('Show Complete Blog');
    targetDiv.data('ref', $(ele));
    $(ele).prepend(targetDiv);
  }

  setup() {
    this.targetEle.each(this.generateDiv);
  }

  bindEvents() {
    $('#blog ul li h3 div').click(this.hander);
  }

  hander(e) {
    e.stopPropagation();
    let item = $(e.currentTarget);
    let url = $(item).data('ref').find('a').attr('href');
    url = url.split('#').join(' #');
    $(item).load(`data/${url}`);
  }
}

let blogLoader = new BlogLoader();
blogLoader.init();