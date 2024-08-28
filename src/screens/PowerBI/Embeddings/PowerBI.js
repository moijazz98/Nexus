import React, {useEffect, useRef, useState} from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Progress from 'react-native-progress';

const PowerBI = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState('');
  const webViewRef = useRef(null);

  // useEffect(() => {
  //   const fetchAccessToken = async () => {
  //     try {
  //       let refreshToken = await AsyncStorage.getItem('refreshToken');
  //       setToken(refreshToken)
  //       console.log(refreshToken, 'refresh');
  //       if (refreshToken) {
  //         try {
  //           updateWebViewWithToken(refreshToken);
  //         } catch (refreshError) {
  //           console.error('Refresh Error:', refreshError);
  //         }
  //       } else {
  //         console.log('else working');
  //       }
  //     } catch (err) {
  //       console.log('AsyncStorage Error:', err);
  //     }
  //   };

  //   fetchAccessToken();
  // }, []);

  const updateWebViewWithToken = accessToken => {
    try {
      // Construct the updated URL with the new access token
      const embedUrl = `https://app.powerbi.com/reportEmbed?reportId=765e3cce-016d-4248-a573-71a26e7bcdbb&autoAuth=true&ctid=db01513b-9352-48dc-9232-8fc9f4e6979f&token=${accessToken}`;

      // Inject the updated URL into the WebView
      const injectedJavaScript = `
        window.location.href = '${embedUrl}';
      `;

      // Load the WebView with the updated URL
      webViewRef.current.injectJavaScript(injectedJavaScript);
      console.log(embedUrl, 'hlo');
    } catch (error) {
      console.error('Error updating WebView:', error);
    }
  };

  const handleNavigationStateChange = navState => {
    setLoading(navState.loading);
  };

  return (
    <View style={{flex: 1}}>
      {loading ? (
        <Progress.Bar
          progress={progress}
          width={null}
          borderRadius={0}
          borderWidth={0}
          color="orange"
        />
      ) : null}
      <WebView
        ref={webViewRef}
        source={{
          uri: 'https://app.powerbi.com/reportEmbed?reportId=765e3cce-016d-4248-a573-71a26e7bcdbb&autoAuth=true&ctid=db01513b-9352-48dc-9232-8fc9f4e6979f',
        }}
        onLoadProgress={({nativeEvent}) => setProgress(nativeEvent.progress)}
        onNavigationStateChange={handleNavigationStateChange}
        style={{
          flex: 1,
          display: 'flex',
          borderWidth: 15,
          borderColor: 'orange',
        }}
        onHttpError={syntheticEvent => {
          const {nativeEvent} = syntheticEvent;
          console.warn(
            'WebView received error status code: ',
            nativeEvent.statusCode,
          );
        }}
        onLoadEnd={() => {
          setLoading(false);
        }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        thirdPartyCookiesEnabled={true}
        sharedCookiesEnabled={true}
        mixedContentMode="compatibility"
      />
    </View>
  );
};

export default PowerBI;
