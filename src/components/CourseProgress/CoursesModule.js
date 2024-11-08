import React, { useState } from 'react';
import './courses-module.css';

const CourseModule = () => {

// best way to simulate how the data will be visualized but damn is this json annoying to look at

    const feelSafeData = [
    {   moduleTitle: 'Awareness', 
        image: 'https://picsum.photos/200', 
        videoContent: 'placeholder', 
        moduleNumber: 1, 
        courseName: 'Feel Safe Online', 
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iure beatae perferendis blanditiis magni excepturi harum enim ipsa consequuntur placeat voluptatum quas quam, neque ab nostrum vel suscipit, culpa doloribus.', 
        isCompleted: false 
    },
    { 
        moduleTitle: 'Defense', 
        image: 'https://picsum.photos/200', 
        videoContent: 'placeholder', 
        moduleNumber: 2, 
        courseName: 'Feel Safe Online', 
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iure beatae perferendis blanditiis magni excepturi harum enim ipsa consequuntur placeat voluptatum quas quam, neque ab nostrum vel suscipit, culpa doloribus.', 
        isCompleted: false 
    },
    { 
        moduleTitle: 'What to Do?', 
        image: 'https://picsum.photos/200', 
        videoContent: 'placeholder', 
        moduleNumber: 3, 
        courseName: 'Feel Safe Online', 
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iure beatae perferendis blanditiis magni excepturi harum enim ipsa consequuntur placeat voluptatum quas quam, neque ab nostrum vel suscipit, culpa doloribus.', 
        isCompleted: false 
    },
    { 
        moduleTitle: 'Training', 
        image: 'https://picsum.photos/200', 
        videoContent: 'placeholder', 
        moduleNumber: 4, 
        courseName: 'Feel Safe Online', 
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iure beatae perferendis blanditiis magni excepturi harum enim ipsa consequuntur placeat voluptatum quas quam, neque ab nostrum vel suscipit, culpa doloribus.', 
        isCompleted: false 
    },
    { 
        moduleTitle: 'Review', 
        image: 'https://picsum.photos/200', 
        videoContent: 'placeholder', 
        moduleNumber: 5, 
        courseName: 'Feel Safe Online', 
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iure beatae perferendis blanditiis magni excepturi harum enim ipsa consequuntur placeat voluptatum quas quam, neque ab nostrum vel suscipit, culpa doloribus.', 
        isCompleted: false 
    },
  ]  

  const [randIndex] = useState(Math.floor(Math.random() * feelSafeData.length));
  const currentCourse = feelSafeData[randIndex];

  return (
    <div className="safeArea">
      <div className="scrollViewContent">
        <div className="unitContainer">
          <h1 className="header">{currentCourse.moduleTitle}</h1>
          <p className="description">{currentCourse.description}</p>
          
          <video
            className="video"
            src="./assets/videos/testvideo.mov"
            controls
            loop
          />

          <div className="buttonNavContainer">
            <button className="previousButton">More</button>
            <button className="nextButton">To Quiz</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseModule;
