/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import GridListTile from '@material-ui/core/GridListTile';
import IconButton from '@material-ui/core/IconButton';

import { BlockPhotosStyled, GridListStyled, ButtonAddStyled, GridListTileBarStyled, InputFileStyled, AddPhotoStyled } from './styled';

import AddSrc from '../../img/plus.svg';
import DeleteSrc from '../../img/delete.svg';

const photos = [
  'https://www.freeindex.co.uk/media/listingpics/492/6/IMG_1265.JPG',
  'https://i.pinimg.com/originals/0b/57/cd/0b57cd8e2971c1417bbdb36d1bac965a.jpg',
  'https://nailsbynatalierose.files.wordpress.com/2018/01/2017-04-06-14-34-34.jpg?w=675',
  'https://i.pinimg.com/originals/0b/57/cd/0b57cd8e2971c1417bbdb36d1bac965a.jpg',
  'https://i.pinimg.com/originals/0b/57/cd/0b57cd8e2971c1417bbdb36d1bac965a.jpg',
  'https://www.freeindex.co.uk/media/listingpics/492/6/IMG_1265.JPG'
];

const PhotosInputs = () => (
  <Grid item sm={12}>
    <Typography>Photos</Typography>
    <Grid container>
      <Grid item sm={2}>
        <ButtonAddStyled>
          <InputFileStyled
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
            <AddPhotoStyled size="small" color="secondary" component="span" variant="contained">
              <img src={AddSrc} alt="add" />
            </AddPhotoStyled>
          </label>
        </ButtonAddStyled>
      </Grid>
      <Grid item sm={10}>
        <BlockPhotosStyled container justify="space-around">
          <GridListStyled cols={4.6}>
            {photos.map((item, indx) => (
              <GridListTile key={indx}>
                <img src={item} alt="dataInfo.name" />
                <GridListTileBarStyled actionIcon={<IconButton><img src={DeleteSrc} alt="d" /></IconButton>} />
              </GridListTile>
            ))}
          </GridListStyled>
        </BlockPhotosStyled>
      </Grid>
    </Grid>
  </Grid>
);

export { PhotosInputs };
