import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  background-color: #ffebee;
  border: 2px solid #f44336;
  border-radius: 4px;
  padding: 20px;
  margin: 50px auto;
  max-width: 600px;
  font-family: monospace;
`;

const ErrorTitle = styled.h1`
  color: #d32f2f;
  font-size: 24px;
  margin-bottom: 20px;
`;

const ErrorMessage = styled.pre`
  background-color: #fff;
  padding: 15px;
  border-radius: 4px;
  overflow-x: auto;
  white-space: pre-wrap;
`;

function ConfigError({ message }) {
  return (
    <ErrorContainer>
      <ErrorTitle>Configuration Error</ErrorTitle>
      <ErrorMessage>{message}</ErrorMessage>
      <p>Please check your environment variables and configuration files.</p>
    </ErrorContainer>
  );
}

export default ConfigError; 