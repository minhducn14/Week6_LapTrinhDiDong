import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const data = [
    {
        title: 'Ca nấu lẩu nấu mì mini',
        shopTitle: 'Devang',
        image: require('../assets/ca_nau_lau.png'),
    },
    {
        title: '1 kg khô gà bơ tỏi',
        shopTitle: 'LTD Food',
        image: require('../assets/ga_bo_toi.png'),
    },
    {
        title: 'Xe cần cẩu đa năng',
        shopTitle: 'Thế giới đồ chơi',
        image: require('../assets/xe_can_cau.png'),
    },
    {
        title: 'Đồ chơi dạng mô hình',
        shopTitle: 'Thế giới đồ chơi',
        image: require('../assets/do_choi_dang_mo_hinh.png'),
    },
    {
        title: 'Lãnh đạo giản đơn',
        shopTitle: 'Minh Long Book',
        image: require('../assets/lanh_dao_gian_don.png'),
    },
    {
        title: 'Hiếu lòng con trẻ',
        shopTitle: 'Minh Long Book',
        image: require('../assets/hieu_long_con_tre.png'),
    },
];

const Item = ({ title, shopTitle, image }) => {
    return (
        <View style={styles.itemContainer}>
            <Image source={image} style={{ width: 50, height: 50 }} />
            <View style={styles.info}>
                <Text style={styles.infoText}>{title}</Text>
                <Text style={styles.infoText}>Shop {shopTitle}</Text>
            </View>
            <TouchableOpacity style={styles.buttonChat}>
                <Text style={styles.buttonChatText}>Chat</Text>
            </TouchableOpacity>
        </View>
    );
};

export default function Screen1() {
    return (
        <View style={styles.container}>
            <View style={{ height: 50, backgroundColor: '#1BA9FF', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 10 }}>
                <Image source={require('../assets/left.png')} style={{ width: 20, height: 20 }} />
                <Text style={{ fontSize: 20, color: 'white' }}>Chat</Text>
                <Image source={require('../assets/cart.png')} style={{ width: 20, height: 20 }} />
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) => <Item {...item} />}
                keyExtractor={(item) => item.title}
            />

            <View style={{ height: 50, backgroundColor: '#1BA9FF', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 10 }}>
                <Image source={require('../assets/list.png')} style={{ width: 20, height: 20 }} />
                <Image source={require('../assets/home.png')} style={{ width: 20, height: 20 }} />
                <Image source={require('../assets/back.png')} style={{ width: 20, height: 20 }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'space-around',
        justifyContent: 'center',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 100,
        borderBottomColor: 'black',
        borderWidth: 0.1,
    },
    info: {
        marginLeft: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'space-between',
    },
    buttonChat: {
        backgroundColor: '#F31111',
        width: 90,
        height: 30,
    },
    buttonChatText: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
    },
    infoText: {
        fontSize: 16,
    },
});
