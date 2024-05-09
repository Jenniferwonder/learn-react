import {
	AiOutlineCalendar,
	AiOutlineShoppingCart,
	AiOutlineStock,
} from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";
import { GiLouvrePyramid } from "react-icons/gi";

export const pageLinks = [
	{
		title: "Basics",
		links: [
			{
				name: "basic",
				icon: <FiShoppingBag />,
			},
		],
	},
	{
		title: "Hooks",
		links: [
			{
				name: "useState",
				icon: <AiOutlineShoppingCart />,
			},
			{
				name: "useReducer",
				icon: <IoMdContacts />,
			},
			{
				name: "useContext",
				icon: <RiContactsLine />,
			},
			{
				name: "useRef",
				icon: <RiContactsLine />,
			},
			{
				name: "useEffect",
				icon: <RiContactsLine />,
			},
			{
				name: "useMemo",
				icon: <RiContactsLine />,
			},
		],
	},
	{
		title: "React Mini App",
		links: [
			{
				name: "product-table",
				icon: <AiOutlineShoppingCart />,
			},
			{
				name: "tic-tac-toe",
				icon: <GiLouvrePyramid />,
			},
			{
				name: "to-do-app",
				icon: <GiLouvrePyramid />,
			},
		],
	},
	{
		title: "Routing",
		links: [
			{
				name: "router-dom",
				icon: <AiOutlineCalendar />,
			},
		],
	},
	{
		title: "Query",
		links: [
			{
				name: "react-query",
				icon: <AiOutlineStock />,
			},
			// {
			// 	name: "area",
			// 	icon: <AiOutlineAreaChart />,
			// },

			// {
			// 	name: "bar",
			// 	icon: <AiOutlineBarChart />,
			// },
			// {
			// 	name: "pie",
			// 	icon: <FiPieChart />,
			// },
			// {
			// 	name: "financial",
			// 	icon: <RiStockLine />,
			// },
			// {
			// 	name: "color-mapping",
			// 	icon: <BsBarChart />,
			// },
			// {
			// 	name: "pyramid",
			// 	icon: <GiLouvrePyramid />,
			// },
			// {
			// 	name: "stacked",
			// 	icon: <AiOutlineBarChart />,
			// },
			// {
			// 	name: "kanban",
			// 	icon: <BsKanban />,
			// },
			// {
			// 	name: "editor",
			// 	icon: <FiEdit />,
			// },
			// {
			// 	name: "color-picker",
			// 	icon: <BiColorFill />,
			// },
		],
	},
];

export const themeColors = [
	{
		name: "blue-theme",
		color: "#1A97F5",
	},
	{
		name: "green-theme",
		color: "#03C9D7",
	},
	{
		name: "purple-theme",
		color: "#7352FF",
	},
	{
		name: "red-theme",
		color: "#FF5C8E",
	},
	{
		name: "indigo-theme",
		color: "#1E4DB7",
	},
	{
		color: "#FB9678",
		name: "orange-theme",
	},
];
