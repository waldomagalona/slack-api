import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import{ yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';

const schema=yup.object().shape({
    email: yup.string().email().required() ,
    password: yup.string().min(4).max(15).required()
})


export default function LogInForm(props){
	
    const {register, handleSubmit, formState:{errors}}= useForm({
        resolver: yupResolver(schema),
    });


const submitForm = (data) =>{
	
    axios.post("http://206.189.91.54/api/v1/auth/sign_in",data)
    .then((response)=>{
		console.log(response)
		props.saveUser(response)
        // setUser(response.data);
		// localStorage.setItem("user",JSON.stringify(response.data))
        // if(user){
        //     props.toggleIsLoggedIn();
		// 	// props.passResponse(response)
        // }
    })
	.catch((error)=>{
		console.log(error)
	})

};
    return (
        <div className="h-screen font-mono bg-gray-400">
		
		<div className="h-screen pt-6 container mx-auto">
			<div className="flex justify-center items-center px-6 my-12">
				
				<div className="w-full xl:w-3/4 lg:w-11/12 flex">
					
					<div
						className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
						style={{backgroundImage: `url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')`}}
					></div>
					
					<div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
						<h3 className="pt-4 text-2xl text-center">Log In</h3>
						<form
                        onSubmit={handleSubmit(submitForm)}
                        className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
							<div className="mb-4 md:flex md:justify-between">
								
							</div>
							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email" >
									Email
								</label>
								<input
                                     {...register("email")} 
                                    name="email"
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
									placeholder="Email"
								/>
                               
                                <p>{errors.email?.message}</p>
							</div>
							<div className="mb-4 md:flex md:justify-between">
                            </div>
								<div className="mb-4">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
										Password
									</label>
									<input 
                                       {...register("password")} 
                                        name= "password"
										className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="password"
										type="password"
										placeholder="******************"
									/>
                                     <p>{errors.password?.message}</p>
								</div>
								
							
							<div className="mb-6 text-center">
								<button
									className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
								>
									Log In
								</button>
							</div>
							<hr className="mb-6 border-t" />
							<div className="text-center">
								<a
									className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="#"
								>
									Forgot Password?
								</a>
							</div>
							<div className="text-center">
								<Link to="/register"
									className="cursor-pointer inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
								>
									Don't have an account? Register
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
    )
}