/* eslint-disable react/react-in-jsx-scope */

import { doc, DocumentReference, onSnapshot } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAuthContext } from '../../context'
import { firebaseDb, ParamsType, UserType } from '../../lib'
import { Articles, Button, Followers } from './index'

export default function Profile() {
  const { user } = useAuthContext()
  const [profile, setProfile] = useState<UserType | null>(null)
  const { id } = useParams<ParamsType>()

  const usersDocumentRef = doc(
    firebaseDb,
    `users/${id}`
  ) as DocumentReference<UserType>

  useEffect(
    () =>
      onSnapshot(usersDocumentRef, (doc) => {
        const docData = doc.data()
        if (docData) {
          setProfile(docData)
        }
      }),

    []
  )

  return (
    <div className="flex flex-col justify-center pt-[120px]">
      {profile && (
        <>
          <div className="relative flex  bg-white w-[800px] mx-auto border border-border p-[30px] rounded-[8px]">
            <div>
              <img
                src={profile.avatarUrl}
                alt="Your profile picture"
                className="w-[100px] rounded-[50%]"
              />
              <p
                tabIndex={0}
                className="text-lightGrey text-[14px] mt-[10px] text-center"
                aria-label={`Your username`}
              >
                @{profile.username}
              </p>
            </div>
            <div className=" ml-[30px] self-center">
              <Followers profileId={id} />

              <div className="flex items-center mt-[8px]">
                <p
                  tabIndex={0}
                  className=" font-semibold text-base "
                  aria-label={`Your full name`}
                >
                  {profile.fullname}
                </p>
                <p className="text-[22px] mx-[10px]">·</p>
                <p
                  tabIndex={0}
                  className=" font-semibold text-base "
                  aria-label={`${profile.age} years old`}
                >
                  {profile.age} y/o
                </p>
                <p className="text-[22px] mx-[10px]">·</p>
                <p
                  tabIndex={0}
                  className=" font-semibold text-base "
                  aria-label={`Your full location`}
                >
                  {profile.location}
                </p>
              </div>

              <p
                tabIndex={0}
                className="mt-[5px]  text-base "
                aria-label={`Your full biography`}
              >
                {profile.bio}
              </p>
            </div>
            {profile.PIN === user?.uid ? '' : <Button profileId={id} />}
          </div>
          <Articles PIN={profile.PIN} />
        </>
      )}
    </div>
  )
}
