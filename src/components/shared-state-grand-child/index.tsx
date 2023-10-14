'use client';

import React, {Fragment} from 'react';

// Context API
import {useSharedState} from '@/provider/use-provider';

export const SharedStateGrandChild = () => {
  const [count] = useSharedState<number>('count');

  return (
    <Fragment>
      <p className={'text-center text-xl font-semibold'}>
        Shared State Grand Child: {count}
      </p>
    </Fragment>
  );
};

export default SharedStateGrandChild;
