import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  withStyles,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';
import capitalize from 'lodash/capitalize';
import Panel from '../panel';
import sidebarStyles, { StyleProps } from './sidebar.styles';
import filterOptions, { TOption } from '../../../constants/filterOptions';
import { fd } from '../../../helpers';
import { getSubreddits } from '../../../features/subreddits/subredditsSlice';
import useFetch from '../../../hooks/useFetch';
import Skeleton from '../../Skeleton';

// TODO: Schimba tipul de date pentru alegere multipla

// type SubredditProps = {
//   id: string;
//   display_name: string;
//   icon_img: string;
//   subscribers: number;
// };

type Props = {
  filter?: true | false | null;
  content?: React.ReactNode | React.ReactElement | HTMLElement | string | null;
};

const SidebarBase: React.FC<Props & StyleProps> = ({
  filter,
  content,
  classes,
}) => {
  const {
    subreddits: { subreddits, isLoading },
  } = useFetch({ action: getSubreddits });

  return (
    <aside
      className={classes.sidebar}
      aria-label="Extra content about categories and ads"
    >
      {content && content}
      {filter && (
        <List aria-label="Reddit category list">
          {filterOptions.map(
            (option: TOption): JSX.Element => (
              <NavLink
                className={classes.link}
                activeClassName={classes.activeLink}
                to={option.path}
                key={option.name}
              >
                <ListItem className={classes.listItem} button>
                  <ListItemIcon>{option.icon}</ListItemIcon>
                  <ListItemText
                    classes={{ primary: classes.listText }}
                    primary={capitalize(option.name)}
                  />
                </ListItem>
              </NavLink>
            ),
          )}
        </List>
      )}
      <Panel
        aria-label="Featured Subreddits"
        title="Subreddit-uri preferate"
        content={
          <List>
            {isLoading
              ? Array.from(new Array(8)).map((_, idx) => (
                  <Skeleton type="sidebar" key={idx} />
                ))
              : subreddits.slice(1, 9).map((data: any) => (
                  <ListItem
                    component={Link}
                    button
                    key={data.id}
                    to={`/subreddit/${data.display_name}`}
                  >
                    <ListItemAvatar>
                      <Avatar alt={data.display_name} src={data.icon_img} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={`r/${data.display_name}`}
                      secondary={`${fd.addNumberSeparator(
                        data.subscribers,
                      )} de abonați`}
                    />
                  </ListItem>
                ))}
          </List>
        }
        action={
          <Button component={Link} to="/subreddits" size="small">
            Toate Subreddit-urile
          </Button>
        }
      />

      <Panel
        aria-label="Advertisement"
        title="Reclamă"
        content={
          <img
            src={`${process.env.PUBLIC_URL}/images/ad.jpg`}
            alt="Reclamă CNTV"
            className={classes.ad}
            width="50rem"
            height="auto"
          />
        }
      />
    </aside>
  );
};

export default withStyles(sidebarStyles)(SidebarBase);
