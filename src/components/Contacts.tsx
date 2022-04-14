import React, { useState } from 'react'
import Contact from './Contact'


interface Iprops {
  name: string,
  email: string
}

export default function Contacts() {

  const [contact, setContact] = useState<Iprops>({} as Iprops);
  const [contactList, setContactList] = useState <Iprops[]> ([]);

  const onClick = () => {
    setContactList([...contactList, contact]);
    setContact({
      name: "",
      email: ""
    });
    
  }

  const addContact = (e : React.ChangeEvent<HTMLInputElement>) => {
    setContact({...contact, [e.target.name]: e.target.value})
  }


  return (
    <div className='m-5'>
      <h1 className='text-center mt-4 '>😒 Contact List</h1>
      
      <div>
        <input name='name' onChange={addContact} type="text" placeholder='Contact Name' className="form-control" />
        <input name='email' onChange={addContact} type="text" placeholder='Contact Email' className="form-control" />
        <button onClick={onClick} className="btn btn-success">Add</button>
      </div>
      {
        contactList.map(ct => (
          <Contact  name={ct.name} email={ct.email} />
        ))
      }
        <Contact email='basir.bsmrstu@gmal.com' name='Abdul Basir'/>
        <Contact email='basir.bsmrstu@gmal.com' name='Abdul Basir'/>
        <Contact name='Abdul Basir'/>
    </div>
  )
}
