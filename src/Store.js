

import axios from 'axios'


// делаем запрос к API  ложим результат в хранилище
const result = await axios.get('https://jsonplaceholder.typicode.com/albums');




let initstate = {
    // тут храним наши данные с урла
    count: result.data,

    // этот состояние используем в молаьном окне чтобы не делать  подъем состояния или usecontext
    shows: true,
    albumslist: [],
    albums: [],
    

}



export default initstate