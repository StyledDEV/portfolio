import { useEffect, useContext } from 'react';
import { DataContext } from '../context/DataContext';

export default function useDocumentTitle(title) {
  const { siteName } = useContext(DataContext);
  useEffect(() => {
    if (title) {
      document.title = siteName + ` - ${title}`;
    } else {
      document.title = siteName;
    }
  }, [title, siteName]);
  return {};
}
