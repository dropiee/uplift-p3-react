import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <header>
        <h1 className="inline">FFXIV Relic Tracker</h1>
        <Link className="inline ml-5" to="/">
          Home
        </Link>
      </header>
      <div>
        <p>Made with React.js by DR</p>
        <span>Link to Gitlab (put link here)</span>
        <p>
          FINAL FANTASY is a registered trademark of Square Enix Holdings Co.,
          Ltd. <br />
          FINAL FANTASY XIV © 2010 - 2016 SQUARE ENIX CO., LTD. All Rights
          Reserved. <br />
          This app is not affiliated with Square Enix.
        </p>
      </div>
    </div>
  );
}

export default About;
