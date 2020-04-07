import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const useChatRoom = () => {

  const [rooms, setRooms] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.post('http://localhost:5000/chatRoom/searchRoom')
    .then((result) => {
        setLoaded(true);
        setRooms(result.data);
      })
    .catch(err => setError(err))
  }, []);

  console.log(rooms)
  if (error) {
    return <div>Ошибка: {error}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <ul>
        {rooms.map(item => (
          <li key={item.id}>
            <Link onClick={e => (!item) ? e.preventDefault() : null} to={`/blog?room=${item.title}`}>
              <button className={'button mt-20'} type="submit">{item.title}</button>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default useChatRoom;