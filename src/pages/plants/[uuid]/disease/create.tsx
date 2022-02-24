import React, { useEffect, useState } from 'react';
import PlantDiseaseCreate from 'src/components/disease/create/plant-disease-create';
import CoreLayout from 'src/components/layout/core-layout';
import CoreLayoutHead from 'src/components/layout/core-layout-head';
import { Disease, useFindDiseasesQuery } from 'src/generated/graphql';

interface CreatePlantDiseasePageProps {}

const CreatePlantDiseasePage: React.FC<CreatePlantDiseasePageProps> = (props) => {
  const [diseases, setDiseases] = useState<Disease[]>([]);
  const { data: diseasesData, loading: diseasesLoading } = useFindDiseasesQuery({
    variables: {
      input: {
        take: 10,
        skip: 0,
        where: {},
      },
    },
  });

  useEffect(() => {
    if (diseasesData && diseasesData.findDiseases.edges) {
      const mappedEdges = diseasesData.findDiseases.edges.map((edge) => edge.node);
      setDiseases(mappedEdges);
    }
  }, [diseasesData, diseasesLoading]);

  return (
    <CoreLayout
      head={CoreLayoutHead}
      headProps={{
        seoTitle: 'Home',
        seoDescription: 'Home page description',
        seoUrl: 'https://gardentify.com/',
      }}
    >
      <PlantDiseaseCreate diseases={diseases} loading={diseasesLoading} />
    </CoreLayout>
  );
};

export default CreatePlantDiseasePage;
