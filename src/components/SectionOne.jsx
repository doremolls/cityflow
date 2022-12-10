import React from 'react'

const SectionOne = () => (
    <>
      <div
        className="justify-content-center main-bg-sec d-none d-md-block d-lg-block"
        style={{
          boxSizing: "border-box",
          position: "absolute",
          top: "0px",
          zIndex: -1,
          height: "402px",
          width: "100%",
          objectFit: "cover",
          background:
            'url("https://static.abhibus.com/img/2022/Diwali.jpg") center top no-repeat',
          display: "block",
          justifyContent: "center",
          textAlign: "center",
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  box-sizing: border-box;
  font-family: sans-serif;
  line-height: 1.15;
  text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
}

body {
  box-sizing: border-box;
  text-align: left;
  margin: 0px;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.5;
  color: rgb(33, 37, 41);
  background-color: rgb(255, 255, 255);
}
`,
        }}
      />
    </>
)

export default SectionOne
