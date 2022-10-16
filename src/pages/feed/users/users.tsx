/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */

import { collection, CollectionReference, onSnapshot } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { User } from '..'
import { UsersSkeleton } from '../../../components'
import { firebaseDb, UserType } from '../../../lib'

export function Users() {
  const [users, setUsers] = useState<UserType[]>([])
  const [loading, setLoading] = useState(true)

  const usersCollectionReference = collection(
    firebaseDb,
    'users'
  ) as CollectionReference<UserType>

  useEffect(() => {
    const unsubscribe = onSnapshot(usersCollectionReference, (snapshot) => {
      setUsers(
        snapshot.docs.map((doc) => ({ ...doc.data(), profileId: doc.id }))
      )
      setLoading(false)
    })

    return () => {
      unsubscribe()
    }
  }, [firebaseDb])
  return (
    <>
      {loading ? (
        <>
          <UsersSkeleton />
          <UsersSkeleton />
          <UsersSkeleton />
          <UsersSkeleton />
        </>
      ) : (
        <div className="my-[15px] ">
          {users.map((user) => {
            return <User key={user.profileId} user={user} />
          })}
        </div>
      )}
    </>
  )
}
