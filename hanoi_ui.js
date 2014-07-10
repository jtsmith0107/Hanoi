(function (root) {
  var Hanoi = root.Hanoi = (root.Hanoi || {});
  
  var HanoiUI = Hanoi.HanoiUI = function($board){
    this.board = $board;
    this.game = new Hanoi.Game();
    this.fromCol = undefined;
  };
  
  HanoiUI.prototype.setUpBoard = function(){
    _(3).times(function(i){
      $("#board").append("<div class = 'col' id = col" + i + "> </div>");
    
    });
    
    _(3).times(function(j){
      $("#col0.col").append("<div class = 'disk' id = disk" + j + "> </div>");
    });
    
  };
  
  HanoiUI.prototype.setUpHandlers = function(){
    var game = this;
    $('#board').on('click', '.col', game.clickHelper.bind(game));
  };
  
  
  
  HanoiUI.prototype.clickHelper = function(event){
    if(this.fromCol === undefined){
      this.fromCol = parseInt($(event.currentTarget).attr("id").slice(3),10);
    } 
    else{
      var toCol = parseInt($(event.currentTarget).attr("id").slice(3),10);
      this.game.takeTurn([this.fromCol, toCol]);
      this.fromCol = undefined;
    }
  };
  
  HanoiUI.moveHTML = function(start, end){
    var currDisk = $("#col" + start).children().first();
    $("#col" + end).prepend(currDisk);
    // currDisk.remove();
  };
  
})(this);