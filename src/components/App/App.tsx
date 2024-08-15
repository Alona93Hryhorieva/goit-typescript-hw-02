import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { fetchImages } from "../../unsplashApi";
import css from "./App.module.css";
import { Image } from "../../types";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
// Modal.setAppElement("#root");

export default function App() {
  //   const [inputValue, setInputValue] = useState("");
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalImages, setTotalImages] = useState<boolean | number>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  //   useEffect(() => {
  //     async function getImages() {
  //       if (query === "") return;
  //       setLoading(true);
  //       try {
  //         const data = await fetchImages(query, page);
  //         setImages(data);
  //         setLoading(true);
  //       } catch (error) {
  //         setError(true);
  //       } finally {
  //         setLoading(false);
  //       }
  //     }
  //     getImages();
  //   }, [query, page]);

  const handleSearch = async (newQuery: string) => {
    if (newQuery.trim() === "") {
      toast.error("Please enter a search query");
      return;
    }
    setImages([]);
    setPage(1);
    setTotalImages(0);
    setQuery(newQuery);
  };
  //  const handleSearch = async (newQuery) => {
  //    try {
  //      setImages([]);
  //      setQuery(newQuery);
  //      setError(false);
  //      setLoading(true);
  //      const data = await fetchImages(newQuery, page);
  //      setImages(data);
  //    } catch (error) {
  //      setError(true);
  //    } finally {
  //      setLoading(false);
  //    }
  //  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  //   const handleLoadMore = async () => {
  //     try {
  //       setLoading(true);
  //       const data = await fetchImages(query, page + 1);
  //       setImages((prevImages) => [...prevImages, ...data]);
  //       setPage((prevPage) => prevPage + 1);
  //     } catch (error) {
  //       setError(true);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function getImages() {
      try {
        setLoading(true);
        setError(false);
        const { results, total } = await fetchImages(query, page);
        if (results.length === 0) {
          toast.error("No images found for your request");
          setTotalImages(false);
          return;
        }
        setImages((prevImages) => [...prevImages, ...results]);
        setTotalImages(page < total);
        if (page === total) {
          return toast.error("All available images have already been uploaded");
        }
      } catch (error) {
        setError(true);
        toast.error("Error loading images");
      } finally {
        setLoading(false);
      }
    }
    getImages();
  }, [query, page]);

  //     async function getImages() {
  //       try {
  //         setLoading(true);
  //         setError(false);
  //         const data = await fetchImages(query, page);
  //         setImages(data);
  //       } catch (error) {
  //         setError(true);
  //       } finally {
  //         setLoading(false);
  //       }
  //       getImages();
  //     }
  //   }, [query, page]);

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className={css.app}>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {totalImages && !loading && images.length > 0 && (
        <LoadMoreBtn onClick={handleLoadMore}></LoadMoreBtn>
      )}
      <ImageModal
        isOpen={modalIsOpen}
        imageUrl={selectedImage}
        closeModal={closeModal}
      />
      {/* {modalIsOpen && selectedImage && (
        <ImageModal
          isOpen={modalIsOpen}
          imageUrl={selectedImage}
          closeModal={closeModal}
        />
      )} */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          className: "toast-container",
        }}
      />
      {error && <ErrorMessage />}
    </div>
  );
}

// import { useEffect, useState } from "react";
// import toast, { Toaster } from "react-hot-toast";
// import { fetchImages } from "../../unsplashApi";
// import css from "./App.module.css";
// import SearchBar from "../SearchBar/SearchBar";
// import ImageGallery from "../ImageGallery/ImageGallery";
// import ErrorMessage from "../ErrorMessage/ErrorMessage";
// import Loader from "../Loader/Loader";
// import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
// import ImageModal from "../ImageModal/ImageModal";
// // Modal.setAppElement("#root");

// export default function App() {
//   //   const [inputValue, setInputValue] = useState("");
//   const [images, setImages] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [query, setQuery] = useState("");
//   const [page, setPage] = useState(1);
//   const [totalImages, setTotalImages] = useState(false);
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);

//   //   useEffect(() => {
//   //     async function getImages() {
//   //       if (query === "") return;
//   //       setLoading(true);
//   //       try {
//   //         const data = await fetchImages(query, page);
//   //         setImages(data);
//   //         setLoading(true);
//   //       } catch (error) {
//   //         setError(true);
//   //       } finally {
//   //         setLoading(false);
//   //       }
//   //     }
//   //     getImages();
//   //   }, [query, page]);

//   const handleSearch = async (newQuery) => {
//     if (newQuery.trim() === "") {
//       toast.error("Please enter a search query");
//       return;
//     }
//     setImages([]);
//     setPage(1);
//     setTotalImages(0);
//     setQuery(newQuery);
//   };
//   //  const handleSearch = async (newQuery) => {
//   //    try {
//   //      setImages([]);
//   //      setQuery(newQuery);
//   //      setError(false);
//   //      setLoading(true);
//   //      const data = await fetchImages(newQuery, page);
//   //      setImages(data);
//   //    } catch (error) {
//   //      setError(true);
//   //    } finally {
//   //      setLoading(false);
//   //    }
//   //  };

//   const handleLoadMore = () => {
//     setPage((prevPage) => prevPage + 1);
//   };
//   //   const handleLoadMore = async () => {
//   //     try {
//   //       setLoading(true);
//   //       const data = await fetchImages(query, page + 1);
//   //       setImages((prevImages) => [...prevImages, ...data]);
//   //       setPage((prevPage) => prevPage + 1);
//   //     } catch (error) {
//   //       setError(true);
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   };

//   useEffect(() => {
//     if (query === "") {
//       return;
//     }
//     async function getImages() {
//       try {
//         setLoading(true);
//         setError(false);
//         const { results, total } = await fetchImages(query, page);
//         if (results.length === 0) {
//           toast.error("No images found for your request");
//           setTotalImages(false);
//           return;
//         }
//         setImages((prevImages) => [...prevImages, ...results]);
//         setTotalImages(page < total);
//         if (page === total) {
//           return toast.error("All available images have already been uploaded");
//         }
//       } catch (error) {
//         setError(true);
//         toast.error("Error loading images");
//       } finally {
//         setLoading(false);
//       }
//     }
//     getImages();
//   }, [query, page]);

//   //     async function getImages() {
//   //       try {
//   //         setLoading(true);
//   //         setError(false);
//   //         const data = await fetchImages(query, page);
//   //         setImages(data);
//   //       } catch (error) {
//   //         setError(true);
//   //       } finally {
//   //         setLoading(false);
//   //       }
//   //       getImages();
//   //     }
//   //   }, [query, page]);

//   const openModal = (imageUrl) => {
//     setSelectedImage(imageUrl);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//     setSelectedImage(null);
//   };

//   return (
//     <div>
//       <SearchBar onSearch={handleSearch} />
//       {loading && <Loader />}
//       {images.length > 0 && (
//         <ImageGallery images={images} openModal={openModal} />
//       )}
//       {totalImages && !loading && images.length > 0 && (
//         <LoadMoreBtn onClick={handleLoadMore}></LoadMoreBtn>
//       )}
//       <ImageModal
//         isOpen={modalIsOpen}
//         imageUrl={selectedImage}
//         closeModal={closeModal}
//       />
//       <Toaster
//         position="top-сenter"
//         reverseOrder={false}
//         toastOptions={{
//           className: "toast-container",
//         }}
//       />
//       {error && <ErrorMessage />}
//     </div>
//   );
// }
