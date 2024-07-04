
import '../App.css';
import { Container, Headercss, Img, Btn, Thumbnail } from "../StylesComp.js";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Modal from './Modal.js'
import Forms from './Forms.js'

function AlbumsList() {

    //  пробрасываем со сторы наше значение
    const shows = useSelector(state => state.shows)
    const albums = useSelector(state => state.albums)


    const dispatch = useDispatch()

    //  инициализируем наши состояния
    const [data, setData] = useState([]);
    const [digit, setdigit] = useState([]);
    const [digit2, setdigit2] = useState([]);
    const params = useParams();

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/albums/${params.id}/photos`)
            .then((response) => {
                // в наше состяоние положили результат запроса

                let total = [...response.data, ...albums]
                let result = total.filter(item => item.albumId !== params.id)
                setData(result)
            })

            .catch((error) => {
                console.log(error);
            });
    }, []);


    const add = (title, url) => {
        //  отправили во внешнем сторе создаем массив добавленных картинок
        let albumId = Number(params.id)

        // ложим все в наше хранилице
        let id = Math.floor(Math.random() * 10000)
        dispatch({ type: 'add', payload: { title, url, albumId, id }, })

        // работаем с нашим состояние в компоненте
        let result = {
            albumId: Number(params.id),
            id: id + 1,
            title: title,
            url: url,
            thumbnailUrl: url
        }
        let b = []
        b[0] = result
        setData([...data, ...b])

        console.log(data);

    }

    // функция для работы с модалкой в модалку прокидываем адрес и название
    const openwindow = (url, id) => {
        setdigit(url)
        setdigit2(id)
    };

    // функция для работы с состоянием в редаксе, в редюсере меняет состояние
    const hidewindow = () => {
        dispatch({ type: 'close' })
    }
    const deleteimage = (id, albumId) => {

        let result = data.filter(item => item.id !== id)

        dispatch({ type: 'delete', payload: { id, albumId }, })
        //  ложим результат в хранилице

        setData(result)
    };

    return (
        <>
            <div className={shows ? " " : "showcomponent "}>
                <Headercss  >
                    <NavLink className={shows ? " " : "showcomponent "} to={`/`} >   На главную страницу</NavLink>
                </Headercss>
                <Forms add={add} />
            </div>

            <div className={shows ? "showcomponent " : " "} >
                <Modal digitid={digit} digitid2={digit2} />
            </div>

            <div className={shows ? " " : "showcomponent "} >
                <Container>
                    {data.map((item) => (
                        <Img key={item.id}>
                            <Thumbnail>
                                <img src={item.url} onClick={() => {
                                    openwindow(item.url, item.id)
                                    hidewindow()
                                }} width='220' height='140' alt='none' />
                            </Thumbnail>
                            <p >Альбом №{item.albumId}</p>
                            <p>Фото № {item.id}</p>
                            <Btn onClick={() => { deleteimage(item.id) }}> Удалить</Btn>
                        </Img>
                    ))}
                </Container>
            </div>
        </>
    );
}
export default AlbumsList;

