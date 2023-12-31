import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function About() {
    return (
        <div className=''>
            <div className="">
                <Navbar title="Word Counter" />
            </div>
            <div className="my-5 h-5/6 flex justify-center align-middle items-center font-serif text-lg text-center">
                <div className='m-16 mx-56'>
                    <h1 className='text-3xl text-center'>Welcome to Word Counter!</h1><br />
                    <p className='text-lg'>
                        At Word Counter, we offer a user-friendly and efficient word and character
                        counting tool designed to assist writers, students, professionals, and
                        anyone in need of accurately assessing the length and structure of their text.
                    </p><br />
                    <p className='text-center my-1 font-semibold'>
                        Our tool provides instant and reliable results, delivering:
                    </p>
                    <ul>
                        <li>
                            <b>Word Count</b> : Accurately counts the number of words in your text, considering spaces, punctuation, and line breaks.
                        </li>
                        <li>
                            <b>Character Count</b> : Calculates the total number of characters, including letters, numbers, spaces, and punctuation marks.
                        </li>
                    </ul>
                </div>
            </div>
            <div className='fixed bottom-0 w-screen'>
                <Footer />
            </div>
        </div>
    )
}