const { useState, useEffect } = require("react")

const ListPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getPosts() {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const posts = await response.json();
            setPosts(posts);
        }
        getPosts();
    }, [])


    return (
        <div className="posts">
            {posts.map((item, index) => {
                return <div className="post" key={index}>{item.title}</div>
            })}
        </div>
    )
}

export default ListPosts;