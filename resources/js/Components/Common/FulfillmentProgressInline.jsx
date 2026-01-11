import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHandPaper,
    faCheckCircle,
    faShippingFast,
    faFlagCheckered,
    faTimesCircle
} from "@fortawesome/free-solid-svg-icons";
import {getFulfilmentStatus} from "@/utils.jsx";

const FulfillmentProgressInline = ({ currentStatus }) => {
    // Styles
    const styles = {
        container: {
            marginBottom: '40px',
            padding: '20px',
            backgroundColor: '#f9fafb',
            borderRadius: '12px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '30px'
        },
        title: {
            fontSize: '1.25rem',
            fontWeight: '600',
            color: '#111827'
        },
        statusBadge: {
            padding: '6px 16px',
            borderRadius: '20px',
            fontSize: '0.875rem',
            fontWeight: '600',
            textTransform: 'capitalize'
        },
        progressTracker: {
            position: 'relative',
            width: '100%'
        },
        progressLineBackground: {
            position: 'absolute',
            top: '28px',
            left: '0',
            right: '0',
            height: '3px',
            backgroundColor: '#e5e7eb',
            zIndex: '1',
            borderRadius: '1.5px'
        },
        progressLineFilled: {
            position: 'absolute',
            top: '28px',
            left: '0',
            height: '3px',
            backgroundColor: '#3b82f6',
            zIndex: '2',
            borderRadius: '1.5px',
            transition: 'width 0.5s ease'
        },
        stepsContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            position: 'relative',
            zIndex: '3'
        },
        step: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            flex: '1',
            maxWidth: '20%'
        },
        stepIconContainer: {
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: 'white',
            border: '3px solid #e5e7eb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '10px',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            zIndex: '4'
        },
        stepIcon: {
            fontSize: '1.25rem'
        },
        stepLabel: {
            fontSize: '0.875rem',
            fontWeight: '600',
            textAlign: 'center',
            textTransform: 'capitalize'
        }
    };

    // Fulfillment steps configuration
    const fulfillmentSteps = [
        {
            status: 'requested',
            label: 'Requested',
            icon: faHandPaper,
            color: '#6b7280'
        },
        {
            status: 'accepted_by_wisher' || 'accepted_by_donor',
            label: 'Accepted',
            icon: faCheckCircle,
            color: '#3b82f6'
        },
        {
            status: 'delivered',
            label: 'Delivered',
            icon: faShippingFast,
            color: '#f59e0b'
        },
        {
            status: 'completed',
            label: 'Completed',
            icon: faFlagCheckered,
            color: '#10b981'
        },
        // {
        //     status: 'cancelled',
        //     label: 'Cancelled',
        //     icon: faTimesCircle,
        //     color: '#ef4444'
        // }
    ];

    // Get status badge color
    const getStatusBadgeColor = () => {
        switch(currentStatus) {
            case 'requested': return { bg: '#f3f4f6', text: '#6b7280', border: '#d1d5db' };
            case 'accepted_by_wisher' || 'accepted_by_donor': return { bg: '#dbeafe', text: '#1d4ed8', border: '#93c5fd' };
            case 'delivered': return { bg: '#fef3c7', text: '#d97706', border: '#fcd34d' };
            case 'completed': return { bg: '#d1fae5', text: '#047857', border: '#6ee7b7' };
            case 'cancelled': return { bg: '#fee2e2', text: '#b91c1c', border: '#fca5a5' };
            default: return { bg: '#f3f4f6', text: '#6b7280', border: '#d1d5db' };
        }
    };

    // Calculate progress line width
    const getProgressWidth = () => {
        const currentStepIndex = fulfillmentSteps.findIndex(step => step.status === currentStatus);

        if (currentStatus === 'cancelled') {
            return '0%';
        } else if (currentStatus === 'completed') {
            return '100%';
        } else {
            const progressPercent = currentStepIndex * 25;
            return `${progressPercent}%`;
        }
    };

    // Determine step state
    const getStepState = (stepIndex, stepStatus) => {
        const currentStepIndex = fulfillmentSteps.findIndex(step => step.status === currentStatus);

        if (currentStatus === 'cancelled') {
            if (stepStatus === 'cancelled') {
                return {
                    iconColor: '#ffffff',
                    bgColor: '#ef4444',
                    borderColor: '#ef4444',
                    labelColor: '#ef4444'
                };
            }
            return {
                iconColor: '#9ca3af',
                bgColor: '#ffffff',
                borderColor: '#e5e7eb',
                labelColor: '#6b7280'
            };
        } else {
            if (stepIndex < currentStepIndex) {
                return {
                    iconColor: '#ffffff',
                    bgColor: '#10b981',
                    borderColor: '#10b981',
                    labelColor: '#10b981'
                };
            } else if (stepIndex === currentStepIndex) {
                return {
                    iconColor: '#ffffff',
                    bgColor: '#3b82f6',
                    borderColor: '#3b82f6',
                    labelColor: '#3b82f6'
                };
            }
            return {
                iconColor: '#9ca3af',
                bgColor: '#ffffff',
                borderColor: '#e5e7eb',
                labelColor: '#6b7280'
            };
        }
    };

    const statusColors = getStatusBadgeColor();

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h2 style={styles.title}>Fulfillment Progress</h2>
                <div style={{
                    ...styles.statusBadge,
                    backgroundColor: statusColors.bg,
                    color: statusColors.text,
                    border: `1px solid ${statusColors.border}`
                }}>
                    {getFulfilmentStatus(currentStatus)}
                </div>
            </div>

            <div style={styles.progressTracker}>
                <div style={styles.progressLineBackground}></div>
                <div
                    style={{
                        ...styles.progressLineFilled,
                        width: getProgressWidth()
                    }}
                ></div>

                <div style={styles.stepsContainer}>
                    {fulfillmentSteps.map((step, index) => {
                        const stepState = getStepState(index, step.status);

                        return (
                            <div
                                key={step.status}
                                style={styles.step}
                            >
                                <div
                                    style={{
                                        ...styles.stepIconContainer,
                                        borderColor: stepState.borderColor,
                                        backgroundColor: stepState.bgColor,
                                        transform: step.status === currentStatus ? 'scale(1.1)' : 'scale(1)'
                                    }}
                                >
                                    <FontAwesomeIcon
                                        icon={step.icon}
                                        style={{
                                            ...styles.stepIcon,
                                            color: stepState.iconColor
                                        }}
                                    />
                                </div>
                                <div
                                    style={{
                                        ...styles.stepLabel,
                                        color: stepState.labelColor,
                                        fontWeight: step.status === currentStatus ? '700' : '600'
                                    }}
                                >
                                    {step.label}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default FulfillmentProgressInline;
