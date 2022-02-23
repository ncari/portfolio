import React, { useRef, useState } from 'react';

import Clip from '../../assets/paperclip.svg';

function Contact({ innerRef }) {
    const[filename, setFilename] = useState('');
    const fileRef = useRef(null);

    const previewFile = () => {
        const file = fileRef.current.files[0]
        if(file){
            setFilename(file.name)
        }
    }
    return (
        <div ref={innerRef} className='md:h-screen bg-indigo-500 flex'>
            <form className='md:w-3/5 mx-auto'>

                <div className='md:flex md:flex-row md:items-center py-12'>
                    {/* inputs  */}
                    <div className='md:w-1/2'>
                        <h1 className='text-4xl font-bold text-white mb-12'>Contact me</h1>

                        <div className='mb-4'>
                            <input className='rounded-md p-4 w-full'placeholder='Name'/>
                        </div>
                        <div className='mb-4'>
                            <input type='email' className='rounded-md p-4 w-full'placeholder='Email'/>
                        </div>
                        <div className='mb-4'>
                            <input type='tel' className='rounded-md p-4 w-full'placeholder='Phone'/>
                        </div>
                        <div className='mb-4'>
                            <textarea className='rounded-md p-4 w-full'placeholder='Message'rows={10}/>
                        </div>
                    </div>

                    {/* file */}
                    <div className='md:w-1/2 flex flex-col items-center justify-center'>
                        <label htmlFor='file-upload' className="custom-file-upload">
                            <input id='file-upload' type="file" className='hidden' onChange={previewFile} ref={fileRef}/>
                            <Clip className='w-24 h-24 text-gray-100 hover:scale-110 transition ease-in-out'/>
                        </label>
                        <span className='text-gray-100'>{filename}</span>
                    </div>
                </div>

                {/* submit */}
                <input type='submit' value='Submit' className='p-4 rounded-md bg-black text-white font-bold hover:cursor-pointer block mx-auto md:inline md:mx-0'/>
            </form>
        </div>
    );
}

export default Contact;