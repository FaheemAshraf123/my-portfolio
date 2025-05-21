import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { contactMe } from '../../portfolio'
import './Contact.css'

const Contact = () => {
    const { email , social } = contactMe
  // if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
        {email && (
        <a href={`mailto:${contactMe.email}`}>
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a>
      )}
          {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <WhatsAppIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      
    </section>
  )
}

export default Contact
