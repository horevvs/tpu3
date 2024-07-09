//импортируем хук чтобы через него обращатся в редюсер для выполнения обрабочика событий 
import { useDispatch } from 'react-redux';

// импортируем нати styled_components
import { OpemModal, Position } from "../StylesComp.js";


function Modal(props) {

    const dispatch = useDispatch()

    // наша функция которая меняет состояние  в сторе
    const hidewindow = () => {
        dispatch({ type: 'close' })
    }

    return (
        <>
            <OpemModal>
                <img src={props.digitid} alt='none' />
                <p>  номер фотографии {props.digitid2} </p>
                <Position onClick={hidewindow}> закрыть &#x2715;</Position>
            </OpemModal>
        </>
    );
}
export default Modal;
