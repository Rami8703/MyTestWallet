import {Input} from 'components/Input/Input';
import React, {useState} from 'react';

interface DateInputProps {
  title: string;
  value: string;
  error?: string;
  onChangeText: (text: string) => void;
  onBlur?: (e: any) => void;
  placeholder?: string;
}

export const DateInput: React.FC<DateInputProps> = ({
  title,
  value,
  error,
  onChangeText,
  onBlur,
  placeholder = 'DD/MM/YYYY',
}) => {
  const [formattedValue, setFormattedValue] = useState<string>(value);

  const handleTextChange = (text: string) => {
    let rawValue = text.replace(/\D/g, '');

    if (rawValue.length > 2 && rawValue.length <= 4) {
      rawValue = `${rawValue.slice(0, 2)}/${rawValue.slice(2)}`;
    } else if (rawValue.length > 4) {
      rawValue = `${rawValue.slice(0, 2)}/${rawValue.slice(
        2,
        4,
      )}/${rawValue.slice(4, 8)}`;
    }

    setFormattedValue(rawValue);
    onChangeText(rawValue);
  };

  return (
    <Input
      title={title}
      error={error}
      value={formattedValue}
      keyboardType={'number-pad'}
      maxLength={10}
      onChangeText={handleTextChange}
      onBlur={onBlur}
      placeholder={placeholder}
    />
  );
};
