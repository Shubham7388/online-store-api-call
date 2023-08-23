import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from '../redux/actions'
import { v4 as uuidv4 } from 'uuid'

export default function NewPostForm() {
    const [text, setText] = useState("")
    const dispatch = useDispatch()

    const handleOnSubmit = event => {
        event.preventDefault()
        dispatch(addPost({ text: text, id: uuidv4() }))
        setText("")
    }

    return (
        <div>
            <h2>New Post Form:</h2>
            <form onSubmit={handleOnSubmit}>
                <textarea
                    placeholder="Post Content..."
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                >
                </textarea>
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}