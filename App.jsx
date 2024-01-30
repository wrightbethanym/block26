import { useState } from "react";
import ContactList from "./components/ContactList";


function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  return (
    <>
    <SelectedContact selectedContactId={selectedContactId}/>
    </>
    ) : (
    <ContactList setSelectedContactId={setSelectedContactId}/>
    )}
    </>
  );   
}

export default App
