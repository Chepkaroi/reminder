import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className=' flex justify-between pt-8 w-[100%]'>
                <div>
                    <ul className=' flex justify-evenly '>
                        <li className='px-3 hover:border-[1px] hover:border-black'><a href="#" className="a">Explore More</a></li>
                        <li className='px-3 hover:border-[1px] hover:border-black'><a href="#" className="a">Get Started</a></li>
                        <li className='px-3 hover:border-[1px] hover:border-black'><a href="#" className="a">Discover</a></li>
                    </ul>
                </div>
                
                <div>
                    <button className=' bg-black text-white px-4 py-2 mb-2'>Sign Up</button>
                </div>
            </div>
            
        );
    }   
}

export default Home;