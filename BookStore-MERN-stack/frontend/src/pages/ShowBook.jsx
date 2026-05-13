import {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

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
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Mostrar Libro</h1> {/* ← Corregí "text-3x1" a "text-3xl" */}
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Id</span>
            <span>{book._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Titulo</span>
            <span>{book.title}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Autor</span>
            <span>{book.author}</span> {/* ← CORRECCIÓN IMPORTANTE: Cambié "book.Author" a "book.author" */}
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Año de Publicación</span>
            <span>{book.publishYear}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Fecha de Creación</span>
            <span>{book.createdAt ? new Date(book.createdAt).toString() : 'N/A'}</span> {/* ← Corregí .toString() */}
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Última Actualización</span>
            <span>{book.updatedAt ? new Date(book.updatedAt).toString() : 'N/A'}</span> {/* ← Corregí .toString() */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
