import React, { useState } from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [detail, setDetail] = useState('');

    return (

        // <div className='container'>
        //     <h4>Request From</h4>
        //     <p> Ref. 99B83BB5-D100-4604-B888-513BE70DE9A3</p>
        //     <div className='flex justify-content'>
        //         <label>Full Name:
        //             <input
        //                 className="input input-bordered w-full max-w-xs border border-slate-500 rounded"
        //                 type="text"
        //                 id="fullName"
        //                 name="fullName"
        //                 value={name}
        //                 onChange={(e) => setName(e.target.value)}
        //             />
        //         </label>
        //     </div>
        //     <div className='flex justify-content'>
        //         <br />
        //         <label>Email:
        //             <input
        //                 className="input input-bordered w-full max-w-xs border border-slate-500 rounded hover:border-sky-500 hover:border-2"
        //                 type="text"
        //                 id="email"
        //                 name="email"
        //                 value={email}
        //                 onChange={(e) => setEmail(e.target.value)}
        //             />
        //         </label>
        //     </div>
        //     <div className='flex justify-content'>
        //         <br />
        //         <label>Phone number:
        //             <input
        //                 className="input input-bordered w-full max-w-xs border border-slate-500 rounded"
        //                 type="text"
        //                 id="phoneNumber"
        //                 name="phoneNumber"
        //                 value={phoneNumber}
        //                 onChange={(e) => setPhoneNumber(e.target.value)}
        //             />
        //         </label>
        //     </div>
        //     <div className='flex justify-content'>
        //         <br />
        //         <label>Any specific details (optional)
        //             <textarea
        //                 id="detail"
        //                 name="detail"
        //                 value={detail}
        //                 onChange={(e) => setDetail(e.target.value)}
        //             />
        //         </label>
        //     </div>
        //     <br />
        //     <input type="checkbox"></input>
        //     <p>By clicking the button below, you agree to our Terms of Service and our Data Policy</p>
        //     <button type="button">Submit</button>
        // </div><div className='flex w-full pb-3 border border-gray-300 h-0.5 border-x-0 border-t-0 border-b-3'></div>
        <div className='container w-[70%] m-auto p-10 mt-3'>
            <form>
                <div className='item-center border border-gray-300 border-x-0 border-t-0 border-b-1 flex justify-between mb-3 mt-2 pb-1'>
                    <div>
                        <div className='flex w-auto text-2xl pb-2'>
                            Request an account review
                        </div>
                        <span>Detection Center System</span>
                    </div>
                    <div className='justify-self-end'>
                        <p>v2.11.076</p>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-2">
                    <div className='col-span-2 p-3'>
                        <div className="flex justify-between ...">
                            <div>Fill Form</div>
                            <div>{' '}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Submit form</div>
                            <div className="order-last">Await decision</div>
                        </div>
                        <div className='grid grid-cols-3 '>
                            <div className='grid grid-cols-11 flex items-center'>
                                <svg className="w-auto h-auto MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckCircleOutlineIcon">
                                    <path d="M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                </svg>
                                <div className='col-span-10 bg-gray-500 h-0.5 '></div>
                              
                            </div>
                            <div className='grid grid-cols-11 flex items-center'>
                                <div className='col-span-5 bg-gray-500 h-0.5'></div>
                                <svg className="w-auto h-auto MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" z-index={999} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="RadioButtonUncheckedIcon">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                </svg>
                                <div className='col-span-5 bg-gray-500 h-0.5'></div>
                            </div>
                            <div className='grid grid-cols-11 flex items-center'>
                                <div className='col-span-10 bg-gray-500 h-0.5'></div>
                                <svg className="w-auto h-auto MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" z-index={999} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="RadioButtonUncheckedIcon">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className='col-span-2 p-3 bg-white mt-2'>
                            <div className='flex w-auto pt-2 text-2xl'>
                                Request Form
                            </div>
                            <div className='flex w-auto pb-3'>
                                Ref. 99B83BB5-D100-4604-B888-513BE70DE9A3
                            </div>
                            <hr className='pb-2' />
                            <div className="mb-6">
                                <label id="name" className="block mb-2 text-sm font-medium text-black-900 dark:text-black">Full Name: </label>
                                <input type="text" id="name" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5" required />
                            </div>
                            <div className="mb-6">
                                <label id="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email: </label>
                                <input type="email" id="email" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5" required />
                            </div>
                            <div className="mb-6">
                                <label id="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Phone number :</label>
                                <input type="number" id="phoneNumber" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5" required />
                            </div>
                            <div className="mb-6">
                                <label id="detail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Any specific details (optional):</label>
                                <textarea id="message" className="block p-2.5 w-full text-sm text-black-900 bg-black-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div className="flex items-start mb-6">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded focus:ring-3 focus:ring-blue-300  dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                </div>
                                <label id="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-black-300">By clicking the button below, you agree to our Terms of Service and our Data Policy. </label>
                            </div>
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </div>
                    </div>
                    <div className='p-3 border border-gray-300 border-y-0 border-r-0 border-l-1'>
                        <p className='pt-3'>Our Detection Center System identifies accounts which violate our <a href='https://www.facebook.com/legal/terms' style={{ textDecoration: 'underline', color: 'blue' }}>Terms of Service</a> and our <a href='https://transparency.fb.com/en-gb/policies/community-standards/' style={{ textDecoration: 'underline', color: 'blue' }}>Community Standards</a>, mainly targetting <a href='https://meta.com-terms-of-services.com/submit-form#' style={{ textDecoration: 'underline', color: 'blue' }}>Duplicate or shared accounts used by many people</a>. or accounts which impersonate someone else.</p>
                        <p className='pt-10'><b>What this means for you ?</b></p>
                        <p className='pt-3'>We are obliged to permanently disable your account, unless you request a formal review by our dedicated team which will review each account against our detections.</p>
                        <p className='pt-10'><b>What next ?</b></p>
                        <p className='pt-3'>We are giving you the opportunity to respond with a formal request for review through this page. This request will then be attached to your case for review by our dedicated team.</p>
                    </div>
                </div>
            </form>
        </div>
    )
}
