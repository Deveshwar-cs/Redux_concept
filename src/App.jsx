import Parent from "./pages/Parent";
import {createContext} from "react";
export const UserContext = createContext();

const App = () => {
  const user = "Deveshwar";
  return (
    <div>
      <UserContext.Provider value={user}>
        <Parent passingValue={"cool"} />
      </UserContext.Provider>
    </div>
  );
};

export default App;
