import React, { useState, useEffect} from 'react';
import axios from 'axios';

const DailyContent = ({ isLoggedIn, fetchContent}) => {

    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserCourses = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/user-courses');
                setContent(response.data);
            } catch (error) {
                console.error('Error fetching user courses:', error);
                setError('Failed to fetch user courses')
            } finally {
                setLoading(false);
            }
        };

        fetchUserCourses();

    }, []);

    useEffect(() => {
        // checks if new content should be loaded
        const checkAndLoadContent = async () => {
            if(!isLoggedIn) {
                setContent('Please log in to access daily content.');
                setLoading(false);
                return;
            }

            // formats date: "YYYY-MM-DD"
            const today = new Date().toISOString().split('T')[0];
            const lastAccessDate = localStorage.getItem('lastAccessedDate');
            
            if(lastAccessDate !== today) {
                try {
                    const newContent = await fetchContent();
                    setContent(newContent);
                    localStorage.setItem('lastAccessedDate', today);
                    localStorage.setItem('dailyContent', newContent);
                } catch (error) {
                    setContent('Failed to load content. Please try again later.');
                    console.error('Error fetching content:', error);
                    
                }
            } else {
                // Load content from localStorage if already accessed today
                setContent(localStorage.getItem('dailyContent'));
            }

            setLoading(false);
        };

        checkAndLoadContent();
    }, [isLoggedIn, fetchContent]);

    if(loading) return <div>Loading...</div>
    if(error) return <div>{error}</div>

  return (
    <div>
    {content ? (
      <div>
        <h2>Today's Content</h2>
        <p>{content}</p>
      </div>
    ) : (
      <p>No content available for today.</p>
    )}
  </div>
  )
}

export default DailyContent