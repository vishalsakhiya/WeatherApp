import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#fff'
    },
    container: {
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    textStyle: {
        fontSize: 18,
        marginVertical: '2%'
    },
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 22,
        marginVertical: '2%'
    },
    tempStyle: {
        fontWeight: '500',
        fontSize: 25,
        marginTop: '5%',
        marginHorizontal: '30%'
    },
    imgStyle: {
        height: 120,
        width: 120
    },
    homecontainer: {
        flex: 1,
        backgroundColor: '#fff'
    },
    item: {
        padding: 5,
    },
    title: {
        marginHorizontal: '2%',
        marginVertical: '2%',
        fontSize: 16,
    },
    title1: {
        marginHorizontal: '2%',
        marginVertical: '2%',
        fontSize: 12,
    },
    listTempView: {
        position: 'absolute',
        right: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    separateView: {
        height: 0.5,
        width: '100%',
        backgroundColor: '#aaaaaa'
    }
});

export default styles;