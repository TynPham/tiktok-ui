import Tooltip from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
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
            data: [
                {
                    title: 'Tiếng Việt',
                    country: 'Việt Nam',
                    clss: true,
                    titles: 'Language2',
                },
                {
                    title: 'العربية',
                    clss: true,
                    titles: 'Language2',
                },
                {
                    title: 'বাঙ্গালি (ভারত)',
                    clss: true,
                    titles: 'Language2',
                },
                {
                    title: 'Cebuano',
                    country: 'Pilipinas',
                    clss: true,
                    titles: 'Language2',
                },
                {
                    title: 'Čeština',
                    country: 'Česká republika',
                    clss: true,
                    titles: 'Language2',
                },
                {
                    title: 'Deutsch',
                    clss: true,
                    titles: 'Language2',
                },
                {
                    title: 'Ελληνικά',
                    country: 'Ελλάδα',
                    clss: true,
                    titles: 'Language2',
                },
                {
                    title: 'English',
                    clss: true,
                    titles: 'Language2',
                },
                {
                    title: 'Español',
                    clss: true,
                    titles: 'Language2',
                },
                {
                    title: 'Suomi',
                    country: 'Suomi',
                    clss: true,
                    titles: 'Language2',
                },
                {
                    title: 'Filipino',
                    country: 'Pilipinas',
                    clss: true,
                    titles: 'Language2',
                },
                {
                    title: 'Français',
                    clss: true,
                    titles: 'Language2',
                },
                {
                    title: 'עברית',
                    country: 'ישראל',
                    clss: true,
                    titles: 'Language2',
                },
                {
                    title: 'हिंदी',
                    clss: true,
                    titles: 'Language2',
                },
                {
                    title: 'Magyar',
                    country: 'Magyarország',
                    clss: true,
                    titles: 'Language2',
                },
                {
                    title: 'Bahasa Indonesia',
                    country: 'Indonesia',
                    clss: true,
                    titles: 'Language2',
                },
                {
                    title: 'Italiano',
                    country: 'Italia',
                    clss: true,
                    titles: 'Language2',
                },
                {
                    title: '日本語',
                    country: '（日本）',
                    clss: true,
                    titles: 'Language2',
                },
                {
                    title: 'Basa Jawa',
                    country: 'Indonesia',
                    clss: true,
                    titles: 'Language2',
                },
                {
                    title: 'ខ្មែរ',
                    country: 'កម្ពុជា',
                    clss: true,
                    titles: 'Language2',
                },
                {
                    title: '한국어',
                    country: '대한민국',
                    clss: true,
                    titles: 'Language2',
                },
                {
                    title: 'Bahasa Melayu',
                    country: 'Malaysia',
                    clss: true,
                    titles: 'Language2',
                },
                {
                    title: 'မြန်မာ',
                    country: 'မြန်မာ',
                    clss: true,
                    titles: 'Language2',
                },
                {
                    title: 'Nederlands',
                    country: 'Nederland',
                    clss: true,
                    titles: 'Language2',
                },
                {
                    title: 'Polski',
                    country: 'Polska',
                    clss: true,
                    titles: 'Language2',
                },
                {
                    title: 'Português',
                    country: 'Brasil',
                    clss: true,
                    titles: 'Language2',
                },
                {
                    title: 'Română',
                    country: 'Romania',
                    clss: true,
                    titles: 'Language2',
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
                    <Link className={cx('logo-tiktok')} to="/">
                        <img src={image.logo} alt="tiktok" />
                    </Link>
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

                    <Menu items={currentUser ? USER_MENU : MENU_LIST} className={currentUser ? 'menuItemUser' : ''}>
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
