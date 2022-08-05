import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';
import image from '~/assets/images';
import PopperWrapper from '~/components/Popper/wrapper';
import AccountItem from '~/components/AcountItem';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import Buttons from '~/components/Buttons';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={image.logo} alt="tiktok" />
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <div className={cx('Account')}>Tài khoản</div>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Tìm kiếm tài khoản và video" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <Buttons text icon={<FontAwesomeIcon icon={faPlus} />}>
                        Tải lên
                    </Buttons>
                    <Buttons
                        primary
                        onClick={() => {
                            alert('cmm');
                        }}
                    >
                        Đăng nhập
                    </Buttons>
                </div>
            </div>
        </header>
    );
}

export default Header;
