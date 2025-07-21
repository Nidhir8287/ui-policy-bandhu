import Header from '@/components/Header';
import { useAuth } from '@/hooks/useAuth';
import React, { useEffect } from 'react';
import ContactForm from '@/components/ContactForm';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getUserProfile } from '../../api/userProfile';
import { Loader2 } from 'lucide-react';

function Payment() {
  const { user, signInWithGoogle, loading } = useAuth();
  const queryClient = useQueryClient();

  const {
    data: userProfile,
    isLoading: profileLoading,
    error: profileError,
  } = useQuery({
    queryKey: ['userProfile'],
    queryFn: getUserProfile,
    enabled: !!user,
    retry: 1,
  });

  useEffect(() => {
    if (!user && !loading) {
      signInWithGoogle();
    }
  }, [user, loading, signInWithGoogle]);

  if (profileLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loader2 className="h-12 w-12 text-[#5757CA] animate-spin" />
      </div>
    );
  }

  const { pending_subscription } = userProfile || {};

  return (
    <div className="min-h-screen bg-[#F3F3FF]">
      <Header />
      {!pending_subscription ? (
        <div className="flex justify-center gap-28 px-11 py-12">
          <div>
            <div className="text-[#5757CA]">Payment</div>
            <div className="text-black mt-10">
              Scan the QR code to pay Rs. 49 and upload the screenshot. We will approve it within 4 hours
            </div>
            <div className="mt-10 flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <img src="/logo-without-text.png" className="h-20 w-20" alt="PolicyBandhu Logo" />
                <span className="text-black text-2xl">
                  Policy<span className="text-[#7979DC]">Bandhu</span>
                </span>
              </div>
              <img src="/qrcode.png" className="h-96 w-96" alt="Payment QR Code" />
            </div>
          </div>
          <ContactForm
            onSuccess={() => {
              queryClient.invalidateQueries({ queryKey: ['userProfile'] });
            }}
          />
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen gap-28">
          <div className="flex flex-col gap-10 max-w-[400px]">
            <span className="text-6xl text-[#7979DC]">Congratulations</span>
            <span className="text-black">
              We have received your payment. We will approve your account for unlimited queries within 4 hours of payment time.
            </span>
          </div>
          <img src="/congratulations.png" alt="Success" />
        </div>
      )}
    </div>
  );
}

export default Payment;
