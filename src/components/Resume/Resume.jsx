import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
//import UnderConstruction from "react-under-construction";
import NavBar from "../NavBar/NavBar";
import StyledResume from "./styled";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import cv from "./cv.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  const styles = StyleSheet.create({
    section: {
      width: 200,
      "@media max-width: 400": {
        width: 300,
      },
      "@media orientation: landscape": {
        width: 400,
      },
    },
  });
  return (
    <StyledResume>
      <NavBar />
      <div className="btn-container">
        <a
          className="btn"
          href="https://drive.google.com/file/d/1-P1RfOJii8IiqnvqN7-o9dhXeotV1Bml/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          DOWNLOAD
        </a>
      </div>
      <Document file={cv}>
        <Page pageNumber={1}></Page>
      </Document>
    </StyledResume>
  );
};

export default Resume;
