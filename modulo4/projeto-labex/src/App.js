import Router from "./routes/Router";

import { useEffect } from "react";
import Loading from "./components/loading/Loading";

export const apiUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/'
export const student = 'juliano-manzano-barros/'

function App() {
  useEffect(() => {
    document.title = "LabeX -"
  }, [])
  return (
    
    <Router />
  );
}

export default App;
