import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";


export const Profile = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const storedUserString = localStorage.getItem("user");
    const storedUser = storedUserString ? JSON.parse(storedUserString) : null;
    const name = storedUser ? storedUser.name : '';
    const email = storedUser ? storedUser.email : '';
    const picture = storedUser ? storedUser.avatar.high : '';


    return (
        <div className="bg-gray-100 h-screen">
            <div className="flex flex-1 flex-col justify-center items-center ">
                <header className="flex justify-end bg-white w-screen h-auto">
                    <button className="bg-slate-700 text-white px-28 py-3 rounded-md my-2 mx-6" onClick={() => { auth.signout(); navigate('/') }} >
                        Logout
                    </button>
                </header>
                <div
                    className="flex flex-col w-[420px] h-[400px] mt-20 items-center justify-center border rounded-lg shadow-2xl bg-white gap-4">
                    <label>Profile picture</label>
                    <img className="w-20 h-20 rounded-lg" src={picture} alt="Profile" />
                    <div className="flex flex-col">
                        <label className="flex flex-wrap gap-1">Your<p className="font-medium">Name</p></label>
                        <div className="w-80 p-2 bg-gray-100 rounded-lg"> {name} </div>
                    </div>
                    <div className="flex flex-col ">
                        <label className="flex flex-wrap gap-1">Your<p className="font-medium">E-mail</p> </label>
                        <div className="w-80 p-2 bg-gray-100 rounded-lg">{email}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}