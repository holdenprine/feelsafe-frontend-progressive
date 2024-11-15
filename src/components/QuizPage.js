import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const QuizPage = () => {

    const navigate = useNavigate();
    const [answer, setAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState();
    
    const handleSubmit = () => {
        if(answer === 'A') {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    }

    const handleTryAgain = () => {
        window.location.reload();
    }

    const styles = {
        quizPage: {
          padding: '20px',
        },
        quizHeader: {
          display: 'flex',
          alignItems: 'center',
        },
        backButton: {
          background: 'none',
          border: 'none',
          fontSize: '1.5rem',
          cursor: 'pointer',
          marginRight: '10px',
        },
        questionSection: {
          marginTop: '20px',
        },
        questionTitle: {
          fontSize: '1.2rem',
        },
        options: {
          marginTop: '10px',
          display: 'flex',
          flexDirection: 'column',
        },
        optionLabel: {
          margin: '5px 0',
        },
        submitButton: {
          backgroundColor: '#007bff',
          color: '#fff',
          padding: '10px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '15px',
        },
        result: {
          marginTop: '20px',
          textAlign: 'center',
        },
        correctTitle: {
          color: 'green',
        },
        incorrectTitle: {
          color: 'red',
        },
        sticker: {
          width: '100px',
          height: 'auto',
          margin: '10px 0',
        },
        progressButton: {
          backgroundColor: '#28a745',
          color: 'white',
          padding: '10px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '10px',
        },
        tryAgainButton: {
          backgroundColor: '#28a745',
          color: 'white',
          padding: '10px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '10px',
        },
      };
      

  return (
    <>
      <div style={styles.quizPage}>
      <div style={styles.quizHeader}>
        <button style={styles.backButton} onClick={() => navigate('/')}>&larr;</button>
        <h2>Quiz</h2>
      </div>
      <div style={styles.questionSection}>
        <h3 style={styles.questionTitle}>What is the capital of France?</h3>
        <div style={styles.options}>
          <label style={styles.optionLabel}>
            <input type="radio" name="answer" value="A" onChange={() => setAnswer("A")} /> A) Paris
          </label>
          <label style={styles.optionLabel}>
            <input type="radio" name="answer" value="B" onChange={() => setAnswer("B")} /> B) Rome
          </label>
          <label style={styles.optionLabel}>
            <input type="radio" name="answer" value="C" onChange={() => setAnswer("C")} /> C) Berlin
          </label>
          <label style={styles.optionLabel}>
            <input type="radio" name="answer" value="D" onChange={() => setAnswer("D")} /> D) Madrid
          </label>
        </div>
        <button style={styles.submitButton} onClick={handleSubmit}>
          Submit
        </button>
      </div>
      {isCorrect !== undefined && (
        <div style={styles.result}>
          {isCorrect ? (
            <div>
              <h4 style={styles.correctTitle}>Correct!</h4>
              <p>Paris IS the capital of France!</p>
              <p>You're one step closer to your badge!</p>
              <img src="amazing-work-sticker-url.png" alt="Amazing Work Sticker" style={styles.sticker} />
              <button style={styles.progressButton}>See Your Progress &rarr;</button>
            </div>
            // rewrote as a turnary for simplicity
          ) : (
            <div>
              <h4 style={styles.incorrectTitle}>Oops! Danger, young rabbit.</h4>
              <p>While Rome IS a great city, it's the capital of Italy, not France.</p>
              <p>Would you like to try again?</p>
              <img src="try-again-image-url.png" alt="Try Again Image" style={styles.sticker} />
              <button style={styles.tryAgainButton} onClick={() => window.location.reload()}>
                Try Again &rarr;
              </button>
            </div>
          )}
        </div>
      )}
    </div>
    </>
  )
}

export default QuizPage