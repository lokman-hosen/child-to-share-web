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
            { value: 'active', label: 'Active' },
            { value: 'inactive', label: 'Inactive' },
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


