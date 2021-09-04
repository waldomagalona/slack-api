import React, { useState } from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import NewChannelForm from "../forms/NewChannelForm";

export default function NewChannelModal() {
    const [showModal, setShowModal] = React.useState(false);

    return (
        <>
         <button
         onClick={(e) => setShowModal(true)}
                className="p-0 w-12 h-12 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
          <svg viewBox="0 0 20 20" enable-background="new 0 0 20 20" className="w-6 h-6 inline-block">
            <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z" />
          </svg>
        </button>
            {/* <Button
                color="lightBlue"
                type="button"
                onClick={(e) => setShowModalCode(true)}
                ripple="light"
            >
                Open small Modal
            </Button> */}

            <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
                <ModalHeader toggler={() => setShowModal(false)}>
                    Add Channel
                </ModalHeader>
                <ModalBody>
                <form id="feedbackForm">
										<div className="relative w-full mb-3">
											<label className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="email">Channel Name</label>
                        <input type="text" name="email" id="email" className="border-0 px-3 py-3 rounded text-sm shadow w-full
                    bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400" placeholder=" "
                        style={{transition: "all 0.15s ease 0s"}} required />
                    </div>
											<div className="relative w-full mb-3">
												<label className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="message">Input Member IDs</label>
                        <textarea maxlength="300" name="feedback" id="feedback" rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full"
                        placeholder="ex: 237,345,123" required>

                        </textarea>
											</div>
											<div className="text-center mt-6">
												<button 
                        className="bg-green-300 text-black text-center mx-auto active:bg-green-500 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="submit" style={{transition:"all 0.15s ease 0s"}}>Submit
                      </button>
											</div>
									</form>
                </ModalBody>
                {/* <ModalFooter>
                    <Button 
                        color="red"
                        buttonType="link"
                        onClick={(e) => setShowModal(false)}
                        ripple="dark"
                    >
                        Close
                    </Button>

                    <Button
                        color="green"
                        onClick={(e) => setShowModal(false)}
                        ripple="light"
                    >
                        Save Changes
                    </Button>
                </ModalFooter> */}
            </Modal>
        </>
    );
}