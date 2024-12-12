import React from 'react';
import Column from './Column';
import { Pressable, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { twMerge } from 'tailwind-merge';
import Row from './Row';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';

type CustomDatePickerProps = {
  label?: string;
  enable?: boolean;
  value?: Date;
  onDateChange: (value: Date) => void;
};

export default function CustomDatePicker({
  label,
  onDateChange,
  value,
  enable = true,
}: CustomDatePickerProps) {
  const [show, setShow] = React.useState(false);

  return (
    <Column>
      {label && <Text className='sfPro400-14 text-gray3'>{label}</Text>}
      <Pressable onPress={() => setShow((prev) => !prev)}>
        <Row
          className={twMerge(
            'mt-1 w-full gap-2 rounded-[4px] border border-[#E0E0E0] px-4 py-3',
            !enable && 'bg-[#F8F8F8]'
          )}
        >
          <Text className='sfPro300-14 line-clamp-1 flex-1 text-ellipsis'>
            {format(value ?? new Date(), 'dd/MM/yyyy') ?? `Pilih ${label}`}
          </Text>
          <Ionicons name='chevron-down' size={16} color='#333333' />
        </Row>
      </Pressable>
      {show && (
        <RNDateTimePicker
          value={value ?? new Date()}
          mode='date'
          display='default'
          onChange={(_, date) => {
            setShow(false);
            if (date) onDateChange(date);
          }}
        />
      )}
    </Column>
  );
}
