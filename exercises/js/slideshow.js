class SlideShow {
  constructor() {
    this.items = $('#slideshow li');
    this.itemCount = this.items.length;
  }

  init() {
    this.setup();
    this.changeImagesEveryThreeSeconds();
  }

  setup() {
    // Move to Top
    $('body').prepend($('#slideshow'));

    // Hide All except first
    $('#slideshow li:gt(0)').hide();
    
    // Create Stats Section
    $('#slideshow').after(`
      <h1>Slide Show Details</h1>
      <h2> Total Images :- ${this.itemCount} </h2>
      <h2> Current Image :- <span id='currentImageNumber'>1</span> </h2>
    `);
  }

  changeImagesEveryThreeSeconds() {
    let i = 0;
    setInterval(() => {
      this.items.eq(i).fadeOut(1000, () => {
        // Increment the counter and roll around
        ++i;
        if(i === this.itemCount) i = 0;

        //  Update the stats section
        $('#currentImageNumber').text(i+1);
        
        // FadeIn the next Image
        this.items.eq(i).fadeIn(1000);
      })
    }, 3000);
  }
}


let slideshow = new SlideShow();
slideshow.init();