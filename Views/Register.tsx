import { TextInput, Button, Provider as PaperProvider, Appbar, useTheme   } from 'react-native-paper';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import { Dropdown } from 'react-native-paper-dropdown';
import { DatePickerModal, TimePickerModal  } from 'react-native-paper-dates';
const GENDER_OPTIONS = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'other' },
];

const COUNTRY_OPTIONS = [
  { label: '中国', value: 'china' },
  { label: '美国', value: 'usa' },
  { label: '日本', value: 'japan' }
];

function Register(): React.JSX.Element {
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  
  const handleGenderChange = (value?: string) => {
    if (value) {
      setGender(value);
    }
  };

  const handleCountryChange = (value?: string) => {
    if (value) {
      setCountry(value);
    }
  };

  const [date, setDate] = useState<Date | undefined>();
    const [visible, setVisible] = useState(false);

    const onConfirm = (params: { date: Date }) => {
      setDate(params.date);
      setVisible(false);
    };

const [TimePickerVisible, setTimePickerVisible] = useState(false);
  const [time, setTime] = useState<{ hours: number; minutes: number }>();

  const onTimeConfirm = ({ hours, minutes }: { hours: number; minutes: number }) => {
    setTime({ hours, minutes });
    setTimePickerVisible(false);
  };

  return (



    <PaperProvider>
    <Appbar.Header>
                    <Appbar.BackAction onPress={() => {}} />
                    <Appbar.Content title="Title" />
                    <Appbar.Action icon="calendar" onPress={() => {}} />
                    <Appbar.Action icon="magnify" onPress={() => {}} />
                  </Appbar.Header>
    <ScrollView>
      <View style={styles.container}>



        <View style={styles.inputContainer}>

              <TextInput
                                mode="outlined"
                                label="时间"

                                value={time ? `${time.hours}:${time.minutes}` : "选择时间"}
                                onPress={() => setTimePickerVisible(true)}
              right={
                        <TextInput.Icon
                          icon="calendar"
                          onPress={() => setTimePickerVisible(true)}
                          forceTextInputFocus={false} // 防止触发键盘
                        />
                      }
                              />

              <TimePickerModal
                visible={TimePickerVisible}
                onDismiss={() => setTimePickerVisible(false)}
                onConfirm={onTimeConfirm}
                hours={time?.hours || 12}
                minutes={time?.minutes || 0}
                label="选择时间"
                cancelLabel="取消"
                confirmLabel="确认"
              />



        <TextInput
                  mode="outlined"
                  label="单选日期"

                  value={date ? date.toLocaleDateString() : "选择日期"}
                  onPress={() => setVisible(true)}
right={
          <TextInput.Icon
            icon="calendar"
            onPress={() => setVisible(true)}
            forceTextInputFocus={false} // 防止触发键盘
          />
        }
                />
              <DatePickerModal
                locale="zh" // 中文显示
                mode="single" // 单选日期
                visible={visible}
                onDismiss={() => setVisible(false)}
                date={date}
                onConfirm={onConfirm}
                label="选择日期"
                startYear={1900} // 起始年份
                endYear={new Date().getFullYear()} // 结束年份
              />

        <TextInput
          mode="outlined"
          label="邮箱"
          placeholder="请输入电子邮箱"
          right={<TextInput.Affix text="/100" />}
        />

        <TextInput
          mode="outlined"  // 可选：'flat' 或 'outlined'
          label="多行文本输入"
          placeholder="请输入内容..."
          multiline={true}
          numberOfLines={4}  // 初始显示行数
          style={{ height: 120 }}  // 建议设置固定高度
        />

        <TextInput
          mode="outlined"
          label="登录名"
          placeholder="请输入登录名"
          right={<TextInput.Affix text="/100" />}
        />

        <Text>国家和地区</Text>
        <View style={styles.dropdownContainer}>
          <Dropdown
            label="国家"
            placeholder="选择国家"
            options={COUNTRY_OPTIONS}
            value={country}
            onSelect={handleCountryChange}
          />
        </View>

        <TextInput
          mode="outlined"
          label="姓名"
          placeholder="请输入姓氏"
          right={<TextInput.Affix text="/100" />}
        />

        <TextInput
          mode="outlined"
          label="名"
          placeholder="请输入名字"
          right={<TextInput.Affix text="/100" />}
        />

        <TextInput
          mode="outlined"
          label="昵称"
          placeholder="请输入昵称"
          right={<TextInput.Affix text="/100" />}
        />

        <TextInput
          mode="outlined"
          label="省"
          placeholder="请输入省份"
          right={<TextInput.Affix text="/100" />}
        />

        <TextInput
          mode="outlined"
          label="市"
          placeholder="请输入城市"
          right={<TextInput.Affix text="/100" />}
        />

        <TextInput
          mode="outlined"
          label={
            <Text>

              <Text>详细地址</Text>
              <Text style={{ color: 'red' }}>* </Text>
            </Text>
          }
      disabled
          placeholder="请输入详细地址"
        />

        <TextInput
          mode="outlined"
          label="邮编"
          placeholder="请输入邮政编码"
          right={<TextInput.Affix text="/100" />}
        />

        <TextInput
          mode="outlined"
          label="手机号"
          placeholder="请输入手机号"
          right={<TextInput.Affix text="/100" />}
        />

        <Button
          mode="contained"
          style={styles.wechatButton}
          buttonColor="orange"
          onPress={() => console.log('登录按钮被点击')}
        >
          Submit
        </Button>
        </View>
      </View>
      </ScrollView>
    </PaperProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 20
  },
  inputContainer: {
    paddingHorizontal: 20,
  },
  wechatButton: {
    marginTop: 20,
    padding: 50,
    paddingVertical: 8,
  },
  dropdownContainer: {
    zIndex: 999,
    elevation: 999
  }
});

export default Register;
