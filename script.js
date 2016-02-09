var page = {
  dots: [],

  addDots: function(){
    var _this = this;


    $("#something").css("color", "white");


    $(".canvas .dot").each(function(){
      _this.dots.push($(this));
    });
  },

  printDots: function(){
    for(var i=0; i<this.dots.length; i++){
      console.log(this.dots[i]);
    }
  },

  setDotX: function(){
    for(var i=0; i<this.dots.length; i++){
      //console.log(this.dots[i]);
      this.dots[i].css({
        left: getRandom(0, window.innerWidth)
      });
    }

    function getRandom(min, max) {
      return Math.random() * (max - min) + min;
    }
  },

  setDotY: function(){
    for(var i=0; i<this.dots.length; i++){
      //console.log(this.dots[i]);
      this.dots[i].css({
        top: getRandom(0, window.innerHeight)
      });
    }

    function getRandom(min, max) {
      return Math.random() * (max - min) + min;
    }
  },

  setDotWidth: function(){
    for(var i=0; i<this.dots.length; i++){
      //console.log(this.dots[i]);
      this.dots[i].css({
        width: getRandom(0, 100)
      });
    }

    function getRandom(min, max) {
      return Math.random() * (max - min) + min;
    }
  },


  setupText: function(){
    for(i=0;i<4;i++){
      $('.buzz_wrapper .text span').eq(0).clone().prependTo('.buzz_wrapper .text');
    }

    for(i=0;i<10;i++){
      $('.buzz_wrapper .scanline').eq(0).clone().appendTo('.buzz_wrapper');
    }
  },

  startAnimation: function(){
    var _this = this;
    loop();
    function loop(){
      setTimeout(function(){
        _this.setDotX();
        _this.setDotY();
        _this.setDotWidth();
        loop();
      }, 10);

    }
  },

  init: function(){
    this.addDots();
    this.startAnimation();
    this.setupText();
    this.printDots();
  }
};


$(document).ready(function(){
  page.init();
});
