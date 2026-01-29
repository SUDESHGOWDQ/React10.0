import React, { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div style={{ padding: '1.5rem', maxWidth: '600px' }}>
        {loading ? (
          <>
            <Skeleton height={30} width="60%" />
            <Skeleton count={3} style={{ marginTop: '0.5rem' }} />
          </>
        ) : (
          <>
            <h1>Welcome To Home Page</h1>
            <p>
              This is the home page content. Everything has loaded successfully.
            </p>
          </>
        )}
      </div>
    </SkeletonTheme>
  );
};

export default Home;
