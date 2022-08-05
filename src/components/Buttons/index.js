import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './Buttons.module.scss';
import classNames from 'classnames/bind';
import { faGalacticSenate } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Buttons({
    primary = false,
    outline = false,
    text = false,
    small = false,
    large = false,
    rounded = false,
    disable = false,
    href,
    to,
    children,
    icon,
    onClick,
    ...passProp
}) {
    let Element = 'button';

    const prop = {
        onClick,
        ...passProp,
    };

    if (disable) {
        Object.keys(prop).forEach((key) => {
            if (key.startsWith('on') && typeof prop[key] === 'function') {
                delete prop[key];
            }
        });
    }

    if (to) {
        prop.to = to;
        Element = Link;
    } else if (href) {
        prop.href = href;
        Element = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        text,
        small,
        large,
        rounded,
        disable,
    });

    return (
        <Element className={classes} {...prop}>
            {icon && <span className={cx('icon-plus')}>{icon}</span>}
            <span>{children}</span>
        </Element>
    );
}

export default Buttons;
