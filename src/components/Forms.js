
import '../App.css';
import React, { useState } from 'react';

function Forms(props) {
    const [title, setTitle] = useState([])
    const [url, setUrl] = useState([])
    return (
        <div className='form-container'>
            <form className='form'>
                <input type="text" value={title} required placeholder=' add title' className="" onChange={(e) => setTitle(e.target.value)} />
                <input type="url" value={url} required placeholder='add url' className="" onChange={(e) => setUrl(e.target.value)} />
                <input type="submit" onClick={() => props.add(title, url)} value="Добавить картинку"/>
                {/* <div onClick={() => props.add(title, url)} >добавить картинку</div> */}
            </form>
        </div>
    )
}

export default Forms;