import React from 'react';
import NavMenu from '../shared/NavMenu';
import NavMenuItem from '../shared/NavMenuItem';
import IconShield from '../../icons/shield.svg';

export default () => (
  <NavMenu>
    <NavMenuItem name="Beredskapslag" icon={IconShield} to="" />
    <NavMenuItem name="Kompetansestatus" icon={IconShield} to="" />
    <NavMenuItem name="Forenlighetsmatrise" icon={IconShield} to="" />
    <NavMenuItem name="Stedfortredere" icon={IconShield} to="" />
    <NavMenuItem name="Reserveressurser" icon={IconShield} to="" />
  </NavMenu>
);
