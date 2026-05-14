import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const BookModal = ({ book, onClose }) => {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.75)',
        backdropFilter: 'blur(4px)',
        zIndex: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
      }}
      onClick={onClose}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-mid)',
          borderRadius: '10px',
          padding: '2rem',
          maxWidth: '480px',
          width: '100%',
          position: 'relative',
          animation: 'fadeUp 0.2s ease',
        }}
      >
        <style>{`@keyframes fadeUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }`}</style>

        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-muted)',
            fontSize: '20px',
            lineHeight: 1,
            transition: 'color 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
        >
          <AiOutlineClose />
        </button>

        {/* Year */}
        <span style={{
          display: 'inline-block',
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: 'var(--gold)',
          background: 'rgba(201,168,76,0.1)',
          border: '1px solid rgba(201,168,76,0.2)',
          borderRadius: '3px',
          padding: '4px 12px',
          letterSpacing: '0.06em',
          marginBottom: '1rem',
        }}>{book.publishYear}</span>

        {/* ID */}
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          color: 'var(--text-muted)',
          marginBottom: '1.2rem',
          letterSpacing: '0.04em',
        }}>{book._id}</p>

        {/* Title */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '10px' }}>
          <PiBookOpenTextLight style={{ color: 'var(--gold)', fontSize: '22px', marginTop: '3px', flexShrink: 0 }} />
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '22px',
            fontWeight: '700',
            color: 'var(--text-primary)',
            lineHeight: '1.25',
          }}>{book.title}</h2>
        </div>

        {/* Author */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
          <BiUserCircle style={{ color: 'var(--gold-dim)', fontSize: '20px', flexShrink: 0 }} />
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '16px',
            fontStyle: 'italic',
            color: 'var(--text-secondary)',
          }}>{book.author}</p>
        </div>

        <div style={{ height: '1px', background: 'var(--border-subtle)', marginBottom: '1.2rem' }} />

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '15px',
          color: 'var(--text-muted)',
          lineHeight: '1.7',
          fontStyle: 'italic',
        }}>
          ¡Gracias por tomarte el tiempo de explorar nuestra colección!
          Te invitamos a descubrir más títulos en nuestra biblioteca.
        </p>
      </div>
    </div>
  );
};

export default BookModal;
