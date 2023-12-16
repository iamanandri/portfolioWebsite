import projects from "./projects.json" assert { type: "json"}

document.querySelector("#pomodoroTimer").setHTML(JSON.stringify(projects[0]));
console.log(JSON.stringify(projects));