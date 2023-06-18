import React from "react";

const Footer = () => {
  const today = new Date();
  const month = today.toLocaleString("en-US", { month: "long" });
  const year = today.toLocaleString("en-US", { year: "numeric" });
  return (
    <p className="text-sm py-2 flex items-center gap-6 justify-center">
      &copy; {month} {year} - Christian Awelakoue &reg;
    </p>
  );
};

export default Footer;
