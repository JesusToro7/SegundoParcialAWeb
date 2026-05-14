import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  background: 'var(--bg-deep)',
  border: '1px solid var(--border-subtle)',
  borderRadius: '5px',
  color: 'var(--text-primary)',
  fontFamily: 'var(--font-body)',
  fontSize: '16px',
  marginTop: '8px',
  outline: 'none',
  transition: 'border-color 0.2s',
};

const labelStyle = {
  display: 'block',
  fontFamily: 'var(--font-mono)',
  fontSize: '11px',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--gold-dim)',
};

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5555/books/${id}`)
      .then(response => {
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setTitle(response.data.title);
        setLoading(false);
      }).catch(error => {
        setLoading(false);
        alert('Error al cargar el libro');
        console.log(error);
      });
  }, [id]);

  const handleEditBook = () => {
    const data = { title, author, publishYear };
    setLoading(true);
    axios.put(`http://localhost:5555/books/${id}`, data)
      .then(() => { setLoading(false); navigate('/'); })
      .catch(error => { setLoading(false); alert('Error al guardar'); console.log(error); });
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-deep)', padding: '2.5rem' }}>
      <BackButton />

      <div style={{ maxWidth: '560px', margin: '2.5rem auto 0' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--gold-dim)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '10px' }}>Catálogo</p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '34px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '2rem', letterSpacing: '-0.01em' }}>Editar Libro</h1>

        {loading ? <Spinner /> : (
          <div style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '10px',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}>
            <div>
              <label style={labelStyle}>Título</label>
              <input type='text' value={title} onChange={e => setTitle(e.target.value)} style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                onBlur={e => e.target.style.borderColor = 'var(--border-subtle)'} />
            </div>
            <div>
              <label style={labelStyle}>Autor</label>
              <input type='text' value={author} onChange={e => setAuthor(e.target.value)} style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                onBlur={e => e.target.style.borderColor = 'var(--border-subtle)'} />
            </div>
            <div>
              <label style={labelStyle}>Año de publicación</label>
              <input type='number' value={publishYear} onChange={e => setPublishYear(e.target.value)} style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                onBlur={e => e.target.style.borderColor = 'var(--border-subtle)'} />
            </div>
            <button
              onClick={handleEditBook}
              style={{
                marginTop: '0.5rem',
                padding: '13px',
                background: 'var(--gold)',
                color: 'var(--bg-deep)',
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
              onMouseEnter={e => e.currentTarget.style.background = 'var(--gold-light)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--gold)'}
            >
              Guardar cambios
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditBook;
