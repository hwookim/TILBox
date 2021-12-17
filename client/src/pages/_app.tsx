import React, { useState } from 'react';
import '@/styles/global.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Header from '@/components/common/Header';
import LoginModal from '@/components/common/LoginModal';

function TILApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();
  const [loginModal, setLoginModal] = useState<boolean>(false);

  const handleSignUp = () => {
    // TODO: 회원가입 버튼 클릭 시 로직
  };

  const handleOpenLoginModal = () => {
    setLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setLoginModal(false);
  };

  const handleLogin = () => {
    // TODO: 로그인 시 로직
  };

  const handleSearch = () => {
    // TODO: 검색 시 로직
  };

  return (
    <>
      <Header
        active={router.pathname}
        onSignUp={handleSignUp}
        onLogin={handleOpenLoginModal}
        onSearch={handleSearch}
      />
      <Component {...pageProps} />
      {loginModal && (
        <LoginModal onClose={handleCloseLoginModal} onSubmit={handleLogin} />
      )}
    </>
  );
}
export default TILApp;
