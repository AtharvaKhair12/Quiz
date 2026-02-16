let s1 = localStorage.getItem("name");

let showName = () =>
{
    let playerBox = document.getElementById("playerbox");
    playerBox.innerText = "Player : " + s1;
}
showName();

let a1 = [];
let index = 0;
let current;

let questionbox = document.getElementById("question");
let optionbox = document.getElementById("options");
let nxt = document.getElementById("next-btn");
let scoretag = document.getElementById("score");

let score = 0;

let loadArray = async () =>
{
    a1 = await fetch("./quiz.json");
    a1 = await a1.json();
    showQuestion();
}

let showQuestion = () =>
{
    optionbox.innerHTML = "";

    current = a1[index];

    questionbox.innerText = current.question;

    let disclaimer = document.getElementById("disclaimer");
    if (!disclaimer)
    {
        disclaimer = document.createElement("p");
        disclaimer.id = "disclaimer";
        disclaimer.innerText = "Note: Once you select an option, it cannot be changed.";
        disclaimer.style.fontSize = "14px";
        disclaimer.style.color = "darkred";
        disclaimer.style.fontStyle = "italic";
        disclaimer.style.marginTop = "8px";

        questionbox.after(disclaimer);
    }

    current.options.forEach((str, i) =>
    {
        let b1 = document.createElement("button");
        b1.innerText = str;
        b1.classList.add("option-btn");

        b1.addEventListener("click", () =>
        {
            checkAnswer(i);
        });

        optionbox.appendChild(b1);
    });
}

loadArray();

let nextQuestion = () =>
{
    index++;
    optionbox.innerHTML = "";

    if (index === a1.length)
    {
        questionbox.innerText = "Quiz Completed";
        nxt.style.display = "none";
        return;
    }

    showQuestion();
}

let checkAnswer = (i) =>
{
    if (i === current.correct)
    {
        score++;
        scoretag.innerText = "Score : " + score;
    }

    let buttonArray = document.querySelectorAll(".option-btn");

    buttonArray.forEach((btn, index) =>
    {
        btn.disabled = true;

        if (index === current.correct)
        {
            btn.style.backgroundColor = "green";
        }
        else
        {
            btn.style.backgroundColor = "red";
        }
    });
}
