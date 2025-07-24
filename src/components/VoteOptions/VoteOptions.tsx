import css from './VoteOptions.module.css';
import type { VoteType } from '../../types/votes';

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

export default function VoteOptions({
  onVote,
  onReset,
  canReset,
}: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => onVote}>
        Good
      </button>
      <button className={css.button} onClick={() => onVote}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onVote}>
        Bad
      </button>
      <button
        className={`${css.button} ${css.reset}`}
        onClick={() => onReset}
        disabled={!canReset}
      >
        Reset
      </button>
    </div>
  );
}
