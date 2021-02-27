import React, { useContext } from 'react';
import {ThemeContext} from 'hooks'

const Text = ({className, content}) => {

  const {theme, dark, toggle} = useContext(ThemeContext)
  console.log(theme)

  return(
    <p className={className} style={{color: theme.color}}>
      {content}
    </p>
  )
}

export default Text