let stars = document.getElementsByTagName("img");

       Array.prototype.forEach.call(stars,(item,index)=>{
         item.onmouseenter = () => {
           for(let j=0;j<=index;j++){
             stars[j].style.transform = "translate(0,-27px)";
             let m = j+1;
             for(let n=m; n<=4;n++){
               stars[n].style.transform = "none";
             }
           }
           let detail = document.createElement("div");
           let review = document.createElement("p");
           let reviewDetail = document.createElement("p");
           switch(index){
             case 0:
                review.innerText = "1 points. Very unhappy with it.";
                reviewDetail.innerText = "It is too different with what was depicted. Heavily dislike it";
                break;
             case 1:
                review.innerText = "2 points. Not so happy with it.";
                reviewDetail.innerText = "Partly broken. Not as good as I expected";
                break;
             case 2:
               review.innerText = "3 points. Acceptable";
               reviewDetail.innerText = "Not so good, but still acceptable";
               break;
             case 3:
               review.innerText = "4 points. Satisfied";
               reviewDetail.innerText = "Good quality. Almost the same as described.";
               break;
             case 4:
               review.innerText = "5 points. Very satisfied";
               reviewDetail.innerText = "Amazing experienced. It meets all my expectations!";
               break;
           }
               review.style.color = "red";
               reviewDetail.style.color = "#666";
               detail.style.border = "1px solid #ccc";
               detail.style.width = "200px";
               detail.style.fontSize = "0.8rem";
               detail.style.padding = "0.5rem";
               detail.style.marginTop = "0.5rem";
           detail.appendChild(review);
           detail.appendChild(reviewDetail);
           document.body.appendChild(detail);

         item.onmouseleave = () =>{
           document.body.removeChild(detail);
           for(let i=0;i<=index;i++){
             stars[i].style.transform = "none";
           }
         }

         item.onclick = (item,index) =>{

               document.body.removeChild(detail);
               let reviewResult = document.createElement("div");
               reviewResult.appendChild(review);
               reviewResult.appendChild(reviewDetail);
               document.body.appendChild(reviewResult);

               reviewResult.style.marginTop="2rem";
               reviewResult.style.border="3px solid #d3eaea";
               reviewResult.style.padding="2rem";
           }
        }
  })
