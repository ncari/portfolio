import React from 'react';
import Menu from './Menu';

function Layout({ children }) {
    return (
        <main className="md:h-screen bg-gray-100">
            <Menu />
            <div className='py-16 container mx-auto'>
               {children}
            </div>
        </main>
    );
}

export default Layout;