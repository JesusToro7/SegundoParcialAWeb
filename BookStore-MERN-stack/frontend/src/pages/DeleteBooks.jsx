import { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineDelete } from 'react-icons/md';

const DeleteBooks = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    axios.delete(`http://localhost:5555/books/${id}`)
      .then(() => { setLoading(false); navigate('/'); })
      .catch(error => { setLoading(false); alert('Error al eliminar'); console.log(error); });
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-deep)', padding: '2.5rem' }}>
      <BackButton />

      <div style={{ maxWidth: '500px', margin: '3rem auto 0', textAlign: 'center' }}>
        <div style={{
          width: '64px',
          height: '64px',
          background: 'rgba(192,57,43,0.1)',
          border: '1px solid rgba(192,57,43,0.25)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem',
        }}>
          <MdOutlineDelete style={{ fontSize: '28px', color: '#c0392b' }} />
        </div>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '30px',
          fontWeight: '700',
          color: 'var(--text-primary)',
          marginBottom: '0.75rem',
          letterSpacing: '-0.01em',
        }}>Eliminar Libro</h1>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '17px',
          color: 'var(--text-secondary)',
          marginBottom: '2.5rem',
          lineHeight: '1.6',
        }}>¿Estás seguro de que deseas eliminar este libro? Esta acción no se puede deshacer.</p>

        {loading ? <Spinner /> : (
          <div style={{
            background: 'var(--bg-surface)',
            border: '1px solid rgba(192,57,43,0.2)',
            borderRadius: '10px',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}>
            <button
              onClick={handleDeleteBook}
              style={{
                padding: '13px',
                background: '#c0392b',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                fontWeight: '500',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#a93226'}
              onMouseLeave={e => e.currentTarget.style.background = '#c0392b'}
            >
              Sí, eliminar
            </button>
            <button
              onClick={() => navigate('/')}
              style={{
                padding: '13px',
                background: 'transparent',
                color: 'var(--text-muted)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '5px',
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-mid)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
            >
              Cancelar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeleteBooks;
