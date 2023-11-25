import Header from "./components/header";
import Footer from "./components/footer";
import Button from "./components/button";

function App() {
  return (
    <div className="w-screen flex flex-col items-center px-6 md:px-20">
      <Header />
      <section>
        <h2 className="text-2xl font-bold">
          Build The Community Your Fans Will Love
        </h2>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <Button>Get Started For Free</Button>
      </section>
      <Footer />
    </div>
  );
}

export default App;
