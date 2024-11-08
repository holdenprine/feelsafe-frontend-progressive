import './App.css';
import Header from './components/Header';
import About from './components/About';
import Store from './components/Store/Store';
import CourseProgressBar from './components/CourseProgress/CourseProgressBar';
import Contact from './components/Contact';
import CoursesModule from './components/CourseProgress/CoursesModule';
import SettingsHomepage from './components/Settings';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ModuleOverview from './components/CourseProgress/ModuleOverview';


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

const FeelSafeCourseData = [
  { moduleTitle: 'Awareness', image: 'https://picsum.photos/200', videoContent: 'placeholder', moduleNumber: 1, courseName: 'Feel Safe Online', description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iure beatae perferendis blanditiis magni excepturi harum enim ipsa consequuntur placeat voluptatum quas quam, neque ab nostrum vel suscipit, culpa doloribus.', isCompleted: false },
  { moduleTitle: 'Defense', image: 'https://picsum.photos/200', videoContent: 'placeholder', moduleNumber: 2, courseName: 'Feel Safe Online', description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iure beatae perferendis blanditiis magni excepturi harum enim ipsa consequuntur placeat voluptatum quas quam, neque ab nostrum vel suscipit, culpa doloribus.', isCompleted: false },
  { moduleTitle: 'What to Do?', image: 'https://picsum.photos/200', videoContent: 'placeholder', moduleNumber: 3, courseName: 'Feel Safe Online', description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iure beatae perferendis blanditiis magni excepturi harum enim ipsa consequuntur placeat voluptatum quas quam, neque ab nostrum vel suscipit, culpa doloribus.', isCompleted: false },
  { moduleTitle: 'Training', image: 'https://picsum.photos/200', videoContent: 'placeholder', moduleNumber: 4, courseName: 'Feel Safe Online', description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iure beatae perferendis blanditiis magni excepturi harum enim ipsa consequuntur placeat voluptatum quas quam, neque ab nostrum vel suscipit, culpa doloribus.', isCompleted: false },
  { moduleTitle: 'Review', image: 'https://picsum.photos/200', videoContent: 'placeholder', moduleNumber: 5, courseName: 'Feel Safe Online', description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iure beatae perferendis blanditiis magni excepturi harum enim ipsa consequuntur placeat voluptatum quas quam, neque ab nostrum vel suscipit, culpa doloribus.', isCompleted: false },
]


  return (
    <>
      <Header />
      <CourseProgressBar data={courseData}/>
      <Store data={storeData}/>
      <About />
      {/* <CoursesModule /> */}
      <Footer />
           
      {/* sets path for contacts and settings -> can be reworked to redirect to new page */}
      <Routes>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/settings' element={<SettingsHomepage />}/>
        <Route path='moduleoverview' element={<ModuleOverview />}/>
        <Route path='/' element={<CourseProgressBar data={FeelSafeCourseData}/>}/>
        <Route path='/coursesmodule' element={<CoursesModule />}/>
      </Routes>
      {/* Fallback route to redirect to Home if not found -> should nav to 404 page */}
            
    </>
  );
}

export default App;
