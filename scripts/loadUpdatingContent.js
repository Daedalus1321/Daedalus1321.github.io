function updateLinks(){        
    let topBar = document.getElementById("top_bar");   
        topBar.innerHTML = '<a href="https://asherhausam.com">'+
    '<span class="mso fit" >home</span></a>'+
    ' | ' +
    '<a href="/blog/"><span class="mso fit">menu_book</span>blog</a>' +
    ' | ' +
    '<a href="/projects/"><span class="mso fit">code</span>projects</a>' +
    ' | ' +
    '<a href="/sitemap/"><span class="mso fit">menu</span>more</a>';
        
    let socials=document.getElementById("socials");
        socials.innerHTML = '<p><b>Check out my socials!</b></p>' + 
    '<a href="https://www.linkedin.com/in/asher-hausam-208a2021a/"><span class="mso fit">work</span>LinkedIn</a>'+
    ' | '+
    '<a href="https://www.instagram.com/asherhausam/"><span class="mso fit">photo_camera</span>Instagram</a>'+
    ' | '+
    '<a href="https://github.com/Daedalus1321"><span class="mso fit">code</span>Github</a>'
    
    let lastDate=document.getElementById("update");
            lastDate.innerHTML = '<p>This site last updated : 2025/08/08</p>'
            lastDate.style.fontSize = "18px";
            lastDate.style.color = "rgb(45,45,45)";
            
    }