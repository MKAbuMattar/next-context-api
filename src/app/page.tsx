'use client';

// Context API
import {useSharedState} from '@/provider/use-provider';

// components
import {SharedStateChild, SharedStateSibling} from '@/components';

export default function Home() {
  const [_, setCount] = useSharedState<number>('count', 0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <main className={'flex h-screen flex-col items-center justify-center'}>
      <h1 className={'text-center text-4xl font-bold'}>Next.js Context API</h1>

      <p className={'text-center text-xl font-semibold'}>
        Count Example with Context API and TypeScript
      </p>

      <div className={'mt-8 flex flex-col items-center justify-center gap-4'}>
        <SharedStateChild />
        <SharedStateSibling />
        <div className={'flex flex-row items-center justify-center gap-4'}>
          <button
            type={'button'}
            className={
              'rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
            }
            onClick={increment}
          >
            Increment
          </button>
          <button
            type={'button'}
            className={
              'rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
            }
            onClick={decrement}
          >
            Decrement
          </button>
          <button
            type={'button'}
            className={
              'rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
            }
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </main>
  );
}
