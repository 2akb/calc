// "use client"

// import { useRouter } from "next/navigation";
export const metadata = {
  title: "Uniform acceleration distance",
  description: "Uniform acceleration distance",
};

const UniformAccelerationDistLayout = ({ children }) => {
  // const router=  useRouter();
  return (
    <div>
      <section>{children}</section>
      {/* <h1>{router.query.title}</h1> */}
    </div>
  );
};

export default UniformAccelerationDistLayout;
