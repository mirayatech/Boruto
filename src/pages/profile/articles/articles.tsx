/* eslint-disable react/react-in-jsx-scope */
import {
  query,
  orderBy,
  onSnapshot,
  collection,
  CollectionReference,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'

import { firebaseDb, ArticleType } from '../../../lib/'
import Article from './article'

type ArticlesProps = {
  PIN: string
}

export function Articles({ PIN }: ArticlesProps) {
  const [articles, setArticles] = useState<ArticleType[] | null>(null)

  const ArticlesCollectionReference = collection(
    firebaseDb,
    'articles'
  ) as CollectionReference<ArticleType>

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(ArticlesCollectionReference, orderBy('timestamp', 'desc')),
      (snapshot) => {
        setArticles(
          snapshot.docs.map((doc) => ({ ...doc.data(), articleId: doc.id }))
        )
      }
    )

    return () => {
      unsubscribe()
    }
  }, [firebaseDb])
  return (
    <div className="grid grid-cols-2  mx-auto w-[815px] mb-[50px]">
      {articles &&
        articles.map((article) => {
          return <Article article={article} key={article.articleId} PIN={PIN} />
        })}
    </div>
  )
}
