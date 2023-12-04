import { RegisterModal } from "../components/modals/registerModal"
import { EditModal } from "../components/modals/editModal"
import { NameDiv } from "../components/home/nameDiv"
import { HeaderHome } from "../components/home/headerHome"
import { ContactsDiv } from "../components/home/contactsDiv"
import { useState } from "react"

export const HomePage = () =>{

    const [IsOpen, SetisOpen] = useState(false)

    return(
        <div>
            {IsOpen && <RegisterModal  SetIsOpen={SetisOpen} IsOpen={IsOpen}/>}
            {IsOpen && <EditModal SetIsOpen={SetisOpen} IsOpen={IsOpen}/> }
            <HeaderHome/>
            <NameDiv/>
            <ContactsDiv SetIsOpen={SetisOpen} IsOpen={IsOpen}/>
        </div>
    )
}