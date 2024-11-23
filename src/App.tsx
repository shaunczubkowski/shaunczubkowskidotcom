import Skills from "./Skills";
import Home from "./components/About";
import Header from "./components/Header";
import { Background } from "./components/background/Background";
import VerticalLayout from "./components/layout/VerticalLayout";

function App() {
  return (
    <>
      <Background />
      <Header />
      <VerticalLayout>
        <Home />
        <Skills />
      </VerticalLayout>
    </>
  )
}

export default App
