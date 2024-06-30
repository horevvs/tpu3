
import '../App.css';

import { useSelector, useDispatch } from 'react-redux';
import { Container, FlexContainer, Headercss, Textcss, Cartcontainer } from "../StylesComp.js";
import { NavLink } from "react-router-dom";


function AlbumsList() {
    //  берем наше состояние с хранилица
    const count = useSelector(state => state.count)

    return (
        <>
            <Headercss >Albums List </Headercss>
            <Container >
                {/* мапаем  наше хранилице делаем рендер */}
                {count.map((item) => (
                    <FlexContainer key={item.id}>
                        <Cartcontainer>
                            < Textcss>
                                Альбом № {item.id} <br />
                            </Textcss>
                            < Textcss>
                                Название альбома: <br /> {item.title}
                            </Textcss>
                            {/* переходим по нагашему новому урлу чтобы отобразить  альбом */}
                            <NavLink to={`/${item.id}`} > Посмотреть альбом №{item.id}</NavLink>
                        </Cartcontainer>
                    </FlexContainer>
                ))}
            </Container >
        </>
    );
}
export default AlbumsList;
