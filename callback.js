const button = document.querySelector("button");
const container = document.getElementById("content-container")
button.addEventListener('click',()=>{
    setTimeout(() => {
        // Fetching data from the API and displaying after 5 seconds.
        fetch('https://dummyjson.com/posts')
          .then(response => response.json())
          .then(result => {
            para.textContent = "POSTS"
            const posts = result.posts.map(post => post.title);
            for(let title of posts){
                const titlesPara = document.createElement('p');
                titlesPara.textContent = title;
                container.appendChild(titlesPara);
            }
        })
      }, 5000);  
    container.classList.add("content-container");
    const para = document.createElement('p');
    para.textContent = "result will be displayed in 5 seconds..." 
    container.appendChild(para)
})