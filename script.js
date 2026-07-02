document.getElementById("company").textContent = CONFIG.company;

const start = new Date(CONFIG.sprintStart);

const today = new Date();

const sprintLength = CONFIG.sprintLength;

const totalDays = Math.floor((today-start)/(1000*60*60*24));

const sprint = Math.floor(totalDays/sprintLength);

const day = totalDays%sprintLength+1;

const remaining=sprintLength-day;

const progress=(day/sprintLength*100).toFixed(0);

const end=new Date(start);

end.setDate(start.getDate()+((sprint+1)*sprintLength)-1);

const next=new Date(end);

next.setDate(end.getDate()+1);

document.getElementById("sprint").innerHTML=`Sprint ${sprint}`;

document.getElementById("progressText").innerHTML=
`Day ${day} of ${sprintLength} • ${remaining} Days Remaining`;

document.getElementById("progress").value=progress;

document.getElementById("start").textContent=start.toDateString();

document.getElementById("end").textContent=end.toDateString();

document.getElementById("next").textContent=next.toDateString();

function fill(id,data,formatter){

const ul=document.getElementById(id);

data.forEach(x=>{

const li=document.createElement("li");

li.innerHTML=formatter?formatter(x):x;

ul.appendChild(li);

});

}

fill("priorities",CONFIG.priorities);

fill("projects",CONFIG.projects,p=>`${p.name} - ${p.status}`);

fill("milestones",CONFIG.milestones,m=>`${m.date} - ${m.title}`);

fill("meetings",CONFIG.meetings);

fill("team",CONFIG.team);

let index=0;

document.getElementById("rule").textContent=CONFIG.rules[0];

setInterval(()=>{

index++;

if(index>=CONFIG.rules.length)

index=0;

document.getElementById("rule").textContent=CONFIG.rules[index];

},10000);
