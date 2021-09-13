import shopDataEnglish from '../../../data/DataSubjects/ShoppingEnglish'
import CardShopp from '../CardShopp/CardShopp'
import style from '../Shopp.module.css'

function ShoppEnglish() {
  
  return (
    <div className={style.shopp}>
      {
      shopDataEnglish.map(el=> <CardShopp tittle={el.name} images={el.img} info={el.description} subject={el.subject} id={el.id}  key={el.id}  />  )  
       
      }
      
    </div>
  )
}

export default ShoppEnglish
