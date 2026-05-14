import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from './BookModal';

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: hovered ? 'var(--bg-card-hover)' : 'var(--bg-card)',
          border: `1px solid ${hovered ? 'var(--border-mid)' : 'var(--border-subtle)'}`,
          borderRadius: '8px',
          padding: '1.5rem',
          position: 'relative',
          transition: 'all 0.2s ease',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        {/* Year badge */}
        <span style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: 'var(--gold)',
          background: 'rgba(201,168,76,0.1)',
          border: '1px solid rgba(201,168,76,0.2)',
          borderRadius: '3px',
          padding: '3px 9px',
          letterSpacing: '0.06em',
        }}>{book.publishYear}</span>

        {/* ID */}
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          color: 'var(--text-muted)',
          letterSpacing: '0.05em',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          paddingRight: '70px',
        }}>{book._id}</p>

        {/* Divider */}
        <div style={{ height: '1px', background: 'var(--border-subtle)', margin: '4px 0' }} />

        {/* Title */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
          <PiBookOpenTextLight style={{ color: 'var(--gold)', fontSize: '20px', marginTop: '2px', flexShrink: 0 }} />
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '17px',
            fontWeight: '600',
            color: 'var(--text-primary)',
            lineHeight: '1.3',
          }}>{book.title}</h2>
        </div>

        {/* Author */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <BiUserCircle style={{ color: 'var(--gold-dim)', fontSize: '18px', flexShrink: 0 }} />
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '15px',
            fontStyle: 'italic',
            color: 'var(--text-secondary)',
          }}>{book.author}</p>
        </div>

        {/* Actions */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '8px',
          paddingTop: '12px',
          borderTop: '1px solid var(--border-subtle)',
        }}>
          <button
            onClick={() => setShowModal(true)}
            style={{
              background: 'transparent',
              border: '1px solid var(--border-subtle)',
              borderRadius: '3px',
              padding: '5px 12px',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.15s',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold-dim)'; e.currentTarget.style.color = 'var(--gold)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
          >
            <BiShow style={{ fontSize: '14px' }} /> Vista rápida
          </button>

          <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
            <Link to={`/books/details/${book._id}`}>
              <BsInfoCircle style={{ fontSize: '17px', color: 'var(--gold-dim)', transition: 'color 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--gold-dim)'} />
            </Link>
            <Link to={`/books/edit/${book._id}`}>
              <AiOutlineEdit style={{ fontSize: '18px', color: 'var(--text-muted)', transition: 'color 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'} />
            </Link>
            <Link to={`/books/delete/${book._id}`}>
              <MdOutlineDelete style={{ fontSize: '19px', color: 'var(--text-muted)', transition: 'color 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#c0392b'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'} />
            </Link>
          </div>
        </div>
      </div>

      {showModal && <BookModal book={book} onClose={() => setShowModal(false)} />}
    </>
  );
};

export default BookSingleCard;
