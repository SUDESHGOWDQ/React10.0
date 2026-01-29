import React from 'react'
import './index.css'

export const Radio = ({type, onChange, value, name, label, checked, id}) => {
  return (
    <div className="radio-wrapper">
      <input 
        type={type} 
        onChange={onChange}  
        value={value} 
        name={name}
        checked={checked}
        id={id || value}
        className="radio-input"
      />
      <label htmlFor={id || value} className="radio-label">
        <span className="radio-custom"></span>
        {label || value}
      </label>
    </div>
  )
}

