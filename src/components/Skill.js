import React from 'react';

function Skill({ name }) {
    return (
        <button className="px-2 py-1 rounded-md border border-gray-300 transition ease-in-out delay-150
            hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:border-indigo-500 duration-300
            hover:text-white hover:cursor-pointer"
        >
            <span className="uppercase font-bold tracking-wide">{name}</span>
        </button>
    );
}

export default Skill;