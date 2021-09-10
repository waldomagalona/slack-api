import React ,{useState} from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import{ yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import { AccordionButton } from 'react-bootstrap';


const schema=yup.object().shape({
    email: yup.string().email().required() ,
    password: yup.string().min(6).max(15).required()
})


export default function LogInForm(props){
	const [showModal, setShowModal] =useState(false);
	const [notif, setNotif]= useState([])
    const {register, handleSubmit, formState:{errors}}= useForm({
        resolver: yupResolver(schema),
    });


const submitForm = (data) =>{
	
    axios.post("http://206.189.91.54/api/v1/auth/sign_in",data)
    .then((response)=>{
		console.log(response)
		props.saveUser(response)
       
    })
	.catch((error)=>{
		console.log(error.response.data)
		setShowModal(true);
		setNotif(error.response.data.errors)
	})

};
    return (
        <div id="login" className="h-screen font-mono bg-gray-800">
		
		<div className="h-screen pt-6 container mx-auto">
			<div className="flex justify-center items-center px-6 my-12">
				
				<div className="w-full xl:w-3/4 lg:w-11/12 flex">
					
					<div
						className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
						style={{backgroundImage: `url('https://images.unsplash.com/photo-1569144157581-984dea473e3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')`}}
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
									className="w-full px-4 py-2 font-bold text-white bg-green-400 rounded-full hover:bg-green-700 focus:outline-none focus:shadow-outline"
								>
									Log In
								</button>

								<>

<Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
	<div onClick={() => setShowModal(false)}>
		Attention!
	</div>
	<ModalBody>
		{notif && notif.map(notif=>{
			return <p>{notif}</p>
		})}
	</ModalBody>
	
</Modal>
</>


								
							</div>
							<hr className="mb-6 border-t" />
							<div className="text-center">
								<div
									className="inline-block text-sm text-green-400 align-baseline hover:text-green-700"
									
								>
									Forgot Password?
								</div>
							</div>
							<div className="text-center">
							<div onClick={()=>props.toggleIsRegistered()}
									className="cursor-pointer inline-block text-sm text-green-400 align-baseline hover:text-green-700"
								>
									Don't have an account? Register
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
    )
}