import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [homeState, setHomeState] = useState('Home');
  const [aboutState, setAboutState] = useState('About');
  const [contactState, setContactState] = useState('Contact');
  const [name, setName] = useState('Enter your name in the box below');
  const [posts, setPosts] = useState([]);

  const changeHome = (event) => {
    event.preventDefault();
    const english = 'Home';
    const french = 'Bonjour';

    if (homeState !== 'Home') {
      setHomeState(english);
    } else {
      setHomeState(french);
    }
  };

  const fetchPosts = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className='App'>
      <Header home={homeState} about={aboutState} contact={contactState} homeSetter={changeHome} />
      <h1>{name}</h1>
      <input type='text' onChange={(e) => setName(e.target.value)} />
      {posts.map(({ title, body, id }) => (
        <Post title={title} body={body} key={id} id={id} />
      ))}
    </div>
  );
}

export default App;
