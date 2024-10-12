import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const data = [
    {
        title: 'Cáp chuyển từ Cổng USB sang PS2...',
        image: require('../assets/giacchuyen1.png'),
        price: '69.900 đ',
        discount: '39%',
        quantity: 15,
    },
    {
        title: 'Cáp chuyển từ Cổng USB sang PS2...',
        image: require('../assets/daynguon1.png'),
        price: '69.900 đ',
        discount: '39%',
        quantity: 15,
    }, {
        title: 'Cáp chuyển từ Cổng USB sang PS2...',
        image: require('../assets/dauchuyendoipsps21.png'),
        price: '69.900 đ',
        discount: '39%',
        quantity: 15,
    }, {
        title: 'Cáp chuyển từ Cổng USB sang PS2...',
        image: require('../assets/dauchuyendoi1.png'),
        price: '69.900 đ',
        discount: '39%',
        quantity: 15,
    }, {
        title: 'Cáp chuyển từ Cổng USB sang PS2...',
        image: require('../assets/carbusbtops21.png'),
        price: '69.900 đ',
        discount: '39%',
        quantity: 15,
    }, {
        title: 'Cáp chuyển từ Cổng USB sang PS2...',
        image: require('../assets/daucam1.png'),
        price: '69.900 đ',
        discount: '39%',
        quantity: 15,
    },
];

const Item = ({ title, image, price, discount, quantity }) => (
    <View style={styles.itemContainer}>
        <Image source={image} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.priceContainer}>
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.discount}>-{discount}</Text>
        </View>

        <View style={styles.feedback}>
            <View style={styles.starContainer}>
                <Image source={require('../assets/star1.png')} style={styles.star} />
                <Image source={require('../assets/star1.png')} style={styles.star} />
                <Image source={require('../assets/star1.png')} style={styles.star} />
                <Image source={require('../assets/star1.png')} style={styles.star} />
                <Image source={require('../assets/star5.png')} style={styles.star} />
            </View>
            <Text style={styles.quantity}>({quantity})</Text>
        </View>



    </View>
);


export default function Screen2() {
    return (
        <View style={styles.container}>
            <View style={{ height: 50, backgroundColor: '#1BA9FF', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 10 }}>
                <Image source={require('../assets/left.png')} style={{ width: 20, height: 20 }} />
                <TouchableOpacity style={styles.search} >
                    <Image source={require('../assets/search.png')} style={{ width: 20, height: 20 }} />
                    <Text style={{ color: '#000', fontSize: 12, marginLeft: 5 }}>Dây cáp usb</Text>
                </TouchableOpacity>
                <Image source={require('../assets/cart1.png')} style={{ width: 20, height: 20 }} />
                <Image source={require('../assets/setting.png')} style={{ width: 18, height: 5 }} />
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) => <Item {...item} />}
                keyExtractor={(item) => item.title}
                numColumns={2}
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
        justifyContent: 'space-between',
    },
    itemContainer: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 10,
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
    },
    price: {
        fontSize: 12,
        fontWeight: 700,
        lineHeight: 14.06,
        fontFamily: 'Roboto',
    },
    discount: {
        color: '#969DAA',
        fontSize: 12,
        fontWeight: 400,
        lineHeight: 14.06,
        fontFamily: 'Roboto',
        marginLeft: 10
    },
    starContainer: {
        flexDirection: 'row',
    },
    star: {
        width: 12,
        height: 12,
        marginHorizontal: 1,
    },
    quantity: {
        fontSize: 12,
        color: '#000',
        marginLeft: 5,
    },
    feedback: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginTop: 10
    },
    search: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        height: 30,
        width: 200,
        paddingHorizontal: 10,

    }
});
