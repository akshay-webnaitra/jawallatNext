import { createContext, useState } from "react";

export const LinkContext = createContext(null);

function Context({ children }) {
  const [freshLink, setFreshLink] = useState(false);

  return (
    <LinkContext.Provider value={{ freshLink, setFreshLink }}>
      {children}
    </LinkContext.Provider>
  );
}

export default Context;
