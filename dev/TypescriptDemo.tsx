import * as React from 'react';
import { Text, View } from 'react-native';

type TypescriptDemoProps = {
  name: string
}
function TypescriptDemo(props: TypescriptDemoProps) {
  return (
    <View>
      <Text>
        Hello
        {props.name}
      </Text>
    </View>
  );
}

type TodaiKaruiProps = {
    LS: string,
    num: number,
}
function TodaiKarui(props: TodaiKaruiProps) {
  return (
    <View>
      <Text>
        {props.LS}
        科
        {props.num}
        類
      </Text>
    </View>
  );
}

type SumioType = {
    name: string,
    place: string,
}

const SumioDefault: SumioType = {
  name: 'aaa',
  place: 'uuuu',
};

function Sumio(props = SumioDefault) {
  return (
    <View>
      <Text>
        {props.place}
        {' '}
        is wating for
        {' '}
        {props.name}
        {' '}
      </Text>
    </View>
  );
}
// <Sumio place="The Science Center" name="Genji" />

export default Sumio;

// ----別のファイル
// <TypescriptDemo name="World" />
// <TypescriptDemo name="React Native" />
// <TypescriptDemo name="Typescript" />
// <TodaiKarui LS="理", num = {1} />
// <TodaiKarui LS="文", num = {3} />

// -------------------------------------------------------------------------------------------------------------------

// // typescriptとは何か

// // 拡張子　extension
// // JSX <View></View>
// // .js <-- javascript
// // .ts <-- typescript
// // .jsx <-- JSXが書けるjavascript
// // .tsx <-- JSXが書けるtypescript

// const i: number = 0;
// const tekitoFunction = (i: number) => i + 1;
// tekitoFunction({ i: 1 });
// // number, String, boolean, array,
// type Profile = {
//   name: string;
//   school: string;
//   age: number;
//   address?: string; // ?は省略可能
// };

// interface Nanntokakantoka {
//   name: string;

// }

// type NumOrStr = number | string; //ユニオン型

// const junikeda: Profile = {
//   name: 'Jun Ikeda',
//   school: 'Kaijo School',
//   age: 18,
//   address: 'Tokyo Japan',
// };

// type Chara = {
//     bibun: string;
//     sekibun: string;
//     relative: string;
//     ySeppenn: number;
// }
// const cosine: Chara = {
//   bibun: '-sine',
//   sekibun: 'sine',
//   relative: 'hyperbolicCosine',
//   ySeppenn: 1,
// };
// const sine: Chara = {
//   bibun: 'cosine',
//   sekibun: '-cosine',
//   relative: 'hyperbolicSine',
//   ySeppenn: 0,
// }

// const tekitoFunction2 = (i: number, j: number): number => i + j;
// const a: string = 'a';
// tekitoFunction2(3, 4);

// // -------------------------
// function TypescriptDemo() {
//   return (
//     <View>
//       <Text>Hello, Typescript!</Text>
//     </View>
//   );
// }

// // nの2乗を求める関数
// const nijo = (n: number): number => {
//     return n^2
// };
// let num: number = nijo(5);
// let num2: number = nijo(num);

// // let union: string | number = "";
// // union = 5; //ok
// // union = "gaku"; //ok
// // union = [] ng
// // const checkOdd = (num : number):boolean => {
// //     if (num % 2 == 0) {
// //         return true;
// //     }
// // }

// export default TypescriptDemo;
