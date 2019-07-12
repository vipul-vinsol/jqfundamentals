class BlogLoader {
  constructor(container) {
    this.targetEle = $(`#${container}`);
  }

  init() {
    this.setup();
    this.bindEvents();
  }

  generateDiv(index, ele) {      
    let targetDiv = $('<div />').text('Show Complete Blog');
    targetDiv.data('ref', $(ele));
    $(ele).prepend(targetDiv);
  }

  setup() {
    this.targetEle.each(this.generateDiv);
  }

  bindEvents() {
    this.targetEle.find('div').click(this.hander);
  }

  hander(e) {
    e.stopPropagation();
    let item = $(e.currentTarget);
    let url = $(item)
                .data('ref')
                .find('a')
                .attr('href');
    url = url.replace('#', ' #');
    $(item).load(`data/${url}`);
  }
}

let blogLoader = new BlogLoader('blog ul li h3');
blogLoader.init();
