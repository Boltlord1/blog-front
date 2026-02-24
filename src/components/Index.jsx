import { useState, useEffect } from 'react'
import Dashboard from './Dashboard'
import PostList from './PostList'

function Index() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function getPosts() {
            const response = await fetch(`http://localhost:3000/post`)
            const json = await response.json()
            setPosts(json)
        }
        getPosts()
    }, [])

    return (
        <>
        <Dashboard />
        <main>
            <h2>Welcome</h2>
            {posts.map((post) => <PostList key={post.id} data={post} /> )}
        </main>
        </>
    )
}

export default Index