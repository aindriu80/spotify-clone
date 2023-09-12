'use client';

import { Price, ProductWithPrice } from '@/types';
import Modal from './Modal';
import { useState } from 'react';
import { useUser } from '@/hooks/useUser';

interface SubscribeModalProps {
  products: ProductWithPrice[];
}

const SubscribeModal: React.FC<SubscribeModalProps> = ({ products }) => {
  const { user, isLoading, subscription } = useUser();
  const [priceIsLoading, setPriceIsLoading] = useState<string>();
  const handleContent = async (price: Price) => {};

  let content = <div className="">No product available.</div>;

  return (
    <Modal
      title="Only for premium users"
      description="Listen to music with Spotify Premium "
      isOpen
      onChange={() => {}}
    >
      {content}
    </Modal>
  );
};

export default SubscribeModal;
