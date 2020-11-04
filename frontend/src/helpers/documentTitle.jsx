import React, { useMemo, useState } from "react";

function DocumentTitle({ children, title }) {
  const [, setDocumentTitle] = useState(false);

  useMemo(() => {
    if (title) {
      document.title = title;
      setDocumentTitle(title);
    }
    return () => {
      setDocumentTitle(false);
    };
  }, [title]);
  return (
    <>
      {children}
    </>
  );
}

export default DocumentTitle;
