import * as React from "react";
import "./index.css";
import "./icon.css";
import "./font.css";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Link from "../components/link";
import Footer from "../components/footer";

// styles
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 28,
};

// markup
const NotFoundPage = () => {
  return (
    <>
      <Header siteTitle="Mobile Manager" />
      <Sidebar
        link1={
          <Link
            state=""
            linkstate=""
            icon="key"
            linkname="Log In"
            link="/"
          />
        }
        link2={
          <Link
            state="active"
            linkstate="active-link"
            icon="user"
            linkname="Activate Account"
            link="404"
          />
        }
      />
      <main>
        {" "}
        <title>Not found</title> <h1 style={headingStyles}>Page not found</h1>
        <p style={paragraphStyles}>
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          we couldn’t find what you were looking for.
          <br />
          <br />
          <a href="/">Go home</a>.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default NotFoundPage;
