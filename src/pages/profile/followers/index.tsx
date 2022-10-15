/* eslint-disable react/react-in-jsx-scope */

import { collection, CollectionReference, onSnapshot } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { firebaseDb, FollowType } from '../../../lib'

type FollowersProps = {
  profileId: string | undefined
}

export function Followers({ profileId }: FollowersProps) {
  const [followers, setFollowers] = useState<FollowType[] | null>(null)

  const followersCollectionReference = collection(
    firebaseDb,
    `users/${profileId}/followers/`
  ) as CollectionReference<FollowType>

  useEffect(
    () =>
      onSnapshot(followersCollectionReference, (snapshot) =>
        setFollowers(snapshot.docs.map((doc) => ({ ...doc.data() })))
      ),
    [firebaseDb, profileId]
  )

  return (
    <p
      tabIndex={0}
      className="rounded-[3px] text-[14px] bg-border inline-block px-[8px] py-[2px]"
    >
      <span className=" mr-[5px]">{followers && followers.length}</span>
      Followers
    </p>
  )
}
