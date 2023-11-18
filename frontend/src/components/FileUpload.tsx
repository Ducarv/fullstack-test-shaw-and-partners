import { useState } from 'react';
import { api } from '../api/axios';

export const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; 
    setSelectedFile(file || null);
  };

  const onClickHandler = async () => {
    if (!selectedFile) {
      console.error('No file selected.');
      return;
    }

    const data = new FormData();
    data.append('file', selectedFile);

    try {
      const response = await api.post('/api/files', data);
      console.log('File uploaded successfully!', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={onChangeHandler} />
      <button onClick={onClickHandler}>Upload</button>
    </div>
  );
};
