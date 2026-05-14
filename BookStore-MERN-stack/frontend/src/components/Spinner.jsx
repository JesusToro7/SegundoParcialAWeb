const Spinner = () => {
  return (
    <div className='flex justify-center items-center py-16'>
      <div style={{
        width: '40px',
        height: '40px',
        border: '2px solid rgba(201,168,76,0.15)',
        borderTop: '2px solid #C9A84C',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite'
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}

export default Spinner
