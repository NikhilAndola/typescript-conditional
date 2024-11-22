import * as React from 'react';

import './style.css';
import JobDetailsComponent from './components/JobDetailsComponents';
import InfoDisplay from './components/DynamicType';
import { ConditionalComponent } from './components/ConditionalComponent';

const docOption = {
  doctorType: 'Chest Physician',
  doctorDegrcee: 'MBBS MD',
};

type mango = keyof { name: 'asdfsdf' };

const a: mango = 'name';

export const App: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h1>Hello {name}!</h1>

      {/* <JobDetailsComponent
        job={'doctor'}
        personDetails={{ doctorDegree: 'MD', doctorType: 'Mll' }}
      /> */}

      <InfoDisplay type="user" data={{ age: 24, name: 'avinash' }} />

      <ConditionalComponent
        car="toyota"
        gears={'6'}
        title="urban cruiser"
        origin="japan"
      />
    </div>
  );
};
