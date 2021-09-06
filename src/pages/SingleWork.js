import React, { useState, useEffect, useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { useParams } from 'react-router-dom';
import useFind from '../hooks/useFind';

export default function SingleWork() {
  const [currentWork, setCurrentWork] = useState(null);
  const { works } = useContext(DataContext);
  const { name } = useParams();

  const newName = name.replaceAll('-', ' ');
  const { found } = useFind(works, 'name', newName);

  useEffect(() => {
    if (found) {
      setCurrentWork(found);
    }
  }, [found]);

  if (!currentWork) {
    return <h1>404</h1>;
  }

  const {
    name: workName,
    img,
    img: { single: singleImg, process: processImg },
    tasks,
  } = currentWork;

  return (
    <section className="section">
      <h2 className="section-secondary-title">{workName}</h2>
      {img && (
        <>
          {singleImg && (
            <img src={`../images/work/${singleImg}`} alt={workName} />
          )}
        </>
      )}

      {tasks && (
        <>
          <h3 className="section-title">Lo que hice</h3>
          {tasks.map((task) => {
            const { id, name, img } = task;
            return (
              <li key={id}>
                <h4>{name}</h4>
                {img && (
                  <img
                    src={`../images/work/${img}`}
                    alt={`Imagen de el proceso ${id}`}
                  />
                )}
              </li>
            );
          })}
        </>
      )}
    </section>
  );
}
