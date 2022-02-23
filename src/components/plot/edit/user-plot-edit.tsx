import React, { useEffect, useState } from 'react';
import UpdatePlotForm from 'src/components/forms/plots/update-plot-form';
import { Heading, HStack, Skeleton, Stack, useColorModeValue, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Plot, useFindPlotQuery } from 'src/generated/graphql';

interface PlotEditProps {}

const PlotEdit: React.FC<PlotEditProps> = (props) => {
  const { query } = useRouter();
  const [plot, setPlot] = useState<Plot>({});
  const { data: plotData, loading: plotLoading } = useFindPlotQuery({
    variables: { input: { uuid: query.uuid as string } },
  });

  useEffect(() => {
    if (plotData && plotData.findPlot.plot) {
      setPlot(plotData.findPlot.plot);
    }
  }, [plotData, plotLoading]);

  return (
    <VStack
      bgColor={useColorModeValue('gray.50', 'gray.900')}
      borderRadius="3xl"
      boxShadow="2xl"
      padding={6}
      my={6}
      minWidth="xl"
    >
      {/* Heading */}
      <Heading as="h1" fontWeight={700} fontSize="4xl">
        Plot Editing
      </Heading>
      {/* Edit plot form */}
      {!plotLoading && plot && <UpdatePlotForm plot={plot} />}
    </VStack>
  );
};

export default PlotEdit;
