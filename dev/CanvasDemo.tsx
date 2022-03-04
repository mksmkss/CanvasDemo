import React, { useRef } from 'react';
import { View, Image } from 'react-native';
import SignatureScreen from 'react-native-signature-canvas';

function Sign({ text, onOK }) {
  const ref = useRef();
  const [signature, setSignature] = React.useState('');

  // Called after ref.current.readSignature() reads a non-empty base64 string
  const handleOK = (sign) => {
    // console.log(sign); // 描いたデータ
    onOK(sign); // Callback from Component props
    setSignature(sign);
    console.log('描き終わった');
  };

  // Called after ref.current.readSignature() reads an empty string
  const handleEmpty = () => {
    console.log('Empty');
  };

  // Called after ref.current.clearSignature()
  const handleClear = () => {
    console.log('clear success!');
  };

  // Called after end of stroke
  const handleEnd = () => {
    ref.current.readSignature();
  };

  // Called after ref.current.getData()
  const handleData = (data) => {
    // console.log(data);
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'yellow' }}>
      <View style={{flex:1}}>
        {signature ? (
          <Image
            resizeMode="contain"
            style={{ width: 335, height: 114 }}
            source={{ uri: signature }}
          />
          //書き終わった文字の事
        ) : null}
      </View>
      <SignatureScreen
        ref={ref}
        onEnd={handleEnd}
        onOK={handleOK}
        onEmpty={handleEmpty}
        onClear={handleClear}
        onGetData={handleData}
        // backgroundColor="rgba(0,255,0,.8)"
        dotSize={1}
        webviewContainerStyle={{backgroundColor: 'orange'}}
        style={{flex: 1, backgroundColor: 'green'}}
        minWidth={1}
        maxWidth={1}
        // autoClear
        descriptionText="Sign above (test)"
          // clearText="Clear (test)"
        webStyle=".m-signature-pad { background: red; margin-top: 0px; margin-left: 0px; width: 100%;} .rotated-<%orientation%> { background: skyblue; height: 100%; }"
        // .m-signature-pad--footer {display: none; margin: 0px;} 
      />
      <View style={{flex:1, backgroundColor: 'skyblue'}}></View>
    </View>
  );
}

export default Sign;
