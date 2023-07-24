import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  const {
    data: blogs, // passing in data and calling it blogs
    isPending,
    error,
  } = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;

// import { useState } from 'react';

// const Home = () => {
//   // let name = 'mario';

//   // hooks to change name and age on button click
//   const [name, setName] = useState('mario');
//   const [age, setAge] = useState(25);

//   const handleClick = (event) => {
//     // console.log('helllloooooo', event);
//     setName('luigi');
//     setAge(30);
//   };

//   const handleClickAgain = (name) => {
//     console.log('hello ' + name);
//   };

//   return (
//     <div className="home">
//       <h2>Homepage</h2>
//       <p>
//         {name} is {age} years old
//       </p>
//       <button onClick={handleClick}>Click me</button>

//       {/* Wrap a function in an anonymous function to pass in an argument*/}
//       <button onClick={() => handleClickAgain('mario')}>Click me again</button>
//     </div>
//   );
// };

// export default Home;
