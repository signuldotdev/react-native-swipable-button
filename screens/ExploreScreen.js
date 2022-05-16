import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import React, { useState } from "react";
import SwipableTabs from "../components/SwipableTabs";

const ExploreScreen = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <SwipableTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </View>
    </SafeAreaView>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({});
