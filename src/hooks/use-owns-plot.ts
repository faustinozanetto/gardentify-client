import useAuth from '@modules/state/auth.context';
import { useEffect, useState } from 'react';
import { Plot } from 'src/generated/graphql';

const useOwnsPlot = (plot: Plot) => {
  const [owns, setOwns] = useState(false);
  const { user, loading } = useAuth();

  useEffect(() => {
    // Check if logged in user owns plot.
    if (plot) {
      if (plot.user.uuid === user?.uuid) {
        setOwns(true);
      }
    }
  }, [user, loading]);

  return [owns, user] as const;
};

export default useOwnsPlot;
