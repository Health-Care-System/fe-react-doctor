import client from "../utils/auth";
import { handleEmailForgotPasswordError, handleVerifyOTPError } from "../utils/response-handler";

export const createOTP = async (email, handleChange, setError) => {
  handleChange('loadingStep1', true);
  try {
      const res = await client.post('/doctors/get-otp', {email: email});
      if (res?.status === 200) {
        handleChange('step', 2);
      }
  } catch (error) {
      handleEmailForgotPasswordError(error, setError)
  } finally {
    handleChange('loadingStep1', false);
  }
};

export const verifyOTP = async (form, handleChange, setError) => {
  handleChange('loadingStep2', true);
  try {
      const requestBody = {
          email: form.email,
          otp: form.otp.join('')
      };
      const res = await client.post('/doctors/verify-otp', requestBody);
      if (res?.status === 200) {
          handleChange('step', 3);
      }
  } catch (error) {
      handleVerifyOTPError(error, setError);
      handleChange('otp', ['', '', '', ''])
  } finally {
    handleChange('loadingStep2', false);
  }
};

