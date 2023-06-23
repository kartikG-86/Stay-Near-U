import React from "react";

const MainImage = () => {
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100%",
          backgroundImage: `url("https://news.airbnb.com/wp-content/uploads/sites/4/2022/09/Newsroom-About.jpg?w=2048")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </>
  );
};

export default MainImage;
