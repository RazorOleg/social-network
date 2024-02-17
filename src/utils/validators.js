
export const validateField = (maxLength) => (value) => {
    if (!value) return "Required";
    else  if (value.length > maxLength) return `Max length is ${maxLength} symbols`; 
    return undefined;
};

