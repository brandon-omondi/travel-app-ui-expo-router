import { Feather } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack, router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Platform,TouchableOpacity, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";


export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="cart" 
      options={{
        presentation: 'modal',
        headerTransparent: false,
        headerTitle: "Cart",
        headerLeft: () => (
            <TouchableOpacity
                onPress={() => router.back()}
                style={{
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    borderRadius: 10,
                    padding: 4,
                }}
            >
                <View
                    style={{
                        backgroundColor: Colors.white,
                        padding: 6,
                        borderRadius: 10,
                    }}
                >
                    <Feather name="arrow-left" size={20} />
                </View>
            </TouchableOpacity>
        ),
    }}
       />
       <Stack.Screen name="checkout" 
      options={{
        presentation: 'modal',
        headerTransparent: false,
        headerTitle: "checkout",
        headerLeft: () => (
            <TouchableOpacity
                onPress={() => router.back()}
                style={{
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    borderRadius: 10,
                    padding: 4,
                }}
            >
                <View
                    style={{
                        backgroundColor: Colors.white,
                        padding: 6,
                        borderRadius: 10,
                    }}
                >
                    <Feather name="arrow-left" size={20} />
                </View>
            </TouchableOpacity>
        ),
    }}
       />
       <Stack.Screen name="progress" 
      options={{
        presentation: 'modal',
        headerTransparent: false,
        headerTitle: "Track Progress",
        headerLeft: () => (
            <TouchableOpacity
                onPress={() => router.back()}
                style={{
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    borderRadius: 10,
                    padding: 4,
                }}
            >
                <View
                    style={{
                        backgroundColor: Colors.white,
                        padding: 6,
                        borderRadius: 10,
                    }}
                >
                    <Feather name="arrow-left" size={20} />
                </View>
            </TouchableOpacity>
        ),
    }}
       />
    </Stack>
  );
}
