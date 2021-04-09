import React from 'react';
import { View, Text, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import styles from './styles';

const WeatherDetail = (props) => {
    const [detail, setDetail] = React.useState(props.route.params.item);

    const mapView = () => {
        return (
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    region={{
                        latitude: detail.coord.lat,
                        longitude: detail.coord.lon,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: detail.coord.lat,
                            longitude: detail.coord.lon,
                        }}
                        title={detail.name}
                        description={''}
                    />
                </MapView>
            </View>
        )
    }
    const detailView = () => {
        return (
            <View style={{ marginHorizontal: '3%', flexDirection: 'row' }}>
                <View>
                    <Text style={styles.titleStyle}>{detail.name}</Text>
                    <Text style={styles.textStyle}>{detail.weather[0].main}</Text>
                    <Text style={styles.textStyle}>{'Humidity: '}{detail.main.humidity}</Text>
                    <Text style={styles.textStyle}>{'Wind Speed: '}{detail.wind.speed}</Text>
                    <Text style={styles.textStyle}>{'Max. Temp: '}{detail.main.temp_max}{'°C'}</Text>
                    <Text style={styles.textStyle}>{'Min. Temp: '}{detail.main.temp_min}{'°C'}</Text>
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }} >
                    <Text style={styles.tempStyle}>{detail.main.temp}{'°C'}
                    </Text>
                    <Image
                        source={{ uri: 'cloud' }}
                        style={styles.imgStyle}
                        resizeMode={"contain"} />
                </View>
            </View>
        )
    }
    return (
        <View style={styles.mainView}>
            {mapView()}
            {detailView()}
        </View>
    );
}

export default WeatherDetail;

