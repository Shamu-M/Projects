let fun = async(query)=>{
    let d=document.getElementById("table")
    let p = await fetch("https://api.github.com/users")   
    let res= await p.json()      
    let filt= res.filter((ele,)=>{  
        return ele.login.includes(query);
    });
    console.log(res);
    d.innerHTML= `<div> 
        
          ${filt.map((ele)=>{        
              return (`<div class="box1" id="mt-5">                        
                       <h2>${ele.id}</h2>
                       <img src="${ele.avatar_url}" alt="" class="img"> 
                       <h3>${ele.login}</h3>
                       <h3> <a href="${ele.html_url}" target="_blank" > URL </a> </h3>
                       </div>`)
            
        }).join('')}</div>`
    
    }

    window.onload = async()=>{
        let d=document.getElementById("table")
        let p = await fetch("https://api.github.com/users")   
        let res= await p.json()      
       
        console.log(res);
        d.innerHTML= `<div> 
        
          ${res.map((ele)=>{        
              return (`<div class="box1" id="mt-5">                        
                       <h2>${ele.id}</h2>
                       <img src="${ele.avatar_url}" alt="" class="img"> 
                       <h3>${ele.login}</h3>
                       <h3>  <a href="${ele.html_url}" target="_blank" > URL </a> </h3>
                       </div>`)
            
        }).join('')}</div>`
        
        }