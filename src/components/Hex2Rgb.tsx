import { useRef, useState } from 'react'
import { ColorChanger } from './ColorChanger'

export const Hex2Rgb = () => {
  const hexCodeRef = useRef<HTMLInputElement>(null)
  const [rgbColor, setRgbColor] = useState('')
  const errorText = 'Ошибка!'

  const updateColor = (): void => {
    const hexCodeInput = hexCodeRef.current

    if (hexCodeInput) {
      setRgbColor(toRgb(hexCodeInput.value))
    }
  }

  function toRgb(hexCode: string): string {
    const rgbArr = []
    if (hexCode.length >= 7) {
      if (/^#?[A-Fa-f0-9]{6}$/.test(hexCode)) {
        hexCode = hexCode.split('#')[1] || hexCode
        for (let i = 0; i < hexCode.length; i += 2) {
          rgbArr.push(parseInt(hexCode[i] + hexCode[i + 1], 16))
        }
        return `rgb(${rgbArr.join(', ')})`
      } else {
        return errorText
      }
    } else {
      return ''
    }
  }

  return (
    <div
      className="app"
      style={{ backgroundColor: rgbColor !== errorText ? rgbColor : '#e94b35' }}
    >
      <ColorChanger
        hexCodeRef={hexCodeRef}
        updateColor={updateColor}
        rgb={rgbColor}
      />
    </div>
  )
}
