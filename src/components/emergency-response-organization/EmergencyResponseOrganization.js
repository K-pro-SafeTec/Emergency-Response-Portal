import React from 'react';
import NavMenu from '../shared/NavMenu';
import NavMenuItem from '../shared/NavMenuItem';
import IconShield from '../../icons/shield.svg';
import IconHierarchy from '../../icons/hierarchy.svg';
import IconProfileGroup from '../../icons/profile-group.svg';
import IconFileExcel from '../../icons/file-excel.svg';
import IconCogs from '../../icons/cogs.svg';

export default () => (
  <NavMenu>
    <NavMenuItem name="Beredskapslag" icon={IconHierarchy} to="" />
    <NavMenuItem name="Kompetansestatus" icon={IconShield} to="" />
    <NavMenuItem name="Forenlighetsmatrise" icon={IconFileExcel} to="" />
    <NavMenuItem name="Stedfortredere" icon={IconProfileGroup} to="" />
    <NavMenuItem name="Reserveressurser" icon={IconCogs} to="" />
  </NavMenu>
);
