const button = document.querySelector("button");
const mode = document.querySelector("body");
button.addEventListener("click", changeMode);

function changeMode()
{
    const spans = document.querySelectorAll("span");

    if(mode.classList.contains("day"))
    {
        mode.classList.remove("day");
        mode.classList.add("night");

        for(const temp of spans)
        {
            if(temp.id === "time")
            {
                temp.innerHTML = "NIGHT";
            }
            else if(temp.id === "mode")
            {
                temp.innerHTML = "night";
            }
            else if(temp.id === "word")
            {
                temp.classList.remove("day");
                temp.classList.add("night");
            }
            else if(temp.classList.contains("text"))
            {
                temp.innerHTML = "day";
            }
        }
    }
    else
    {
        mode.classList.remove("night");
        mode.classList.add("day");

        for(const temp of spans)
        {
            if(temp.id === "time")
            {
                temp.innerHTML = "MORNING";
            }
            else if(temp.id === "mode")
            {
                temp.innerHTML = "day";
            }
            else if(temp.id === "word")
            {
                temp.classList.remove("night");
                temp.classList.add("day");
            }
            else if(temp.classList.contains("text"))
            {
                temp.innerHTML = "night";
            }
        }
    }
}
