import React from "react";
import { useLaunchListQuery } from "../../generated/graphql";
import LaunchList from "./LaunchList";

interface OwnProps {
  handleIdChange: (newId: number) => void;
}

const LaunchListContainer = (props: OwnProps) => {
  const { loading, data, error } = useLaunchListQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR!!</div>;
  }

  return <LaunchList data={data} {...props} />;
};

export default LaunchListContainer;
