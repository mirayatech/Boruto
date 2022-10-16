/* eslint-disable react/react-in-jsx-scope */
import { Card, Skeleton } from '@mui/material'

export function UsersSkeleton() {
  return (
    <Card
      variant="outlined"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '650px',
        margin: '15px auto',
        borderRadius: 2,
        padding: '30px',
      }}
    >
      <div className="flex flex-col items-center mr-[20px]">
        <Skeleton variant="circular" width={100} height={100} />
        <Skeleton
          sx={{
            mt: 1,
            borderRadius: 1,
            height: 12,
            width: 75,
          }}
          animation="wave"
          variant="rectangular"
        />
      </div>
      <div>
        <Skeleton
          sx={{
            borderRadius: 1,
            height: 18,
            width: 100,
            mb: 1.5,
          }}
          animation="wave"
          variant="rectangular"
        />
        <Skeleton
          sx={{
            borderRadius: 1,
            height: 18,
            width: 250,
            mb: 1.5,
          }}
          animation="wave"
          variant="rectangular"
        />
        <Skeleton
          sx={{
            borderRadius: 1,
            height: 18,
            width: 450,
            mb: 1.5,
          }}
          animation="wave"
          variant="rectangular"
        />
        <Skeleton
          sx={{
            borderRadius: 1,
            height: 18,
            width: 450,
          }}
          animation="wave"
          variant="rectangular"
        />
      </div>
    </Card>
  )
}
