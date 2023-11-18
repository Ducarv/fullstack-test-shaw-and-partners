import { useState } from 'react';
import { api } from '../api/axios';
import './FileUpload.css'

interface UploadProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onUploadSuccess: () => Promise<any>;
}

export const FileUpload = ({ 
    onUploadSuccess,
}: UploadProps) => {
  const [file, setFile] = useState();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOnChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
        setFile(e.target.files[0]);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOnSubmit = async (e: any) => {
    e.preventDefault();

    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await api.post('/api/files', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log('File uploaded successfully!', response.data);
        if (onUploadSuccess) {
          onUploadSuccess();
        }
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  return (
    <div className='file-upload-box' style={{ textAlign: 'center' }}>
      <h1>CSV IMPORT</h1>
      <form>
        <input
          type={'file'}
          id={'csvFileInput'}
          accept={'.csv'}
          onChange={handleOnChange}
        />

        <button onClick={handleOnSubmit}>IMPORT CSV</button>
      </form>
    </div>
  );
};
