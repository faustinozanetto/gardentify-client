import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import CoreLayout from 'src/components/layout/core-layout';
import CoreLayoutHead from 'src/components/layout/core-layout-head';
import PlantDiseaseDetails from 'src/components/plant/diseases/details/plat-disease-details';
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

  // Loading disease
  useEffect(() => {
    if (diseaseData && diseaseData.findDisease.disease && !diseaseLoading) {
      setDisease(diseaseData.findDisease.disease);
    }
  }, [diseaseData, diseaseLoading]);

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
      {/* Disease Details */}
      <PlantDiseaseDetails diseaseData={disease} loading={diseaseLoading} />
    </CoreLayout>
  );
};
export default DiseasePage;
