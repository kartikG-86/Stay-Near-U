import React from 'react';
import { Container } from '@material-ui/core';
import FirstMainDivContent from './FirstMainDivContent';
import FirstMainDivCards from './FirstMainDivCards';


const FirstMainDiv = () => {

  return (
    <>
      <main>
        <div>
          <Container>
            <FirstMainDivContent />
            <FirstMainDivCards />
          </Container>
        </div>
      </main>
    </>
  )
};

export default FirstMainDiv;