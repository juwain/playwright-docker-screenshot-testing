import React from 'react';
import './Checkbox.css';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  indeterminate?: boolean;
}

export function Checkbox({
  label,
  indeterminate = false,
  className = '',
  id,
  checked,
  ...props
}: CheckboxProps) {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <label htmlFor={checkboxId} className={`checkbox-wrapper ${className}`}>
      <span className="checkbox-container">
        <input
          type="checkbox"
          id={checkboxId}
          className="checkbox-input"
          ref={(el) => {
            if (el) {
              el.indeterminate = indeterminate;
            }
          }}
          checked={indeterminate ? false : checked}
          {...props}
        />
        <span className={`checkbox-custom ${indeterminate ? 'checkbox-custom--indeterminate' : ''}`}>
          {indeterminate && <span className="checkbox-indeterminate-mark" />}
          {checked && !indeterminate && <span className="checkbox-check-mark">✓</span>}
        </span>
      </span>
      {label && <span className="checkbox-label">{label}</span>}
    </label>
  );
}
