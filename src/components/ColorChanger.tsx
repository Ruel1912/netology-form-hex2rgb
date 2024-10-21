import React, { RefObject } from 'react'

interface ColorChangerProps {
  hexCodeRef: RefObject<HTMLInputElement>
  updateColor: () => void
  rgb: string
}
export const ColorChanger: React.FC<ColorChangerProps> = ({
  hexCodeRef,
  updateColor,
  rgb,
  // color,
}) => {
  return (
    <div className="color-changer">
      <input
        type="text"
        name="color"
        defaultValue={''}
        onChange={updateColor}
        ref={hexCodeRef}
        placeholder="Цвет в формате HEX"
      />
      {rgb && <p>{rgb}</p>}
    </div>
  )
}
