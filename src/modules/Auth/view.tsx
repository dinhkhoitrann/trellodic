import { PropsWithChildren } from 'react';
import { Box, Card, SvgIcon, Typography } from '@/components/UIElements';
import TrelloIcon from '@/common/assets/icons/trello.svg';

function AuthFormView({ children }: PropsWithChildren) {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundSize: {
          xs: 'calc(((100vw - 400px) / 2) - 32px), calc(((100vw - 400px) / 2) - 32px), cover',
          md: '368px, 368px',
        },
        backgroundColor: 'rgb(250, 251, 252)',
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundAttachment: 'fixed, fixed',
        backgroundPosition: 'left bottom, right bottom',
        backgroundImage:
          // eslint-disable-next-line max-len
          'url("https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.504/trello-left.4f52d13c.svg"), url("https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.504/trello-right.3ee60d6f.svg")',
      }}
    >
      <Card
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          marginTop: '12px',
          width: '400px',
          py: 4,
          px: 5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 4 }}>
          <SvgIcon component={TrelloIcon} inheritViewBox fontSize="large" sx={{ color: '#0458d2' }} />
          <Typography variant="caption" sx={{ fontSize: '1.6rem', fontWeight: 'bold' }}>
            Tasky
          </Typography>
        </Box>
        {children}
      </Card>
    </Box>
  );
}

export default AuthFormView;
