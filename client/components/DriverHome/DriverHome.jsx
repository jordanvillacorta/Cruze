import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import RiderList from "./RiderList.jsx";
import Map from "./Map.jsx";
import DriverPickup from "./DriverPickup.jsx";
import DriverArrived from "./DriverArrived.jsx";
import OnTheWay from "./OnTheWay.jsx";
import * as Location from "expo-location";

const DriverHome = () => {
  const [rider, setRider] = useState({});
<<<<<<< HEAD
  const [dollarAmount, setDollarAmount] = useState("");
  const [miles, setMiles] = useState("");
  const [isRiderListVisible, setIsRiderListVisible] = useState(true);
  const [status, setStatus] = useState("rideList");
  const [driverLocation, setDriverLocation] = useState({
    latitude: 70.6414929,
    longitude: -73.9927213,
  });

  const changeRider = (rider) => {
    setRider(rider);
    setStatus("pickup");
  };

  const onTheWay = () => {
    setStatus("onTheWay");
  };

  const ArrivedToDestination = () => {
    setStatus("arrived");
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let { coords } = await Location.getCurrentPositionAsync({});
      setDriverLocation({
        latitude: coords.latitude,
        longitude: coords.longitude,
      });
=======
  const [dollarAmount, setDollarAmount] = useState('');
  const [miles, setMiles] = useState('');
  const [status, setStatus] = useState('rideList');
  const [driverLocation, setDriverLocation] = useState({latitude: 70.6414929,
    longitude: -73.9927213});
  const [origin, setOrigin] = useState({});
  const [destination, setDestination] = useState(null);
  const changeRider = async (rider) => {
    setRider(rider);
    // getCurrentLocation().then((loc) => {
    //   setDriverLocation({latitude: loc.latitude, longitude: loc.longitude});
    // });
    setOrigin(driverLocation);
    setDestination(rider.location)
    setStatus('pickup')
  }

  const onTheWay = () => {
    setOrigin(driverLocation);
    setDestination(rider.destination)
    setStatus('onTheWay');
  }

  const arrivedToDestination = () => {
    setDestination(null);
    setStatus('arrived');
  }

  const backToRideList = () => {
    setStatus('backToRiderList');
  }

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let {coords} = await Location.getCurrentPositionAsync({});
      return coords;
  }
  useEffect(() => {
    (async () => {
      // let { status } = await Location.requestForegroundPermissionsAsync();
      // if (status !== 'granted') {
      //   setErrorMsg('Permission to access location was denied');
      //   return;
      // }
      // let {coords} = await Location.getCurrentPositionAsync({});
      const coords = await getCurrentLocation()
      setDriverLocation({latitude: coords.latitude, longitude: coords.longitude});
>>>>>>> origin
    })();
  }, [setDriverLocation]);

  return (
    <>
<<<<<<< HEAD
      <Map destination={rider.location} driverLocation={driverLocation} />
      {status === "rideList" && <RiderList changeRider={changeRider} />}
      {status === "pickup" && (
        <DriverPickup rider={rider} onTheWay={onTheWay} />
      )}
      {status === "onTheWay" && (
        <OnTheWay rider={rider} ArrivedToDestination={ArrivedToDestination} />
      )}
      {status === "arrived" && <DriverArrived rider={rider} />}
=======
      <Map destination={destination} origin={origin} driverLocation={driverLocation}/>
      {(status === 'rideList' || status === 'backToRiderList') &&
        <RiderList
          changeRider={changeRider}
      />}
      {status === 'pickup' &&
        <DriverPickup rider={rider} onTheWay={onTheWay}/>
      }
      {status === 'onTheWay' &&
        <OnTheWay rider={rider} arrivedToDestination={arrivedToDestination} />
      }
      {status === 'arrived' &&
        <DriverArrived backToRideList={backToRideList} />
      }
      {/* {status === 'backToRiderList' &&
        <RiderList
          changeRider={changeRider}
        />
      } */}
>>>>>>> origin
    </>
  );
};

const styles = StyleSheet.create({
  mapView: {
    flex: 5,
  },
  driverPick: {
    flex: 1,
  },
});

export default DriverHome;
