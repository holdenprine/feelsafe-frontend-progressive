import React from 'react'
import Header from '../components/Header'
import CourseProgressBar from '../components/CourseProgress/CourseProgressBar'
import Store from '../components/Store/Store'
import About from '../components/About'
import Footer from '../components/Footer'



const Home = () => {

  const FeelSafeCourseData = [
    { moduleTitle: 'Awareness', image: 'https://picsum.photos/200', videoContent: 'placeholder', moduleNumber: 1, courseName: 'Feel Safe Online', description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iure beatae perferendis blanditiis magni excepturi harum enim ipsa consequuntur placeat voluptatum quas quam, neque ab nostrum vel suscipit, culpa doloribus.', isCompleted: false },
    { moduleTitle: 'Defense', image: 'https://picsum.photos/200', videoContent: 'placeholder', moduleNumber: 2, courseName: 'Feel Safe Online', description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iure beatae perferendis blanditiis magni excepturi harum enim ipsa consequuntur placeat voluptatum quas quam, neque ab nostrum vel suscipit, culpa doloribus.', isCompleted: false },
    { moduleTitle: 'What to Do?', image: 'https://picsum.photos/200', videoContent: 'placeholder', moduleNumber: 3, courseName: 'Feel Safe Online', description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iure beatae perferendis blanditiis magni excepturi harum enim ipsa consequuntur placeat voluptatum quas quam, neque ab nostrum vel suscipit, culpa doloribus.', isCompleted: false },
    { moduleTitle: 'Training', image: 'https://picsum.photos/200', videoContent: 'placeholder', moduleNumber: 4, courseName: 'Feel Safe Online', description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iure beatae perferendis blanditiis magni excepturi harum enim ipsa consequuntur placeat voluptatum quas quam, neque ab nostrum vel suscipit, culpa doloribus.', isCompleted: false },
    { moduleTitle: 'Review', image: 'https://picsum.photos/200', videoContent: 'placeholder', moduleNumber: 5, courseName: 'Feel Safe Online', description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iure beatae perferendis blanditiis magni excepturi harum enim ipsa consequuntur placeat voluptatum quas quam, neque ab nostrum vel suscipit, culpa doloribus.', isCompleted: false },
  ]


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
        <CourseProgressBar data={FeelSafeCourseData}/>
        <Store data={storeData}/>
        <About />
        <Footer />
    </>
  )
}

export default Home