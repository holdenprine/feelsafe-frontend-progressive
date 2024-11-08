import './App.css';
import Header from './components/Header';
import About from './components/About';
import Store from './components/Store/Store';
import CourseProgressBar from './components/CourseProgress/CourseProgressBar';
import Contact from './components/Contact';
import SettingsHomepage from './components/Settings';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
      <div>
        <Header />
        <CourseProgressBar data={courseData}/>
        <Store data={storeData}/>
        <About />
        <Footer />
      </div>

      <Routes>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/settings' element={<SettingsHomepage />}/>
      </Routes>        
    </>
  );
}

export default App;
