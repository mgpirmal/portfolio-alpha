import React from "react"
import { NavLink } from "react-router-dom";
import {SocialIcon} from "react-social-icons"


export default function NavBar() {
    return (
    <header className= "bg-green-800">
        <div className="container mx-auto flex justify-between">
            <nav className="flex">
                <NavLink 
                to="/" 
                exact 
                activeClassName="text-white"
                className="inflex-flex items-center py-6 px-3 my-4 text-red-100 hover:text-white text-4xl font bold cursive tracking-widest">
                    Matthew Pirmal
                </NavLink>
                <NavLink 
                to="post" 
                activeClassName="text-green-100 bg-green-700"
                className="inline-flex items-center py-3 px-3 my-6 rounder text-red-200 hover:text-white">
                    Blog Posts
                </NavLink>
                <NavLink 
                to="project" 
                activeClassName="text-green-100 bg-green-700"
                className="inline-flex items-center py-3 px-3 my-6 rounder text-red-200 hover:text-white">
                    Projects
                </NavLink>
                <NavLink 
                to="about" 
                activeClassName="text-green-100 bg-green-700"
                className="inline-flex items-center py-3 px-3 my-6 rounder text-red-200 hover:text-white">
                    About Me
                </NavLink>
            </nav>
            <div className="inline-flex py-3 px-3 my-6">
                 <SocialIcon url="https://github.com/mgpirmal" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width: 35}}/>
                 <SocialIcon url="https://www.linkedin.com/in/matthew-pirmal" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width: 35}}/>
                 <SocialIcon url="" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width: 35}}/>
            </div>
        </div>
    </header>
    )}