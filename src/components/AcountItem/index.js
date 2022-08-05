import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src={
                    'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/2f5ea0aa35f6b3ca8155cdcc8a236124~c5_300x300.webp?x-expires=1659754800&x-signature=MJ6Ln7ikvkjRAMM4hm7dGZ2ShyE%3D'
                }
                alt="image"
            />
            <div className={cx('name')}>
                <h4 className={cx('user-name')}>femin</h4>
                <p className={cx('nick-name')}>Thiên Ân</p>
            </div>
        </div>
    );
}

export default AccountItem;
