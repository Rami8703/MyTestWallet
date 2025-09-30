import i18next from 'i18next';

export type SlideT = {
  image: string;
  title: string;
  isButton: boolean;
  description: string;
};

export const data: SlideT[] = [
  {
    image: require('../../assets/animation/free_transaction.json'),
    title: i18next.t('CEFIDISABLED.SLIDE_1_TITLE'),
    isButton: false,
    description: i18next.t('CEFIDISABLED.SLIDE_1_DESCRIPTION'),
  },
  {
    image: require('../../assets/animation/p2p.json'),
    title: i18next.t('CEFIDISABLED.SLIDE_2_TITLE'),
    isButton: false,
    description: i18next.t('CEFIDISABLED.SLIDE_2_DESCRIPTION'),
  },
  {
    image: require('../../assets/animation/kyc.json'),
    title: i18next.t('CEFIDISABLED.SLIDE_3_TITLE'),
    isButton: false,
    description: i18next.t('CEFIDISABLED.SLIDE_3_DESCRIPTION'),
  },
  {
    image: require('../../assets/animation/send_telegram.json'),
    title: i18next.t('CEFIDISABLED.SLIDE_4_TITLE'),
    isButton: false,
    description: i18next.t('CEFIDISABLED.SLIDE_4_DESCRIPTION'),
  },
  {
    image: require('../../assets/animation/v4.json'),
    title: i18next.t('CEFIDISABLED.SLIDE_5_TITLE'),
    isButton: true,
    description: i18next.t('CEFIDISABLED.SLIDE_5_DESCRIPTION'),
  },
  {
    image: require('../../assets/animation/v4.json'),
    title: i18next.t('CEFIDISABLED.SLIDE_6_TITLE'),
    isButton: true,
    description: i18next.t('CEFIDISABLED.SLIDE_6_DESCRIPTION'),
  },
  {
    image: require('../../assets/animation/v4.json'),
    title: i18next.t('CEFIDISABLED.SLIDE_7_TITLE'),
    isButton: true,
    description: i18next.t('CEFIDISABLED.SLIDE_7_DESCRIPTION'),
  },
];
