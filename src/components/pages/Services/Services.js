import React, { Fragment } from "react";
import { Header, Services2 } from "../../widgets";
import { useCustomState } from "../../../state/state";

export default () => {
  const state = useCustomState()[0];

  return (
    <Fragment>
      <Header img={state.data.header_bgs.services}>Layanan Kami</Header>
      <Services2 data={state.data.services} />
    </Fragment>
  );
};
