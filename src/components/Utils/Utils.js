import React from 'react';
import './Utils.css';

export function Button({className, ...props}) {
    return <button className={['button', className].join(' ')} {...props} />
}

export function Input({className, ...props}) {
    return <input className={['input', className].join(' ')} {...props} />
}

export function Form({className, ...props}) {
    return <form className={['form', className].join(' ')} {...props} />
}

export function Section({className, ...props}) {
    return <section className={['section', className].join(' ')} {...props} />
}

export function Label({className, ...props}) {
    return <label className={['label', className].join(' ')} {...props} />
}