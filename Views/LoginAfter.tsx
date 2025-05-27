import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Setting from './Setting'
import Home from './Home'
import Devices from './Devices'
const MusicRoute = () => Home;

const AlbumsRoute = () => Devices;

const RecentsRoute = () => Setting;

const NotificationsRoute = () => Setting;

const LoginAfter = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: '首页', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'devices', title: '设备', focusedIcon: 'album' },
    { key: 'setting', title: '设置', focusedIcon: 'history' },

  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    devices: Devices,
    setting: Setting,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default LoginAfter;