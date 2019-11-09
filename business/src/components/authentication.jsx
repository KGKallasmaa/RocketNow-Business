export const isBusinessUserLoggedIn = () => {
    if (localStorage.getItem("temporary_user_id") || localStorage.getItem("jwtToken")) {
        return false;
    }

    if (!localStorage.getItem("jwtToken_business") ||
        !localStorage.getItem("jwtToken_expires_business") ||
        !localStorage.getItem("businessDisplayName") ||
        !localStorage.getItem("businessLegalName") ||
        !localStorage.getItem("logoURL")
    ) {
        return false;

    }
    return !Number(localStorage.getItem("jwtToken_expires_business") < new Date().getTime());
};