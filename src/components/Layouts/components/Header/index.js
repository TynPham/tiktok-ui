import Tooltip from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';
import image from '~/assets/images';
import {
    faPlus,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faArrowRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import Buttons from '~/components/Buttons';
import Menu from '~/components/Popper/Menu';
import { MessageIcon, UploadIcon } from '~/components/Icon';
import SearchHd from '../Search';
import Images from '~/components/image';

const cx = classNames.bind(styles);

const MENU_LIST = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng việt',
        clss: true,
        children: {
            title: 'Language',
            data: [
                {
                    title: 'Tiếng Việt',
                    country: 'Việt Nam',
                    clss: true,
                },
                {
                    title: 'العربية',
                    clss: true,
                },
                {
                    title: 'বাঙ্গালি (ভারত)',
                    clss: true,
                },
                {
                    title: 'Cebuano',
                    country: 'Pilipinas',
                    clss: true,
                },
                {
                    title: 'Čeština',
                    country: 'Česká republika',
                    clss: true,
                },
                {
                    title: 'Deutsch',
                    clss: true,
                },
                {
                    title: 'Ελληνικά',
                    country: 'Ελλάδα',
                    clss: true,
                },
                {
                    title: 'English',
                    clss: true,
                },
                {
                    title: 'Español',
                    clss: true,
                },
                {
                    title: 'Suomi',
                    country: 'Suomi',
                    clss: true,
                },
                {
                    title: 'Filipino',
                    country: 'Pilipinas',
                    clss: true,
                },
                {
                    title: 'Français',
                    clss: true,
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
        clss: true,
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt trên bàn phím',
        clss: true,
    },
];

const USER_MENU = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'Hồ sơ',
        clss: true,
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Nhận xu',
        clss: true,
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Cài đặt',
        clss: true,
    },
    ...MENU_LIST,
    {
        icon: <FontAwesomeIcon icon={faArrowRightToBracket} />,
        title: 'Đăng xuất',
        clss: true,
        to: '/logout',
        isBorderTop: true,
    },
];

function Header() {
    const currentUser = true;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={image.logo} alt="tiktok" />
                </div>
                <SearchHd />
                <div className={cx('action')}>
                    <Buttons text icon={<FontAwesomeIcon icon={faPlus} />}>
                        Tải lên
                    </Buttons>
                    {currentUser ? (
                        <>
                            <Tooltip content="Tin nhắn">
                                <button className={cx('icon-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tooltip>

                            <Tooltip content="Hộp thư">
                                <button className={cx('icon-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tooltip>
                        </>
                    ) : (
                        <>
                            <Buttons
                                primary
                                onClick={() => {
                                    alert('cmm');
                                }}
                            >
                                Đăng nhập
                            </Buttons>
                        </>
                    )}

                    <Menu items={currentUser ? USER_MENU : MENU_LIST}>
                        {currentUser ? (
                            <Images
                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7128564121953730566~c5_720x720.jpeg?x-expires=1659934800&x-signature=mP8KJoSb1Ug8ZWfM8MOMBw93Rf8%3D"
                                alt="PT"
                                className={cx('user-image')}
                            />
                        ) : (
                            <button className={cx('more-btn')}>{<FontAwesomeIcon icon={faEllipsisVertical} />}</button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
