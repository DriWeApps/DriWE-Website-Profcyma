import axiosClient from "./ApiInstance";
import Cookies from "js-cookie";
import axios from "axios";
export const GET = async (url, data) => {
    try {
        const response = await axiosClient.get(
            process.env.REACT_APP_BASE_URL + url,
            data
        );
        return response.data;
    } catch (error) {
        // Cookies.remove("net_purti_security", { path: "/" });
        // window.location.href = "/";
        console.log(error);
        return error;
    }
};

export const POST = async (url, data) => {
    try {
        const response = await axiosClient.post(
            process.env.REACT_APP_BASE_URL + url,
            data
        );

        return response.data;
    } catch (error) {
        // Cookies.remove("net_purti_security", { path: "/" });
        // window.location.href = "/";
        console.log(error);
        return error;
    }
};

export const PUT = async (url, data) => {
    try {
        const response = await axiosClient.put(
            process.env.REACT_APP_BASE_URL + url,
            data
        );

        return response;
    } catch (error) {
        // Cookies.remove("net_purti_security", { path: "/" });
        // window.location.href = "/";
        console.log(error);
    }
};

export const DELETE = async (url) => {
    try {
        const response = await axiosClient.delete(
            process.env.REACT_APP_BASE_URL + url
        );

        return response.data;
    } catch (error) {
        // Cookies.remove("net_purti_security", { path: "/" });
        // window.location.href = "/";
        console.log(error);
    }
};

// Download Apis
export const DOWNLOAD_EXCEL = async (aurl, data, name) => {
    try {
        const response = await axiosClient.post(
            process.env.REACT_APP_BASE_URL + aurl,
            data,
            {
                responseType: "blob", // Set responseType to "blob"
            }
        );

        const url = window.URL.createObjectURL(new Blob([response.data]));
        // Create a temporary anchor element to trigger the download
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute(
            "download",
            `${name + " " + new Date().toLocaleDateString()}.xlsx`
        );
        document.body.appendChild(link);
        link.click();

        // Clean up after the download
        window.URL.revokeObjectURL(url);
    } catch (error) {
        // Cookies.remove("net_purti_security", { path: "/" });
        // window.location.href = "/";
        console.log(error);
    }
};

export const Select2Data = async (data, name, other = false) => {
    const result = data.map((data) => ({
        value: data?.id,
        label: data?.name,
        name: name,
    }));

    if (other) {
        result.push({ value: "0", label: "Other", name: name });
    }
    return result;
};



export const DOWNLOAD_PDF = async (aurl, name) => {
    try {
        const token = Cookies.get("cmj_security");
        // Make a request to download the PDF with the headers
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const downloadUrl = `${process.env.REACT_APP_BASE_URL}${aurl}`;

        // console.log(downloadUrl);

        const response = await axios.get(downloadUrl, {
            responseType: "arraybuffer",
            headers,
        });

        // Convert the response data to a Blob
        const blob = new Blob([response.data], { type: "application/pdf" });

        // Create a download link
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = name; // Set the download file name
        document.body.appendChild(a);

        a.click();

        // Clean up
        document.body.removeChild(a); // Remove the element after download
        window.URL.revokeObjectURL(url);
    } catch (error) {
        // Handle errors here
        console.error("Failed to download PDF. Error: ", error);
    }
};
