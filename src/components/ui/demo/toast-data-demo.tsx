'use client'

import { Button } from '../button'

type ToastProps = {
  title?: string
  description?: string
  variant?: 'destructive' | 'default'
}
export function ToastDemo(props: ToastProps) {
  return (
    <Button variant='outline' onClick={() => {}}>
      shadcn
    </Button>
  )
}
