import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
// import StarRating from 'react-native-star-rating';
import { useTheme } from "../../../../theme/themeProvider.js";

import { Rating, AirbnbRating } from "react-native-ratings";
import { LanguageContext } from "../../../languages/index";
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faStar } from '@fortawesome/free-regular-svg-icons';

const Arrived = ({ tripStatus, handleStatus, profileOpen }) => {
  const { languagePackages } = React.useContext(LanguageContext);
  const { colors, isDark } = useTheme();
  const textStyle = {
    color: colors.text,
  };
  const safeStyle = {
    backgroundColor: colors.background,
  };

  const [rating, setRating] = useState(0);

  // useEffect(() => {
  //   if (tripStatus === "pickUp") {
  //     const test = setTimeout(() => handleStatus("arrived"), 5000);
  //     return () => clearTimeout(test);
  //   } else {
  //     return;
  //   }
  // }, [handleStatus]);

  if (tripStatus === "arrived" && !profileOpen) {
    return (
      <View style={[styles.container, safeStyle]}>
        <Text style={[styles.text, textStyle]}>
          {languagePackages?.ArrivedAtDestination}
        </Text>
        <Text style={[styles.rateText, textStyle]}>
          {languagePackages?.HowWasYourTrip}
        </Text>
        <View style={[styles.subContainer, textStyle]}>
          <View style={styles.stars}>
            <Rating
              type="custom"
              ratingColor="#B3E5FD"
              onStartRating={(rating) => setRating(rating)}
              imageSize={35}
              startingValue={0}
            />
          </View>
          <View style={styles.button}>
            <Button
              color="black"
              title="SUBMIT"
              onPress={() => {
                handleStatus("whereTo");
              }}
            />
          </View>
        </View>
      </View>
    );
  } else {
    return null;
  }
};

export default Arrived;

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
  },
  text: {
    padding: 15,
    fontSize: 25,
    fontWeight: "bold",
  },
  rateText: {
    fontSize: 20,
    paddingLeft: 15,
  },
  subContainer: {
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  stars: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#B3E5FD",
    borderRadius: 10,
  },
});
