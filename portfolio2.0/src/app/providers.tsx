'use client'

interface Props {
    children: React.ReactNode;
  }

import { ThemeProvider } from 'next-themes'

export function Providers({ children }:Props) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}