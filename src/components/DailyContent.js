import React, {useState, useEffect} from "react";
import mockCourseDailyData from "./mockCourseDailyData.js";

const DailyContent = ({ isLoggedIn /*, fetchContent */ }) => {
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            const today = new Date().toISOString().split('T')[0];
            const todaysContent = mockCourseDailyData.dailyContent.find(
                (item) => item.date === today
            );

            if (todaysContent) {
                setContent(todaysContent.content);
            } else {
                setContent("No content available for today.");
            }
            setLoading(false);
        }, 500); // Simulated delay
    }, []);

    if (loading) return <div>Loading...</div>;

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
    );
};

export default DailyContent;
