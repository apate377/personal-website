import logo from './../images/new_logo.png';

function Home() {
  return (
    <div id="home" class="home group">
    <div class="logo">
      <img src={logo} alt="Amar's_logo"></img>
    </div>
    <div class="gradient"></div>
    <div class="welcome">
      <h1>Welcome.</h1>
      <p>My name is Amar Patel. Browse through some of my hardware and software projects.</p>
    </div>
  </div>
  );
}

export default Home;