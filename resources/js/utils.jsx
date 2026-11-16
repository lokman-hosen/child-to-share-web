import React from "react";
import {usePage} from "@inertiajs/react";
import Badge from "@/Components/UI/Badge";

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
        return 'Fulfil Request Sent by Contributor';
    }else if(status === 'accepted_by_wisher'){
        return 'Request Accepted By Wisher';
    }else if(status === 'accepted_by_donor'){
        return 'Request Accepted By Contributor';
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
    if (status == 1) return <Badge tone="success" dot>Active</Badge>;
    if (status == 0 && status !== null && status !== '') return <Badge tone="neutral" dot>Inactive</Badge>;
    return <span className="text-slate-400">n/a</span>;
};

export const searchReplace = (text, searchChars = '_', replaceWith = ' ') => {
    if (typeof text !== 'string') return text;

    // Escape special regex characters
    const escapedChars = searchChars.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // Create regex pattern to match any of the search characters
    const regex = new RegExp(`[${escapedChars}]`, 'g');

    return text.replace(regex, replaceWith);
};

export const getLoginUser = () =>{
    return usePage().props.auth.user;
}

export const wishAndDonationType = () => {
    return [
        { value: 'single', label: 'Individual (no organization)' },
        { value: 'organization', label: 'Belongs to an organization' },
    ]
}





