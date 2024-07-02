

import '../App.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';


function Forms(props) {

    const [title, setTitle] = useState([])
    const [url, setUrl] = useState([])
    // const dispatch = useDispatch()


    // const add = (title, url) => {
    //     //  отправили во внешнем сторе создаем массив добавленных картинок
    //     // dispatch({ type: 'add', payload: { title, url }, })

    //     // let result = {
    //     //     title: title,
    //     //     url: url,
    //     // }

    //     // let a= props.data.push(result)



    //     console.log(props.data)
    // }

    // <button type="button" className="btn btn-dark btn-sm mx-2 px-2" onClick={() => props.deleteminus(item.id)}> - </button>

    return (
        <div className='form-container'>
            <form className='form'>
                <input type="text" value={title} placeholder=' add title' className="" onChange={(e) => setTitle(e.target.value)} />
                <input type="url" value={url} placeholder='add url' className="" onChange={(e) => setUrl(e.target.value)} />
                <div onClick={() => props.add(title, url)} >добавить картинку</div>
            </form>
        </div>
    )

}

export default Forms;