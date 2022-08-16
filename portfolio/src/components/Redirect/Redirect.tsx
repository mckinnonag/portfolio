import React, { useEffect } from 'react';
import TargetProps from './target';

const Redirect = (target: TargetProps) => {
    useEffect(() => {
        window.open(target.target, '_blank');
    }, [target])

    return (
        <h3>Redirecting...</h3>
    )
}

export default Redirect;