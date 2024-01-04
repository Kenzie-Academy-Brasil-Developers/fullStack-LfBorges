import { useContext } from "react"
import { ContactProvider } from "./providers/ContactContext"
import { UserContext, UserProvider } from "./providers/UserContext"
import { RoutesMain } from "./routes/RoutesMain"
import { GlobalStyled } from "./styles/globalStyles"
import LoadingPage from "./components/LoadingPage"

function App() {

  const { loading } = useContext(UserContext);

  return (
    <>
    <GlobalStyled />
    <UserProvider>
      <ContactProvider>
        {loading ? <LoadingPage/> : <RoutesMain />}
      </ContactProvider>
    </UserProvider>
    </>
  )
}

export default App
