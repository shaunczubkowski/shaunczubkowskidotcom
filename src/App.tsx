import Skills from "./components/Skills";
import Header from "./components/Header";
import { Background } from "./components/background/Background";
import VerticalLayout from "./components/layout/VerticalLayout";
import About from "./components/About";
import HeaderBanner from "./components/HeaderBanner";

function App() {
  return (
    <div className="bg-background">
      {window.innerWidth > 1200 && <Background />}
      <HeaderBanner />
      <Header />
      <VerticalLayout>
        <About />
        <Skills />
      </VerticalLayout>
    </div>
  )
}

export default App
