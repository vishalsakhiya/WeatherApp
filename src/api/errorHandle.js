export const apiErrorHandler = (error) => {
    return (dispatch, getState) => {
        if (error && typeof error === 'object' && error.response) {
            if (error.response && error.response.status) {
                let errorCode = error.response.status;
                switch (errorCode) {
                    case 401:
                        return;
                    case 403:
                        break;
                    case 500:
                    case 501:
                    case 502:
                    case 503:
                    case 504:
                    case 505:
                    case 506:
                    case 507:
                    case 508:
                    case 509:
                    case 510:
                    case 520:
                    case 521:
                    case 522:
                    case 523:
                    case 524:
                    case 525:
                    case 526:
                    case 527:
                    case 530:
                        break;
                    default:
                        break;
                }
            }
        }
        return Promise.reject(error);
    };
};