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
export const wordLimit = ($text, $wordLimit) =>{
    return $text.split(" ").slice(0, $wordLimit).join(" ") +
        ($text.split(" ").length > $wordLimit ? ".." : "")
}

export const textLimit = ($text, $charLimit) => {
    return $text.slice(0, $charLimit) +
        ($text.length > $charLimit ? ".." : "")
}

export const getFulfilmentStatus = (status) => {
    if (status === 'requested') {
        return 'Fulfil Request Sent';
    }else if(status === 'accepted_by_wisher' || status === 'accepted_by_donor'){
        return 'Requestion Accepted';
    }else if(status === 'scheduled' || status === 'in_progress'){
        return 'In Progress';
    }else if(status === 'completed'){
        return 'Fulfilled';
    }else if (status === 'cancelled') {
        return 'Cancelled';
    }else{
        return status
    }
};




