import React from "react";


const Navbar = () => {
  return (
    <>
      <header
        style={{
          boxSizing: "border-box",
          display: "block",
          fontFamily: "Mont-ExtraLightDEMO, sans-serif",
          color: "rgb(62, 58, 69)",
          margin: "20px 0px",
          width: "100%",
          zIndex: 1000,
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 4px",
          paddingBottom: "20px",
        }}
      >
        <div
          style={{
            margin: "0px",
            boxSizing: "border-box",
            fontFamily: "Mont-ExtraLightDEMO, sans-serif",
            color: "rgb(62, 58, 69)",
          }}
        >
          <div
            className="signupNudge___qC_5O row"
            style={{
              margin: "0px",
              boxSizing: "border-box",
              fontFamily: "Mont-ExtraLightDEMO, sans-serif",
              color: "rgb(62, 58, 69)",
              display: "flex",
              flexWrap: "wrap",
              marginRight: "-15px",
              marginLeft: "-15px",
              width: "100%",
            }}
          >
            <div
              className="col-1"
              style={{
                margin: "0px",
                boxSizing: "border-box",
                fontFamily: "Mont-ExtraLightDEMO, sans-serif",
                color: "rgb(62, 58, 69)",
                position: "relative",
                width: "100%",
                paddingRight: "15px",
                paddingLeft: "15px",
                flex: "0 0 8.33333%",
                maxWidth: "8.33333%",
              }}
            />
            <div
              className="col-5"
              style={{
                margin: "0px",
                boxSizing: "border-box",
                fontFamily: "Mont-ExtraLightDEMO, sans-serif",
                color: "rgb(62, 58, 69)",
                position: "relative",
                width: "100%",
                paddingRight: "15px",
                paddingLeft: "15px",
                flex: "0 0 41.6667%",
                maxWidth: "41.6667%",
              }}
            >
              <div
                className="logo___bkZnl"
                style={{
                  margin: "0px",
                  boxSizing: "border-box",
                  fontFamily: "Mont-ExtraLightDEMO, sans-serif",
                  color: "rgb(62, 58, 69)",
                }}
              >
                <a
                  href="/"
                  style={{
                    margin: "0px",
                    boxSizing: "border-box",
                    backgroundColor: "transparent",
                    fontFamily: "Mont-ExtraLightDEMO, sans-serif",
                    fontWeight: 700,
                    color: "rgb(123, 42, 255)",
                    outline: "none",
                    textDecoration: "none",
                  }}
                >
                  <img
                    className="responsive"
                    alt="City Cab Bus"
                    src="logo.png"
                    style={{
                      margin: "0px",
                      boxSizing: "border-box",
                      borderStyle: "none",
                      verticalAlign: "middle",
                      fontFamily: "Mont-ExtraLightDEMO, sans-serif",
                      color: "rgb(62, 58, 69)",
                      width: "146px",
                      height: "50px",
                      marginBottom: "8px",
                    }}
                  />
                </a>
              </div>
            </div>
            <div
              id="navbarResponsive"
              className="collapse navbar-collapse"
              style={{
                boxSizing: "border-box",
                flexGrow: 1,
                alignItems: "center",
                flexBasis: "auto",
                display: "flex",
              }}
            >
              <ul
                className="navbar-nav ml-auto"
                style={{
                  boxSizing: "border-box",
                  marginTop: "0px",
                  listStyle: "none",
                  display: "flex",
                  paddingLeft: "0px",
                  marginBottom: "0px",
                  flexDirection: "row",
                  marginLeft: "auto",
                }}
              >
                <li
                  className="nav-item sticky-list active"
                  style={{ boxSizing: "border-box", display: "none" }}
                >
                  {" "}
                  <a
                    className="nav-link"
                    href="/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      display: "block",
                      fontWeight: 500,
                      background: "rgb(198, 0, 1)",
                      borderRadius: "15px",
                      backgroundColor: "rgb(198, 0, 1)",
                      padding: "3px 16px",
                      paddingRight: "16px",
                      paddingLeft: "16px",
                      lineHeight: "19px",
                      color: "rgb(255, 255, 255)",
                    }}
                  >
                    Bus
                  </a>{" "}
                </li>
                <li
                  className="nav-item sticky-list"
                  style={{ boxSizing: "border-box", display: "none" }}
                >
                  {" "}
                  <a
                    className="nav-link"
                    href="/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      backgroundColor: "transparent",
                      display: "block",
                      fontWeight: 500,
                      padding: "3px 16px",
                      color: "rgb(93, 93, 93)",
                      paddingRight: "16px",
                      paddingLeft: "16px",
                      lineHeight: "19px",
                    }}
                  >
                    Trains
                  </a>{" "}
                </li>
                <li
                  className="nav-item sticky-list"
                  style={{ boxSizing: "border-box", display: "none" }}
                >
                  {" "}
                  <a
                    className="nav-link"
                    href="/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      backgroundColor: "transparent",
                      display: "block",
                      fontWeight: 500,
                      padding: "3px 16px",
                      color: "rgb(93, 93, 93)",
                      paddingRight: "16px",
                      paddingLeft: "16px",
                      lineHeight: "19px",
                    }}
                  >
                    Hotels
                  </a>{" "}
                </li>
                <li
                  className="nav-item sticky-list"
                  style={{ boxSizing: "border-box", display: "none" }}
                >
                  {" "}
                  <a
                    className="nav-link"
                    href="/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      backgroundColor: "transparent",
                      display: "block",
                      fontWeight: 500,
                      padding: "3px 16px",
                      color: "rgb(93, 93, 93)",
                      paddingRight: "16px",
                      paddingLeft: "16px",
                      lineHeight: "19px",
                    }}
                  >
                    Rentals
                  </a>{" "}
                </li>
                <li className="nav-item" style={{ boxSizing: "border-box" }}>
                  {" "}
                  <a
                    className="nav-link"
                    href="/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      backgroundColor: "transparent",
                      display: "block",
                      fontWeight: 500,
                      padding: "3px 16px",
                      color: "rgb(93, 93, 93)",
                      paddingRight: "16px",
                      paddingLeft: "16px",
                      lineHeight: "19px",
                    }}
                  >
                    Offers
                  </a>{" "}
                </li>
                <li className="nav-item" style={{ boxSizing: "border-box" }}>
                  {" "}
                  <a
                    className="nav-link"
                    href="/"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      backgroundColor: "transparent",
                      display: "block",
                      fontWeight: 500,
                      padding: "3px 16px",
                      color: "rgb(93, 93, 93)",
                      paddingRight: "16px",
                      paddingLeft: "16px",
                      lineHeight: "19px",
                    }}
                  >
                    Get Free Rides
                  </a>{" "}
                </li>
                <li
                  className="nav-item dropdown main-nav-dropdown"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    background: "rgb(239, 239, 239)",
                  }}
                >
                  <a
                    id="navbarDropdown1"
                    className="nav-link dropdown-toggle pr-0"
                    aria-expanded="false"
                    aria-haspopup="true"
                    href="/"
                    role="button"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      backgroundColor: "transparent",
                      whiteSpace: "nowrap",
                      display: "block",
                      fontWeight: 500,
                      padding: "3px 16px",
                      color: "rgb(93, 93, 93)",
                      paddingLeft: "16px",
                      lineHeight: "19px",
                      paddingRight: "0px",
                    }}
                  >
                    {"My Bookings"}
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right animated fadeIn faster"
                    aria-labelledby="navbarDropdown1"
                    style={{
                      boxSizing: "border-box",
                      margin: "0.125rem 0px 0px",
                      listStyle: "none",
                      border: "1px solid rgba(0, 0, 0, 0.15)",
                      top: "100%",
                      display: "none",
                      minWidth: "10rem",
                      fontSize: "1rem",
                      color: "rgb(33, 37, 41)",
                      textAlign: "left",
                      backgroundColor: "rgb(255, 255, 255)",
                      backgroundClip: "padding-box",
                      right: "0px",
                      left: "auto",
                      animationDelay: "1ms",
                      animationName: "fadeIn",
                      animationFillMode: "both",
                      cssFloat: "none",
                      marginTop: "15px",
                      borderRadius: "0px",
                      padding: "0px",
                      animationDuration: "500ms",
                      position: "absolute",
                      zIndex: 12,
                    }}
                  >
                    <a
                      className="dropdown-item"
                      href="/"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        border: "0px",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        color: "rgb(33, 37, 41)",
                        textAlign: "inherit",
                        whiteSpace: "nowrap",
                        backgroundColor: "transparent",
                        borderBottom: "1px solid rgb(239, 239, 239)",
                        padding: "0.5rem 1rem",
                        fontSize: "15px",
                      }}
                    >
                      <small
                        style={{
                          boxSizing: "border-box",
                          fontSize: "80%",
                          fontWeight: 400,
                        }}
                      >
                        <i
                          className="fa fa-circle text-red pr-2"
                          aria-hidden="true"
                          style={{
                            boxSizing: "border-box",
                            fontVariant: "normal",
                            display: "inline-block",
                            fontStyle: "normal",
                            fontWeight: "normal",
                            fontStretch: "normal",
                            lineHeight: 1,
                            fontFamily: "FontAwesome",
                            textRendering: "auto",
                            WebkitFontSmoothing: "antialiased",
                            fontSize: "7px",
                            paddingRight: "0.5rem",
                            color: "rgb(198, 0, 0)",
                          }}
                        />
                      </small>{" "}
                      Print Booking
                    </a>
                    <a
                      className="dropdown-item"
                      href="//cancellation"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        border: "0px",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        color: "rgb(33, 37, 41)",
                        textAlign: "inherit",
                        whiteSpace: "nowrap",
                        backgroundColor: "transparent",
                        borderBottom: "1px solid rgb(239, 239, 239)",
                        padding: "0.5rem 1rem",
                        fontSize: "15px",
                      }}
                    >
                      <small
                        style={{
                          boxSizing: "border-box",
                          fontSize: "80%",
                          fontWeight: 400,
                        }}
                      >
                        <i
                          className="fa fa-circle text-red pr-2"
                          aria-hidden="true"
                          style={{
                            boxSizing: "border-box",
                            fontVariant: "normal",
                            display: "inline-block",
                            fontStyle: "normal",
                            fontWeight: "normal",
                            fontStretch: "normal",
                            lineHeight: 1,
                            fontFamily: "FontAwesome",
                            textRendering: "auto",
                            WebkitFontSmoothing: "antialiased",
                            fontSize: "7px",
                            paddingRight: "0.5rem",
                            color: "rgb(198, 0, 0)",
                          }}
                        />
                      </small>{" "}
                      Cancel Booking
                    </a>
                  </div>
                </li>
                <li
                  className="nav-item dropdown main-nav-dropdown"
                  style={{
                    boxSizing: "border-box",
                    position: "relative",
                    background: "rgb(239, 239, 239)",
                  }}
                >
                  <a
                    id="navbarDropdown"
                    className="nav-link dropdown-toggle pr-0 open"
                    aria-expanded="false"
                    aria-haspopup="true"
                    href="/#"
                    role="button"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      backgroundColor: "transparent",
                      whiteSpace: "nowrap",
                      display: "block",
                      fontWeight: 500,
                      padding: "3px 16px",
                      color: "rgb(93, 93, 93)",
                      paddingLeft: "16px",
                      lineHeight: "19px",
                      paddingRight: "0px",
                    }}
                  >
                    <img
                      id="prime-user-icon"
                      src="https://static.abhibus.com/assets/img/prime-user.png"
                      style={{
                        boxSizing: "border-box",
                        borderStyle: "none",
                        verticalAlign: "middle",
                        display: "none",
                      }}
                    />
                    <i
                      className="fa fa-user-circle-o fa-1 pr-1 text-gray"
                      aria-hidden="true"
                      style={{
                        boxSizing: "border-box",
                        fontVariant: "normal",
                        display: "inline-block",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontStretch: "normal",
                        lineHeight: 1,
                        fontFamily: "FontAwesome",
                        fontSize: "inherit",
                        textRendering: "auto",
                        WebkitFontSmoothing: "antialiased",
                        paddingRight: "0.25rem",
                        color: "rgb(165, 165, 165)",
                      }}
                    />
                    <span id="AccLogin" style={{ boxSizing: "border-box" }}>
                      {"Login / Register"}
                    </span>
                  </a>
                  <div
                    id="dropdownmenu"
                    className="dropdown-menu dropdown-menu-right animated fadeIn faster"
                    aria-labelledby="navbarDropdown"
                    style={{
                      boxSizing: "border-box",
                      margin: "0.125rem 0px 0px",
                      listStyle: "none",
                      border: "1px solid rgba(0, 0, 0, 0.15)",
                      top: "100%",
                      display: "none",
                      minWidth: "10rem",
                      fontSize: "1rem",
                      color: "rgb(33, 37, 41)",
                      textAlign: "left",
                      backgroundColor: "rgb(255, 255, 255)",
                      backgroundClip: "padding-box",
                      right: "0px",
                      left: "auto",
                      animationDelay: "1ms",
                      animationName: "fadeIn",
                      animationFillMode: "both",
                      cssFloat: "none",
                      marginTop: "15px",
                      borderRadius: "0px",
                      padding: "0px",
                      animationDuration: "500ms",
                      position: "absolute",
                      zIndex: 12,
                    }}
                  >
                    <a
                      className="dropdown-item pr-5 py-3"
                      style={{
                        boxSizing: "border-box",
                        border: "0px",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        textAlign: "inherit",
                        whiteSpace: "nowrap",
                        backgroundColor: "transparent",
                        borderBottom: "1px solid rgb(239, 239, 239)",
                        padding: "0.5rem 1rem",
                        fontSize: "15px",
                        textDecoration: "none",
                        color: "inherit",
                        paddingTop: "1rem",
                        paddingBottom: "1rem",
                        paddingRight: "3rem",
                      }}
                    >
                      <span
                        className="text-gray"
                        style={{
                          boxSizing: "border-box",
                          color: "rgb(165, 165, 165)",
                        }}
                      >
                        Hello
                      </span>{" "}
                      <span
                        id="DropAccLogin"
                        style={{ boxSizing: "border-box" }}
                      >
                        {" "}
                        User
                      </span>
                    </a>
                    <a
                      className="dropdown-item"
                      href="//account/dashboard"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        border: "0px",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        color: "rgb(33, 37, 41)",
                        textAlign: "inherit",
                        whiteSpace: "nowrap",
                        backgroundColor: "transparent",
                        borderBottom: "1px solid rgb(239, 239, 239)",
                        padding: "0.5rem 1rem",
                        fontSize: "15px",
                      }}
                    >
                      <small
                        style={{
                          boxSizing: "border-box",
                          fontSize: "80%",
                          fontWeight: 400,
                        }}
                      >
                        <i
                          className="fa fa-circle text-red pr-2"
                          aria-hidden="true"
                          style={{
                            boxSizing: "border-box",
                            fontVariant: "normal",
                            display: "inline-block",
                            fontStyle: "normal",
                            fontWeight: "normal",
                            fontStretch: "normal",
                            lineHeight: 1,
                            fontFamily: "FontAwesome",
                            textRendering: "auto",
                            WebkitFontSmoothing: "antialiased",
                            fontSize: "7px",
                            paddingRight: "0.5rem",
                            color: "rgb(198, 0, 0)",
                          }}
                        />
                      </small>{" "}
                      My Account{" "}
                    </a>
                    <a
                      className="dropdown-item"
                      href="//account/trips"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        border: "0px",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        color: "rgb(33, 37, 41)",
                        textAlign: "inherit",
                        whiteSpace: "nowrap",
                        backgroundColor: "transparent",
                        borderBottom: "1px solid rgb(239, 239, 239)",
                        padding: "0.5rem 1rem",
                        fontSize: "15px",
                      }}
                    >
                      <small
                        style={{
                          boxSizing: "border-box",
                          fontSize: "80%",
                          fontWeight: 400,
                        }}
                      >
                        <i
                          className="fa fa-circle text-red pr-2"
                          aria-hidden="true"
                          style={{
                            boxSizing: "border-box",
                            fontVariant: "normal",
                            display: "inline-block",
                            fontStyle: "normal",
                            fontWeight: "normal",
                            fontStretch: "normal",
                            lineHeight: 1,
                            fontFamily: "FontAwesome",
                            textRendering: "auto",
                            WebkitFontSmoothing: "antialiased",
                            fontSize: "7px",
                            paddingRight: "0.5rem",
                            color: "rgb(198, 0, 0)",
                          }}
                        />
                      </small>{" "}
                      Bookings
                    </a>
                    <a
                      className="dropdown-item"
                      href="//account/abhicash"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        border: "0px",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        color: "rgb(33, 37, 41)",
                        textAlign: "inherit",
                        whiteSpace: "nowrap",
                        backgroundColor: "transparent",
                        borderBottom: "1px solid rgb(239, 239, 239)",
                        padding: "0.5rem 1rem",
                        fontSize: "15px",
                      }}
                    >
                      <small
                        style={{
                          boxSizing: "border-box",
                          fontSize: "80%",
                          fontWeight: 400,
                        }}
                      >
                        <i
                          className="fa fa-circle text-red pr-2"
                          aria-hidden="true"
                          style={{
                            boxSizing: "border-box",
                            fontVariant: "normal",
                            display: "inline-block",
                            fontStyle: "normal",
                            fontWeight: "normal",
                            fontStretch: "normal",
                            lineHeight: 1,
                            fontFamily: "FontAwesome",
                            textRendering: "auto",
                            WebkitFontSmoothing: "antialiased",
                            fontSize: "7px",
                            paddingRight: "0.5rem",
                            color: "rgb(198, 0, 0)",
                          }}
                        />
                      </small>{" "}
                      Abhicash
                    </a>
                    <a
                      className="dropdown-item"
                      href="//account/sign_out"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        border: "0px",
                        display: "block",
                        width: "100%",
                        clear: "both",
                        fontWeight: 400,
                        color: "rgb(33, 37, 41)",
                        textAlign: "inherit",
                        whiteSpace: "nowrap",
                        backgroundColor: "transparent",
                        borderBottom: "1px solid rgb(239, 239, 239)",
                        padding: "0.5rem 1rem",
                        fontSize: "15px",
                      }}
                    >
                      <small
                        style={{
                          boxSizing: "border-box",
                          fontSize: "80%",
                          fontWeight: 400,
                        }}
                      >
                        <i
                          className="fa fa-circle text-red pr-2"
                          aria-hidden="true"
                          style={{
                            boxSizing: "border-box",
                            fontVariant: "normal",
                            display: "inline-block",
                            fontStyle: "normal",
                            fontWeight: "normal",
                            fontStretch: "normal",
                            lineHeight: 1,
                            fontFamily: "FontAwesome",
                            textRendering: "auto",
                            WebkitFontSmoothing: "antialiased",
                            fontSize: "7px",
                            paddingRight: "0.5rem",
                            color: "rgb(198, 0, 0)",
                          }}
                        />
                      </small>{" "}
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div
              className="col-1"
              style={{
                margin: "0px",
                boxSizing: "border-box",
                fontFamily: "Mont-ExtraLightDEMO, sans-serif",
                color: "rgb(62, 58, 69)",
                position: "relative",
                width: "100%",
                paddingRight: "15px",
                paddingLeft: "15px",
                flex: "0 0 8.33333%",
                maxWidth: "8.33333%",
              }}
            />
          </div>
        </div>
        <div
          style={{
            margin: "0px",
            boxSizing: "border-box",
            fontFamily: "Mont-ExtraLightDEMO, sans-serif",
            color: "rgb(62, 58, 69)",
          }}
        />
      </header>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  box-sizing: border-box;
  line-height: 1.15;
  text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
  margin: 0px;
  padding: 0px;
  background: rgb(255, 255, 255);
  height: auto;
  width: 100%;
  font-family: Mont-ExtraLightDEMO, sans-serif;
  color: rgb(62, 58, 69);
}

body {
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  margin: 0px;
  padding: 0px;
  background: rgb(255, 255, 255);
  height: auto;
  width: 100%;
  background-color: rgb(255, 255, 255);
  font-family: Mont-ExtraLightDEMO, sans-serif;
  color: rgb(62, 58, 69);
  overflow: initial;
}
`,
        }}
      />
    </>
  );
};

export default Navbar;
