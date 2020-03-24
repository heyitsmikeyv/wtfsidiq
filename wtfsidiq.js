function generate(){
  console.log("Generating.")
  outputdiv = document.getElementById("output")
  outputheader = document.getElementById("outputheader")
  genbutton = document.getElementById("clickme")

  // Modify the output div's contents to show a random idea
  idea = ideas[Math.floor(Math.random()*ideas.length)];
  outputheader.innerHTML = idea
  console.log("Generated.")
}

function getideas(){
  console.log("Getting ideas")

  ideas = [
  "Do some yoga I guess?",
  "Read one of those fuckin books you got lying around.",
  "Go to your neighbor's yard and try to pick one leaf off of each plant, bush, tree, etc. Don't get caught.",
  "Wash your filthy fucking hands.",
  "Seriously I'm not kidding wash those gross hands what the shit is wrong with you",
  "Work on your household budget because shit's about to get WEIRD financially amirite",
  "Make a puppet theater out of stuff in your house. Whether or not you have kids is irrelevant.",
  "Two words: Flashlight. Tag.",
  "Work on a tight five minute standup comedy routine, throw it on YouTube.",
  "Build a better mousetrap."
  ]

}
