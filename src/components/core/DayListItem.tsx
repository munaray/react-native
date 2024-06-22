import { Text, View, StyleSheet } from "react-native";

type DayListItemProps = {
	day: number;
};

const DayListItem = ({ day }: DayListItemProps) => {
	return (
		<View style={styles.box}>
			<Text style={styles.text}>{day}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},

	content: {
		gap: 10,
		padding: 10,
	},

	column: {
		gap: 10,
	},

	box: {
		backgroundColor: "#f9ede3",
		flex: 1,
		aspectRatio: 1,
		borderColor: "#9b4521",
		borderRadius: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		color: "#9b4521",
		fontSize: 70,
	},
});

export default DayListItem;
