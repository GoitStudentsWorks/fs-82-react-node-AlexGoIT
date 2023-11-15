import {
  ExerciseDiv,
  Column1,
  Column2,
  Column3,
  Column4,
  Column5,
  Column6,
  ButtonEl,
  DeleteIcon,
  Grid1,
  Grid2,
  Grid3,
  Grid4,
  Grid5,
  Grid6,
  Grid7,
  Title,
} from './ExerciseItem.styled';
import sprite from 'assets/images/sprite.svg';
import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import { useState } from 'react';

const ExerciseItem = ({
  id,
  bodyPart,
  equipment,
  name,
  target,
  burnedCalories,
  time,
}) => {
  //   const dispatch = useDispatch();
  //   const deleteThisExercise = id => {
  //     dispatch(deleteExercise(id));
  //   };

  return (
    <ExerciseDiv key={id}>
      <Grid1>
        <Title>Body Part</Title>
        <Column1>{bodyPart}</Column1>
      </Grid1>
      <Grid2>
        <Title>Equipment</Title>
        <Column2>{equipment}</Column2>
      </Grid2>
      <Grid3>
        <Title>Name</Title>
        <Column3>{name}</Column3>
      </Grid3>
      <Grid4>
        <Title>Target</Title>
        <Column4>{target}</Column4>
      </Grid4>
      <Grid5>
        <Title>Burned Calorie</Title>
        <Column5>{burnedCalories}</Column5>
      </Grid5>
      <Grid6>
        <Title>Time</Title>
        <Column6>{time}</Column6>
      </Grid6>
      {/* <ButtonEl onClick={() => deleteThisExercise(id)}>Delete</ButtonEl> */}
      <Grid7>
        <Title></Title>
        <ButtonEl>
          <DeleteIcon iconColor="#EF8964">
            <use href={`${sprite}#trash`} />
          </DeleteIcon>
        </ButtonEl>
      </Grid7>
    </ExerciseDiv>
  );
};

ExerciseItem.propTypes = {
  id: PropTypes.string,
  bodyPart: PropTypes.string,
  equipment: PropTypes.string,
  name: PropTypes.string,
  target: PropTypes.string,
  burnedCalories: PropTypes.string,
  time: PropTypes.number,
};

export default ExerciseItem;
