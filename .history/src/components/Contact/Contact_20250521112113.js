import { contact, social } from '../../portfolio'
import './Contact.css'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a>
      {/* <a
        href='https://wa.me/923126545180?text=Hi%20Faheem%2C%20I%20would%20like%20to%20connect!'
        aria-label='whatsapp'
        className='link link--icon'
        target='_blank'
        rel='noopener noreferrer'
      >
        <WhatsAppIcon />
      </a> */}
      {/* <a
                      href={contact.number}
                      aria-label='Whatsapp'
                      className='link link--icon'
                    >
                      <WhatsAppIcon />
                    </a> */}
      {social && (
        <>
          {social.Contact && (
            <a
              href={social.Contact}
              aria-label='Whatsapp'
              className='link link--icon'
            >
              <WhatsAppIcon />
            </a>
          )}
        </>
      )}
    </section>
  )
}

export default Contact
