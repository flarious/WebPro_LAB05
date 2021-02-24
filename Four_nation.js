const buttons = document.querySelectorAll("button");
const texts = document.querySelectorAll("h1");
for(const button of buttons)
{
    button.addEventListener("click", buttonClick);
}
for(const text of texts)
{
    text.addEventListener("click", textClick);
}

function buttonClick()
{
    const button = event.currentTarget;

    button.classList.remove("notClick");
    button.classList.add("Clicked");

    if(button.id === "1")
    {
        alert(button.innerHTML + " said: I'm a sad boi now.");
    }
    else if(button.id === "2")
    {
        alert(button.innerHTML + " said: But...but why?");
    }
    else if(button.id === "3")
    {
        alert(button.innerHTML + " said: Look at what you have done.");
    }
    else if(button.id === "4")
    {
        alert(button.innerHTML + " said: FIGHT ME!!!");
    }
}

function textClick()
{
    for(const text of texts)
    {
        if(text.id === "upper")
        {
            text.innerHTML = "Get RICKROLLED!!!";
            
        }
        else if(text.id === "lower")
        {
            text.innerHTML = "Please don't deduct my score";
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        }
    }

    
}

