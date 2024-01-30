import React, { useEffect, useState } from 'react'
import ContactRow from "./ContactRow";

export default function ContactList({setSelectedContactId}) {
    const [contacts, setContacts] = useState([]);
    useEffect (()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then((json)=>{
            console.log(json);
            setContacts(json);
    })
    .catch(err=>console.log(err));
    }, []);
    return (
       
            <table>
                <thead>
                    <tr>
                        <th colSpan="3">Contact List</th>
                    </tr>
                </thead>
                <tbody>
                    <tr onClick={() => setSelectedContactId(contact.id)}>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                    </tr>
                    {
                        contacts.map(contact=><ContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId}/>
                        )}
                </tbody>
            </table>
    
    );
}