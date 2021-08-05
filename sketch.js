function checkForWinner() {
  console.log("checking for winner...")
  var winner
  var playerOne = getPlayerOne() //playerOne is always blue!
    //console.log('checkForWinner, playerOne is: ', playerOne)
var computer = (playerOne === "X") ? "O" : "X"
//there are 8 winningCombos: 
  //three rows, three columns, two diagonals
  //refactor below.... this is not DRY!
  var blueWin1 = $("#one.blue, #two.blue, #three.blue").length === 3
  var blueWin2 = $("#four.blue, #five.blue, #six.blue").length === 3
  var blueWin3 = $("#seven.blue, #eight.blue, #nine.blue").length === 3
  var blueWin4 = $("#one.blue, #four.blue, #seven.blue").length === 3
  var blueWin5 = $("#two.blue, #five.blue, #eight.blue").length === 3
  var blueWin6 = $("#three.blue, #six.blue, #nine.blue").length === 3
  var blueWin7 = $("#one.blue, #five.blue, #nine.blue").length === 3
  var blueWin8 = $("#seven.blue, #five.blue, #three.blue").length === 3
var redWin1 = $("#one.red, #two.red, #three.red").length === 3
  var redWin2 = $("#four.red, #five.red, #six.red").length === 3
  var redWin3 = $("#seven.red, #eight.red, #nine.red").length === 3
  var redWin4 = $("#one.red, #four.red, #seven.red").length === 3
  var redWin5 = $("#two.red, #five.red, #eight.red").length === 3
  var redWin6 = $("#three.red, #six.red, #nine.red").length === 3
  var redWin7 = $("#one.red, #five.red, #nine.red").length === 3
  var redWin8 = $("#seven.red, #five.red, #three.red").length === 3
//var winningCombos = [x]
  //refactor below too... not DRY at all!!!
  //note: playerOne is always blue
  var blueWins = (blueWin1 || blueWin2 || blueWin3 || blueWin4 || blueWin5 || blueWin6 || blueWin7 || blueWin8)
var redWins = (redWin1 || redWin2 || redWin3 || redWin4 || redWin5 || redWin6 || redWin7 || redWin8)
var redCount = getRedCount()
    //console.log('redCount is: ', redCount)
  var blueCount = getBlueCount()
    //console.log('blueCount is: ', blueCount)
  var fullGrid = redCount + blueCount
  console.log('fullGrid is: ', fullGrid)
var draw = (fullGrid === 9) && (!blueWins) && (!redWins)
if (blueWins) { //playerOne is always blue
    winner = blueWins
    console.log(`${playerOne} wins!`)
    $("#gameResult, #congratsOrSorry").removeClass("displayNone")
    $("#gameResult").html(`<span class='yellowBig'>${playerOne} wins!</span>`)
    $("#congratsOrSorry").html("<span class='yellow'>Congratulations! You won!</span>")
    $("#gameInfo").addClass("displayNone")
    disableRemainingItems()
    return winner
  }
  if (redWins) { //red is computer
    winner = redWins
    console.log(`${computer} wins!`)
    $("#gameResult, #congratsOrSorry").removeClass("displayNone")
    $("#gameResult").html(`<span class='redBig'>${computer} wins!</span>`)
    $("#congratsOrSorry").html("<span class='red'>Sorry, you lost.</span>")
    $("#gameInfo").addClass("displayNone")
    disableRemainingItems()
    return winner
  }
  if (draw) {
    winner = draw
    console.log('Draw game!')
    $("#gameResult, #congratsOrSorry").removeClass("displayNone")
    $("#gameResult").html(`<span class='redBig'>Game is a draw.</span>`)
    $("#congratsOrSorry").html("<span>Game ended in a draw.</span>")
    $("#gameInfo").addClass("displayNone")
    disableRemainingItems()
    return winner
  } else {
    console.log('game on...')
  }
}