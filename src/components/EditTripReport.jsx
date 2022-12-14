import axios from "axios"
import { useState, useEffect } from "react"

const EditTripReport = (props) => {
    const [newPost, setNewPost] = useState({ title: '', body: '', image: '' })

    // Handles form submit
    const handleSubmit = async (e) => {
        await editPost(e)
        props.setClicked === false ? props.setClicked(true) : props.setClicked(false)
        window.location.reload(false)
    }

    // Handles input change
    const handleChange = (event) => {
        setNewPost({ ...newPost, [event.target.name]: event.target.value })
    }

    // Submits edit post
    const editPost = async (e) => {
        e.preventDefault()
        let title, body, image
    
        if (newPost.title === '') {
            title = props.title
        } else {
            title = newPost.title
        }
    
        if (newPost.body === '') {
            body = props.body
        } else {
            body = newPost.body
        }
    
        if (newPost.image === '') {
            image = props.image
        } else {
            image = newPost.image
        }
    
        const editedPost = {
            title: title,
            body: body,
            image: image,
        }
    
        await axios.put(`${props.BASE_URL}/post/${props.id}`, editedPost)
    
        setNewPost({ title: '', body: '', image: '' })
    }

//    return (
//     <div className="edit-post"> 
//         <div className="edit-post-title">Edit Post</div>
//             <form className='edit-post-form' onSubmit={handleSubmit}>
//                 <label>Mountain: </label>
//                 <input  type='text' placeholder={props.title} value={newPost.title} onChange={handleChange} name = {'title'}/>
//                 <br/><br/>
//                 <label>Body: </label>
//                 <input  type='text' placeholder={props.body} value={newPost.body} onChange={handleChange} name={'body'}/>
//                 <br/><br/>
//                 <button className='edit-post-button'>Confirm Changes</button>
//             </form>
//     </div>
// )

return (
    <div className="create-post">
        <div className="postTitleWrapper">
            <div className="edit-post-title">Edit Trip Report</div>
        </div>
        <form className='create-post-form' onSubmit={handleSubmit}>
            <label>Mountain Name: </label>
            <input placeholder={props.title} value={newPost.title} onChange={handleChange} name={'title'}></input>
            <br></br>
            <textarea className="editText" placeholder={props.body} value={newPost.body} onChange={handleChange} name={'body'}></textarea>
            <br></br>
            <button className='edit-post-button'>Confirm Changes</button>
        </form>
    </div>
)

}

export default EditTripReport