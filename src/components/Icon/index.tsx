import React from 'react';
import * as icons from './svg'
import styled from '@emotion/styled';

export type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as any[];

export type IconProps = {
  icon: IconType;
  color?: string;
  size?: string | number;
  className?: string;
};

const Icon = ({ icon, color, size, className}: IconProps) => {
  const SVGIcon = icons[icon];
  const SVG = styled(SVGIcon)`
    path {
      fill : ${props => props.fill};
      stroke : ${props => props.fill};
    }
  `;
  return (
    <SVG
      fill={color} stroke={color} width={size} height={size}
      className={`svg-icon ${className}`}
    />
  );
};

export default Icon;

Icon.defaultProps = {
  color: '#54B589',
  size: 16
}
