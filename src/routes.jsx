import Index from './components/Index'
import Post from './components/Post'

export default [
    {
        path: '/',
        element: <Index />
    },
    {
        path: 'post/:id',
        element: <Post />
    }
]