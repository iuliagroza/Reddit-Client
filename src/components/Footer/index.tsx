import React from 'react';
import { Container, withStyles } from '@material-ui/core';
import footerStyles, { StyleProps } from './footer.styles';

type Props = {
  width?: 'lg' | 'xs' | 'sm' | 'md' | 'xl' | undefined;
};

type InfoItem = {
  id: number;
  label: string;
  link: string;
  target?: true | false | null | undefined;
};

const footerLinks: InfoItem[] = [
  {
    id: 1,
    label: '© Groza Iulia Diana',
    link: '',
    target: true,
  },
  {
    id: 2,
    label: 'Profesor coordonator: Nodea Eugen',
    link: '',
    target: true,
  },
  {
    id: 3,
    label: 'Clasa: a XII-a C',
    link: '',
    target: true,
  },
  {
    id: 4,
    label: 'Colegiul National "Tudor Vladimirescu" Targu-Jiu',
    link: '',
    target: true,
  },
];

const Footer: React.FC<Props & StyleProps> = ({ width = 'lg', classes }) => (
  <footer className={classes.root}>
    <Container maxWidth={width}>
      <ul aria-label="footer list">
        {footerLinks.map(
          (item: InfoItem): JSX.Element =>
            item.target ? (
              <li key={`${item.id}-${item.label}`} className={classes.item}>
                {item.label}
              </li>
            ) : (
              <li key={`${item.id}-${item.label}`} className={classes.item}>
                {item.label}
              </li>
            ),
        )}
      </ul>
    </Container>
  </footer>
);

export default withStyles(footerStyles)(Footer);
