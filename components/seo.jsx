"use client";
import { useEffect } from "react";

const SEO = ({ pageTitle }) => {
    useEffect(() => {
        document.title = pageTitle + 'mr.laundry website';
    }, []);
};

export default SEO;
