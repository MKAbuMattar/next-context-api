'use client';

import React, {Fragment} from 'react';

// Context API
import {useSharedState} from '@/provider/use-provider';

// components
import {SharedStateGrandChild} from '@/components';

export const SharedStateChild = () => {
  const [count] = useSharedState<number>('count');

  return (
    <Fragment>
      <p className={'text-center text-xl font-semibold'}>
        Shared State Child: {count}
      </p>
      <SharedStateGrandChild />
    </Fragment>
  );
};

export default SharedStateChild;
