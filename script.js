// =========================
// Header
// =========================

document.getElementById("company").textContent = CONFIG.company;

// =========================
// Live Clock
// =========================

function updateClock() {

    const now = new Date();

    document.getElementById("today").textContent =
        now.toLocaleDateString(undefined, {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        });

    document.getElementById("clock").textContent =
        now.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });

}

updateClock();

setInterval(updateClock, 1000);

// =========================
// Sprint Information
// =========================

const sprintStart = new Date(CONFIG.sprintStart);

const today = new Date();

const sprintLength = CONFIG.sprintLength;

const MS_PER_DAY = 1000 * 60 * 60 * 24;

const totalDays = Math.floor((today - sprintStart) / MS_PER_DAY);

const sprintNumber = Math.max(0, Math.floor(totalDays / sprintLength));

const dayOfSprint = ((totalDays % sprintLength) + sprintLength) % sprintLength + 1;

const sprintStartDate = new Date(sprintStart);

sprintStartDate.setDate(
    sprintStart.getDate() + sprintNumber * sprintLength
);

const sprintEndDate = new Date(sprintStartDate);

sprintEndDate.setDate(
    sprintStartDate.getDate() + sprintLength - 1
);

const nextSprintDate = new Date(sprintEndDate);

nextSprintDate.setDate(
    sprintEndDate.getDate() + 1
);

const remainingDays = sprintLength - dayOfSprint;

const progress = Math.round((dayOfSprint / sprintLength) * 100);

// =========================
// Update Sprint Card
// =========================

document.getElementById("sprint").textContent =
    `Sprint ${sprintNumber}`;

document.getElementById("progressText").innerHTML =
    `Day <b>${dayOfSprint}</b> of <b>${sprintLength}</b> &nbsp; • &nbsp; ${remainingDays} Days Remaining &nbsp; • &nbsp; ${progress}% Complete`;

document.getElementById("progress").value = progress;

document.getElementById("start").textContent =
    sprintStartDate.toLocaleDateString();

document.getElementById("end").textContent =
    sprintEndDate.toLocaleDateString();

document.getElementById("next").textContent =
    nextSprintDate.toLocaleDateString();

// =========================
// Helper
// =========================

function createList(id, items, formatter) {

    const parent = document.getElementById(id);

    parent.innerHTML = "";

    items.forEach(item => {

        const li = document.createElement("li");

        li.innerHTML = formatter(item);

        parent.appendChild(li);

    });

}

// =========================
// Priorities
// =========================

createList(
    "priorities",
    CONFIG.priorities,
    p => p
);

// =========================
// Projects
// =========================

createList(
    "projects",
    CONFIG.projects,
    p => `
        <strong>${p.health} ${p.name}</strong><br>
        <small>${p.status}</small><br>
        <span style="color:#8b949e;">Owner: ${p.owner}</span>
    `
);

// =========================
// Milestones
// =========================

createList(
    "milestones",
    CONFIG.milestones,
    m => `
        <strong>${m.title}</strong><br>
        <small>${m.date}</small><br>
        <span style="color:#8b949e;">${m.owner}</span>
    `
);

// =========================
// Meetings
// =========================

createList(
    "meetings",
    CONFIG.meetings,
    m => `
        <strong>${m.title}</strong><br>
        <small>${m.schedule}</small>
    `
);

// =========================
// Team
// =========================

const teamDiv = document.getElementById("team");

teamDiv.innerHTML = "";

CONFIG.team.forEach(member => {

    const badge = document.createElement("span");

    badge.textContent = member;

    teamDiv.appendChild(badge);

});

// =========================
// Today's Focus
// =========================

let focus = "";

if (dayOfSprint <= 3) {

    focus = "Planning & Development";

}
else if (dayOfSprint <= 8) {

    focus = "Feature Development";

}
else if (dayOfSprint <= 11) {

    focus = "Testing & Code Reviews";

}
else if (dayOfSprint === 12) {

    focus = "Bug Fixes & QA";

}
else if (dayOfSprint === 13) {

    focus = "Sprint Planning & Sprint Demo";

}
else {

    focus = "Deployment & Release Notes";

}

document.getElementById("focus").textContent = focus;

// =========================
// Rule Rotation
// =========================

let ruleIndex = 0;

const ruleElement = document.getElementById("rule");

function rotateRule() {

    ruleElement.textContent = CONFIG.rules[ruleIndex];

    ruleIndex++;

    if (ruleIndex >= CONFIG.rules.length)
        ruleIndex = 0;

}

rotateRule();

setInterval(rotateRule, 10000);

// =========================
// Refresh Every Minute
// =========================

setInterval(() => {

    location.reload();

}, 60000);
