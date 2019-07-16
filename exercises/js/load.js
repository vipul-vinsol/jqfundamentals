class BlogLoader {
  constructor(dataAttr) {
    this.rootContainer = $(`div[data-container='${dataAttr}'`);
    this.targetHeadings = this.rootContainer.find('h3');
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
    this.targetHeadings.each(this.generateDiv);
  }

  bindEvents() {
    this.rootContainer.find('div').click(this.hander);
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

let blogLoader = new BlogLoader('blog');
blogLoader.init();
