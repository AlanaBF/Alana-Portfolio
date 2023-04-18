import React from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="card">
      <a href="#">
        <button
          className="visitor"
          onClick={() => setCount((count) => count + 1)}
        >
          {count} Visitors
        </button>
      </a>
    </div>
  );
}

export default Counter;
