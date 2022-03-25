import React, { useState } from 'react';
import styled from 'styled-components';

const UploadImage = ({ uploadImage }) => {
  const [previewImage, setPreviewImage] = useState('');
  const reader = new FileReader();
  const saveImage = (e) => {
    reader.readAsDataURL(e.target.file[0]);
    reader.onLoad = () => {
      setPreviewImage(reader.result);
      uploadImage = reader.result;
    };
    console.log(reader.result);

    // setImageUrl(URL.createObjectURL(e.target.files[0]));
  };
  const deleteImage = () => {
    // URL.revokeObjectURL(imageUrl);
    setPreviewImage('');
  };
  return (
    <Flex>
      {previewImage && <Preview src={previewImage} alt="미리보기이미지" />}
      <input type="file" accept="image/*" onChange={saveImage} />
      <button onClick={() => deleteImage()}>삭제</button>
    </Flex>
  );
};

export default UploadImage;
const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

const Preview = styled.img`
  width: 100%;
  height: 300px;
  background: pink;
`;
