let namebox = document.getElementById("name")

let checkName = (event) => 
{
    event.preventDefault();

    let s1 = namebox.value;
    console.log(s1);
    localStorage.setItem("name", s1);
    setTimeout(
        () => 
        {
            window.location.href = "./quiz.html";
        }
    ,2000);
}
