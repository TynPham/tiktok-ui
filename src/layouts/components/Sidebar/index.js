import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem';
import config from '~/configs';
import { FollowActiveIcon, FollowIcon, HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon } from '~/components/Icon';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="Dành cho bạn"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    iconActive={<HomeActiveIcon />}
                />
                <MenuItem
                    title="Đang Follow"
                    to={config.routes.following}
                    icon={<FollowIcon />}
                    iconActive={<FollowActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} iconActive={<LiveActiveIcon />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
