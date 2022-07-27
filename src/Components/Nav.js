import React from 'react';
import logo from '../images/logo.jpg';

const Nav = () => {
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><button>Products</button></li>
                        <li><button>About us</button></li>
                        <li><button>Blogs</button></li>
                        <li><button>Contact us</button></li>
                        <li><button>Shop</button></li>

                    </ul>
                </div>
                <img className='w-6 pr-0' src={logo} alt="" />
                <button class="btn btn-ghost normal-case text-xl pl-1 font-serif">HOLOKITAB</button>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0  font-semibold">
                    <li><button>Products</button></li>
                    <li><button>About us</button></li>
                    <li><button>Blogs</button></li>
                    <li><button>Contact us</button></li>
                    <li><button>Shop</button></li>
                </ul>
            </div>

        </div>
    );
};

export default Nav;