import { useQuery } from '@tanstack/react-query';
import useAxios from '../../../../hooks/networking/use-axios';
import { ProfileResponse } from '@/features/(app)/profile/types/profile-response';
import { useState } from 'react';

export default function useProfile() {
  const axios = useAxios();
  const [isEditable, setIsEditable] = useState(false);
  const [form, setForm] = useState<ProfileResponse>({});

  const profile = useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      const data = (await axios.get<ProfileResponse | undefined>('/profile')).data;

      if (data) setForm(data);

      return data;
    },
  });

  const handleChange = (key: keyof ProfileResponse, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return { profile, form, handleChange, setIsEditable, isEditable } as const;
}
