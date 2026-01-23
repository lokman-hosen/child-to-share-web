import React from "react";

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
    return (role === 'super-admin' || role === 'admin');
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
        return 'Fulfil Request Sent by Donor';
    }else if(status === 'accepted_by_wisher'){
        return 'Request Accepted By Wisher';
    }else if(status === 'accepted_by_donor'){
        return 'Request Accepted By Donor';
    }else if(status === 'scheduled' || status === 'in_progress'){
        return 'In Progress';
    }else if(status === 'completed'){
        return 'Fulfilled';
    }else if (status === 'cancelled') {
        return 'Cancelled';
    }else{
        return searchReplace(status, '_', ' ')
    }
};

export const getStatus = (status) => {
    if (status == 1) {
        return <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-blue-600 text-white text-sm font-medium border">Active</span>

    }else if(status == 0){
        return <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-orange-600 text-white text-sm font-medium border">Inactive</span>
    }else{
        return 'n/a'
    }
};

export const searchReplace = (text, searchChars = '_', replaceWith = ' ') => {
    if (typeof text !== 'string') return text;

    // Escape special regex characters
    const escapedChars = searchChars.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // Create regex pattern to match any of the search characters
    const regex = new RegExp(`[${escapedChars}]`, 'g');

    return text.replace(regex, replaceWith);
};





