import React, { Fragment } from "react";
import {
  Header,
  TextBlock,
} from "../../widgets";
import { useCustomState } from "../../../state/state";

export default () => {
  const state = useCustomState()[0];

  return (
    <Fragment>
      <Header img={state.data.header_bgs.about}>Tentang Kami</Header>
      <TextBlock />
    </Fragment>
  );
};
