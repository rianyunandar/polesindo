import React, { Fragment } from "react";
import {
  Services,
  Services3,
  Portfolio2,
  Slider,
  Features2,
  Contacts2
} from "../../widgets";
import { useCustomState } from "../../../state/state";

export default () => {
  const state = useCustomState()[0];

  return (
    <Fragment>
      <Slider data={state.data.posts} />
      {/* <Services3 data={state.data.salepoint} /> */}
      <Features2 data={state.data.features2} />
      <Services data={state.data.services} />
      {/* <Portfolio2 data={state.data.portfolio} /> */}
      <Contacts2 />
    </Fragment>
  );
};
