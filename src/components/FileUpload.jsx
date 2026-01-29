// src/components/FileUpload.jsx
import React, { useState, useRef } from 'react';
import { FaUpload, FaTimes, FaCheck, FaFilePdf, FaFileWord, FaFileExcel } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FileUpload = ({ onUpload, acceptedTypes = ['.pdf', '.doc', '.docx', '.xlsx'], maxSize = 10 }) => {
  const [files, setFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef();

  const handleFileSelect = (selectedFiles) => {
    const newFiles = Array.from(selectedFiles).filter(file => {
      const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
      const isValidType = acceptedTypes.includes(fileExtension);
      const isValidSize = file.size <= maxSize * 1024 * 1024;

      if (!isValidType) {
        alert(`Invalid file type: ${fileExtension}. Accepted: ${acceptedTypes.join(', ')}`);
        return false;
      }
      if (!isValidSize) {
        alert(`File too large: ${file.name}. Max size: ${maxSize}MB`);
        return false;
      }
      return true;
    });

    setFiles(prev => [...prev, ...newFiles]);
  };

  const handleUpload = async () => {
    for (const file of files) {
      const formData = new FormData();
      formData.append('file', file);

      // Simulate upload with progress
      const xhr = new XMLHttpRequest();
      
      xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable) {
          const percentComplete = Math.round((e.loaded * 100) / e.total);
          setUploadProgress(prev => ({
            ...prev,
            [file.name]: percentComplete
          }));
        }
      });

      xhr.onload = () => {
        if (xhr.status === 200) {
          onUpload?.(file, xhr.response);
        }
      };

      // In real app, replace with your API endpoint
      xhr.open('POST', '/api/upload');
      xhr.send(formData);
    }
  };

  const removeFile = (fileName) => {
    setFiles(prev => prev.filter(f => f.name !== fileName));
    setUploadProgress(prev => {
      const newProgress = { ...prev };
      delete newProgress[fileName];
      return newProgress;
    });
  };

  const getFileIcon = (fileName) => {
    const ext = fileName.split('.').pop().toLowerCase();
    if (ext === 'pdf') return <FaFilePdf className="text-red-500" />;
    if (['doc', 'docx'].includes(ext)) return <FaFileWord className="text-blue-500" />;
    if (['xlsx', 'xls'].includes(ext)) return <FaFileExcel className="text-green-500" />;
    return <FaFilePdf />;
  };

  return (
    <div className="w-full">
      {/* Drop Zone */}
      <div
        className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all ${
          dragActive 
            ? 'border-blue-500 bg-blue-50' 
            : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
        }`}
        onDragEnter={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          setDragActive(false);
        }}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          setDragActive(false);
          handleFileSelect(e.dataTransfer.files);
        }}
        onClick={() => fileInputRef.current?.click()}
      >
        <FaUpload className="text-4xl text-gray-400 mx-auto mb-4" />
        <p className="text-lg font-semibold mb-2">Drag & drop files here</p>
        <p className="text-gray-600 mb-4">or click to browse</p>
        <p className="text-sm text-gray-500">
          Supported: {acceptedTypes.join(', ')} (Max: {maxSize}MB)
        </p>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          className="hidden"
          onChange={(e) => handleFileSelect(e.target.files)}
          accept={acceptedTypes.join(',')}
        />
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="mt-6 space-y-3">
          <h3 className="font-semibold mb-2">Selected Files ({files.length})</h3>
          {files.map((file, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center justify-between bg-white p-4 rounded-lg border"
            >
              <div className="flex items-center space-x-3">
                {getFileIcon(file.name)}
                <div>
                  <p className="font-medium">{file.name}</p>
                  <p className="text-sm text-gray-500">
                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                {/* Progress Bar */}
                {uploadProgress[file.name] !== undefined && (
                  <div className="w-32">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-green-500 transition-all"
                        style={{ width: `${uploadProgress[file.name]}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-600">
                      {uploadProgress[file.name]}%
                    </span>
                  </div>
                )}

                {/* Status Icon */}
                {uploadProgress[file.name] === 100 ? (
                  <FaCheck className="text-green-500" />
                ) : (
                  <button
                    onClick={() => removeFile(file.name)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTimes />
                  </button>
                )}
              </div>
            </motion.div>
          ))}

          {/* Upload Button */}
          <div className="pt-4">
            <button
              onClick={handleUpload}
              disabled={Object.values(uploadProgress).some(p => p > 0 && p < 100)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Upload Files
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;