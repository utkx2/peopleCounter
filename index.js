// document.getElementById("countElement").innerText = 5;
let count = 0;
function clickIncrement()
{
    //console.log("clicked");
    count++;
    document.getElementById("countElement").innerText = count;
    //here the innerText stands for the text inside of the tags
}
function savebutton()
{
    let countstring = count + "-";
    document.getElementById("people-tillNow").textContent += countstring;
    console.log(count);
    document.getElementById("countElement").textContent = 0; //text content or inner text both do similar work, still textcontent is preffered
    count = 0;
}
