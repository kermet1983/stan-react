import styled from 'styled-components';

interface BoxProps {
  width?: string;
  height?: string;
  backgroundColor?: string;
  color?: string;
  padding?: string;
  margin?: string;
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  alignItems?: 'stretch' | 'flex-start' | 'center' | 'flex-end' | 'baseline';
  alignContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch';
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
}

const Box = styled.div.withConfig({
  // ignore these props setting attr on element to avoid warning "Warning: React does not recognize the xYz prop"
  shouldForwardProp: (prop) =>
    !['flexDirection', 'backgroundColor', 'alignItems', 'alignContent', 'justifyContent', 'itemsToShow'].includes(prop),
})<BoxProps>`
  display: flex;
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  color: ${(props) => props.color || 'inherit'};
  padding: ${(props) => props.padding || '0'};
  margin: ${(props) => props.margin || '0'};
  ${(props) => {
    const { flexDirection, alignItems, alignContent, justifyContent } = props;
    const customStyles: Record<string, any> = {};
    customStyles['flex-direction'] = flexDirection ?? 'column';
    if (alignItems) customStyles['align-items'] = alignItems;
    if (alignContent) customStyles['align-content'] = alignContent;
    if (alignItems) customStyles['justify-content'] = justifyContent;

    return customStyles;
  }}
`;

export default Box;
