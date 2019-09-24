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
				name: "variant",
				default: "primary",
				options: ["primary", "brand"],
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
				name: "action",
				default: "false",
				notes: "Decides if wrapper around icon is a button or not.",
				type: "Boolean"
			},
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
			},
			{
				name: "width",
				default: "2",
				notes:
					"Most icons are drawn with a <code>stroke</code>, you can dynamically adjust the <em>thickness</em> of the icon using this property. It’s especially useful when setting icons below their default size.",
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
				options: ['center', 'left', 'right'],
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
	}
];
