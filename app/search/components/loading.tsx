"use client";

import { CircleLoader } from "react-spinners";

import Box from "@/components/Box";

const Loading = () => {
    return (
        <Box className="h-full flex items-center justify-center">
            <CircleLoader color="#fb7185" size={40}/>
        </Box>
    )
};

export default Loading;