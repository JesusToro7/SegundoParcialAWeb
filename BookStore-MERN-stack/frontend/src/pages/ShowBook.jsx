import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const fieldStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  padding: '1rem 0',
  borderBottom: '1px solid var(--border-subtle)',
};

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:5555/books/${id}`);
        setBook(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-deep)', padding: '2.5rem' }}>
      <BackButton />

      <div style={{ maxWidth: '600px', margin: '2.5rem auto 0' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--gold-dim)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '10px' }}>Detalle</p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '34px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '2rem', letterSpacing: '-0.01em' }}>Información del Libro</h1>

        {loading ? <Spinner /> : (
          <div style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '10px',
            padding: '1.5rem 2rem',
          }}>
            {[
              { label: 'ID', value: book._id, mono: true },
              { label: 'Título', value: book.title, display: true },
              { label: 'Autor', value: book.author, italic: true },
              { label: 'Año de Publicación', value: book.publishYear, mono: true },
              { label: 'Fecha de Creación', value: book.createdAt ? new Date(book.createdAt).toLocaleString('es-CO') : 'N/A', mono: true },
              { label: 'Última Actualización', value: book.updatedAt ? new Date(book.updatedAt).toLocaleString('es-CO') : 'N/A', mono: true },
            ].map(({ label, value, mono, display, italic }) => (
              <div key={label} style={fieldStyle}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--gold-dim)',
                }}>{label}</span>
                <span style={{
                  fontFamily: display ? 'var(--font-display)' : mono ? 'var(--font-mono)' : 'var(--font-body)',
                  fontSize: display ? '20px' : mono ? '13px' : '16px',
                  fontWeight: display ? '600' : 'normal',
                  fontStyle: italic ? 'italic' : 'normal',
                  color: display ? 'var(--text-primary)' : mono ? 'var(--text-secondary)' : 'var(--text-secondary)',
                  wordBreak: 'break-all',
                }}>{value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowBook;
