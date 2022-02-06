import React, { Fragment } from "react";
import styles from "./Contacts2.module.scss";
import Layout from "../../layouts/Layout/Layout";
// import { ContactForm } from "../../ui";
// import { AddressBox, Button } from "../../elements";
import { AddressBox } from "../../elements";

import THEME from "../../../state/theme";
// import { useCustomState } from "../../../state/state";

export default () => {
  // const actions = useCustomState()[1];

  return (
    <Fragment>
      <div className={styles.header}>
        <span className="subtitle" style={{ color: THEME.color }}>
          Hubungin Kami
        </span>
        <h2>Ayo Pesan Sekarang</h2>
      </div>
      <Layout col="4">
        <AddressBox
          icon="las la-phone"
          title="Telepon &amp; WA"
          text="+62 811800419 "
        />
        <AddressBox
          icon="la la-envelope-open"
          title="Email"
          text="polesindo58@gmail.com"
        />
        <AddressBox
          icon="la la-home"
          title="Jakarta"
          text="Jl Damai no 15 Cipete Utara Kebayoran Baru"
        />
        <AddressBox
          icon="la la-home"
          title="Lampung"
          text="Jln.ZA.Pagar Alam Gang.Harapan Labuan Ratu"
        />
        <span className={styles.divider} style={{ borderColor: THEME.color }} />
      </Layout>
    </Fragment>
  );
};
