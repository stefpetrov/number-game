import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

const InstructionText = ({ children, customStyle }) => {
  return <Text style={[styles.instructionText, customStyle]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans", // this is our identifier set by useFonts in App.js
    color: Colors.accent500,
    fontSize: 24,
  },
});
