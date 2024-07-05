
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




export const reducer = (state = initstate, action) => {
  switch (action.type) {
    case 'close': {
      return { ...state, shows: !state.shows }
    }

    case 'add': {
      return {
        ...state, albums: state.albums.concat(
          action.payload,
        )
      }
    }

    case 'delete': {
      return {
        ...state, albums: state.albums.filter(item => item.id !== action.payload.id & item.albumId !== action.payload.id)

      }
    }



    case 'addList': {
      return {
        ...state, firstRender: state.firstRender + 5

      }
    }


    default: return state
  }
};

