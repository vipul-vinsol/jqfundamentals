class SlideShow {
  constructor(targetElemId, duration) {
    this.slideShowDuration = duration;
    this.targetElem = $(`#${targetElemId}`);
    this.items = this.targetElem.children('li');
    this.itemCount = this.items.length;
  }

  init() {
    this.setup();
    this.changeImageOnSlideDuration();
  }
  
  moveTargetToTop() {
    // Move to Top
    $('body').prepend(this.targetElem);
  }
  
  hideAllExceptFirst() {
    // Hide All except first
    $('#slideshow li:gt(0)').hide();
  }
  
  insertStatsNodeInDOM() {
    // Create Stats Section
    this.targetElem.after(`
      <h1>Slide Show Details</h1>
      <h2> Total Images :- ${this.itemCount} </h2>
      <h2> Current Image :- <span id='currentImageNumber'>1</span> </h2>
    `);
  }

  setup() {
    this.moveTargetToTop();
    this.hideAllExceptFirst();
    this.insertStatsNodeInDOM();
  }

  changeImageOnSlideDuration() {
    let i = 0;
    let showHideInterval = Math.floor(this.slideShowDuration / 3);
    setInterval(() => {
      this.items.eq(i).fadeOut(showHideInterval, () => {
        // Increment the counter and roll around
        ++i;
        if(i === this.itemCount) i = 0;

        //  Update the stats section
        $('#currentImageNumber').text(i+1);
        
        // FadeIn the next Image
        this.items.eq(i).fadeIn(showHideInterval);
      })
    }, this.slideShowDuration);
  }
}

$(function() {
  let slideshow = new SlideShow('slideshow', 3000);
  slideshow.init();
}());
