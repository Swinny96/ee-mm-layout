import * as React from "react";
import "./index.css";
import "./icon.css";
import "./font.css";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Link from "../components/link";
import Footer from "../components/footer";

// markup
const IndexPage = () => {
  return (
    <>
      <Header siteTitle="Mobile Manager" />
      <Sidebar
        link1={
          <Link
            state="active"
            linkstate="active-link"
            icon="key"
            linkname="Log In"
            link="/"
          />
        }
        link2={
          <Link state="" linkstate="" icon="user" linkname="Activate Account" link="404" />
        }
      />
      <main></main>
      <Footer />
    </>
  );
};

export default IndexPage;
