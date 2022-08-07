import "./App.css";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchError, fetchLoad, fetchSuccess } from "./Redux/action";

function App() {
  const [text, setText] = useState("github");
  const [length, setLength] = useState("");

  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(fetchLoad());
    axios
      .get(`https://api.github.com/search/users?q=${text}`)
      .then((res) => {
        // console.log(res.data.items)
        let payload = res.data.items;

        dispatch(fetchSuccess(payload));
        setLength(payload.length);
        // console.log("second",payload)
      })
      .catch((error) => {
        dispatch(fetchError());
        console.log(error);
      });
  };

  const { list, loading, error } = useSelector((state) => state);
  console.log(list,"first")
  React.useEffect(() => {
    handleSearch();
  }, []);
  return (
    <div>
      <div id="navbar">
        <img
          src="https://pnggrid.com/wp-content/uploads/2022/03/Github-Logo-White.png"
          alt="github_logo"
        />
        <h1>GitHub Users</h1>
      </div>

      <div id="searchDiv">
        <input
          value={text}
          type="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            handleSearch();
          }}
        >
          SEARCH
        </button>
      </div>

      <div id="sortOption">
        <h2>Showing {length} results </h2>
      </div>
      <div>
        {loading ? (
          <>LOADING....</>
        ) : error ? (
          <>Something went wrong :/ </>
        ) : length == 0 ? (
          <>Sorry! User not found</>
        ) : (
          <div>
            {list.map((e) => {
              return (
                <>
                <div className="result">
                  
                  <img src={e.avatar_url} />
                  <a href={e.html_url} target="_blank">
                     {e.login}
                  </a>
                  <p style={{marginLeft: "50px"}}>Organization Type: {e.type}</p>
                  <p style={{marginLeft: "50px"}}>Score: {e.score}</p>
                </div>


                </>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
