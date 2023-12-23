import styles from './Form.module.css'

import { useRef, useState } from 'react'

function Form() {
   const inputRef = useRef();

   const [heightUp, setHeightUp] = useState(40);

   const handleTextChange = (event) => {
      if (event.target.scrollHeight > event.target.clientHeight) {
         setHeightUp((up) => up + 10);
      }
   };

   const selectFile = () => {
      inputRef.current.click()
   }

   return (
      <form className={styles.form}>
         <div className={styles.title}>Welcome,<br /><span>fill in the form to continue</span></div>
         <input className={styles.input} name="name" placeholder="Name" type="text" />
         <input className={styles.input} name="price" placeholder="Price" type="number" />
         <textarea className={styles.input} name="description" placeholder="Description"
            onChange={handleTextChange} style={{ height: heightUp }}></textarea>
         {/* <select className={styles.input} name="category" defaultValue="">
            <option value="" disabled>Category</option>
            <option value="phone">Телефон</option>
            <option value="toy">Іграшка</option>
            <option value="cleaning_equipment">Техніка для прибирання</option>
            <option value="kitchen_appliances">Техніка для кухні</option>
         </select> */}
         <input style={{ display: "none" }} name="image" type="file" accept="image/png, image/jpeg" ref={inputRef} />
         <button className={`${styles.button_confirm} ${styles.button_file}`}
            type='button' onClick={selectFile}>Select a photo</button>
         <input type="submit" className={styles.button_confirm} value='Let`s go →' />
      </form>
   )
}

export default Form;
