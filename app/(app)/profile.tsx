import Column from '@/components/reusable-component/Column';
import CustomAppbar from '@/components/reusable-component/CustomAppbar';
import CustomInput from '@/components/reusable-component/CustomInput';
import React from 'react';
import { ScrollView, View } from 'react-native';
import useProfile from '../../hooks/profile/use-profile';
import CustomButton from '@/components/reusable-component/CustomButton';
import Constants from 'expo-constants';
import CommonMenu from '@/components/reusable-component/CommonMenu';
import { useAuth } from '@/context/auth';
import CustomStateView from '@/components/reusable-component/CustomStateView';
import { getState } from '@/helper/utils';

function ProfilePage() {
  const { form, handleChange, profile, isEditable, setIsEditable } = useProfile();
  const auth = useAuth();

  return (
    <View className='flex-1 bg-white'>
      <CustomAppbar options={{ headerTitle: 'My Profile' }} />
      <CustomStateView
        state={getState(profile.isLoading, profile.isError)}
        onRetry={() => profile.refetch()}
        Content={
          <ScrollView
            contentContainerStyle={{
              // 53 is button height
              paddingBottom: Constants.statusBarHeight + 53 + 16,
              paddingTop: 16,
            }}
          >
            <Column className='gap-4 px-4'>
              <CustomInput
                label='Nama Lengkap'
                editable={isEditable}
                value={form.name}
                onChange={(e) => handleChange('name', e.nativeEvent.text)}
              />
              <CustomInput
                label='Email'
                editable={isEditable}
                value={form.email}
                onChange={(e) => handleChange('email', e.nativeEvent.text)}
              />
              <CustomInput
                label='Telepon'
                editable={isEditable}
                value={form.telepon}
                onChange={(e) => handleChange('telepon', e.nativeEvent.text)}
              />
              <CustomInput
                label='User Name'
                editable={isEditable}
                value={form.userName}
                onChange={(e) => handleChange('userName', e.nativeEvent.text)}
              />
              <CustomInput
                label='NIS'
                editable={isEditable}
                value={form.nis}
                onChange={(e) => handleChange('nis', e.nativeEvent.text)}
              />
              <CustomInput
                label='NIDN'
                editable={isEditable}
                value={form.nidn}
                onChange={(e) => handleChange('nidn', e.nativeEvent.text)}
              />
              <CustomButton
                label={'EDIT PROFILE'}
                onPress={() => setIsEditable((prev) => !prev)}
                className='mt-4 w-full bg-[#4CD964]'
              />
            </Column>
            <CommonMenu title='Edit Password' className='mt-4' />
            <CommonMenu
              title='Logout'
              onPress={() => {
                auth?.signOut();
              }}
              textColor='#EB5757'
            />
          </ScrollView>
        }
      />
    </View>
  );
}

export default ProfilePage;
