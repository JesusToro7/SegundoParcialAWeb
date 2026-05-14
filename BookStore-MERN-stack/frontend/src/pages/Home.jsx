import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from 'react-icons/md';
import BooksTable from "../components/home/BooksTable";
import BooksCards from "../components/home/BooksCards";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:5555/books');
        setBooks(response.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-deep)' }}>
      {/* Header */}
      <header style={{
        borderBottom: '1px solid var(--border-subtle)',
        padding: '0 2.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '72px',
        background: 'var(--bg-surface)',
      }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '22px',
            fontWeight: '700',
            color: 'var(--gold)',
            letterSpacing: '-0.01em',
          }}>Bibliotheca</span>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--text-muted)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}>BookStore</span>
        </div>

        <Link
          to='/books/create'
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 20px',
            background: 'var(--gold)',
            color: 'var(--bg-deep)',
            borderRadius: '4px',
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            fontWeight: '500',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--gold-light)'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--gold)'}
        >
          <MdOutlineAddBox style={{ fontSize: '16px' }} />
          Nuevo libro
        </Link>
      </header>

      {/* Main */}
      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 2.5rem' }}>
        {/* Title row */}
        <div style={{ marginBottom: '2.5rem' }}>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--gold-dim)',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            marginBottom: '10px',
          }}>Catálogo</p>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '38px',
            fontWeight: '700',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
            lineHeight: '1.15',
          }}>Lista de Libros</h1>
          {books.length > 0 && (
            <p style={{
              marginTop: '8px',
              color: 'var(--text-secondary)',
              fontStyle: 'italic',
              fontSize: '16px',
            }}>{books.length} {books.length === 1 ? 'título en colección' : 'títulos en colección'}</p>
          )}
        </div>

        {/* View toggle */}
        <div style={{
          display: 'flex',
          gap: '4px',
          marginBottom: '2rem',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '6px',
          padding: '4px',
          width: 'fit-content',
        }}>
          {['table', 'card'].map(type => (
            <button
              key={type}
              onClick={() => setShowType(type)}
              style={{
                padding: '7px 20px',
                borderRadius: '4px',
                border: 'none',
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.18s ease',
                background: showType === type ? 'var(--gold)' : 'transparent',
                color: showType === type ? 'var(--bg-deep)' : 'var(--text-muted)',
              }}
            >
              {type === 'table' ? 'Tabla' : 'Tarjetas'}
            </button>
          ))}
        </div>

        {/* Content */}
        {loading ? <Spinner /> : showType === 'table'
          ? <BooksTable books={books} />
          : <BooksCards books={books} />
        }
      </main>
    </div>
  )
}

export default Home
