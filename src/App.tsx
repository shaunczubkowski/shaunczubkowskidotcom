import Skills from "./components/Skills";
import Header from "./components/Header";
import { Background } from "./components/background/Background";
import VerticalLayout from "./components/layout/VerticalLayout";
import About from "./components/About";
import HeaderBanner from "./components/HeaderBanner";

function App() {
  return (
    <>
      <Background />
      <HeaderBanner />
      <Header />
      <VerticalLayout>
        <About />
        <Skills />
      </VerticalLayout>
    </>
  )
}

export default App
