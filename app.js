
var gamePlaying, score, activePlayer;


init();

function init(){
  gamePlaying = true;
  activePlayer = 0;
  currentScore = 0;
  score =[0,0]; // score[0] is for player 1 ; score[1] is for player 2;

  $('.player-score').text("0");
  $('.player-current-score').text("0");
  $('img.dice').hide();
  $('#name-0').text("Player 1");
  $('#name-1').text("Player 2");
  $('.player-0-panel').removeClass("active");
  $('.player-1-panel').removeClass("active");
  $('.player-0-panel').removeClass("winner");
  $('.player-1-panel').removeClass("winner");
  $('.player-0-panel').addClass("active");
}

$('.btn-roll').on("click", function() {
  if (gamePlaying) {
    var randomNumb = Math.floor(6 * Math.random() + 1);
    if (randomNumb != 1) {
      currentScore = currentScore + randomNumb;
      $('#current-'+ activePlayer).text(currentScore);
      $('img.dice').show();
      $('img.dice').attr("src","dice-"+randomNumb+".png");
      // document.querySelector('img.dice').src = "dice-"+randomNumb+".png";
    }
    else {
      nextPlayer();
    }
  }
})

$('.btn-hold').on("click",function(){
  if (gamePlaying){
    score[activePlayer] = score[activePlayer] + currentScore;
    $('#score-'+ activePlayer).text(score[activePlayer]);
    var maxScore =  $('input.btn-max-score').val();
    // var maxScore = document.querySelector('input.btn-max-score').value;
    if (score[activePlayer] >= maxScore){
      var player = activePlayer +1 ;
      $('.player-'+ activePlayer +'-panel').addClass("winner");
      $('#name-'+ activePlayer).text("Player " + player +" won");
      $('img.dice').hide();
      gamePlaying = false;
    }
    else{
      nextPlayer();
    }

  }
})

$('.btn-new').on("click",init);

function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  currentScore = 0;
  $('#current-0').text("0");
  $('#current-1').text("0");

  $('.player-0-panel').toggleClass("active");
  $('.player-1-panel').toggleClass('active');
  $('img.dice').hide();
}
