export const components = [
	{
		title: "Badge",
		props: [
			{
				name: "label",
				default: "Button label",
				type: "String"
			},
			{
				name: "micro",
				default: "true",
				notes: "Determines the overall size of the badge.",
				type: "Boolean"
			},
			{
				name: "variant",
				default: "primary",
				options: ["primary", "brand", "contrast"],
				type: "String"
			}
		]
	},
	{
		title: "Button",
		props: [
			{
				name: "dropdown",
				default: "false",
				type: "Boolean"
			},
			{
				name: "icon",
				default: "false",
				notes:
					"Users must select a valid icon from the <a href='/#icon'>Icon</a> component.",
				type: "Boolean/String"
			},
			{
				name: "iconSize",
				default: "14",
				type: "Number"
			},
			{
				name: "label",
				default: "Button label",
				type: "String"
			},
			{
				name: "reverse",
				default: "false",
				notes:
					"If you’d like the icon on the right instead of the default left position",
				type: "Boolean"
			},
			{
				name: "variant",
				default: "primary",
				options: ["primary", "secondary", "tertiary", "brand", "muted"],
				type: "String"
			}
		]
	},
	{
		title: "Card",
		props: [
			{
				name: "padding",
				default: "true",
				type: "Boolean"
			}
		]
	},
	{
		title: "Control",
		props: [
			{
				name: "disabled",
				default: "false",
				type: "Boolean"
			},
			{
				name: "icon",
				default: "false",
				notes:
					"Users must select a valid icon from the <a href='/#icon'>Icon</a> component.",
				type: "Boolean/String"
			},
			{
				name: "inline",
				default: "false",
				type: "Boolean"
			},
			{
				name: "label",
				default: "Input label",
				type: "String"
			},
			{
				name: "reverse",
				default: "false",
				notes:
					"If you’d like the icon on the left instead of the default right position.",
				type: "Boolean"
			},
			{
				name: "status",
				default: "false",
				options: ["invalid", "valid"],
				type: "Boolean/String"
			},
			{
				name: "statusLabel",
				default: "false",
				type: "Boolean/String"
			}
		]
	},
	{
		title: "Icon",
		props: [
			{
				name: "name",
				default: "annotate",
				type: "String"
			},
			{
				name: "size",
				default: "14",
				type: "Number"
			}
		]
	},
	{
		title: "Menu",
		props: [
			{
				name: "active",
				default: "false",
				notes:
					"Controls the visibility of the Menu. Typically this is controlled via the parent component through a user interaction.",
				type: "Boolean"
			},
			{
				name: "direction",
				default: "center",
				notes:
					"Determines the direction the menu attaches itself to, related to the element.",
				options: ["center", "left", "right"],
				type: "String"
			}
		]
	},
	{
		title: "NavItem",
		props: [
			{
				name: "dropdown",
				default: "false",
				type: "Boolean"
			},
			{
				name: "icon",
				default: "false",
				notes:
					"Users must select a valid icon from the <a href='/#icon'>Icon</a> component.",
				type: "Boolean/String"
			},
			{
				name: "label",
				default: "Button label",
				type: "String"
			},
			{
				name: "reverse",
				default: "false",
				notes:
					"If you’d like the icon on the right instead of the default left position",
				type: "Boolean"
			},
			{
				name: "small",
				default: "false",
				notes:
					"Determines the overall size of the text and height of the element.",
				type: "Boolean"
			}
		]
	},
	{
		title: "Tag",
		props: [
			{
				name: "count",
				default: "false",
				type: "Boolean/Number"
			},
			{
				name: "icon",
				default: "false",
				notes:
					"Users must select a valid icon from the <a href='/#icon'>Icon</a> component.",
				type: "Boolean/String"
			},
			{
				name: "label",
				default: "Tag label",
				type: "String"
			},
			{
				name: "parent",
				default: "false",
				type: "String"
			}
		]
	}
];
