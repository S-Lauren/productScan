import { BarCodeScanner } from 'expo-barcode-scanner';
import * as React from 'react'
import { StyleSheet, Text, Button } from 'react-native';
import styled from 'styled-components/native';

import { ScannerScreenProp } from './Navigator/MainNavigator';


const ScannerScreen: React.FC<ScannerScreenProp> = ({ navigation }) => {
  const [hasPermission, setHasPermission] = React.useState<boolean | null>(null);
  const [scanned, setScanned] = React.useState(false)


  React.useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, [])

  const handleBarCodeScanned = ({ type, data }: { type: string, data: string }) => {
    setScanned(true);
    navigation.navigate("ProductDetailScreen", { barcode: data })
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }


  return (
    <ContainerBarScan>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned &&
        <ButtonWrapper>
          <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
        </ButtonWrapper>
      }
    </ContainerBarScan>
  )
}

const ContainerBarScan = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`
const ButtonWrapper = styled.View`
  color: white; 
  height: 40px;
  background-color: blue; 
`
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export default ScannerScreen;
