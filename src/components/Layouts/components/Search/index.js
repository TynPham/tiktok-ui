import { useEffect, useState, useRef } from 'react';
import Tippy from '@tippyjs/react/headless';
import PopperWrapper from '~/components/Popper/wrapper';
import AccountItem from '~/components/AcountItem';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Search.module.scss';
import useDebounce from '~/hook/useDebounce';

const cx = classNames.bind(styles);

function SearchHd() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showSearch, setShowSearch] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const debounce = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debounce.trim()) {
            return;
        }

        setLoading(true);

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounce)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [debounce]);

    const handleHide = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    return (
        <Tippy
            interactive
            visible={showSearch && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <div className={cx('Account')}>Tài khoản</div>
                        {searchResult.map((result) => (
                            <AccountItem data={result} key={result.id} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={() => {
                setShowSearch(false);
            }}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                        setShowSearch(true);
                    }}
                    onFocus={() => setShowSearch(true)}
                    placeholder="Tìm kiếm tài khoản và video"
                />
                <button className={cx('clear')}>
                    {showSearch && !loading && <FontAwesomeIcon icon={faCircleXmark} onClick={handleHide} />}
                </button>
                {loading && <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />}
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </Tippy>
    );
}

export default SearchHd;
