import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title }) => {
    return (
        <Helmet>
            <title>{title || '2D Market'}</title>
            {/* Thêm các siêu dữ liệu khác nếu cần */}
        </Helmet>
    );
};

export default Meta;