import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styled from 'styled-components';

const Share = ({ currentUrl }) => {
  return (
    <CopyToClipboard text={currentUrl}>
      <ShareImage
        className="share"
        src="https://static.balaan.co.kr/mobile/img/view/share.png?v=2"
        alt="share"
        onClick={() => alert('클립보드를 복사했습니다')}
      />
    </CopyToClipboard>
  );
};

export default Share;

const ShareImage = styled.img`
  cursor: pointer;
`;
