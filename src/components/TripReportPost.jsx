import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const CreatePost = (props) => {
    let navigate = useNavigate()
    const LOCAL_URL = 'http://localhost:3001/guide'
    const HEROKU_URL='https://mighty-woodland-71351.herokuapp.com/guide'
    let BASE_URL = HEROKU_URL ? HEROKU_URL : LOCAL_URL
    const [newPost, setNewPost] = useState({ title: '', body: '', image: '' })

    // Create Post Function
    const handleSubmit = async (e) => {
        await createPost(e)
        window.location.reload(false)
    }

    // Handles input change
    const handleChange = (event) => {
        setNewPost({ ...newPost, [event.target.name]: event.target.value })
    }

    // Creates new post
    const createPost = async (e) => {
        e.preventDefault()
        const createdPost = {
        ...newPost,
        userId: props.user.id
        }
        await axios.post(`${BASE_URL}/post/create`, createdPost)
    
        setNewPost({ title: '', body: '', image: '' })
    }

    // Return
    return (
        <div className="create-post">
            <div className="postTitleWrapper">
                <div className="create-post-title">Create Trip Report</div>
            </div>
            <form className='create-post-form' onSubmit={handleSubmit}>
                <label>Mountain Name: </label>
                <input required type='text' value={newPost.title} onChange={handleChange} name={'title'}></input>
                <br></br>
                <textarea className="postText" required type='text' value={newPost.body} onChange={handleChange} name={'body'} placeholder={'Add trip report here'}></textarea>
                <br></br>
                <button className='create-post-button'>Create Trip Report</button>
            </form>
            <div className="borderWrapper">
                <div className="border"></div>
            </div>
        </div>
    )
}

export default CreatePost