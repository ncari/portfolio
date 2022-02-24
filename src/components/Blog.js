import React from 'react';

function Blog({ title, description, updatedAt }) {
    return (
        <div className='hover:shadow hover:cursor-pointer bg-white rounded-md p-4'>
            <h2 className='text-2xl font-bold'>{title}</h2>
            <p className='text-gray-600'>{description}</p>
            <div className='mt-2'>
                <span className='text-xs text-gray-600'>{updatedAt}</span>
            </div>
        </div>
    );
}

export default Blog;