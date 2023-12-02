import Cookies from "js-cookie";
import client from "../utils/auth";
import { validateFormLogin } from "../utils/validation";
import { handleLoginError } from "../utils/response-handler";

export const sendFormLogin = async (
  form,
  setErrors,
  setLoading,
  setForm
) => {

  const newData = {
    email: form.email,
    password: form.password
  }
  
  if (validateFormLogin(newData, setErrors)) {
    try {
      setLoading(true);
      const res = await client.post('/doctors/login', newData);
      if (res.status === 200) {
        const { token } = res.data.results;
        Cookies.set('token', token);
        window.location.href = '/';
      }
    } catch (error) {
      handleLoginError(error, setErrors);
    } finally {
      setLoading(false);
      setForm((prev) => ({
        ...prev,
        email: '',
        password: ''
      }));
    }
  }
}