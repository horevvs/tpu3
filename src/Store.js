
import axios from 'axios'


// делаем запрос к API  ложим результат в хранилище

let initstate = {
    // тут храним наши данные с урла
    firstRender: 30,
    count: null,
    // этот состояние используем в молаьном окне чтобы не делать  подъем состояния или usecontext
    shows: true,
    albumslist: [],
    albums: [],
  
}

// делаем запрос с определнным количеством которое потом будет отображать
let result = await axios.get(`https://jsonplaceholder.typicode.com/albums?_limit=${initstate.firstRender}`);

initstate.count = result.data


export default initstate