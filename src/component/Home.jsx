import { useReducer, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import MainCard from "./MainCard";

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function Home() {
  const [cardCount, dispatch] = useReducer(reducer, 1, (initialCount) => {
    const savedCount = localStorage.getItem("cardCount");
    return savedCount ? parseInt(savedCount) : initialCount;
  });

  useEffect(() => {
    localStorage.setItem("cardCount", cardCount);
  }, [cardCount]);

  return (
    <div>
      <header>
        <h1 className="inline">FFXIV Relic Tracker</h1>
        <Link className="inline ml-5" to="/about">
          About
        </Link>
      </header>

      <div className="flex flex-row gap-5">
        {[...Array(cardCount)].map((e, index) => {
          return <MainCard cardId={index + 1} />;
        })}

        <div className="flex flex-col">
          <Button onClick={() => dispatch("increment")}>
            Track another Relic
          </Button>
          <Button onClick={() => dispatch("decrement")}>
            Remove a tracker
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
