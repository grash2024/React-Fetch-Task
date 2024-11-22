import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { CiMenuBurger } from "react-icons/ci";
const NavBar = () => {
	const [toggle, setToggle] = useState(false);
	const onMenuClick = () => {
		setToggle((prevToggle) => !prevToggle);
	};
	return (
		<nav
			className={`p-10 h-auto lg:p-0 lg:h-36 lg:w-full bg-slate-100 flex justify-between lg:justify-start lg:flex-row items-center  lg:gap-32 ${
				toggle && "flex-col gap-10 justify-start items-start"
			}`}
		>
			<img
				src={logo}
				alt="logo of image"
				className="h-[100px] w-[100px] lg:w-[125px] lg:h-[125px] rounded-full lg:ml-10 "
			/>
			<NavLink
				className={` lg:block ${toggle ? "block" : "hidden"}`}
				to={"/"}
				ref={menubar}
			>
				Home
			</NavLink>
			<NavLink
				className={` lg:block ${toggle ? "block" : "hidden"}`}
				to="#"
				ref={menubar}
			>
				Products
			</NavLink>
			<NavLink
				className={` lg:block ${toggle ? "block" : "hidden"}`}
				to="#"
				ref={menubar}
			>
				Views
			</NavLink>
			<NavLink
				className={` lg:block ${toggle ? "block" : "hidden"}`}
				to="#"
				ref={menubar}
			>
				About
			</NavLink>
			<div className="text-4xl lg:hidden" onClick={onMenuClick}>
				<CiMenuBurger />
			</div>
		</nav>
	);
};

export default NavBar;
