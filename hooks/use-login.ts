import { useAuth } from '@/context/auth';
import { delay } from '@/helper/utils';
import { LoginForm, LoginSchema } from '@/model/login-form';
import { ZodValidationError } from '@/model/zod-validation-error';
import { useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import { NIS, PASSWORD } from '@/constants/secure-store-key';
import { RequestState } from '@/helper/enums';

export default function useLogin() {
  const auth = useAuth();
  const [state, setState] = useState(RequestState.IDLE);
  const [form, setForm] = useState<LoginForm>({
    nis: '',
    password: '',
    isRememberMe: false,
  });

  useEffect(() => {
    if (SecureStore.getItem(NIS) && SecureStore.getItem(PASSWORD)) {
      setForm((prev) => ({
        ...prev,
        nis: SecureStore.getItem(NIS) ?? '',
        password: SecureStore.getItem(PASSWORD) ?? '',
        isRememberMe: true,
      }));
    }
  }, []);

  function handleChange(key: string, value: any) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleLogin() {
    if (state === RequestState.LOADING) return;

    const validate = LoginSchema.safeParse(form);

    if (!validate.success) {
      const { errors } = validate.error;

      const _errors: ZodValidationError[] = errors.map((item) => {
        return {
          path: item.path,
          message: item.message,
        };
      });

      setForm((prev) => ({ ...prev, errors: _errors }));

      setState(RequestState.ERROR);
      return;
    }

    setState(RequestState.LOADING);

    // simulate login
    await delay(1000);

    if (form.isRememberMe) {
      SecureStore.setItem(NIS, form.nis);
      SecureStore.setItem(PASSWORD, form.password);
    }

    auth?.signIn(form.nis);

    setState(RequestState.SUCCESS);
  }

  return {
    handleChange,
    handleLogin,
    state,
    form,
  };
}
