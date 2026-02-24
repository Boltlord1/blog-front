import { Link } from 'react-router'

function PostList({ data }) {
    return (
        <div>
            <h3><Link to={`/post/${data.id}`}>{data.title}</Link></h3>
        </div>
    )
}

export default PostList