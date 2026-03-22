import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import Dashboard from './Dashboard'
import Comment from './Comment'

function Post() {
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const { id } = useParams()

    useEffect(() => {
        async function getPost() {
            const response = await fetch(`https://blog-api-production-00510.up.railway.app/post/${id}`)
            const json = await response.json()
            setPost(json)
        }
        getPost()
    }, [])

    useEffect(() => {
        async function getComments() {
            const response = await fetch(`https://blog-api-production-00510.up.railway.app/comment/${id}`)
            const json = await response.json()
            setComments(json)
        }
        getComments()
    }, [])

    return (
        <>
        <Dashboard />
        <main>
            <div>
                <h2>{post.title}</h2>
                <p>{post.text}</p>
            </div>
            <div>
                <form action={`https://blog-api-production-00510.up.railway.app/comment/${post.id}`} method='post'>
                    <h3>Add a comment</h3>
                    <div>
                        <label htmlFor='user'>Name</label>
                        <input type='text' name='user' id='user' />
                    </div>
                    <div>
                        <label htmlFor='text'>Comment</label>
                        <textarea name='text' id='text'></textarea>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
                {comments.map((comment) => <Comment key={comment.id} data={comment} />)}
            </div>
        </main>
        </>
    )
}

export default Post