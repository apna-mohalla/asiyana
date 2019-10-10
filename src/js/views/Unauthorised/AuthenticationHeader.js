import React from 'react';
import { labels } from 'configs/translations';

const AuthenticationHeader = () => (
  <section className="logo-container">
    {labels.bannerText}
    <i className="icon-home_logo" />
  </section>
);

export default AuthenticationHeader;
