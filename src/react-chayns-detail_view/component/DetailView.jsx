import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const DetailView = ({ children, className, ...props }) => {
    const classNames = classnames('cc__detail-view', {
        [className]: className
    });

    return (
        <div
            className={classNames}
            {...props}
        >
            {children}
        </div>
    );
};

DetailView.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]),
    className: PropTypes.string,
};

DetailView.defaultProps = {
    children: null,
    className: '',
};

export default DetailView;
