import {
  DayDashboardArea,
  DashboardItem,
  TitleArea,
  Title,
  Value,
  Icon,
} from './DayDashboard.styled';
import sprite from 'assets/images/sprite.svg';

const DayDashboard = ({ dailyActivity, BMR, userDailyStats }) => {
  // console.log(userDailyStats);
  // const {
  //   caloriesBurnedSum,
  //   caloriesConsumedSum,
  //   caloriesRemaining,
  //   sportsRemaining,
  // } = userDailyStats;

  return (
    <DayDashboardArea>
      <DashboardItem accent="true">
        <TitleArea>
          <Icon iconColor="#EF8964">
            <use href={`${sprite}#food`} />
          </Icon>
          <Title accent="true">Daily calorie intake</Title>
        </TitleArea>
        <Value>{BMR}</Value>
      </DashboardItem>
      <DashboardItem accent="true">
        <TitleArea>
          <Icon iconColor="#EF8964">
            <use href={`${sprite}#dumbbell`} />
          </Icon>
          <Title accent="true">Daily physical activity</Title>
        </TitleArea>
        {dailyActivity && <Value>{dailyActivity} min</Value>}
      </DashboardItem>
      <DashboardItem accent="false">
        <TitleArea>
          <Icon iconColor="#EF8964">
            <use href={`${sprite}#apple`} />
          </Icon>
          <Title accent="false">Calories consumed</Title>
        </TitleArea>
        {/* {userDailyStats && <Value>{caloriesConsumedSum}</Value>} */}
      </DashboardItem>
      <DashboardItem accent="false">
        <TitleArea>
          <Icon iconColor="#EF8964">
            <use href={`${sprite}#fire`} />
          </Icon>
          <Title accent="false">Calories burned</Title>
        </TitleArea>
        {/* {userDailyStats && <Value>{caloriesBurnedSum}</Value>} */}
      </DashboardItem>
      <DashboardItem accent="false">
        <TitleArea>
          <Icon iconColor="#EF8964">
            <use href={`${sprite}#bubble`} />
          </Icon>
          <Title accent="false">Calories remaining</Title>
        </TitleArea>
        {/* {userDailyStats && <Value>{caloriesRemaining}</Value>} */}
      </DashboardItem>
      <DashboardItem accent="false">
        <TitleArea>
          <Icon iconColor="#EF8964">
            <use href={`${sprite}#figure`} />
          </Icon>
          <Title accent="false">Sports remaining</Title>
        </TitleArea>
        {/* {userDailyStats && <Value>{sportsRemaining} min</Value>} */}
      </DashboardItem>
    </DayDashboardArea>
  );
};

export default DayDashboard;
