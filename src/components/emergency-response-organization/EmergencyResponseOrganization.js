import React from 'react';
import NavMenu from '../shared/NavMenu';
import NavMenuItem from '../shared/NavMenuItem';
import IconShield from '../../icons/shield.svg';
import IconHierarchy from '../../icons/hierarchy.svg';
import IconStats from '../../icons/stats-1.svg';
import IconProfileGroup from '../../icons/profile-group.svg';
import IconCogs from '../../icons/cogs.svg';

export default () => (
  <NavMenu>
    <NavMenuItem name="Beredskapslag" icon={IconHierarchy} to="emergency-response-teams/" />
    <NavMenuItem name="Kompetansestatus" icon={IconShield} to="competence-status/" />
    <NavMenuItem name="Forenlighetsmatrise" icon={IconStats} to="compatibility-matrix/" />
    <NavMenuItem name="Stedfortredere" icon={IconProfileGroup} to="deputies/" />
    <NavMenuItem name="Reserveressurser" icon={IconCogs} to="backup-resources/" />
  </NavMenu>
);
