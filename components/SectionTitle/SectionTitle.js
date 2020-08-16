import React from 'react';
import SectionTitleWrapper from './SectionTitle.style';
import SectionTitleExtended from '../../components/UI/Title/Title';

const SectionTitle = ({ ...props }) => {
    return (
      <SectionTitleWrapper>
        <SectionTitleExtended {...props} />
      </SectionTitleWrapper>
    );
  };
  
  export default SectionTitle;