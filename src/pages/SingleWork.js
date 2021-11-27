import React, { useState, useEffect, useContext } from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'
import NotFound from '../pages/NotFound'
import Modal from '../components/Modal'
import SingleTask from '../components/SingleTask'
import { DataContext } from '../context/DataContext'
import { Link, useParams } from 'react-router-dom'
import useFind from '../hooks/useFind'

export default function SingleWork() {
  const [currentWork, setCurrentWork] = useState()
  const [showModal, setShowModal] = useState(false)
  const [modalImg, setModalImg] = useState(null)

  // Work list
  const { works } = useContext(DataContext)
  /* Get the param (/work/:name) in the URL and
  try to find out the single work */
  const { name } = useParams()
  const newName = name.replaceAll('-', ' ')
  const { found } = useFind({ list: works, field: 'name', value: newName })

  useEffect(() => {
    if (found) setCurrentWork(found)
  }, [found])

  useDocumentTitle(currentWork && currentWork.name)

  if (!currentWork) {
    return <NotFound />
  }

  // found work destructuring
  const {
    name: workName,
    url: { external: externalUrl, repository },
    img,
    img: { single: singleImg },
    tasks,
  } = currentWork

  const showWorkImgInModal = (img) => {
    document.documentElement.style.overflowY = 'hidden'
    setShowModal(true)
    setModalImg({ ...img })
  }

  return (
    <>
      {showModal && <Modal img={modalImg} setShowModal={setShowModal} />}
      <section id="top" className="section">
        <Link className="btn" to="/work">
          Regresar
        </Link>
        <h2 className="section-secondary-title section-single-work-title">
          {workName}
        </h2>
        <div className="section-single-work-main-info">
          {img && (
            <>
              {singleImg && (
                <img
                  className="section-single-work-img"
                  src={`../images/work/${singleImg}`}
                  alt={`Imagen de previsualización de ${workName}`}
                  onClick={() =>
                    showWorkImgInModal({
                      src: `../images/work/${singleImg}`,
                      alt: name,
                    })
                  }
                />
              )}
            </>
          )}

          {externalUrl && (
            <a
              className="btn section-single-work-link"
              href={externalUrl}
              target="_blank"
              rel="noreferrer"
            >
              Ver en vivo
            </a>
          )}
          {repository && (
            <a
              className="btn section-single-work-link"
              href={repository}
              target="_blank"
              rel="noreferrer"
            >
              Ver repositorio
            </a>
          )}
        </div>

        {tasks && (
          <>
            <h3 className="section-title">Lo que hice</h3>
            <ul className="section-single-work-item-list">
              {tasks.map((task) => (
                <SingleTask key={task.id} task={task} />
              ))}
            </ul>
          </>
        )}
      </section>
    </>
  )
}
