import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
  auth: {
    clientId: "e1bcc0a4-49f0-426d-9ea6-409fd00bcacc", //Azure AD application client ID
    authority:
      "https://login.microsoftonline.com/6a0f581d-7272-4bfc-8fd0-9e92722180e8", // Azure AD tenant ID
    redirectUri: import.meta.env.VITE_REDIRECT_URI || "http://localhost:5173",
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
};

export const msalInstance = new PublicClientApplication(msalConfig);
