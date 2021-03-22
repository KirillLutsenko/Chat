import React from 'react';
import { CheckboxWrapper, Checkbox, Online, Offline, } from '../AppStyles'

export const CheckboxBlock = ({ switchStatus, checkboxStatus }) => {
  return (
    <CheckboxWrapper>
      <Checkbox
        type="checkbox"
        name="switcher"
        onChange={switchStatus}
      />
      {
        checkboxStatus
          ? <Online>Online</Online> 
          : <Offline>Offline</Offline>
      }
    </CheckboxWrapper>
  )
}
