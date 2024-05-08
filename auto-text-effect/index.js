const containerEl = document.querySelector('.container');

const careers = ["Software Engineer", "Freelancer", "Instructor", "Mentor"]

let careerIdx = 0

let characterIdx = 0;

updateText()
function updateText() {
    characterIdx++

    containerEl.innerHTML = `
<h1>I am ${careers[careerIdx].slice(0, 1) === "I" ? "an": "a"} ${careers[careerIdx].slice(0, characterIdx)}</h1>
`
    
    if (characterIdx === careers[careerIdx].length) {
        careerIdx++;
        characterIdx = 0
    }
    if (careerIdx === careers.length) {
        careerIdx = 0
    }
    setTimeout(updateText, 400)
}

