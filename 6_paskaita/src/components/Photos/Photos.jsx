import { random } from '../../utilities/random';
import { useState, useEffect } from "react";
import "./Photos.css";
import Button from '../Button/Button';
import Photo from '../Photo/Photo';

const Photos = () => {
  const [photoIds, setPhotoIds] = useState(null);
  const [photos, setPhotos] = useState(null);
  const [message, setMessage] = useState("Press here to choose a picture");
  const [uploadStatus, setUploadStatus] = useState("Upload");
  const [downloadStatus, setDownloadStatus] = useState("Download");

  const generateRandomPhoto = () => {
    const photoIds = random(0, 33);
    setPhotoIds(photoIds);
    setMessage("Next Picture »");
  };

  useEffect(() => {
    if (photoIds !== null) {
      fetch(`https://picsum.photos/v2/list?page=${photoIds}`)
        .then((resp) => resp.json())
        .then((response) => {
          setPhotos(response);
        })
        .catch((error) => console.error(error));
    }
  }, [photoIds]);

  const handleDownloadClick = () => {
    setDownloadStatus("Downloaded ✓");
    setMessage("Next Picture »");
  };

  const handleUploadClick = () => {
    setUploadStatus("Uploaded ✓");
    setMessage("Next Picture »");
  };

  return (
    <div>
      <Button variant='pressMe' onClick={generateRandomPhoto}>{message}</Button>
      {photos && <Photo url={photos[1].download_url} title={photos[1].author} />}
      <Button variant='upload' onClick={handleUploadClick}>{uploadStatus}</Button>
      <Button variant='download' onClick={handleDownloadClick}>{downloadStatus}</Button>
    </div>
  );
};

export default Photos;


