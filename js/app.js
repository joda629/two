let boxCard= document.getElementById("box"),
    logoCar= document.getElementById("car"),
    close=document.getElementById("close"),
    add= document.getElementsByClassName("info__details"),
    c=console.log

    c(add)



logoCar.addEventListener("click", function()
{

    boxCard.style.display="block"
    boxCard.style.position="fixed"
});

close.addEventListener("click", ()=>
{
    boxCard.style.display="none";
})


for(let i =0 ; i< add.length;i++)
{
    if(add[i].addEventListener("click",function(e)
    {
    
        let data;

        if(e.target.classList.contains("add"))
        {
            let info=e.target.parentElement.parentElement.parentElement

            alert("hey")
            data=
            {
                title : info.children[0].children[0].textContent,
                img   : info.children[0].children[1].src,
                price : info.children[1].children[1].children[1].textContent
            }
        }

        mostrarInfo(data)     
    })
    )
    {

    }

}



function mostrarInfo(info)
{

    let li=document.createElement("li"),
        ul=document.getElementById("courses")


        li.innerHTML+=
        `
            <p>${info.title}</p>
            <img src="${info.img}"  width="50" style="display:block">
            <span>${info.price}</span>
            <hr>
        `

    ul.appendChild(li)

    
}





