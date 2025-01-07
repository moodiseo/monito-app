import { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const CLIENT_ID =
  "713134750794-r2bmisdpnmtd89ccuheg41v8d67hsi07.apps.googleusercontent.com"; // Google Cloud에서 받은 클라이언트 ID

const GoogleLoginForm = () => {
  const [user, setUser] = useState(null);

  const handleSuccess = (response) => {
    const { credential } = response;
    // 여기서 Google의 credential을 활용하여 사용자 정보를 가져올 수 있음
    console.log("Google Credential:", credential);
    setUser({
      name: "Logged-in User",
      email: "user@example.com", // 사용자 정보를 Google API를 통해 가져올 수 있음
    });
  };

  const handleError = () => {
    console.error("Login failed");
  };

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        {!user ? (
          <>
            <h1 className="text-3xl text-gray-600 font-medium	mb-6">MONITO</h1>
            <p className="text-sm text-gray-600 ">
              모두를 위한 마니또 MONITO에 오신 것을
            </p>
            <p className="text-sm text-gray-600 text-center mb-6">
              환영합니다.
            </p>
            <GoogleLogin
              onSuccess={handleSuccess}
              onError={handleError}
              text="signin_with"
              width="300px"
            />
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Welcome, {user.name}!</h2>
            <p className="text-lg">Email: {user.email}</p>
          </div>
        )}
      </div>
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginForm;
