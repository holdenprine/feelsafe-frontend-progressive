import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Store from './components/Store';
import CourseProgressBar from './components/CourseProgress/CourseProgressBar';

function App() {

  // mockData stored here for easy access across the app
  const courseData = [
    { title: 'Feel Safe Online', image: 'https://picsum.photos/200' },
    { title: 'Feel Safe Annual', image: 'https://picsum.photos/201' },
    { title: 'Instructor Course', image: 'https://picsum.photos/202' }
  ];

  const storeData = [
    { 
        title: 'Product 1', 
        image: 'https://picsum.photos/200',
        id: 1 
    },
    { 
        title: 'Product 2', 
        image: 'https://picsum.photos/200',
        id: 2, 
    },
    { 
        title: 'Product 3', 
        image: 'https://picsum.photos/200',
        id: 3, 
    },
    { 
        title: 'Product 4', 
        image: 'https://picsum.photos/200',
        id: 4, 
    }
];


  return (
    <>
        <Header />
        <CourseProgressBar data={courseData}/>
        <Store />
        <About />      
    </>
  );
}

export default App;
