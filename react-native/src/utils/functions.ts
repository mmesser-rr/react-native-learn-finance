import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from 'react';
import { Dimensions, TextStyle } from 'react-native';
// import SafeArea from 'react-native-safe-area';

import { WyreMinimumFee, WyreTransactionFeePercent } from 'src/config/data';
import { scale } from 'src/config/dimentions';

import analytics from '@react-native-firebase/analytics';

export const generateTextStyle = (
  ownStyle: TextStyle,
  propsStyle?: TextStyle | TextStyle[],
): TextStyle[] => {
  let style: TextStyle[] = [];

  if (propsStyle) {
    style = Array.isArray(propsStyle) ? [...propsStyle] : [propsStyle];
  }

  return [ownStyle, ...style];
};

export const useDebounce = (value: string | number, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};

export const calculateContentHeight = async () => {
  // let top = 0;
  // let bottom = 0;
  // const { safeAreaInsets } = await SafeArea.getSafeAreaInsetsForRootView();

  // if (safeAreaInsets) {
  //   top = safeAreaInsets.top;
  //   bottom = safeAreaInsets.bottom;
  // }

  // const windowHeight = Dimensions.get('window').height;
  // return windowHeight - top - bottom - scale(28) * 2;
};

export const convertPTToPX = (value: number) => {
  const px = value * 1.32814;
  return Math.round(px * 100) / 100;
};

export const twoDecimalFormatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const decimalFormatter = (
  minimumFractionDigits: number,
  maximumFractionDigits: number,
) => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits,
    maximumFractionDigits,
  });
};

export const getWyreTransactionFee = (amount: number) => {
  return Math.max(WyreMinimumFee, amount * WyreTransactionFeePercent);
};

export const log = (type: 'title' | 'content' | 'error', text: any) => {
  switch (type) {
    case 'title':
      console.log(`\n\n---------- Rendering ${text}`); break;
    case 'content':
      console.log(`\n\n====> ${text}`); break;
    case 'error':
      console.log(`\n\n##### ${text}`); break;
    default:
      console.log(text);
  }
};

export function boundObject(state: any, payload: any) {
  if (payload) {
    const keys = Object.keys(payload);
    keys.forEach((key) => {
      state[key] = payload[key];
    });
  }
}

export async function graphqlApi(queryString: string, input?: any) {
  try {
    return await API.graphql(
      graphqlOperation(queryString, input)
    );
  }
  catch (e) {
    console.log('graphqlApi error: ', e);
    console.log('queryString: ', queryString);
    console.log('input: ', input);
  };
}

export function getCloudFrontImgeUrl(url) {
  return process.env.IMAGE_CLOUDFRONT_URL + url
}

export function getCloudFrontVideo(url: string) {
  const cloudfrontUrl = process.env.VIDEO_CLOUDFRONT_URL;

  const index = url.lastIndexOf('/')
  const name = url.substring(index + 1)
  
  return cloudfrontUrl + name
}

export function analyticsLog(log: string, data) {
  analytics().logEvent(log)
}