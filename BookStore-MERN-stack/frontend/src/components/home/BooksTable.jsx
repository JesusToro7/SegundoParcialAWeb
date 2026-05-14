import { Link } from "react-router-dom";
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  if (books.length === 0) {
    return (
      <div style={{
        textAlign: 'center',
        padding: '5rem 2rem',
        color: 'var(--text-muted)',
        fontStyle: 'italic',
        fontFamily: 'var(--font-body)',
        fontSize: '18px',
      }}>
        No hay libros en el catálogo aún.
      </div>
    );
  }

  return (
    <div style={{
      background: 'var(--bg-surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: '8px',
      overflow: 'hidden',
    }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
        <colgroup>
          <col style={{ width: '52px' }} />
          <col />
          <col className="max-md:hidden" />
          <col style={{ width: '130px' }} className="max-md:hidden" />
          <col style={{ width: '120px' }} />
        </colgroup>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--border-mid)' }}>
            {['#', 'Título', 'Autor', 'Año', 'Acciones'].map((h, i) => (
              <th key={h} style={{
                padding: '14px 20px',
                textAlign: i === 0 ? 'center' : i === 4 ? 'center' : 'left',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: '500',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--gold-dim)',
                background: 'var(--bg-card)',
              }}
              className={i === 2 || i === 3 ? 'max-md:hidden' : ''}
              >{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr
              key={book._id}
              style={{ borderBottom: '1px solid var(--border-subtle)', transition: 'background 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-card-hover)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <td style={{
                padding: '16px 20px',
                textAlign: 'center',
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                color: 'var(--text-muted)',
              }}>{String(index + 1).padStart(2, '0')}</td>

              <td style={{
                padding: '16px 20px',
                fontFamily: 'var(--font-display)',
                fontSize: '16px',
                fontWeight: '600',
                color: 'var(--text-primary)',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}>{book.title}</td>

              <td style={{
                padding: '16px 20px',
                color: 'var(--text-secondary)',
                fontStyle: 'italic',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }} className="max-md:hidden">{book.author}</td>

              <td style={{
                padding: '16px 20px',
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                color: 'var(--text-muted)',
              }} className="max-md:hidden">{book.publishYear}</td>

              <td style={{ padding: '16px 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '18px' }}>
                  <Link to={`/books/details/${book._id}`} title="Ver detalles">
                    <BsInfoCircle style={{
                      fontSize: '17px',
                      color: 'var(--gold-dim)',
                      transition: 'color 0.15s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--gold-dim)'}
                    />
                  </Link>
                  <Link to={`/books/edit/${book._id}`} title="Editar">
                    <AiOutlineEdit style={{
                      fontSize: '18px',
                      color: 'var(--text-muted)',
                      transition: 'color 0.15s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                    />
                  </Link>
                  <Link to={`/books/delete/${book._id}`} title="Eliminar">
                    <MdOutlineDelete style={{
                      fontSize: '19px',
                      color: 'var(--text-muted)',
                      transition: 'color 0.15s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#c0392b'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                    />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BooksTable
