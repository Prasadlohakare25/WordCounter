import Navbar from './Navbar';
import TextForm from './TextForm';
import Footer from './Footer';
// import About from './components/About';
import React from 'react';

export default function MainPage() {
    return (
        <div className="bg-pink-100 w-screen h-screen">
            <Navbar title="Word Counter" />
            <TextForm heading="Enter the text to analyze" />
            <div className='fixed bottom-0 w-screen'>
                <Footer />
            </div>
        </div>
    );
}