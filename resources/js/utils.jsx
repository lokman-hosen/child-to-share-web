export const getDropdownOptions = (data, valueKey, labelKey) => {
    if (!data) {
        return [];
    }
    return data.map(item => ({
        value: item[valueKey],
        label: item[labelKey],
    }));
};

export const getStatusOptions = (statusObject) => {
    if (!statusObject) {
        return [
            { value: '1', label: 'Active' },
            { value: '0', label: 'Inactive' },
        ]
    }
    return Object.entries(statusObject).map(([value, label]) => ({
        value,
        label,
    }));
};
export const getCommonOptions = (dropdownObject) => {
    return Object.entries(dropdownObject).map(([value, label]) => ({
        value,
        label,
    }));
};

export const checkAdmin = (role) =>{
    return (role === 'super_admin' || role === 'admin');
}
export const checkDonor = (role) =>{
    return role === 'donor';
}
export const checkWisher = (role) =>{
    return role === 'wisher';
}
export const checkDonorWisher = (role) =>{
    return role === 'donor-wisher';
}
export const textLimit = ($text, $wordLimit) =>{
    return $text.split(" ").slice(0, $wordLimit).join(" ") +
        ($text.split(" ").length > $wordLimit ? "..." : "")
}




