import React, { useEffect } from 'react';
import TargetProps from './target';

const Redirect = (target: TargetProps) => {
    useEffect(() => {
        window.open(target.target, '_blank');
    }, [target])

    return (
        <>
            Redirecting...
        </>
    )
}

export default Redirect;