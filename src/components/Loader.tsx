import React from "react";
import { ColorRing } from "react-loader-spinner";
import { Backdrop } from "@mui/material";

// Define props type for the Loader component
interface LoaderProps {
  showLoader: boolean; // This will control visibility
}

const Loader: React.FC<LoaderProps> = ({ showLoader }) => {
  return (
    <>
      <Backdrop open={showLoader} sx={{ color: "#fff", zIndex: 9999 }}>
        <ColorRing
          visible={showLoader}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          // colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]} // default
          colors={["#1E3A8A", "#2563EB", "#3B82F6", "#60A5FA", "#93C5FD"]} // Blue shades from dark to light
        />
      </Backdrop>
    </>
  );
};

export default Loader;
