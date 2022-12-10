import React from 'react'

const Header = () =>(
    <>
    <div
      className="container p-0"
      style={{
        boxSizing: "border-box",
        width: "100%",
        marginRight: "auto",
        marginLeft: "auto",
        maxWidth: "1250px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "nowrap",
        padding: "0px",
        paddingRight: "0px",
        paddingLeft: "0px",
        color: "rgb(68, 68, 68)",
        fontSize: "15px",
        font: '300 15px / 22.5px "Open Sans", sans-serif',
        lineHeight: "22.5px",
      }}
    >
      <div
        className="navbar-brand p-0"
        style={{
          boxSizing: "border-box",
          display: "inline-block",
          marginRight: "1rem",
          lineHeight: "inherit",
          whiteSpace: "nowrap",
          color: "rgba(0, 0, 0, 0.9)",
          fontWeight: 500,
          fontSize: "0.8125rem",
          padding: "0px",
          paddingTop: "0px",
          paddingBottom: "0px",
        }}
      >
        <a
          href="https://www.abhibus.com/?gclid=CjwKCAiA-dCcBhBQEiwAeWidtZ8vM5vwgz1uYfsErYZEGEF3ec0w5JzVKmnaRpxXzmbxKFVPxlbFURoCcwMQAvD_BwE"
          style={{
            boxSizing: "border-box",
            backgroundColor: "transparent",
            padding: "5px",
            textDecoration: "none",
            color: "rgb(68, 68, 68)",
          }}
        >
          {/* <img
            height={55}
            alt="abhibus.com"
            src="https://static.abhibus.com/img/abhilogos/logo1.png"
            style={{
              boxSizing: "border-box",
              borderStyle: "none",
              verticalAlign: "middle",
            }}
          /> */}
        </a>
      </div>
      <button
        className="navbar-toggler navbar-toggler-right border-0"
        type="button"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{
          boxSizing: "border-box",
          margin: "0px",
          fontFamily: "inherit",
          overflow: "visible",
          textTransform: "none",
          appearance: "button",
          padding: "0.25rem 0.75rem",
          borderRadius: "0.25rem",
          fontSize: "1.25rem",
          lineHeight: 1,
          backgroundColor: "transparent",
          cursor: "pointer",
          display: "none",
          borderColor: "rgba(0, 0, 0, 0.1)",
          color: "rgba(0, 0, 0, 0.5)",
          border: "0px",
        }}
      >
        {" "}
        <span
          className="navbar-toggler-icon"
          style={{
            boxSizing: "border-box",
            background: "center center / 100% 100% no-repeat",
            display: "inline-block",
            width: "1.5em",
            height: "1.5em",
            verticalAlign: "middle",
            content: '""',
            backgroundImage:
              "url(\"data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")",
          }}
        />{" "}
      </button>
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
              href="https://www.abhibus.com/"
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
              href="https://www.abhibus.com/redirect_booking/trainsbooking"
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
              href="https://www.abhibus.com/redirect_booking/hotels"
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
              href="https://www.abhibus.com/rentals"
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
              href="https://www.abhibus.com/bus-ticket-offers"
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
              href="https://www.abhibus.com/refer-a-friend"
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
              href="https://www.abhibus.com/?gclid=CjwKCAiA-dCcBhBQEiwAeWidtZ8vM5vwgz1uYfsErYZEGEF3ec0w5JzVKmnaRpxXzmbxKFVPxlbFURoCcwMQAvD_BwE#"
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
                href="https://www.abhibus.com/myticket"
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
                href="https://www.abhibus.com/cancellation"
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
                <span id="DropAccLogin" style={{ boxSizing: "border-box" }}>
                  {" "}
                  User
                </span>
              </a>
              <a
                className="dropdown-item"
                href="https://www.abhibus.com/account/dashboard"
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
                href="https://www.abhibus.com/account/trips"
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
                href="https://www.abhibus.com/account/abhicash"
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
                href="https://www.abhibus.com/account/sign_out"
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
    </div>
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
export default Header
