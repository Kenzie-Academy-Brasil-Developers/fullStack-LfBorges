import { ContactProvider } from "./providers/ContactContext";
import { UserProvider } from "./providers/UserContext";
import { RoutesMain } from "./routes/RoutesMain";
import { GlobalStyled } from "./styles/globalStyles";

function App() {

  return (
    <>
      <GlobalStyled />
      <UserProvider>
        <ContactProvider>
          <RoutesMain />
        </ContactProvider>
      </UserProvider>
    </>
  )
}

export default App