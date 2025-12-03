import CryptoJS from "crypto-js";

export const Per_Page_Dropdown = async (data) => {
    const a = [];
    for (let i = 5; i <= data; i *= 2) {
        a.push(i);
    }
    a.push(data);

    return a;
};

export const RequiredIs = {
    roles: [1, 2, 3, 4, 5, 6, 7],
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

export const getDimension = async (file) => {
    let reader = new FileReader();
    return new Promise((resolve, reject) => {
        reader.onerror = () => {
            reader.abort();
            reject(new DOMException("Problem parsing input file."));
        };

        reader.onload = () => {
            var image = new Image();
            image.src = reader.result;
            image.onload = function () {
                resolve({ width: this.width, height: this.height });
            };
        };
        reader.readAsDataURL(file);
    });
};

export const RegxExpression = {
    name: /[A-Z-a-z ]/,
    email:
        /^([A-Za-z0-9_\-\.])+\@(?!(?:[A-Za-z0-9_\-\.]+\.)?([A-Za-z0-9_\-\.]+)\.\2)([A-Za-z0-9_\-\.]+\.)+([A-Za-z]{2,4})$/,
    phone: /[0-9]/,

    ifsc: "^[A-Z]{4}[0][dA-Z]{6}$",
    ifsc_code: /^[A-Z0-9]$/,
    micr: /^[0-9]{9}$/,
    bank_number: /^\d{0,14}$/,
    gst: /^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[1-9A-Z]{1}$/,
};



const SECRET_KEY = "print-out-media-djfhgdkjfghdjkflghdjklf";
export const encodeId = (id) => {
    if (!id) return "";
    const ciphertext = CryptoJS.AES.encrypt(id.toString(), SECRET_KEY).toString();
    return encodeURIComponent(ciphertext); // Make URL-safe
};

export const decodeId = (encodedId) => {
    if (!encodedId) return "";
    try {
        const decoded = decodeURIComponent(encodedId);
        const bytes = CryptoJS.AES.decrypt(decoded, SECRET_KEY);
        return bytes.toString(CryptoJS.enc.Utf8);
    } catch (error) {
        console.error("Invalid ID decryption:", error);
        return "";
    }
};

export function formatDate(dateString) {
    if (!dateString) return ""; // or return a default like "Invalid Date"

    const date = new Date(dateString);
    if (isNaN(date.getTime())) return ""; // invalid date

    return date.toISOString().split("T")[0]; // yyyy-mm-dd
}


export const OrderStatusIds = {
    Pending: 1,
    Processing: 2,
    Preparing: 3,
    OrderUnderQualityCheck: 4,
    Pickup: 5,
    Delivered: 6,
    Cancelled: 7,
    Returned: 8,
    Refunded: 9,
    Replaced: 10,
    Rejected: 11,
    Packing: 12,
};

export function formatDateTime(dateStr) {
    const date = new Date(dateStr);

    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" }); // Jan, Feb, etc.
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // Add ordinal suffix to day
    const getOrdinal = (n) => {
        const s = ["th", "st", "nd", "rd"],
            v = n % 100;
        return n + (s[(v - 20) % 10] || s[v] || s[0]);
    };

    // Format time as hh:mm am/pm with leading zeros
    const formatTime = (h, m) => {
        const period = h >= 12 ? "pm" : "am";
        const hour12 = h % 12 || 12;
        const hourStr = hour12 < 10 ? `0${hour12}` : hour12;
        const min = m < 10 ? `0${m}` : m;
        return `${hourStr}:${min} ${period}`;
    };

    return `${getOrdinal(day)} ${month} ${year} | ${formatTime(hours, minutes)}`;
}



// export const IMG_URL = "http://localhost:8787";
// // export const IMG_URL = "http://192.168.16.40:3786";
// export const IMG_URL = "http://192.168.16.38:4325"
export const IMG_URL = "https://driwenode.profcyma.org:4325"

// export const IMG_URL = "https://themoon-newnode.profcymabackend.com:3786";