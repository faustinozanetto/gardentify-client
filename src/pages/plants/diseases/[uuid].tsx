import { useRouter } from 'next/router';
import React, { useState } from 'react';
import CoreLayout from 'src/components/layout/core-layout';
import CoreLayoutHead from 'src/components/layout/core-layout-head';
import { Disease, useFindDiseaseQuery, UserFragment } from 'src/generated/graphql';

interface DiseasePageProps {
  meUser: UserFragment;
}

const DiseasePage: React.FC<DiseasePageProps> = (props) => {
  const { meUser } = props;
  const { query } = useRouter();
  const [disease, setDisease] = useState<Disease>();
  const { data: diseaseData, loading: diseaseLoading } = useFindDiseaseQuery({
    variables: { input: { uuid: query.uuid as string } },
  });

  return (
    <CoreLayout
      loggedUser={meUser}
      head={CoreLayoutHead}
      headProps={{
        seoTitle: 'Disease Page',
        seoDescription: 'Home page description',
        seoUrl: ('https://gardentify.com/plants/diseases/' + query?.uuid) as string,
      }}
    >
      <h1>Klang is bad</h1>
    </CoreLayout>
  );
};
export default DiseasePage;
