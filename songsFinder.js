try{
console.clear()    
console.log("songs links will be copied to you clip board")
let scrollContainer = document.getElementById("scroll-container");
let tempDiv = scrollContainer.cloneNode(true);
let links=tempDiv.querySelectorAll("a[href]")
let str_of_links=""
for(let i=0;i<links.length;i++){
    str_of_links+=links[i]+"\n"
}
if(links.length==0){
    str_of_links="not for this video in this version ... try for this may be https://www.youtube.com/watch?v=kHD1hD_OYj8"
    str_of_links+="\n may be add is runnning now,try after skipping add"
    str_of_links+="\n may be the vidoe is not a group of songs .."
}
else{
    console.log("your links are \n")
}
console.log(str_of_links)
navigator.clipboard.writeText(str_of_links)
}
catch(err){
    console.log("got an unexpected err contact dev .."+err)
}