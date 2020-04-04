import React, {useState, useEffect} from 'react';
import axios from 'axios';

const useChatRoom = () => {

  const [rooms, setRooms] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [error, setError] = useState('');


console.log(isLoaded);
  useEffect(() => {

    axios.post('http://localhost:5000/chatRoom/searchRoom')
    .then(
      (result) => {
        setLoaded(true);
        // setRooms([...rooms, result])
        console.log(result.data);
      },
      // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
      // чтобы не перехватывать исключения из ошибок в самих компонентах.
      (error) => {
        console.log(error);
      }
    )
  });


  if (error) {
    return <div>Ошибка: {error}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      // <ul>
      //   {items.map(item => (
      //     <li key={item.name}>
      //       {item.name} {item.price}
      //     </li>
      //   ))}
      // </ul>
      <div></div>
    );
  }
}

export default useChatRoom;