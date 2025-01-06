import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // 간단한 유효성 검사
    if (!email || !password) {
      setError("모든 필드를 입력해주세요.");
      return;
    }

    // 백엔드로 요청 전송 (예: API 호출)
    console.log("로그인 요청 전송: ", { email, password });

    // 예시: 로그인 성공/실패 처리
    // 성공 시: 토큰 저장 후 리다이렉트
    // 실패 시: 오류 메시지 표시
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h1 className="text-3xl  text-center mb-4 text-gray-600">로그인</h1>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-700">
            모두를 위한 마니또 게임 모니또에 오신걸 환영합니다.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              이메일
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일을 입력하세요"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력하세요"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            로그인
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">OR</p>
          <div id="google-login-button" className="mt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
