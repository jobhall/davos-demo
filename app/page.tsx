import type { Metadata } from 'next';
import HomeClient from './client';

export const metadata: Metadata = {
  title: 'Homepage',
};

export default function Home() {
  return (
    <HomeClient />
  );
}
