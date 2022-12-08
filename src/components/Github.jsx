import React from "react";

export const Github = () => {
  return (
    <section
      className="github-st"
      id="github-"
      style={{
        marginTop: "40px",
        paddingLeft: "40px",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <div id="github-stats">
        <div className="container">
          <h1 style={{ fontSize: "30px" }}>GitHub Status</h1>
          <div className="github-stats-list">
            <div className="github-stat">
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=Suneet25&theme=indian-flag"
                alt="Github Contributions"
              />
            </div>
            <div className="github-stat">
              <img
                src="https://github-readme-stats.vercel.app/api?username=Suneet25&theme=flag-india&show_icons=true&count_private=true"
                alt="Github Stats"
              />
            </div>
            <div
              className="github-stat"
              style={{ textAlign: "center", color: "white" }}
            >
              <h4 className="mb-0">Suneet Panigrahi's contribution calendar</h4>
              <img
                src="https://ghchart.rshah.org/Suneet25"
                alt="Suneet"
                style={{
                  width: "100%",
                  height: "auto",
                  marginTop: "5vh",
                  color: "red",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
