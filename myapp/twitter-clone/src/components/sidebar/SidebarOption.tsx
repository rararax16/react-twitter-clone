import React from 'react'
import "./SidebarOption.css"

type OptionsProps = {
  text: string,
  Icon: JSX.Element
  active?: boolean
}

function SidebarOption(props: OptionsProps) {
  const { text, Icon, active } = props;

  return (
    <div className={`sidebarOption ${active && "sidebarOption__active"}`}>
      {Icon}
      <h2>{text}</h2>
    </div>
  )
}

export default SidebarOption