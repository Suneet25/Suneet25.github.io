import React from "react";

export const Github = () => {
  return (
    <section
      className="github-st"
      id="github-"
      style={{
        backgroundColor: "white",
        color: "black",
        marginTop: "50px",
        textAlign: "center",
      }}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-10">
          <h1 className="text-4xl font-bold inline border-b-4 border-gray-500">
            GitHub Status
          </h1>
          <div className="github-stats-list">
            <div style={{ margin: "auto" }}>
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=Suneet25&theme=indian-flag"
                alt="Github Contributions"
              />
            </div>
            <div style={{ margin: "auto" }}>
              <img
                src="https://github-readme-stats.vercel.app/api?username=Suneet25&theme=flag-india&show_icons=true&count_private=true"
                alt="Github Stats"
              />
            </div>
            <div
              style={{ margin: "auto", textAlign: "center", color: "white" }}
            >
              <h4 className="mb-0">Suneet Panigrahi's contribution calendar</h4>
              <img
                src="https://ghchart.rshah.org/Suneet25"
                alt="Suneet"
                style={{
                  width: "100%",
                  height: "auto",

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
