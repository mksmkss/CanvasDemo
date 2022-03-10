// navigatorを作るときはindexとParamListが不可欠（位置関係は並列）
import SettingParamList from './setting/ParamList';

type ParamList = {
  'Hello World': undefined;
  'Detail': undefined;
  'Setting': SettingParamList;
}

export default ParamList;
