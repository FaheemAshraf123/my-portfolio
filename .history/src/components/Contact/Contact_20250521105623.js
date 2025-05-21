import { contact } from '../../portfolio'
import './Contact.css'

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
    <a
  href="https://wa.me/923126545180?text=Hi%20Faheem%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!"
  target="_blank"
  rel="noopener noreferrer"
>
  <span type="button" className="btn btn--outline">
    Message me
  </span>
</a>
    </section>
  )
}

export default Contact
