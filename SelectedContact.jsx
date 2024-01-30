import React, {useEffect, useState} from 'react'

export default function SelectedContact({ selectedContactId }) {
    const [contact, setContact] = useState(null);
    console.log(selectedContactId);
    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/users/${selectedContactId}`)
        .then((res)=>res.json())
        .then(json)=> {
            console.log(json);
            setContact(json);
    })
    .catch((err) => console.log(err));
}, [selectedContactId];
  return <div>
    <h3>Contact Info for {contact?.name}</h3>
  </div>;
);
}
