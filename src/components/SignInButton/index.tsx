import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss'
import { signIn, signOut, useSession } from 'next-auth/react'

export function SignInButton() {
  const { data: session } = useSession()

  return session ? (
    <button 
      type="button" 
      className={styles.signOutButton}
      onClick={() => signOut()}
    >
      <FaGithub/>
      {session.user.name}
      <FiX className={styles.closeIcon}/>
    </button>
  ) : (
    <button 
      type="button" 
      onClick={() => signIn('github')}
      className={styles.signInButton}
    >
      <FaGithub />
      Sign in with GitHub
    </button>
  )
}