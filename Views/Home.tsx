import { TextInput, Button, Text, Appbar, Icon, Divider, Avatar, Card, PaperProvider } from 'react-native-paper'; // 导入 Button 组件
import React from 'react';
import {
  StyleSheet,
  Alert,
  View,
  ScrollView
} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';
import { TabsProvider, Tabs, TabScreen } from 'react-native-paper-tabs';
import SecondTab from './SecondTab'
type RootStackParamList = {
  LoginAfter: undefined;
  // 其他路由...
};

function Home(): React.JSX.Element {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <PaperProvider>
    <ScrollView>
      <View style={styles.container}>
        <Appbar.Header style={styles.bar}>
          {/* 占位 */}
          <Appbar.Content
            title="袁满华"
          />
          <Appbar.Action icon="headset" style={styles.barIcon} onPress={() => { }} />
          <Appbar.Action icon="bell" style={styles.barIcon} onPress={() => { }} />

        </Appbar.Header>
        <LinearGradient
          colors={['#D2B48C', '#F5DEB3']} // 浅棕色到浅黄色
          start={{ x: 0, y: 0 }}           // 从左开始
          end={{ x: 1, y: 0 }}             // 到右结束
          style={[styles.addDevice, { padding: 20, justifyContent: 'space-between' }]}
        >
          {/* 你的现有内容 */}
          <View>
            <Text>设备总数</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>0</Text>
              <Text style={{ marginLeft: 15 }}>台</Text>
              <Icon source="chevron-right" size={20} color="#999" />
            </View>
          </View>
          <View>
            <Button
              onPress={() => navigation.navigate('LoginAfter')}
              mode="contained"
              style={styles.loginButton}
              buttonColor="orange"
              icon="plus"
            >
              添加设备
            </Button>
          </View>
        </LinearGradient>

        <View style={[styles.addDevice, { padding: 20 }]}>
          <View style={styles.rowContainer}>
            <View style={styles.centeredItem}>
              <Text>在线设备</Text>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>0</Text>
            </View>
            <View style={styles.centeredItem}>
              <Text>离线设备</Text>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>0</Text>
            </View>
            <View style={styles.centeredItem}>
              <Text>故障报警</Text>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>0</Text>
            </View>
            <View style={styles.centeredItem}>
              <Text>执行中工单</Text>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>0</Text>
            </View>
          </View>
        </View>
        <View style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 16
        }}>
          {/* 项目1 */}
          <View style={{ alignItems: 'center' }}>
            <Avatar.Icon size={40} icon="folder" style={{ backgroundColor: 'white' }} />
            <Text>电子图册</Text>
          </View>

          {/* 项目2 */}
          <View style={{ alignItems: 'center' }}>
            <Avatar.Icon size={40} icon="folder" style={{ backgroundColor: 'white' }} />
            <Text>服务手册</Text>
          </View>

          {/* 项目3 */}
          <View style={{ alignItems: 'center' }}>
            <Avatar.Icon size={40} icon="folder" style={{ backgroundColor: 'white' }} />
            <Text>服务工单</Text>
          </View>

          {/* 项目4 */}
          <View style={{ alignItems: 'center' }}>
            <Avatar.Icon size={40} icon="folder" style={{ backgroundColor: 'white' }} />
            <Text>保修信息</Text>
          </View>

          {/* 项目5 */}
          <View style={{ alignItems: 'center' }}>
            <Avatar.Icon size={40} icon="folder" style={{ backgroundColor: 'white' }} />
            <Text>我的请求</Text>
          </View>
        </View>
        <View style={{ height: 800, width:'95%',alignSelf: 'center', marginTop:20, backgroundColor: 'white'}}>
        <TabsProvider defaultIndex={0} >
          <Tabs
            style={styles.tabsContainer}
            tabLabelStyle={styles.tabLabel}
            theme={{
              colors: {
                primary: 'blue' // 设置指示器颜色
              }
            }}
          >
            {/* 第一个标签页 */}
            <TabScreen label="设备列表">
              <View>
                <SecondTab/>
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
      </View>
      </ScrollView>
    </PaperProvider>

  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#E8E8E8',
    height: '100%',
  },
  bar: {
    elevation: 4,

    // iOS 阴影
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,

    // 确保阴影可见（iOS需要设置背景色）
    zIndex: 1,
  },
  barIcon: {
    backgroundColor: 'white',
  },
  addDevice: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',    // 横向排列
    alignItems: 'center',    // 垂直居中

  },
  rowContainer: {
    flexDirection: 'row',       // 横向排列
    justifyContent: 'space-between', // 均匀分布（两端对齐）
    // 或者使用 'space-around' 让两侧也有间距
  },
  centeredItem: {
    alignItems: 'center',      // 每个项目内部居中
    flex: 1,                  // 每个项目平分空间
  },
  card: {
    margin: 16,
    elevation: 2,
    height: 350
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  viewAllText: {
    color: '#666',
    marginRight: 4,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyText: {
    color: '#999',
    marginTop: 16,
    fontSize: 14,
  },
  loginButton: {
    marginTop: 0,
    paddingVertical: 8,
  },
    tabsContainer: {
      backgroundColor: '#fff',
      elevation: 2,
    },
    tabLabel: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#333',
    },
    // 选中状态样式
    tabActive: {
      backgroundColor: '#1E90FF', // 蓝色背景
      borderRadius: 4,
    },
    // 未选中状态样式
    tabInactive: {
      backgroundColor: 'transparent',
    },
    indicator: {
      backgroundColor: 'white', // 白色指示器(与填充色形成对比)
      height: 3,
    },
    tabContent: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
});

export default Home;
