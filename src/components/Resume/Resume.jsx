import React from "react";
//import { Document, Page, pdfjs } from "react-pdf";
//import UnderConstruction from "react-under-construction";
import NavBar from "../NavBar/NavBar";
import StyledResume from "./styled";
/* import { useMediaQuery } from "react-responsive";
import "react-pdf/dist/esm/Page/AnnotationLayer.css"; */

import cv from "./cv.jpg";

//pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  /* const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  }); */
  /*   const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
   */
  return (
    <StyledResume>
      <NavBar />
      <div className="btn-container">
        <a
          className="btn"
          href="https://drive.google.com/file/d/16s97FiuckvyyQ1sEZsNbgTCXrTisqXvT/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          DOWNLOAD
        </a>
      </div>
      <img src={cv} alt="couldn't load" />
      {/* 
      width={700}
      {isDesktopOrLaptop && (
        <Document file={cv}>
          <Page width={700} pageNumber={1}></Page>
        </Document>
      )}
      {isTabletOrMobile && (
        <Document file={cv}>
          <Page width={320} pageNumber={1}></Page>
        </Document>
      )} */}
    </StyledResume>
  );
};

export default Resume;
