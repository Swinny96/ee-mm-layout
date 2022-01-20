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
            icon="shopping-cart"
            linkname="Shop"
          />
        }
      />
      <main></main>
      <Footer />
    </>
  );
};

export default IndexPage;
