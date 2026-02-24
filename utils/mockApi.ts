export const sendOtp = (mobile: string) => {
  console.log(`OTP sent to ${mobile}: 1234`);
  return true;
};

export const verifyOtp = (otp: string) => {
  return otp === '1234';
};