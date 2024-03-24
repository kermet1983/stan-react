import Image from '@/components/Image/Image';
import { ContentLayout } from '@/containers/Layouts';
import { ProgramProps } from '@/types';
import React, { useEffect, useMemo } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { Box } from '@/components';
import { useFetch } from '@/utils/hooks';
import styled from 'styled-components';

const StyledProgram = styled(Box)`
  &.program {
    .program-title {
      h1 {
        font-size: 2rem;
        font-weight: 500;
        margin-bottom: 10px;
      }
    }
    .program-image-wrapper {
      width: 200;
      margin-right: 4rem;
      img {
        max-width: 100%;
      }
    }
    .program-details {
      font-weight: 400;
      margin-bottom: 30px;
    }
    .program-description {
      line-height: 1.5;
    }
  }
`;

const Program: React.FC = () => {
  const { programId } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  let program: ProgramProps | null = state?.program;

  const { data, loading, error } = useFetch<ProgramProps[] | null>({
    url: 'data/data.json',
    // if program doesn't exist trigger use fecth to get data
    shouldFetch: !program,
  });

  // if program doesn't exist in state, find it from API
  const memorisedProgram = useMemo(() => {
    return program ?? data?.find((program) => program?.id === Number(programId));
  }, [program, programId, data]);

  // if program doesn't exist, redirectt back to home page
  useEffect(() => {
    if (!loading && !memorisedProgram) {
      navigate('/');
    }
  }, [memorisedProgram, loading]);

  const { image, description, rating, genre, title, id, type, year, language } = memorisedProgram || {};

  const memorisedProgramDetails = useMemo(() => {
    return [rating, year, type, genre, language].filter(Boolean).join(' | ');
  }, [memorisedProgram]);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event?.key === 'Backspace') {
      navigate('/', { state: { programId } });
    }
  };

  // keyboard event listener
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <ContentLayout>
      <StyledProgram flexDirection="row" className="program">
        <Box className="program-image-wrapper">{image && <Image src={image} alt={title || ''} />}</Box>
        <Box>
          {title && (
            <Box className="program-title">
              <h1>{title}</h1>
            </Box>
          )}
          {memorisedProgramDetails && <Box className="program-details">{memorisedProgramDetails}</Box>}
          <Box className="program-description">{description}</Box>
        </Box>
      </StyledProgram>
    </ContentLayout>
  );
};

export default Program;
