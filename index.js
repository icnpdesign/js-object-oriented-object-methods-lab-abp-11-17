function boardMembers () {
    let polishedBoardMember = new BoardMember 
  function BoardMember (name, homeState, training) {
    this.name = name
    this.homeState = homeState
    this.training = training
    let polishedBoardMember = new BoardMember
    polishedBoardMember.veto =
      function () {
        return ("No, I must disagree")
      }
    polishedBoardMember.approve =
      function () {
        return ("You can do that!")
      }
    polishedBoardMember.doCharity =
      function () {
        return ("I like to help people.")
      }
    polishedBoardMember.releasePressStatement =
      function () {
        return ("You will see great things from Scuber.")
      }
    polishedBoardMember.sayHi =
      function () {
        return (`Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
      }
  }
}
