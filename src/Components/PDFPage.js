import React from "react";

const PDFPage = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <embed
        src="/resume/Manikumarreddy.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default PDFPage;
