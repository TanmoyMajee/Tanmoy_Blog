import React ,{useState} from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import { ClipLoader } from "react-spinners";
import axios from 'axios'

function Contact() {
  const [name,setname]= useState('');
  const [email,setEmail]= useState('');
  const [msg,setMsg] = useState('');
  const [sending,setSending] = useState(false);

  const handleSubmit =async (e)=>{
    e.preventDefault();
    setSending(true);

    const data={
       service_id : 'service_11r7ivk',
       template_id : 'template_4zcvil6',
       user_id : 'a4czMi7Yp63ZTSFRt',
       template_params : {
          from_name:name,
          to_name:'Tanmoy',
          from_email:email,
          to_email: 'tanmoymajee239@email.com',
          message:msg
       }
    }

    try {
      const response =await axios.post("https://api.emailjs.com/api/v1.0/email/send",data)
      console.log(response);
      console.log(response.data);
      setEmail('');
      setMsg('');
      setname('');
      toast.success('Message Send Successfully')
    } catch (error) {
      toast.error('Message not Send Somethig went wrong')
    }finally{
      setSending(false);
    }

  }

  return (
    <div className='min-h-screen bg-gradient-to-r from-gray-900 to-gray-700  py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto    text-white'>
        <div className='text-center'>
          <h2 className='text-4xl font-bold text-white mb-8'>Get In Touch</h2>
          <p className='text-lg mb-12'>Feel free to reach out to me for any questions or opportunities!</p>
        </div>
        {/* now div for from  */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div className='bg-gray-800 rounded-lg px-6 py-7'>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className=''>Name</label>
                      <input
                        type='text'
                        value={name} 
                        className="w-full mt-2 px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e)=>{setname(e.target.value)}}
                        required/>
                    </div>
                    <div>
                      <label>Email</label>
                      <input
                        type='email'
                        value={email} 
                        onChange={(e)=>{setEmail(e.target.value)}}
                        className="w-full mt-2 px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required/>
                    </div>
                    <div>
                      <label>Message</label>
                      <textarea
                        type='text'
                        value={msg} 
                        onChange={(e)=>{setMsg(e.target.value)}}
                        className="w-full mt-2 px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required/>
                    </div>
                    <button type='submit' disabled={sending}
                      className='bg-blue-600 hover:bg-blue-800 py-2 px-6 rounded-lg w-full transition-colors duration-300  '>
                        {
                          sending?(<ClipLoader  size={16} color="white" className="mr-2"/>):('Send Message')
                        }
                        </button>
                </form>
            </div>
            <div className="space-y-6">
              <div className='bg-gray-800 rounded-lg px-6 py-6'>
                <h1 className='text-xl font-semibold'>Contact Information</h1>
                <div className='mt-4'>
                    <div className='flex items-center space-x-3'>
                      <FaEnvelope className='text-blue-500'/>
                      <h1 className='text-white'>tanmoymajee239@gmail.com</h1>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <FaPhone className='text-blue-500'/>
                      <h1 className='text-white'>+91 6290580590</h1>
                    </div>
                    <div className='flex items-center space-x-3'>
                      <FaMapMarkerAlt className='text-blue-500'/>
                      <h1 className='text-white'>Kolkata, West Bengal, India</h1>
                    </div>
                </div>
              </div>
              <div className='bg-gray-800  rounded-lg px-6 py-6 space-y-2'>
                <h1 className='text-xl font-semibold'>Let's Connect</h1>
                <p> I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
                <p> Feel free to reach out to me through the contact form or directly via email. I'll get back to you as soon as possible!</p>
              </div>
            </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Contact