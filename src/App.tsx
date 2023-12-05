import React, {useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import type {PropsWithChildren} from 'react';

import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

import DiceOne from '../assets/DiceOne.png';
import DiceTwo from '../assets/DiceTwo.png';
import DiceThree from '../assets/DiceThree.png';
import DiceFour from '../assets/DiceFour.png';
import DiceFive from '../assets/DiceFive.png';
import DiceSix from '../assets/DiceSix.png';

type DiceProps = PropsWithChildren<{imageUrl: ImageSourcePropType}>;

const Dice = ({imageUrl}: DiceProps): React.JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};

const App = (): React.JSX.Element => {
  const [diceImage1, setDiceImage1] = useState<ImageSourcePropType>(DiceOne);
  const [diceImage2, setDiceImage2] = useState<ImageSourcePropType>(DiceOne);

  const roleDice = (
    setDiceImage: React.Dispatch<React.SetStateAction<ImageSourcePropType>>,
  ) => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;

      default:
        setDiceImage(DiceOne);
        break;
    }

    ReactNativeHapticFeedback.trigger('impactHeavy', {
      enableVibrateFallback: true,
      ignoreAndroidSystemSettings: false,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.diceContainer}>
        <Dice imageUrl={diceImage1} />
        <Pressable
          onPress={() => roleDice(setDiceImage1)}
          style={styles.rollBtn}>
          <Text style={styles.rollBtnTxt}>Roll the Dice</Text>
        </Pressable>
      </View>
      <View style={styles.diceContainer}>
        <Dice imageUrl={diceImage2} />
        <Pressable
          onPress={() => roleDice(setDiceImage2)}
          style={styles.rollBtn}>
          <Text style={styles.rollBtnTxt}>Roll the Dice</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333945',
  },
  diceContainer: {
    marginHorizontal: 20,
    alignItems: 'center',
  },
  diceImage: {
    height: 80,
    width: 80,
    borderRadius: 10,
  },
  rollBtn: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginVertical: 30,
    backgroundColor: '#218F76',
    borderRadius: 12,
  },
  rollBtnTxt: {
    fontWeight: 'bold',
  },
});

export default App;
