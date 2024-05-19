const { useState, useEffect } = require("react")

const ListPost = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        async function getPosts() {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const posts = response.json();
            setPosts(posts);
        }
        getPosts();
    }, [])


    return (
        <div className="posts">
            {posts.map((item) => {
                <div className="post">{item}</div>
            })}
        </div>
    )
}