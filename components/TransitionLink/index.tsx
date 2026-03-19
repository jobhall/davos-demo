'use client'

import React from 'react'
import Link from 'next/link'
import { useTransitionRouter } from 'next-view-transitions'
import { transitionSlideInOut } from '@/consts/transition'

type TransitionLinkType = {
  href: string
  children?: React.ReactNode
  className?: string
  newTab?: boolean
  noReferrer?: boolean
}

export const TransitionLink: React.FC<TransitionLinkType> = (props) => {
  const { children, className, newTab, href, noReferrer } = props

  const router = useTransitionRouter()

  const target = newTab ? { target: '_blank' } : {}
  const rel = noReferrer ? { rel: 'noopener noreferrer' } : {}

  if (href.indexOf('http') > -1 && newTab) {
    return (
      <Link className={className} href={href || ''} {...rel} {...target}>
        {children && children}
      </Link>
    )
  }

  return (
    <a
      className={className}
      href={href || ''}
      {...rel}
      {...target}
      onClick={(e) => {
        e.preventDefault()
        router.push(href, {
          onTransitionReady: transitionSlideInOut,
        })
      }}
    >
      {children && children}
    </a>
  )
}
