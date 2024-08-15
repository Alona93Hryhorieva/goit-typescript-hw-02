import toast, { Toaster } from "react-hot-toast";
import { Formik, Form, Field } from "formik";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

interface FormValues {
  query: string;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <header>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values: FormValues, actions) => {
          if (!values.query.trim()) {
            toast.error("Please enter a search term!");
          } else {
            onSearch(values.query);
            actions.resetForm();
          }
        }}
      >
        <Form>
          <Field
            className={css.input}
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
      <Toaster />
    </header>
  );
}

// без тс
// import toast, { Toaster } from "react-hot-toast";
// import { Formik, Form, Field } from "formik";
// import css from "./SearchBar.module.css";

// export default function SearchBar({ onSearch }) {
//   return (
//     <header>
//       <Formik
//         initialValues={{ query: "" }}
//         onSubmit={(values, actions) => {
//           onSearch(values.query);
//           actions.resetForm();
//         }}
//       >
//         <Form>
//           <Field
//             className={css.input}
//             name="query"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//           />
//           <button type="submit">Search</button>
//         </Form>
//       </Formik>
//     </header>
//   );
// }
