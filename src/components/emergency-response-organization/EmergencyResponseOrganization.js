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
    <NavMenuItem name="Beredskapslag" icon={IconHierarchy} to="emergency-response-teams/" />
    <NavMenuItem name="Kompetansestatus" icon={IconShield} to="competence-status/" />
    <NavMenuItem name="Forenlighetsmatrise" icon={IconFileExcel} to="compatibility-matrix/" />
    <NavMenuItem name="Stedfortredere" icon={IconProfileGroup} to="deputies/" />
    <NavMenuItem name="Reserveressurser" icon={IconCogs} to="backup-resources/" />
  </NavMenu>
);
