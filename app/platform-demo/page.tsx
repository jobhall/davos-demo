import type { Metadata } from 'next';
import PlatformDemoClient from './client';

export const metadata: Metadata = {
  title: 'Platform Demo',
};

export default function PlatformDemo() {
  return (
    <PlatformDemoClient />
  );
}
