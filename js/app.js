let boxCard= document.getElementById("box"),
    logoCar= document.getElementById("car"),
    close=document.getElementById("close"),
    add= document.querySelector(".add"),
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

add.addEventListener("click", e =>
{
    let info=e.target.parentElement.parentElement.parentElement


    let data=
    {
        title : info.children[0].children[0].textContent,
        img   : info.children[0].children[1].src,
        price : info.children[1].children[1].children[1].textContent
    }


    mostrarInfo(data)

})





