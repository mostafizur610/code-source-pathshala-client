import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://code-source-pathshala-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <div>
            <div className='bg-dark text-white p-2 text-center'>
                <h5>List of Courses</h5>
            </div>
            <div className='border p-4 bg-success text-white'>
                {
                    courses.map(course => <h6 key={course.id}>
                        <Link className='text-white' to={`/courses/${course.id}`}>{course.name}</Link>
                    </h6>)
                }
            </div>
        </div >
    );
};

export default LeftSideNav;