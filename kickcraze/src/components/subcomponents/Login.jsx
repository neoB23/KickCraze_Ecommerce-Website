import React from 'react';

function Login() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white p-8 rounded shadow-md">
                <h1 className="flex items-center justify-center font-bold text-3xl pb-4"> Sign Up</h1>
                <label htmlFor="username" className="block mb-2">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    className="w-full mb-4 p-2 border rounded"
                />
                <label htmlFor="password" className="block mb-2">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    className="w-full mb-4 p-2 border rounded"
                />
                <button className="w-full bg-zinc-900 text-white p-2 rounded">Login</button>
            </div>
        </div>
    );
}

export default Login;
