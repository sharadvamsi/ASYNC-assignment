const button = document.querySelector("button");
const container = document.getElementById("content-container")
button.addEventListener('click', async() => {
    container.classList.add("content-container");
    const para = document.createElement('p');
    para.textContent = "Loading...";
    container.appendChild(para);

    try {
        const request = await fetch('https://dummyjson.com/posts');
        const response = await request.json();
        const posts = response.posts.map(post=>post.title)
        para.textContent = "POSTS"; 
        for (let title of posts) {
            const titlesPara = document.createElement('p');
            titlesPara.textContent = title;
            container.appendChild(titlesPara);
        }
        
        
    } catch (error) {
        para.textContent = error
    }
});
