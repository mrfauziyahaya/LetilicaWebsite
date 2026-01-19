import React from 'react';

export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  link?: string;
  linkText?: string;
}

export enum PageRoutes {
  HOME = '/',
  ABOUT = '/about',
  SOLUTIONS_UNMANNED = '/solutions/unmanned',
  SOLUTIONS_NAVERA = '/solutions/navera',
  SOLUTIONS_SIMULATOR = '/solutions/simulator',
  RND = '/rnd',
  CAPABILITIES = '/capabilities',
  CONTACT = '/contact',
}