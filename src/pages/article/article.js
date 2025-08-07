import '../article/article.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
function Article() {
  return(
    <>
           <CardGroup className='everything'>
      <Card className='myy-card'>
        <Card.Img className='imgek' variant="top" src="https://kimdikart.ir/wp-content/uploads/2025/06/%D8%B1%D9%86%DA%AF-%D9%87%D8%A7%DB%8C-%DA%A9%DB%8C%D9%85%D8%AF%DB%8C-1.webp" />
        <Card.Body>
          <Card.Title style={{fontWeight: '700' , textAlign:'center'}}>بهترین ترکیب کیمدی </Card.Title>
          <Card.Text>
          خب ببینیم در ترکیب 4-4-2 کیمدی ما چه بازیکنایی حضور دارند. در این ترکیب بازیکن زیر 96 نداریم و اکثر کارت ها سیلور لیمیتد هستند. تراشتگن در درون دروازه، رودیگر و آرائوخو در مرکز خط دفاع، تئو هرناندز و اشرف حکیمی 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"  style={{cursor: 'pointer'}}>ادامه مطلب</small>
        </Card.Footer>
      </Card>
      <Card className='myy-card'>
        <Card.Img className='imgek' variant="top" src="https://kimdikart.ir/wp-content/uploads/2025/07/%DA%A9%DB%8C%D9%85%D8%AF%DB%8C-%D8%A7%D9%85%D8%B6%D8%A7-%D8%A8%D9%87%D8%AA%D8%B1%D9%87-%DB%8C%D8%A7-%D8%B1%D9%88%DB%8C%D8%A7%D9%84.webp" />
        <Card.Body>
          <Card.Title style={{fontWeight: '700' , textAlign:'center'}}>کیمدی امضا بهتره یا رویال؟ </Card.Title>
          <Card.Text>
          ما از جهات مختلف این 2 کارت رو بررسی میکنیم. مثلا ارزش کلکسیونی ، قیمت و زیبایی این 2 کارت رو با هم مقایسه میکنیم. اما قبلش باید بگم که این موضوع کاملا سلیقه ایه و هر کارتی که خودتون بیشتر ازش خوشتون میاد، 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"  style={{cursor: 'pointer'}}>ادامه مطلب</small>
        </Card.Footer>
      </Card>
      <Card className='myy-card'>
        <Card.Img variant="top" className='imgek' src="https://kimdikart.ir/wp-content/uploads/2025/07/%D8%A8%D9%87%D8%AA%D8%B1%DB%8C%D9%86-%D8%AA%D8%B1%DA%A9%DB%8C%D8%A8-%DA%A9%DB%8C%D9%85%D8%AF%DB%8C-1.webp" />
        <Card.Body>
          <Card.Title style={{fontWeight: '700' , textAlign:'center'}}>رنگ های کیمدی2025 </Card.Title>
          <Card.Text>
           اگه پس زمینه کارت کیمدی شما زردِ نشون دهنده اینه که بازیکنی که روی کارت شما است در پست دفاع بازی میکنه. البته رنگ زرد پس زمینه کیمدی یک پیام دیگه هم برای ما داره و اون اینکه که کارت ما از سری بسیک(Basic) هست!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"  style={{cursor: 'pointer'}}>ادامه مطلب</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </>
  )
};

export default Article;