let myHeading=document.querySelector("h1");
let myButton=document.querySelector("button");
//myHeading.textContent="welcome!";
document.querySelector("h2").addEventListener("click",function(){ alert("亿联");});

let myImage = document.querySelector("img");

myImage.onclick=function()//点击切换图片
{
    let mySrc=myImage.getAttribute("src");
    if(mySrc ==="images/comnect.png")
    {
        myImage.setAttribute("src","images/tel-email.png");
    }
    else
    {
        myImage.setAttribute("src","images/comnect.png");
    }
}

function setUserName()//个性欢迎词
{
    let myName = prompt("请输入你的名字");
    if(!myName)
    {
        setUserName();
    }
    else
    {
    localStorage.setItem("name",myName);
    myHeading.textContent = "欢迎"+ myName;
    }
}
if(!localStorage.getItem("name"))
{
    setUserName();
}
else
{
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "欢迎"+ storedName;
}
myButton.onclick = function ()
{
    setUserName();
}