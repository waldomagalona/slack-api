import React from 'react';

export default function(){
    return(
        <div className="flex flex-col w-6 lg:w-2/3 justify-center">
				<div className="container w-full px-4">
					<div className="flex flex-wrap justify-center">
						<div className="w-full lg:w-6/12 px-4">
							<div
								className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
								<div className="flex-auto p-5 lg:p-10">
									<h4 className="text-2xl mb-4 text-black font-semibold">Have a suggestion?</h4>
									<form id="feedbackForm" action="" method="">
										<div className="relative w-full mb-3">
											<label className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="email">Email</label><input type="email" name="email" id="email" className="border-0 px-3 py-3 rounded text-sm shadow w-full
                    bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400" placeholder=" "
                        style={{transition: "all 0.15s ease 0s"}} required />
                    </div>
											<div className="relative w-full mb-3">
												<label className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="message">Message</label><textarea maxlength="300" name="feedback" id="feedback" rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full"
                        placeholder="" required></textarea>
											</div>
											<div className="text-center mt-6">
												<button id="feedbackBtn"
                        className="bg-green-300 text-black text-center mx-auto active:bg-green-500 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="submit" style={{transition:"all 0.15s ease 0s"}}>Submit
                      </button>
											</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
    )
}