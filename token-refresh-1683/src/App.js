import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "./App.css";
import MyComponent from "./MyComponent";

function App() {
  return (
    <Authenticator>
      {() => (
        <main>
          <MyComponent />
        </main>
      )}
    </Authenticator>
  );
}

export default App;
