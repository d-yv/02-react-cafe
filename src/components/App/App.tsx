import CafeInfo from '../CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';
import css from './App.module.css';
import type { Votes, VoteType } from '../../types/votes';
import { useState } from 'react';

export default function App() {
  const votes: Votes = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [vote, setVote] = useState<Votes>(votes);
  return (
    <div className={css.app}>
      <CafeInfo /> <VoteOptions /> <VoteStats />
    </div>
  );

  function handleVote(type: VoteType) {
    return type;
  }

  function resetVotes() {
    setVote(votes);
  }
}
