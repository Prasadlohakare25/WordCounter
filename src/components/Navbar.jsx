import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <div className="flex bg-orange-700 rounded-sm text-slate-100 ">
            <div className="flex justify-center align-middle flex-4">
                <div>
                    <p className="font-bold px-4 py-2 text-3xl font-serif">{props.title}</p>
                </div>
            </div>
            <nav className="flex text-xl my-0.5 font-medium flex-1 justify-end px-5 items-center" >
                <div className="px-3">
                    <Link to='/'>
                        Home
                    </Link>
                </div>
                <div className="">
                    <Link to='/about'>
                        About
                    </Link>
                </div>
            </nav >
        </div>
    )
} 