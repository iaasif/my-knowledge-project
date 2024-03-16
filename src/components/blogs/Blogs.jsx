import React, { useEffect, useState } from 'react';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(blogs))

    }, [])
    return (
        <div>
            <h2 className='text-2xl'>blogs</h2>
        </div>
    );
};

export default Blogs;