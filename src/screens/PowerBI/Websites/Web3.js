import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ActivityIndicator, Appearance } from 'react-native';
import WebView from 'react-native-webview';
import * as Progress from 'react-native-progress';

export default function Web3() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const webViewRef = useRef(null);

  const injectScript = `
    var emailValue = "";
    var passwordValue = "kaashif@01";

    var emailField = document.getElementById('i0116');
    var signInButton = document.getElementById('idSIButton9');
    var passwordField = document.getElementById('i0118');

    function simulateInputClickAndType(element, value) {
      if (element) {
        element.click();
        element.value = value;
        element.dispatchEvent(new Event("input", { bubbles: true }));
        element.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }

    if (emailField && passwordField && signInButton) {
      simulateInputClickAndType(emailField, emailValue);
      simulateInputClickAndType(passwordField, passwordValue);

      // Trigger sign-in after a short delay
      setTimeout(function() {
        signInButton.click();
      }, 500);
    }
  `;

  useEffect(() => {
    const listener = Appearance.addChangeListener(({ colorScheme }) => {
      // Handle appearance changes if needed
    });

    return () => {
      listener.remove(); // Remove the listener to avoid memory leaks
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
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
          uri: 'https://ideassion1.sharepoint.com/sites/iKonnect',
        }}
        onLoadProgress={({ nativeEvent }) => setProgress(nativeEvent.progress)}
        onNavigationStateChange={(navState) => {
          if (navState.url !== 'about:blank' && navState.url !== 'https://ideassion1.sharepoint.com/sites/iKonnect') {
            setLoading(navState.loading);
            webViewRef.current.injectJavaScript(injectScript);
          }
        }}
        injectedJavaScript={injectScript}
        onError={(err) => {
          console.warn('WebView Error:', err);
        }}
        onMessage={(event) => {
          const data = JSON.parse(event.nativeEvent.data);

          if (data.type === 'email') {
            console.log('Email entered:', data.value);
            setEmail(data.value);
          } else if (data.type === 'password') {
            console.log('Password entered:', data.value);
            setPassword(data.value);
          }
        }}
        style={{
          flex: 1,
          display: 'flex',
          borderWidth: 15,
          borderColor: 'orange',
        }}
        onHttpError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.warn('WebView received error status code:', nativeEvent.statusCode);
        }}
        onLoadEnd={() => {
          setLoading(false);
          console.log('Site Loaded');
        }}
      />
    </View>
  );
}
