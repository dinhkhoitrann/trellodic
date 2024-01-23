import { useState } from 'react';
import { Box, Chip, Grid, Typography } from '@/components/UIElements';
import { BoardGlobalProps, withBoard } from '@/hocs';
import { MAX_NO_SKILLS } from './constants';

function SkillsView({ card }: BoardGlobalProps) {
  const [isShowAll, setIsShowAll] = useState(false);
  const shouldShowAllSkills = isShowAll || card.skills!.length <= MAX_NO_SKILLS;

  const handleShowAll = () => {
    setIsShowAll((prevState) => !prevState);
  };

  const renderList = () => {
    let skills = card.skills || [];
    if (!shouldShowAllSkills) {
      skills = skills.slice(0, MAX_NO_SKILLS);
    }

    return (
      <Grid container spacing={1}>
        {skills.map((skill) => (
          <Grid item key={skill}>
            <Chip label={skill} variant="outlined" />
          </Grid>
        ))}
        {card.skills!.length > MAX_NO_SKILLS && (
          <Grid item>
            <Chip label={isShowAll ? 'Show less' : 'Show all skills'} onClick={handleShowAll} />
          </Grid>
        )}
      </Grid>
    );
  };

  return (
    <Box>
      <Typography sx={{ mb: 1, fontWeight: 500 }}>Skills</Typography>
      {renderList()}
    </Box>
  );
}

export default withBoard(SkillsView);
