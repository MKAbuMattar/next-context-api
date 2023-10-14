'use client';

import React, {Fragment} from 'react';

// Context API
import {useSharedState} from '@/provider/use-provider';

export const SharedStateSibling = () => {
  const [count] = useSharedState<number>('count');

  return (
    <Fragment>
      <p className={'text-center text-xl font-semibold'}>
        Shared State Sibling: {count}
      </p>
    </Fragment>
  );
};

export default SharedStateSibling;
