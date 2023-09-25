import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="left-nav">
        <h1>GPT - 3</h1>
        <ul>
          <li>Home</li>
          <li>What is GPT</li>
          <li>Open AI</li>
          <li>Case Studies</li>
          <li>Library</li>
        </ul>
      </div>

      <div className="right-nav">
        <span className="signin">Sign in</span>
        <span className="signup">Sign up</span>
      </div>
    </nav>
  );
};

export default Navbar;
