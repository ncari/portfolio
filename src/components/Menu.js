import React from 'react';
import { Link } from 'gatsby';

function Menu() {
    return (
        <div className="flex flex-row justify-between p-8">
            <div>
                <span className='font-bold'>Nicolas Carignani</span>
            </div>
            <div>
                <Link to='/blog' className='font-bold mr-8'>Blog</Link>
                <a href='#' className='font-bold mr-8'>About</a>
                <a href='https://www.linkedin.com/in/nicolas-carignani' target='_blank' className='font-bold mr-8'>Linkedin</a>
                <a href='#' className='font-bold mr-8'>Contact</a>
                <a href='#'>
                    <button className='font-bold px-8 py-4 bg-black text-white rounded-md
                    hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 transition ease-in-out delay-150 duration-300'
                >
                    My Work
                    </button>
                </a>
            </div>
        </div>
    );
}

export default Menu;