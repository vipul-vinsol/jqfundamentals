class DaySpecialController {
  constructor(targetId) {
    this.specialDiv = $(`#${targetId}`);
    this.selectElement = this.specialDiv.find("select[name='day']");
    this.daySpecialData = null;
    this.handler = this.handler.bind(this);
  }

  init() {  
    this.setup();
    this.bindEvents();
  }

  setup() {
    this.specialDiv
      .append( $('<div />', {
        id: 'special-information-display'
      }) ); 
  }

  bindEvents() {
    this.selectElement.change( this.handler );
  }

  handler(e) {
    let day = $(e.target).val();
    // Check if data is cached 
    if(this.daySpecialData) {
      let html = this.daySpecialToHtml(day, this.daySpecialData);
      this.specialDiv.find('#special-information-display').html(html);
    } else {
      $.getJSON("/data/specials.json", (data) => {
        this.daySpecialData = data;
        let html = this.daySpecialToHtml(day, data);
        this.specialDiv.find('#special-information-display').html(html);
      });
    }
  }

  daySpecialToHtml(day, data) {
    if(day in data) {
      let info = data[day];
      let html = $( '<h3 />', { style: `color: ${ info['color'] }` } )
        .after( $('<p />').text( info['text'] ) ) 
        .after( $('<img />', {
          src: info['image'],
          alt: 'Day Special Image'
        }) )
        .text( info['title'] );
      return html;
    } else {
      return $('<strong />')
              .text('No information about this day exists');
    }
  }
}

let obj = new DaySpecialController();
obj.init();
