import SettingParamList from './setting/ParamList';

type ParamList = {
  Home: undefined;
  Search: undefined;
  Setting: SettingParamList
}

// SettingPramList = { 'Setting Main': undefined; 'Setting Detail': undefined; }
/*
type ParamList = {
  Home: undefined;
  Search: undefined;
  Setting: {
    'Setting Main': undefined;
    'Setting Detail': undefined;
  }
}

*/

export default ParamList;
