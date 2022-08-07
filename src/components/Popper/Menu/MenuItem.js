import Buttons from '~/components/Buttons';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const isBorder = data.isBorderTop ? 'BorderTop' : '';
    const isClasspd = data.clss ? 'isPadding' : '';
    return (
        <Buttons icon={data.icon} to={data.to} classess={cx('menu-item', isBorder, isClasspd)} onClick={onClick}>
            {`${data.title} ${data.country ? `(${data.country})` : ''}`}
        </Buttons>
    );
}

export default MenuItem;
