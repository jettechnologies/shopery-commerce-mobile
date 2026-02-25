import { Text } from "@/components/Themed";
import { AppButton, SafeScreen } from "@/components/ui";
import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Pressable, View } from "react-native";
import PagerView from "react-native-pager-view";

export default function OnboardingScreen() {
  const pagerRef = useRef<PagerView>(null);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (page < slides.length - 1) {
        pagerRef.current?.setPage(page + 1);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [page]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setPage((prevPage) => {
  //       const nextPage = prevPage < slides.length - 1 ? prevPage + 1 : 0;
  //       pagerRef.current?.setPage(nextPage); // move pager
  //       return nextPage; // update state
  //     });
  //   }, 4000);

  //   return () => clearInterval(interval);
  // }, []);

  const slides = [
    {
      image: require("@/assets/images/onboarding-one.jpg"),
      title: "Various Collections Of The Latest Products",
      description:
        "Urna amet, suspendisse ullamcorper ac elit diam facilisis cursus vestibulum.",
    },
    {
      image: require("@/assets/images/onboarding-two.jpg"),
      title: "Complete Collection Of Colors And Sizes",
      description:
        "Urna amet, suspendisse ullamcorper ac elit diam facilisis cursus vestibulum.",
    },
    {
      image: require("@/assets/images/onboarding-three.jpg"),
      title: "Find The Most Suitable Outfit For You",
      description:
        "Urna amet, suspendisse ullamcorper ac elit diam facilisis cursus vestibulum.",
    },
  ];

  // console.log(slides, "current page");

  return (
    <SafeScreen>
      <View className="flex-1 px-6 border-2 border-black">
        {/* Skip button */}
        <View className="items-end mt-4 mb-2">
          <Pressable
            onPress={async () => {
              router.replace("/(auth)/login");
            }}
          >
            <Text className="text-primary500 font-semibold">Skip</Text>
          </Pressable>
        </View>

        {/* PagerView */}
        {/* <View className="w-full border-2 border-black h-40">
          <PagerView
            ref={pagerRef}
            style={{ flex: 1 }}
            initialPage={0}
            onPageSelected={(e) => setPage(e.nativeEvent.position)}
          >
            {slides.map((slide, index) => (
              <View key={index} style={{ flex: 1 }}>
                <OnboardingSlide {...slide} />
              </View>
            ))}
          </PagerView>

          <PaginationDots total={slides.length} current={page} />
        </View> */}

        {/* Next / Create Account button */}
        <View className="mb-8 mt-2">
          <AppButton
            title={page === slides.length - 1 ? "Create Account" : "Next"}
            onPress={() => undefined}
            // onPress={async () => {
            //   if (page === slides.length - 1) {
            //     router.replace("/signup");
            //   } else {
            //     pagerRef.current?.setPage(page + 1);
            //   }
            // }}
          />
        </View>
      </View>
    </SafeScreen>
  );
}
