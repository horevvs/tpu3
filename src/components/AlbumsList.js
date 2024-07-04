
import '../App.css';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import { Container, FlexContainer, Headercss, Textcss, Cartcontainer } from "../StylesComp.js";
import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from 'react';




function AlbumsList() {

    let count = useSelector(state => state.count)
    const firstRender = useSelector(state => state.firstRender)
    const [state, setState] = useState(count);
    const dispatch = useDispatch()
    
    const addRender = () => {
        dispatch({ type: 'addList' })
    }


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/albums?_limit=${firstRender}`)
            .then((response) => {
                setState(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }, [firstRender]);


    return (
        <div>
            <Headercss >Albums List  </Headercss>
            <Container >
                {/* мапаем  наше хранилице делаем рендер */}
                {state.map((item) => (
                    <FlexContainer key={item.id}>
                        <Cartcontainer>
                            <Textcss>
                                Альбом № {item.id} <br />
                            </Textcss>
                            <Textcss>
                                Название альбома: <br /> {item.title}
                            </Textcss>
                            {/* переходим по нагашему новому урлу чтобы отобразить  альбом */}
                            <NavLink to={`/${item.id}`} > Посмотреть альбом №{item.id}</NavLink>
                        </Cartcontainer>
                    </FlexContainer>
                ))}
            </Container>
            <div className='btn' onClick={() => { addRender() }}  >Добавить список</div>
        </div>

    );
}
export default AlbumsList;
