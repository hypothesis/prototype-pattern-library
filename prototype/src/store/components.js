export const components = [
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
				notes: "Users must select a valid icon from the <a href='/#icon'>Icon</a> component.",
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
				name: "variant",
				default: "primary",
				options: ["primary", "secondary", "tertiary"],
				type: "String"
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
				notes: "Most icons are drawn with a <code>stroke</code>, you can dynamically adjust the <em>thickness</em> of the icon using this property. It’s especially useful when setting icons below their default size.",
				type: "Number"
			}
		]
	}
];