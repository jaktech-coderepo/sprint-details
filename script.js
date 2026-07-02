// Sprint 0 starts on 29 June 2026

const sprintStart = new Date("2026-06-29");
const sprintLength = 14; // days

const today = new Date();

const diffTime = today - sprintStart;
const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

const sprintNumber = Math.floor(totalDays / sprintLength);

const dayInSprint = (totalDays % sprintLength) + 1;

document.getElementById("sprint").textContent = `Sprint ${sprintNumber}`;
document.getElementById("dayCount").textContent = dayInSprint;
