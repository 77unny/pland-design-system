import styled from '@emotion/styled';
import tw from 'twin.macro';
import {ButtonPropsType} from './index';

export const Container = styled.button<ButtonPropsType>`
  ${tw`p-2 rounded-md flex justify-center items-center`}
  svg {
    ${tw`mr-1.5`}
  }

  ${props => {
  const {size} = props;

  switch (size) {
    case 'small' :
      return tw`w-1/3`;
    case 'medium' :
      return tw`w-1/2`;
    case 'large' :
      return tw`w-2/3`;
    case 'full' :
      return tw`w-full`;
    default :
      return tw`w-full`;
  }
}}
`;
