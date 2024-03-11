const strike = document.getElementById("strike");
const reset = document.getElementById("reset");
const $team1_score = document.getElementById("score-team1");
const $team1_wickets = document.getElementById("wickets-team1");
const $team2_score = document.getElementById("score-team2");
const $team2_wickets = document.getElementById("wickets-team2");
const possible_runs = [0, 1, 2, 3, 4, 6, "W"];
let team1_score = 0, team1_wickets = 0, team2_score = 0, team2_wickets = 0, team1BallsFaced = 0, team2BallsFaced = 0;
let player_turn = 1;
strike.onclick = () => {
  const current_run = possible_runs[Math.floor(Math.random() * possible_runs.length)];
  if(player_turn == 1) 
  {
    team1BallsFaced++;
    document.querySelector(`#team1-superover div:nth-child(${team1BallsFaced})`).textContent = current_run;
    if(current_run == "W")
    {
      team1_wickets++;
    } 
    else 
    {
      team1_score += current_run;
    }
    if(team1BallsFaced == 6 || team1_wickets == 2) 
    {
      player_turn = 2;
    }
  } 
  else if(player_turn == 2) 
  {
    team2BallsFaced++;
    document.querySelector(`#team2-superover div:nth-child(${team2BallsFaced})`).textContent = current_run;
    if(current_run == "W") 
    {
      team2_wickets++;
    } 
    else 
    {
      team2_score += current_run;
    }
    if(team2BallsFaced == 6 || team2_wickets == 2 || team2_score > team1_score) 
    {
      player_turn = 3;
      Winner();
    }
  }
  update();
};

function update() 
{
  $team1_score.textContent = team1_score;
  $team1_wickets.textContent = team1_wickets;
  $team2_score.textContent = team2_score;
  $team2_wickets.textContent = team2_wickets;
}

function Winner() {
  if(team1_score > team2_score) 
  {
    alert("IND wins");
  } 
  else if(team2_score > team1_score) 
  {
    alert("PAK wins");
  } 
  else 
  {
    alert("It is another superover!");
  }
}

reset.onclick = () => {
  window.location.reload();
};
