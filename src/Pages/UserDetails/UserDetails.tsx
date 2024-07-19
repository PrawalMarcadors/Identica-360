import React, { useState } from "react";
import { Input, Button, Upload, Modal } from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
// import { useParams } from "react-router-dom";
import "./UserDetails.css";
import { RiDeleteBin5Fill } from "react-icons/ri";

interface UserDetailsProps {
  companyData: any;
}

interface UserDataType {
  employeeName: string;
  empId: string;
  designation: string;
  aboutMe: string;
  experience: string[];
  email: string;
  contactNo: string;
  linkedInUrl: string;
  twitterUrl: string;
  empBgPic: File | null;
  empProfilePic: File | null;
}

export const UserDetails: React.FC<UserDetailsProps> = ({ companyData }) => {
  const [userData, setUserData] = useState<UserDataType>({
    employeeName: "",
    empId: "",
    designation: "",
    aboutMe: "",
    experience: [],
    email: "",
    contactNo: "",
    linkedInUrl: "",
    twitterUrl: "",
    empBgPic: null,
    empProfilePic: null,
  });

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [newExperience, setNewExperience] = useState<string>("");
  const [virtualId, setVirtualId] = useState<string>("");
  // const { userId } = useParams<{ userId: string }>();
  // const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async () => {
    console.log("Form values:", userData);
    // Generate a virtual ID (this is a simple example, replace with your logic)
    const generatedId = `V-${Math.floor(Math.random() * 10000)}`;
    setVirtualId(generatedId);
    setIsModalVisible(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleExperienceAdd = () => {
    const trimmedExp = newExperience.trim();
    if (trimmedExp) {
      setUserData({
        ...userData,
        experience: [...userData.experience, trimmedExp],
      });
      setNewExperience("");
    }
  };

  const handleExperienceDelete = (index: number) => {
    const updatedExperience = userData.experience.filter((_, i) => i !== index);
    setUserData({
      ...userData,
      experience: updatedExperience,
    });
  };

  // const handleFileUpload = (field: keyof UserDataType) => (
  //   e: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     setUserData({
  //       ...userData,
  //       [field]: file,
  //     });
  //   }
  // };

  const handleModalOk = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="user-details-container">
      <h2 className="heading">{companyData?.companyLogo} Add User Details</h2>
      <div className="user-details-form">
        <div className="form-item">
          <Input
            name="employeeName"
            value={userData.employeeName}
            onChange={handleInputChange}
            placeholder="Enter employee name"
            className="input-field"
          />
        </div>
        <div className="form-item">
          <Input
            name="empId"
            value={userData.empId}
            onChange={handleInputChange}
            placeholder="Enter employee ID"
            className="input-field"
          />
        </div>
        <div className="form-item">
          <Input
            name="designation"
            value={userData.designation}
            onChange={handleInputChange}
            placeholder="Enter designation"
            className="input-field"
          />
        </div>
        <div className="form-item">
          <Input.TextArea
            name="aboutMe"
            value={userData.aboutMe}
            onChange={handleInputChange}
            placeholder="Enter about me"
            className="input-field"
          />
        </div>
        <div className="form-item">
          <Input
            id="experience"
            value={newExperience}
            onChange={(e) => setNewExperience(e.target.value)}
            placeholder="Enter new experience"
            className="input-field"
          />
          <Button
            type="primary"
            onClick={handleExperienceAdd}
            className="submit-button"
          >
            <PlusOutlined />
          </Button>
        </div>
        {userData.experience.length > 0 && (
          <div className="experience-list">
            {userData.experience.map((exp, index) => (
              <div key={index} className="experience-item">
                <p>{exp}</p>
                <Button
                  type="primary"
                  onClick={() => handleExperienceDelete(index)}
                  className="icon-btn"
                >
                  <RiDeleteBin5Fill />
                </Button>
              </div>
            ))}
          </div>
        )}
        <div className="form-item">
          <Input
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            placeholder="Enter email"
            type="email"
            className="input-field"
          />
        </div>
        <div className="form-item">
          <Input
            name="contactNo"
            value={userData.contactNo}
            onChange={handleInputChange}
            placeholder="Enter contact number"
            className="input-field"
          />
        </div>
        <div className="form-item">
          <Input
            name="linkedInUrl"
            value={userData.linkedInUrl}
            onChange={handleInputChange}
            placeholder="Enter LinkedIn URL"
            type="url"
            className="input-field"
          />
        </div>
        <div className="form-item">
          <Input
            name="twitterUrl"
            value={userData.twitterUrl}
            onChange={handleInputChange}
            placeholder="Enter Twitter URL"
            type="url"
            className="input-field"
          />
        </div>
        <div className="form-item">
          <Upload
            beforeUpload={() => {
              // handleFileUpload("empBgPic")({ target: { files: [file] } });
              return false;
            }}
            maxCount={1}
            className="upload-container"
          >
            <Button icon={<UploadOutlined />} className="upload-button">
              Click to Upload Background Picture
            </Button>
          </Upload>
        </div>
        <div className="form-item">
          <Upload
            beforeUpload={() => {
              // handleFileUpload("empProfilePic")({ target: { files: [file] } });
              return false;
            }}
            maxCount={1}
            className="upload-container"
          >
            <Button icon={<UploadOutlined />} className="upload-button">
              Click to Upload Profile Picture
            </Button>
          </Upload>
        </div>
        <div className="button-container">
          <Button
            type="primary"
            // onClick={() => setUserData(initialValues)}
            className="submit-button"
          >
            Cancel
          </Button>
          <Button
            type="primary"
            onClick={handleSubmit}
            className="submit-button"
          >
            Add User
          </Button>
        </div>
      </div>
      <Modal
        title="User Created"
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalOk}
      >
        <p>User is submitted with virtual ID: {virtualId}</p>
      </Modal>
    </div>
  );
};
