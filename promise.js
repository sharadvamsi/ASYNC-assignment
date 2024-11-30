const button = document.querySelector("button");
const container = document.getElementById("content-container")
button.addEventListener('click', () => {
    // Display loading message immediately
    container.classList.add("content-container");
    const para = document.createElement('p');
    para.textContent = "Loading...";
    container.appendChild(para);

    // Fetching data with a 5-second delay and timeout handling
    const data = new Promise((resolve, reject) => {
        const fetchRequest = fetch('https://dummyjson.com/posts')
            .then(resolve) // Resolve if fetch succeeds
            .catch(reject); // Reject if fetch fails

        // Timeout after 5 seconds
        setTimeout(() => {
            reject("Operation time out");
        }, 5000);
    });

    // Delaying the display of posts 
    setTimeout(() => {
        data
            .then(response => response.json())
            .then(result => {
                para.textContent = "POSTS"; 
                const posts = result.posts.map(post => post.title);
                for (let title of posts) {
                    const titlesPara = document.createElement('p');
                    titlesPara.textContent = title;
                    container.appendChild(titlesPara);
                }
            })
            .catch(error => {
                para.textContent = error; 
            });
    }, 5000); 
});
