// import AppProvider from "@/mySearchContext/SearchContext";
// import { AppContext } from "next/app";

export const metadata = {
  title: "SubHead2666666666666666",
  description: "SubHead299999999999999",
};

const SubFormLayout = ({ children }) => {
  return (
    <div>
      {/* <AppContext.Provider> */}
      <section>{children}</section>
      {/* </AppContext.Provider> */}
    </div>
  );
};

export default SubFormLayout;
