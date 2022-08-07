import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import image from '~/assets/images';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const [img, setImg] = useState(data.avatar);

    const handleImageError = () => {
        setImg(image.no_image);
    };

    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <img className={cx('avatar')} src={img} alt="image" onError={handleImageError} />
            <div className={cx('name')}>
                <div className={cx('User')}>
                    <h4 className={cx('user-name')}>{data.nickname}</h4>
                    {data.tick && <FontAwesomeIcon icon={faCircleCheck} className={cx('check')} />}
                </div>
                <p className={cx('full-name')}>{data.full_name}</p>
            </div>
        </Link>
    );
}

export default AccountItem;
