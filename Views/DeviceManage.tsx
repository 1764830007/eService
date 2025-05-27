import { Text, TextInput, PaperProvider, Icon, Card, Button, TouchableRipple  } from 'react-native-paper';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TabsProvider, Tabs, TabScreen } from 'react-native-paper-tabs';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
function DeviceManage(): React.JSX.Element {

const navigation = useNavigation<LoginScreenNavigationProp>();
  return (
    <PaperProvider>
      <View>
        <View style={styles.container}>
          <TextInput
            mode="outlined"
            placeholder="请输入名称备注/产品序列号"
            style={{ width: '80%' }}

            left={
              <TextInput.Icon
                icon="magnify"

                forceTextInputFocus={false} // 防止触发键盘
              />
            }
          />
          <TouchableRipple
            onPress={() => navigation.navigate('Map')}
            borderless // 圆形涟漪效果（可选）
            style={{ borderRadius: 20 }} // 点击区域形状
          >
            <Icon source="map-marker" size={40} />
          </TouchableRipple>
        </View>

        <Card style={styles.card}>
<View style={[styles.addDevice]}>
          <View style={styles.rowContainer}>
            <View style={styles.centeredItem}>
              <Text style={[styles.textStyle, { color: '#64B4F2' }]}>0</Text>
              <Text style={[styles.textStyle, { color: '#64B4F2' }]}>设备数</Text>
            </View>
            <View style={styles.centeredItem}>
              <Text style={[styles.textStyle, { color: 'green' }]}>0</Text>
              <Text style={[styles.textStyle, { color: 'green' }]}>在线</Text>
            </View>
            <View style={styles.centeredItem}>
              <Text style={[styles.textStyle, { color: 'gray' }]}>0</Text>
              <Text style={[styles.textStyle, { color: 'gray' }]}>离线</Text>
            </View>

          </View >
          <View style={{
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center', // 垂直居中对齐
            justifyContent: 'flex-start', // 水平靠左
            backgroundColor: '#f5f5f5', // 浅灰色背景
            padding: 10, // 内边距
            borderRadius: 4, // 可选：圆角
          }}>
            <Icon source="map-marker" size={20} />
            <Text style={{ marginLeft: 8 }}>在线/离线不支持PL241/243盒子</Text>
          </View>

        </View>
        </Card>




        <TabsProvider defaultIndex={0}>
          <Tabs
            style={styles.tabsContainer}
            tabLabelStyle={styles.tabLabel}
            indicatorStyle={styles.indicator}
          >
            {/* 第一个标签页 */}
            <TabScreen label="设备列表">
              <View style={styles.tabContent}>
                <Text>这里是设备列表内容</Text>
              </View>
            </TabScreen>

            {/* 第二个标签页 */}
            <TabScreen label="设备分组">
              <View style={styles.tabContent}>
                <Text>这里是设备分组内容</Text>
              </View>
            </TabScreen>

            {/* 第三个标签页 */}
            <TabScreen label="设备统计">
              <View style={styles.tabContent}>
                <Text>这里是设备统计数据</Text>
              </View>
            </TabScreen>
          </Tabs>
        </TabsProvider>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tabsContainer: {
    backgroundColor: '#fff',
  },
  tabLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  indicator: {
    backgroundColor: 'blue', // 指示器颜色
    height: 3,
  },
  tabContent: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addDevice: {
    backgroundColor: '#FFFFFF',


  },
  rowContainer: {
    flexDirection: 'row',       // 横向排列
    justifyContent: 'space-between', // 均匀分布（两端对齐）
    padding:20
  },
  centeredItem: {
    alignItems: 'center',      // 每个项目内部居中
    flex: 1,                  // 每个项目平分空间
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 20
  },
  card: {
      margin: 16,
      elevation: 2,
    },
});

export default DeviceManage;