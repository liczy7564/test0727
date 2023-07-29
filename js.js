$(document).ready(function(){
    $(".Button").on("click",function(){
        let now= [];
        let i =0;
        for (i ; i < 6; i++){
            let n = Math.floor(Math.random()*48)+1;
            
            if (now.indexOf(n) == -1){
                now.push(n);
            }else{
                i--;
            }
            document.getElementById('newBall'+i).textContent = now[i];
        }
        let note=document.querySelector(".note");
        note.innerHTML += "<div clsss='note_content'> 號碼："+now+"</div>";
    });
    
});


