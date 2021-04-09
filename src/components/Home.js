import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { requestApiData } from '../actions/actions';
import styles from './styles';

const Home = (props) => {

    const [list, setList] = React.useState([]);

    useEffect(() => {
        callapi()
    }, []);

    useEffect(() => {
        var newdata = props.data.data
        if (newdata != null) {
            setList(newdata.list)
        }
    }, [props.data]);

    const callapi = () => {
        let url = 'http://api.openweathermap.org/data/2.5/find?lat=23.68&lon=90.35&cnt=50&appid=4367f85fe498f3442f4a6ca6f8779598&units=metric'
        var obj = {
            url: url
        }
        props.requestApiData(obj)
    }

    const Item = ({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => {
            props.navigation.navigate('WeatherDetail', { item: item })
        }}>
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.title1}>{item.weather[0].main}</Text>
                </View>
                <View style={styles.listTempView}>
                    <Text style={{ fontSize: 23 }}>{item.main.temp}{'°C'}</Text>
                </View>
            </View>
            <View style={styles.separateView}></View>
        </TouchableOpacity>
    );

    const renderItem = ({ item }) => (
        <Item item={item} />
    );

    return (
        <View style={styles.homecontainer}>
            <FlatList
                data={list}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const mapStateToProps = (state) => {
    return { data: state.data };
}
const mapDispatchToProps = dispatch =>
    bindActionCreators({
        requestApiData
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);

