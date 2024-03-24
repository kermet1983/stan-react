import { keyframes, styled } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -468px 0
  }
  100% {
    background-position: 468px 0
  }
`;

const StyledSkeleton = styled.div<{ width: string; height: string }>`
  display: inline-block;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background: #f6f7f8;
  background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
  background-repeat: no-repeat;
  border-radius: 4px;
  animation-fill-mode: forwards;
  animation: ${shimmer} 1s linear infinite;
`;

export default StyledSkeleton;
