import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OverlayExample = () => {
  return (
    <View style={styles.container}>
      {/* Main Content */}
      <View style={styles.mainContent}>
        <Text>Main Content</Text>
      </View>

      {/* Overlay */}
      <View style={styles.overlay}>
        <Text>Overlay</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Make sure the container uses relative positioning
  },
  mainContent: {
    backgroundColor: 'lightblue',
    padding: 20,
    zIndex: 1, // Set a higher zIndex for the main content
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Use absolute positioning to overlay the entire screen
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2, // Set a lower zIndex for the overlay to appear above the main content
  },
});

export default OverlayExample;
