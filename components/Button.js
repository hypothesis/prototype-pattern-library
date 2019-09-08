import classNames from "classnames";
import propTypes from "prop-types";
import style from "../styles/components/Button.scss";

import Icon from "../Icon";

export default function Button({
	disabled = false,
	dropdown = false,
	icon = false,
	iconSize = 14,
	label = "Button label",
	variant = "primary"
}) {
	return (
		<button
			className={classNames([style.Button, className])}
			disabled={disabled}
		>
			{label}
			<Icon name={icon} size={iconSize} />
		</button>
		<button
			className={classNames([style.Button, style.Button-- + variant, className])}
		>
			{icon &&
				<section className={style.Button__icon}>
					<Icon name={icon} size={iconSize} />
				</section>
			}
			{label &&
				<section className={classNames([style.Button__label, 'type__size--m-l'])}>
					{label}
				</section>
			}
			{dropdown &&
				<section className={style.Button__dropdown}>
					<Icon name="caret-down" size={12} width={3} />
				</section>
			}
		</button>
	);
}

Button.propTypes = {
	className: propTypes.string,
	disabled: propTypes.bool,
	dropdown: propTypes.bool,
	icon: propTypes.string,
	iconSize: propTypes.number,
	label: propTypes.string,
	variant: propTypes.string
};
