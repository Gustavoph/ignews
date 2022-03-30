import { useRouter } from 'next/router';
import { api } from '../../services/api';
import styles from './styles.module.scss';
import { signIn, useSession } from 'next-auth/react';
import { getStripeJs } from '../../services/stripe-js';

export function SubscribeButton() {
  const { data: session } = useSession()
  const router = useRouter()

  async function handleSubscribe() {
    if (!session) {
      signIn('github')
      return;
    }

    if (session.activeSubscription) {
      router.push('/posts')
      return;
    }

    try {
      const response = await api.post('/subscribe')

      const { sessionId } = response.data

      const stripe = await getStripeJs()

      stripe.redirectToCheckout({ sessionId })
    } catch (err) {
      alert(err)
    }
  }
  
  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  );
}