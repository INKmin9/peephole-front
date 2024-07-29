import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SignupToLogin() {
  const navigate = useNavigate();
  return (
    <SignupCheck>
      이미 계정이 있으신가요? &nbsp;
      <SignUpButton
        onClick={() => {
          navigate("/login");
        }}
      >
        로그인하러 가기
      </SignUpButton>
    </SignupCheck>
  );
}

const SignupCheck = styled.div`
  display: flex;
  justify-content: center;
  font-size: 14px;
  color: #fff;
`;

const SignUpButton = styled.div`
  color: #2e8daf;
`;