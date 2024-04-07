import React, { Component } from "react";
import Image1 from '../components/images/image.jpg';



class Header extends Component{
    render(){
        return(
            <div className="flex justify-evenly my-6">
            <div className="flex-col justify-center align-middle items-center my-[10%]">
                <h1 className="  text-4xl py-6 font-bold">Effortlessly manage tasks and <br /> plans with
                    Your Google Drive <br /> integration.</h1>
                <p className=" p-2">Sync your Google Drive to your website and stay organized with ease.</p>
                <div className="flex justify-evenly ">
                   <div className="px-2 flex-col justify-center">
                    <h1 className=" text-xl font-bold py-2">Simplify</h1>
                    <p>Access your task and plan them  <br />directly from your Google Drive account.</p>
                   </div>
                   <div className="px-2 flex-col justify-center">
                    <h1 className=" text-xl font-bold py-2">Efficient</h1>
                    <p>Save time by seamlessly syncing  <br />
                   your tasks and Gooogle Drive.</p>
                   </div>
                </div>
            </div>
            <div className="w-[40%]">
                <img src={Image1} alt=" planned" />
            </div>
        </div>
        )
    }
}

export default Header; 


