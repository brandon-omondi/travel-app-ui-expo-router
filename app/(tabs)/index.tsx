// import {
//   Image,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import React, { useState } from "react";
// import { Stack } from "expo-router";
// import { Ionicons } from "@expo/vector-icons";
// import Colors from "@/constants/Colors";
// import { useHeaderHeight } from "@react-navigation/elements";
// import CategoryButtons from "@/components/CategoryButtons";
// import Listings from "@/components/Listings";
// import listingData from "@/data/food.json";
// import GroupListings from "@/components/GroupListings";
// import groupData from "@/data/groups.json";

// const Page = () => {
//   const headerHeight = useHeaderHeight();
//   const [modalVisible, setModalVisible] = useState(false);
//   const [category, setCategory] = useState("All");

//   const onCatChanged = (category: string) => {
//     console.log("Categpry: ", category);
//     setCategory(category);
//   };

//   return (
//     <>
//       <Stack.Screen
//         options={{
//           headerTransparent: true,
//           headerTitle: "",
//           headerRight: () => (
//             <TouchableOpacity
//               onPress={() => setModalVisible(true)}
//               style={{
//                 marginRight: 20,
//                 backgroundColor: Colors.white,
//                 padding: 10,
//                 borderRadius: 10,
//                 shadowColor: "#171717",
//                 shadowOffset: { width: 2, height: 4 },
//                 shadowOpacity: 0.2,
//                 shadowRadius: 3,
//               }}
//             >
//               <Ionicons name="bag-handle-outline" size={20} color={Colors.black} />
//             </TouchableOpacity>
//           ),
//         }}
//       />
//       <View style={[styles.container, { paddingTop: headerHeight }]}>
//         <ScrollView showsVerticalScrollIndicator={false}>
//           <Text style={styles.headingTxt}>What do you 
//           have a taste for?</Text>

//           <View style={styles.searchSectionWrapper}>
//             <View style={styles.searchBar}>
//               <Ionicons
//                 name="search"
//                 size={18}
//                 style={{ marginRight: 10 }}
//                 color={Colors.black}
//               />
//               <TextInput placeholder="Search..." style={{}}/>
//             </View>
//             <TouchableOpacity onPress={() => {}} style={styles.filterBtn}>
//               <Ionicons name="options" size={28} color={Colors.white} />
//             </TouchableOpacity>
//           </View>

//           <CategoryButtons onCagtegoryChanged={onCatChanged} />

//           <Listings listings={listingData} category={category} />

//           <GroupListings listings={groupData} />
//         </ScrollView>
//       </View>
//     </>
//   );
// };

// export default Page;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 20,
//     backgroundColor: Colors.bgColor,
//   },
//   headingTxt: {
//     fontSize: 28,
//     fontWeight: "800",
//     color: Colors.black,
//     marginTop: 10,
//   },
//   searchSectionWrapper: {
//     flexDirection: "row",
//     marginVertical: 20,
//   },
//   searchBar: {
//     flex: 1,
//     flexDirection: "row",
//     backgroundColor: Colors.white,
//     padding: 16,
//     borderRadius: 10,
//   },
//   filterBtn: {
//     backgroundColor: Colors.primaryColor,
//     padding: 12,
//     borderRadius: 10,
//     marginLeft: 20,
//   },
// });


////////////////////// PART TWO /////////////////////////////////////////
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Animated,
} from "react-native";
import React, { useState, useRef } from "react";
import { Stack, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { useHeaderHeight } from "@react-navigation/elements";
import CategoryButtons from "@/components/CategoryButtons";
import Listings from "@/components/Listings";
import listingData from "@/data/food.json";
import GroupListings from "@/components/GroupListings";
import groupData from "@/data/groups.json";

const Page = () => {
  const headerHeight = useHeaderHeight();
  const [modalVisible, setModalVisible] = useState(false);
  const [category, setCategory] = useState("All");

  const onCatChanged = (category: string) => {
    console.log("Category: ", category);
    setCategory(category);
  };

  const scrollY = useRef(new Animated.Value(0)).current;

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false }
  );

  const categoryButtonsTranslateY = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [0, -50],
    extrapolate: 'clamp',
  });

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerRight: () => (
            <TouchableOpacity
            onPress={() => router.push('/cart')}
              style={styles.headerRight}
            >
              <Ionicons name="bag-handle-outline" size={20} color={Colors.black} />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={[styles.container, { paddingTop: headerHeight }]}>
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          <Text style={styles.headingTxt}>What do you {'\n'}have a taste for?🤔</Text>

          <View style={styles.searchSectionWrapper}>
            <View style={styles.searchBar}>
              <Ionicons
                name="search"
                size={18}
                style={{ marginRight: 10 }}
                color={Colors.black}
              />
              <TextInput placeholder="Search..." style={{}} />
            </View>
            <TouchableOpacity onPress={() => {}} style={styles.filterBtn}>
              <Ionicons name="options" size={28} color={Colors.white} />
            </TouchableOpacity>
          </View>

          <Animated.View
            style={[
              styles.stickyHeader,
              { transform: [{ translateY: categoryButtonsTranslateY }] },
            ]}
          >
            <CategoryButtons onCagtegoryChanged={onCatChanged} />
          </Animated.View>

          <Listings listings={listingData} category={category} />

          <GroupListings listings={listingData} />
        </Animated.ScrollView>
      </View>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.bgColor,
  },
  headerRight: {
    marginRight: 20,
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  headingTxt: {
    fontSize: 28,
    fontWeight: "800",
    color: Colors.black,
    marginTop: 10,
  },
  searchSectionWrapper: {
    flexDirection: "row",
    marginVertical: 20,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 10,
  },
  filterBtn: {
    backgroundColor: Colors.primaryColor,
    padding: 12,
    borderRadius: 10,
    marginLeft: 20,
  },
  stickyHeader: {
    zIndex: 1,
    position: 'relative', // Needed for zIndex to take effect
  },
});

