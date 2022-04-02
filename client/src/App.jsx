import { Navbar, Banner, Welcome, Footer, Services, Transactions } from "./components";

const App = () => (
      <div className="min-h-screen">
      <div className="gradient-bg-welcome">
      <Navbar />
      <Banner />
      <Welcome/>
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );

export default App;