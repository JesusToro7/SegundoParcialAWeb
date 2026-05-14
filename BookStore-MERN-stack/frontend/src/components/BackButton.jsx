import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const BackButton = ({ destination = '/' }) => {
  return (
    <div className='flex'>
      <Link
        to={destination}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 18px',
          border: '1px solid rgba(201,168,76,0.3)',
          borderRadius: '4px',
          color: '#C9A84C',
          fontFamily: "'DM Mono', monospace",
          fontSize: '12px',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          transition: 'all 0.2s ease',
          background: 'transparent',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = 'rgba(201,168,76,0.08)';
          e.currentTarget.style.borderColor = 'rgba(201,168,76,0.6)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)';
        }}
      >
        <BsArrowLeft style={{ fontSize: '14px' }} />
        Volver
      </Link>
    </div>
  )
}

export default BackButton
