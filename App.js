let preloader = document.getElementById('loding');
      
    let loder = function myFunction() {
        
      preloader.style.display = 'none';
      
       }
       setTimeout(loder , 1000)


 fetch('https://api.github.com/users/johnpapa')
.then((e)=>{
     return e.json()
}).then((e)=>{
   let img_profile = document.querySelector("#profile_img")
   console.log(e);

    let intro_sec = document.querySelector("#intro_sec")

   img_profile.innerHTML = `<img width="150px" id="profile_img" class="rounded-circle mx-auto p-2" src="${e.avatar_url}" alt="">
   <br>
                <i class="fa-solid fa-link">${e.url}</i>
   
   `
   intro_sec.innerHTML = `
            <h2>${e.name}</h2>
            <p>${e.bio}</p>
            <i class="fa-solid fa-location-dot "> <span>${e.location}</span></i>
            <h4>Twitter: <span>https://twitter.com/${e.twitter_username
            }</span></h4>`
    // repo

    fetch(e.repos_url)
    .then((e)=>{
        return e.json()
    }).then((e)=>{
        console.log(e);
        // const keys = Object.keys(e);
        //console.log(keys);
        
        // keys.forEach((key, index) => {
           // console.log(`${key}: ${e[key].name}`);
            //console.log(key.name , index);
           let repo = document.querySelector("#main")
            
                repo.innerHTML = `
                <div class="card_r1">
             <div><h1>${ e[0].name}</h1></div>
             <div><p>${ e[0].description}</p></div>
             <div>
                 <span>javascript</span>
                 <span>anugular</span>
                 <span>${e[0].language }</span>
             </div>
         </div> 
                
         <div class="card_r1">
             <div><h1>${ e[1].name}</h1></div>
             <div><p>${ e[1].description}</p></div>
             <div>
             
                 <span>${e[1].language }</span>
                 <span>javascript</span>
                 <span>anugular</span>
                 
             </div>
         </div> 

         <div class="card_r1">
             <div><h1>${ e[2].name}</h1></div>
             <div><p>${ e[2].description}</p></div>
             <div>
                 <span>javascript</span>
                 <span>${e[2].language }</span>
                 <span>anugularjs</span>
                 
             </div>
         </div> 
         
         <div class="card_r1">
             <div><h1>${ e[3].name}</h1></div>
             <div><p>${ e[3].description}</p></div>
             <div>
                 
                 <span>anugular</span>
                 <span>${e[3].language }</span>
                 <span>anugularjs+</span>
             </div>
         </div> 
         
         <div class="card_r1">
             <div><h1>${ e[4].name}</h1></div>
             <div>${ e[4].description}</p></div>
             <div>
                 <span>javascript</span>
                 <span>${e[4].language }</span>
                 <span>anugularjs</span>
                 
             </div>
         </div> 

         <div class="card_r1">
             <div><h1>${ e[5].name}</h1></div>
             <div><p>${ e[5].description}</p></div>
             <div>
                 <span>javascript</span>
                 <span>anugular</span>
                 
                 <span>${e[5].language }</span>
             </div>
         </div> 

         <div class="card_r1">
             <div><h1>${ e[6].name}</h1></div>
             <div><p>${ e[6].description}</p></div>
             <div>
                 <span>${e[6].language }</span>
                 <span>anugular</span>
                 <span>anugularjs</span>
                 
             </div>
         </div> 

         <div class="card_r1">
         <div><h1>${ e[7].name}</h1></div>
         <div><p>${ e[7].description}</p></div>
         <div>
              <span>${e[7].language }</span>
             <span>anugular</span>
             
             <span>anugularjs+</span>
         </div>
     </div> 

     <div class="card_r1">
             <div><h1>${ e[8].name}</h1></div>
             <div><p>${ e[8].description}</p></div>
             <div>
                 <span>javascript</span>
                 <span>${e[8].language }</span>
                 <span>anugularjs</span>
                 <span>anugularjs+</span>
             </div>
         </div> 

         <div class="card_r1">
         <div><h1>${ e[9].name}</h1></div>
         <div><p>${ e[9].description}</p></div>
         <div>
             <span>${e[9].language }</span>
             <span>anugular</span>
             <span>anugularjs</span>
             <span>anugularjs+</span>
         </div>
     </div> 
         `
            // page   

    }).catch((e)=>{
        console.log('error in repo' , e);
     })

    // page1
     fetch(e.repos_url)
     .then((e)=>{
        return e.json()
     }).then((e)=>{
        
        let repo1 = document.querySelector("#main1")
            
        repo1.innerHTML = `
        <div class="card_r1">
     <div><h1>${ e[10].name}</h1></div>
     <div><p>${ e[10].description}</p></div>
     <div>
         <span>javascript</span>
         <span>anugular</span>
         <span>${e[10].language }</span>
     </div>
 </div> 
        
 <div class="card_r1">
     <div><h1>${ e[11].name}</h1></div>
     <div><p>${ e[11].description}</p></div>
     <div>
     
         <span>${e[11].language }</span>
         <span>javascript</span>
         <span>anugular</span>
         
     </div>
 </div> 

 <div class="card_r1">
     <div><h1>${ e[12].name}</h1></div>
     <div><p>${ e[12].description}</p></div>
     <div>
         <span>javascript</span>
         <span>${e[12].language }</span>
         <span>anugularjs</span>
         
     </div>
 </div> 
 
 <div class="card_r1">
     <div><h1>${ e[13].name}</h1></div>
     <div><p>${ e[13].description}</p></div>
     <div>
         
         <span>anugular</span>
         <span>${e[13].language }</span>
         <span>anugularjs+</span>
     </div>
 </div> 
 
 <div class="card_r1">
     <div><h1>${ e[14].name}</h1></div>
     <div>${ e[14].description}</p></div>
     <div>
         <span>javascript</span>
         <span>${e[14].language }</span>
         <span>anugularjs</span>
         
     </div>
 </div> 

 <div class="card_r1">
     <div><h1>${ e[15].name}</h1></div>
     <div><p>${ e[15].description}</p></div>
     <div>
         <span>javascript</span>
         <span>anugular</span>
         
         <span>${e[15].language }</span>
     </div>
 </div> 

 <div class="card_r1">
     <div><h1>${ e[16].name}</h1></div>
     <div><p>${ e[16].description}</p></div>
     <div>
         <span>${e[16].language }</span>
         <span>anugular</span>
         <span>anugularjs</span>
         
     </div>
 </div> 

 <div class="card_r1">
 <div><h1>${ e[17].name}</h1></div>
 <div><p>${ e[17].description}</p></div>
 <div>
      <span>${e[17].language }</span>
     <span>anugular</span>
     
     <span>anugularjs+</span>
 </div>
</div> 

<div class="card_r1">
     <div><h1>${ e[18].name}</h1></div>
     <div><p>${ e[18].description}</p></div>
     <div>
         <span>javascript</span>
         <span>${e[18].language }</span>
         <span>anugularjs</span>
         <span>anugularjs+</span>
     </div>
 </div> 

 <div class="card_r1">
 <div><h1>${ e[19].name}</h1></div>
 <div><p>${ e[19].description}</p></div>
 <div>
     <span>${e[19].language }</span>
     <span>anugular</span>
     <span>anugularjs</span>
     <span>anugularjs+</span>
 </div>
</div> 
 `   

       
     }).catch((e)=>{
        console.log('error is page 1' , e);
     })

        // page 2
        fetch(e.repos_url)
        .then((e)=>{
           return e.json()
        }).then((e)=>{
           
           let repo1 = document.querySelector("#main2")
               
           repo1.innerHTML = `
           <div class="card_r1">
        <div><h1>${ e[20].name}</h1></div>
        <div><p>${ e[20].description}</p></div>
        <div>
            <span>javascript</span>
            <span>anugular</span>
            <span>${e[20].language }</span>
        </div>
    </div> 
           
    <div class="card_r1">
        <div><h1>${ e[21].name}</h1></div>
        <div><p>${ e[21].description}</p></div>
        <div>
        
            <span>${e[21].language }</span>
            <span>javascript</span>
            <span>anugular</span>
            
        </div>
    </div> 
   
    <div class="card_r1">
        <div><h1>${ e[22].name}</h1></div>
        <div><p>${ e[22].description}</p></div>
        <div>
            <span>javascript</span>
            <span>${e[22].language }</span>
            <span>anugularjs</span>
            
        </div>
    </div> 
    
    <div class="card_r1">
        <div><h1>${ e[23].name}</h1></div>
        <div><p>${ e[23].description}</p></div>
        <div>
            
            <span>anugular</span>
            <span>${e[23].language }</span>
            <span>anugularjs+</span>
        </div>
    </div> 
    
    <div class="card_r1">
        <div><h1>${ e[24].name}</h1></div>
        <div>${ e[24].description}</p></div>
        <div>
            <span>javascript</span>
            <span>${e[24].language }</span>
            <span>anugularjs</span>
            
        </div>
    </div> 
   
    <div class="card_r1">
        <div><h1>${ e[25].name}</h1></div>
        <div><p>${ e[25].description}</p></div>
        <div>
            <span>javascript</span>
            <span>anugular</span>
            
            <span>${e[25].language }</span>
        </div>
    </div> 
   
    <div class="card_r1">
        <div><h1>${ e[26].name}</h1></div>
        <div><p>${ e[26].description}</p></div>
        <div>
            <span>${e[26].language }</span>
            <span>anugular</span>
            <span>anugularjs</span>
            
        </div>
    </div> 
   
    <div class="card_r1">
    <div><h1>${ e[27].name}</h1></div>
    <div><p>${ e[27].description}</p></div>
    <div>
         <span>${e[27].language }</span>
        <span>anugular</span>
        
        <span>anugularjs+</span>
    </div>
   </div> 
   
   <div class="card_r1">
        <div><h1>${ e[28].name}</h1></div>
        <div><p>${ e[28].description}</p></div>
        <div>
            <span>javascript</span>
            <span>${e[28].language }</span>
            <span>anugularjs</span>
            <span>anugularjs+</span>
        </div>
    </div> 
   
    <div class="card_r1">
    <div><h1>${ e[29].name}</h1></div>
    <div><p>${ e[29].description}</p></div>
    <div>
        <span>${e[29].language }</span>
        <span>anugular</span>
        <span>anugularjs</span>
        <span>anugularjs+</span>
    </div>
   </div> 
    `   
   
          
        }).catch((e)=>{
           console.log('error is page 2' , e);
        })
        // page 3

        fetch(e.repos_url)
        .then((e)=>{
           return e.json()
        }).then((e)=>{
           
           let repo1 = document.querySelector("#main3")
               
           repo1.innerHTML = `
           <div class="card_r1">
        <div><h1>${ e[30].name}</h1></div>
        <div><p>${ e[30].description}</p></div>
        <div>
            <span>javascript</span>
            <span>anugular</span>
            <span>${e[30].language }</span>
        </div>
    </div> 
           
    <div class="card_r1">
        <div><h1>${ e[31].name}</h1></div>
        <div><p>${ e[31].description}</p></div>
        <div>
        
            <span>${e[31].language }</span>
            <span>javascript</span>
            <span>anugular</span>
            
        </div>
    </div> 
   
    <div class="card_r1">
        <div><h1>${ e[32].name}</h1></div>
        <div><p>${ e[32].description}</p></div>
        <div>
            <span>javascript</span>
            <span>${e[32].language }</span>
            <span>anugularjs</span>
            
        </div>
    </div> 
    
    <div class="card_r1">
        <div><h1>${ e[33].name}</h1></div>
        <div><p>${ e[33].description}</p></div>
        <div>
            
            <span>anugular</span>
            <span>${e[33].language }</span>
            <span>anugularjs+</span>
        </div>
    </div> 
    
    <div class="card_r1">
        <div><h1>${ e[34].name}</h1></div>
        <div>${ e[34].description}</p></div>
        <div>
            <span>javascript</span>
            <span>${e[34].language }</span>
            <span>anugularjs</span>
            
        </div>
    </div> 
   
    <div class="card_r1">
        <div><h1>${ e[35].name}</h1></div>
        <div><p>${ e[35].description}</p></div>
        <div>
            <span>javascript</span>
            <span>anugular</span>
            
            <span>${e[35].language }</span>
        </div>
    </div> 
   
    <div class="card_r1">
        <div><h1>${ e[36].name}</h1></div>
        <div><p>${ e[36].description}</p></div>
        <div>
            <span>${e[36].language }</span>
            <span>anugular</span>
            <span>anugularjs</span>
            
        </div>
    </div> 
   
    <div class="card_r1">
    <div><h1>${ e[37].name}</h1></div>
    <div><p>${ e[37].description}</p></div>
    <div>
         <span>${e[37].language }</span>
        <span>anugular</span>
        
        <span>anugularjs+</span>
    </div>
   </div> 
   
   <div class="card_r1">
        <div><h1>${ e[38].name}</h1></div>
        <div><p>${ e[38].description}</p></div>
        <div>
            <span>javascript</span>
            <span>${e[38].language }</span>
            <span>anugularjs</span>
            <span>anugularjs+</span>
        </div>
    </div> 
   
    <div class="card_r1">
    <div><h1>${ e[39].name}</h1></div>
    <div><p>${ e[39].description}</p></div>
    <div>
        <span>${e[39].language }</span>
        <span>anugular</span>
        <span>anugularjs</span>
        <span>anugularjs+</span>
    </div>
   </div> 
    `   
   
          
        }).catch((e)=>{
           console.log('error is page 3' , e);
        })
   
}).catch((e)=>{
    console.log('error' , e);
})

