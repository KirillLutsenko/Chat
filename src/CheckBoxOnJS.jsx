// import { CheckboxField, CheckboxSlider } from 'AppStyles'
// import React from 'react'

// export const CheckboxOnJs = () => {
//   const slider = document.querySelector('.checkbox-slider');
//   const sliderWidth = '20px';

//   const sliderMovementHandler = (e) => {
//     const field = e.target.closest('#checkbox-field');
//     const fieldPosition = field.getBoundingClientRect();
//     const fieldXCoordsOfLeftCorner = fieldPosition.left + field.clientLeft;
//     const fieldYCoordsOfLeftCorner = fieldPosition.top + field.clientTop;
//     const positionX = e.clientX - fieldXCoordsOfLeftCorner - sliderWidth / 2;
//     const positionY = e.clientY - fieldYCoordsOfLeftCorner - sliderWidth / 2;
//     const fieldWidth = field.clientWidth;
//     const fieldHeight = field.clientHeight;

//     if (!field.contains(e.target)) {
//       return;
//     }

//     const calculateSliderPosition = (coords, fieldSide) => {
//       if (coords < 0) {
//         return 0;
//       } else if (coords > (fieldSide - sliderWidth)) {
//         return fieldSide - sliderWidth;
//       }
  
//       return coords;
//     }

//     slider.style.left = `${calculateSliderPosition(positionX, fieldWidth)}px`;
//     slider.style.top = `${calculateSliderPosition(positionY, fieldHeight)}px`;
//   }

//   document.addEventListener('click', sliderMovementHandler);

//   return (
//     <CheckboxField id="checkbox-field">
//       <CheckboxSlider id="checkbox-slider" class="checkbox-slider" />
//     </CheckboxField>
//   )
// }