import Header from "./components/header";
import Footer from "./components/footer";
import Title from "./components/sections/title";
import SectionOne from "./components/sections/section-one";

function App() {
  return (
    <div className="w-screen flex flex-col gap-14 items-center px-10 md:px-20 font-Body">
      <Header />
      <Title />
      <SectionOne />
      <Footer />
    </div>
  );
}

export default App;
