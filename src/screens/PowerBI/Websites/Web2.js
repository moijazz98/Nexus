import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Appearance,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import WebView from 'react-native-webview';
import * as Progress from 'react-native-progress';

export default function Web2() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [theme, setTheme] = useState(Appearance.getColorScheme());

  const webViewRef = useRef(null);
  const injectScript = `
    console.log("Injecting values into form fields...");
  
    var email = "your-email@example.com";
    var name = "Kaashif";
    var company = "Ideassion";
    var phone = 1234567980;
  
    var countryCode = "91";
    function simulateInputClickAndType(element, value) {
      if (element) {
        element.click();
        element.value = value;
        element.dispatchEvent(new Event("input", { bubbles: true }));
        element.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }
  
    var nameInput = document.getElementById("ownerName");
    var emailInput = document.getElementById("email");
    var companyInput = document.getElementById("name");
    var phoneInput = document.getElementById("ownerPhone");
    var countryCodeDropdown = document.querySelector('[name="countryCode"]');
    var nextButton = document.querySelector('.submit-btn');
    var form = document.querySelector('form');
  
    if (emailInput && nameInput && companyInput && phoneInput && countryCodeDropdown && nextButton && form) {
      simulateInputClickAndType(emailInput, email);
      simulateInputClickAndType(nameInput, name);
      simulateInputClickAndType(companyInput, company);
      simulateInputClickAndType(phoneInput, phone);
      simulateInputClickAndType(countryCodeDropdown, countryCode);
  
      setTimeout(function() {
        nextButton.click();
        form.submit();
      }, 500);
    }
  `;
  useEffect(() => {
    const listener = Appearance.addChangeListener(({colorScheme}) => {
      setTheme(colorScheme);
    });
    return () => {
      listener;
    };
  }, []);
  const handleNavigationStateChange = navState => {
    setLoading(navState.loading);
  };
  return (
    <View style={{flex: 1}}>
      {loading ? (
        //   <ActivityIndicator
        //     size="large"
        //     color="#0000ff"
        //     style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        //   />
        // ) :
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
          uri: 'https://acc.autodesk.com/projects',
        }}
        // scalesPageToFit={true}
        onLoadProgress={({nativeEvent}) => setProgress(nativeEvent.progress)}
        onNavigationStateChange={handleNavigationStateChange}
        injectedJavaScript={injectScript}
        onError={err => {
          console.log('====================================');
          console.log(err, 'sdfe');
          console.log('====================================');
        }}
        onMessage={event => {
          console.log('WebView Console:', event.nativeEvent.data);
        }}
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
      />
    </View>
  );
}

const styles = StyleSheet.create({});
