
        let pluss = document.querySelectorAll(".plus");
        let moinn = document.querySelectorAll(".moin");
        let delet=document.querySelectorAll(".fa-trash-alt");
        let li=document.querySelectorAll(".fa-heart");
        let q=document.querySelectorAll(".qut")
        let p=document.querySelectorAll(".prix")
        let tt=document.querySelectorAll(".t")
     
        let som=document.querySelectorAll("#s")
       // console.log(li)
       function somme(){
          var s=0
           for(let i=0;i<tt.length;i++){
           som[i].innerHTML=s[i].innerHTML+tt[i].innerHTML}
       }
        for(let i=0;i<pluss.length;i++){
       pluss[i].addEventListener("click", function () {
           
            if (pluss[i].nextElementSibling.innerHTML <= 15) {
                pluss[i].nextElementSibling.innerHTML++;
            }
        })}
        for(let i=0;i<moinn.length;i++){
       moinn[i].addEventListener("click", function () {
          
            if (moinn[i].previousElementSibling.innerHTML > 0) {
                moinn[i].previousElementSibling.innerHTML--;
            }
        })}

        for( let i=0;i<delet.length;i++){
        delet[i].addEventListener("click",function(){
            delet[i].parentElement.remove();
        })}

       for (let i = 0; i < li.length; i++) {
        li[i].addEventListener("click",function(){
         li[i].classList.toggle('red')   

        })
           
       }
       function totale(){
       for(let i=0;i<q.length;i++)
       {
           tt[i].innerHTML=q[i].innerHTML*p[i].innerHTML
       }}