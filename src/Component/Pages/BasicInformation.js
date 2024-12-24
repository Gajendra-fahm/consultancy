import { Text } from "../ui/Text";

function BasicCard(props) {
	const { cardTitle, cardSubtitle, children } = props;

	return (
		<div className="shadow-custom bg-white divide-y-2 rounded-md">
			<div className="p-2 px-2">
				<Text as="h3" className="text-blue-500 md:font-bold ">
					{cardTitle}
				</Text>
			</div>
			<div className="p-2 px-2">{children}</div>
		</div>
	);
}

export default BasicCard;