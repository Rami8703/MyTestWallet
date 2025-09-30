import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useRef} from 'react';
import {AppState, AppStateStatus} from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';

import {useAppDispatch, useAppSelector} from 'store/hooks';
import {getFaceIdActivated, getPinCode} from 'store/users/selectors';
import {setFaceId, setShowPinModal} from 'store/users/userSlice';

const useFaceIdAuth = () => {
  const appState = useRef(AppState.currentState);
  const isFaceIdActivated = useAppSelector(getFaceIdActivated);
  const code = useAppSelector(getPinCode);

  const dispatch = useAppDispatch();

  const rnBiometrics = new ReactNativeBiometrics({
    allowDeviceCredentials: true,
  });

  const LoginFaceId = async () => {
    try {
      const data = await rnBiometrics.simplePrompt({
        promptMessage: 'Confirmation',
      });
      if (data.success) {
        dispatch(setFaceId(false));
        if (code) {
          dispatch(setShowPinModal(false));
        }
      } else {
        dispatch(setFaceId(true));
      }
    } catch (error) {
      dispatch(setFaceId(true));
    }
  };

  useEffect(() => {
    if (isFaceIdActivated) {
      // LoginFaceId();
      dispatch(setFaceId(true));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isFaceIdActivated) {
      let timer: NodeJS.Timeout | undefined;

      let backgroundTime: number | null = null;

      const handleAppStateChange = async (nextAppState: AppStateStatus) => {
        if (nextAppState.match(/inactive|background/)) {
          backgroundTime = Date.now();
          await AsyncStorage.setItem('backgroundTime', String(backgroundTime));
        }
        if (nextAppState.match(/active/)) {
          const time = await AsyncStorage.getItem('backgroundTime');

          if (time && Date.now() - +time >= 30000) {
            dispatch(setFaceId(true));
          }
        }

        appState.current = nextAppState;
      };

      const subscription = AppState.addEventListener(
        'change',
        handleAppStateChange,
      );

      return () => {
        subscription.remove();
        clearTimeout(timer);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFaceIdActivated]);
};

export default useFaceIdAuth;
