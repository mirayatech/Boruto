/* eslint-disable react/react-in-jsx-scope */

import { Card, Skeleton } from '@mui/material'

export function CardsSkeleton() {
  return (
    <Card
      variant="outlined"
      sx={{
        width: '650px',
        margin: '15px auto',
        borderRadius: 2,
        padding: '30px',
      }}
    >
      <Skeleton
        sx={{
          mt: 1,
          borderRadius: 1,
          height: 350,
          width: '100%',
        }}
        animation="wave"
        variant="rectangular"
      />
      <Skeleton
        sx={{
          borderRadius: 1,
          height: 40,
          width: '100%',
          my: 1.5,
        }}
        animation="wave"
        variant="rectangular"
      />
      <Skeleton
        sx={{
          borderRadius: 1,
          height: 18,
          width: '100%',
          mb: 1.5,
        }}
        animation="wave"
        variant="rectangular"
      />
      <Skeleton
        sx={{
          borderRadius: 1,
          height: 18,
          width: '100%',
          mb: 1.5,
        }}
        animation="wave"
        variant="rectangular"
      />
      <div className="flex justify-between   items-baseline ">
        <div className="flex items-center pt-[20px]">
          <Skeleton variant="circular" width={60} height={60} />
          <div className="ml-[10px]">
            <Skeleton
              sx={{
                mt: 1,
                borderRadius: 1,
                height: 12,
                width: 70,
              }}
              animation="wave"
              variant="rectangular"
            />
            <Skeleton
              sx={{
                mt: 1,
                borderRadius: 1,
                height: 12,
                width: 160,
              }}
              animation="wave"
              variant="rectangular"
            />
          </div>
        </div>

        <div className="flex items-center">
          <Skeleton
            sx={{
              borderRadius: 1,
              height: 30,
              width: 30,
              mr: 2,
            }}
            animation="wave"
            variant="rectangular"
          />
          <Skeleton
            sx={{
              borderRadius: 1,
              height: 30,
              width: 30,
            }}
            animation="wave"
            variant="rectangular"
          />
        </div>
      </div>
    </Card>
  )
}
