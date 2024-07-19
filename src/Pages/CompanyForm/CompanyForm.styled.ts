import { Form, Input } from 'antd';
import styled from 'styled-components';

export const Container = styled('div')`
  padding: 20px;
  background-color: whitesmoke;
  border-radius: 8px;
  .bttn-50-container{
    display: flex;
    justify-content: space-between;
  }
  .bttn-50{
    width: 48%;
  }
`;

export const ProgressBarContainer = styled.div`
  display: flex;
  height: 8px;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

export const ProgressSegment = styled.div<{ filled: boolean }>`
  flex: 1;
  margin-right: 5px;
  background-color: ${({ filled }) => (filled ? '#1890ff' : '#b5b6b75c')};
  &:last-child {
    margin-right: 0;
  }
`;

export const Heading = styled.h2`
  margin-bottom: 20px;
  font-size: 1.2em;
  color: #333;
  .icon-edit{
    color: #654098;
    cursor: pointer;
    width:25px;
    height:25px;
    padding-top: 5px;
    margin: 0 10px;
  }
`;

export const StyledForm = styled(Form)`
  .ant-form-item {
    margin-bottom: 16px;
  }

  .ant-input {
    border-radius: 8px;
  }

  .ant-upload {
    width: 100%;
  }

  .ant-form-item-label > label{
    display: block !important;
  }
`;

export const ColorFormItem = styled(Form.Item)`
height: 90px;
  display: flex;
  .ant-form-item-row {
    display: flex;
    flex-direction: row;
    max-width: 100%;
    justify-content: space-around;
    .ant-form-item{
      width: 70%;
    }
  }
  .ant-form-item-label {
    width: 70% !important;
    display: block !important;
    flex-direction: column !important;
    .ant-form-item-label > label {
      display: block !important;
      /* flex-direction: column; */
    }
  }
  .ant-form-item-control {
    width: 25% !important;
    .ant-input {
      border-radius: 100%;
      min-height: 83px;
      min-width: 83px;
      padding: 0;
    }
  }
`;

export const ColorInput = styled(Input)`
  width: 29%;
  border-radius: 50%;
`;

export const HexInput = styled(Input)`
  width: 70%;
  margin-left: 1%;
`;

export const ButtonGroup = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 40px;
  gap: 15px;
`;

