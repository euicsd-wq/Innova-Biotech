import React from 'react';
import { Navigate } from 'react-router-dom';

const NewsPage: React.FC = () => {
    // This page is now handled by the Media Center. Redirecting...
    return <Navigate to="/media-center" replace />;
};

export default NewsPage;
