import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const CreatePost = (props) => {
    let navigate = useNavigate()
    const BASE_URL = 'http://localhost:3001/guide'
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
            <div className="create-post-title">Create Trip Report</div>
            <form className='create-post-form' onSubmit={handleSubmit}>
                <label>Mountain: </label>
                <input required type='text' value={newPost.title} onChange={handleChange} name={'title'}></input>
                <br></br>
                <textarea className="postText" required type='text' value={newPost.body} onChange={handleChange} name={'body'} placeholder={'Add trip report here'}></textarea>
                <br></br>
                <label>Image Link: </label>
                <input type='text' value={newPost.image} onChange={handleChange} name={'image'} placeholder={'Optional'}></input>
                <br></br>
                <button className='create-post-button'>Create Trip Report</button>
            </form>
        </div>
    )
}

export default CreatePost