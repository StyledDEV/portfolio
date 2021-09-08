import React, { useState, useEffect, useContext } from 'react';
import Modal from '../components/Modal';
import { DataContext } from '../context/DataContext';
import { Link, useParams } from 'react-router-dom';
import useFind from '../hooks/useFind';

export default function SingleWork() {
  const [currentWork, setCurrentWork] = useState();
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  const { works } = useContext(DataContext);
  const { name } = useParams();
  const newName = name.replaceAll('-', ' ');
  const { found } = useFind(works, 'name', newName);

  useEffect(() => {
    if (found) setCurrentWork(found);
  }, [found]);

  if (!currentWork) {
    return <h1>404</h1>;
  }

  const {
    name: workName,
    url: { external: externalUrl },
    img,
    img: { single: singleImg },
    tasks,
  } = currentWork;

  const showWorkImg = (img) => {
    document.documentElement.style.overflowY = 'hidden';
    setShowModal(true);
    setModalImg({ ...img });
  };

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
                  alt={workName}
                  onClick={() =>
                    showWorkImg({
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
        </div>

        {tasks && (
          <>
            <h3 className="section-title">Lo que hice</h3>
            <ul className="section-single-work-item-list">
              {tasks.map((task) => {
                const { id, name, img, description } = task;
                return (
                  <li key={id} className="section-single-work-item">
                    <h4 className="section-tertiary-title section-single-work-item-name">
                      {name}
                    </h4>
                    {img && (
                      <img
                        className="section-single-work-item-img"
                        src={`../images/work/${img}`}
                        alt={`Imagen del proceso ${id + 1}`}
                      />
                    )}
                    {description && (
                      <p className="section-single-work-item-desc">
                        {description}
                      </p>
                    )}
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </section>
    </>
  );
}
