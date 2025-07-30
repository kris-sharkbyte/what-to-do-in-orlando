// src/components/FirebaseProvider.tsx
'use client';

import { useEffect } from 'react';
import '@/lib/firebase'; // import your firebase config/init here

export default function FirebaseProvider() {
  useEffect(() => {
    // Firebase initialized on import
  }, []);

  return null; // no UI needed
}
