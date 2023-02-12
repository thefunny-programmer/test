import React,{ useCallback } from "react";
// import SupportMain from "./Practice/PracticeMain";
import TodoMain from "./TodoList/TodoMain";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFFile from "./PdfDownload/PDFFile";


const Main = () => {

  // we use useCallback when we expect a response from child components 
  // and use it in this parent component
  // const getCount = useCallback((nums)=>{
  //   console.log(nums)
  // },[])


  return (
    <div className="m-5">
      <h4>Main page</h4>
      <hr />

      {/* <MainPage /> */}
      {/* <SupportMain getCount={getCount} /> */}
      <TodoMain />

      <PDFDownloadLink document={<PDFFile />} filename="FORM">
      {({loading}) => (loading ? <button>Loading Document...</button> : <button>Download</button> )}
      </PDFDownloadLink>
      
    </div>
  );
};

export default Main;
