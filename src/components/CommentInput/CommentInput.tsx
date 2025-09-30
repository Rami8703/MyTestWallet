import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {spacing, CustomNewTheme} from '../../theme/theme';
import {useThemeNew} from 'components/ThemeNewProvider/CustomeThemeNewProvider';
import {useInput} from '../InputNew/useInput';

interface CommentInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  maxHeight?: number;
  maxLength?: number;
}

const CommentInput = ({
  value,
  onChangeText,
  placeholder,
  error,
  disabled,
  maxHeight = 120,
  maxLength,
}: CommentInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const {borderColor, wraperColor, backgroundColor} = useInput({
    isFocused,
    isError: !!error,
    isDisabled: !!disabled,
  });

  const {theme} = useThemeNew();
  const styles = createStyles(theme);

  const handleContentSizeChange = () => {
    // The height will automatically adjust based on content
  };

  return (
    <View style={styles.mainContainer}>
      <View
        style={[
          styles.wraper,
          {
            backgroundColor: wraperColor,
            borderRadius: spacing.layoutPaddingL,
          },
        ]}>
        <View
          style={[
            styles.container,
            {
              backgroundColor: backgroundColor,
              borderColor: borderColor,
              borderRadius: spacing.layoutPaddingL,
            },
          ]}>
          <View style={styles.inputContainer}>
            <TextInput
              multiline
              value={value}
              onChangeText={onChangeText}
              onContentSizeChange={handleContentSizeChange}
              placeholder={placeholder}
              placeholderTextColor={theme.colors['text/tertiary']}
              editable={!disabled}
              style={[styles.input, {maxHeight}]}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              maxLength={maxLength}
            />
          </View>
        </View>
      </View>
      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.error}>{error}</Text>
        </View>
      )}
    </View>
  );
};

export default CommentInput;

const createStyles = (theme: CustomNewTheme) =>
  StyleSheet.create({
    mainContainer: {
      rowGap: 8,
    },
    wraper: {
      padding: 0,
    },
    container: {
      borderWidth: 1,
      paddingHorizontal: spacing.layoutPaddingM,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      columnGap: spacing.containerPaddingV,
      minHeight: 48,
    },
    input: {
      flex: 1,
      lineHeight: 14,
      fontWeight: '600',
      fontFamily: 'HarmonyOS_Sans_Medium',
      color: theme.colors['text/primary'],
      textAlignVertical: 'center',
    },
    errorContainer: {
      marginTop: 4,
    },
    error: {
      color: theme.colors['text/error'],
      fontSize: 12,
    },
  });
