import { FiChevronRight } from 'react-icons/fi'
import styles from './HomePage.module.css'
import dev from '../images/dev.png'
import Men from '../images/men.png'
import TemplateCard from '../components/TemplateCard'

const templates = [
  {
    id: 1,
    title: 'Bamboo set orders',
    imageUrl: dev,
    isFree: false,
  },
  {
    id: 2,
    title: 'Delivery tracking orders',
    imageUrl: Men,
    isFree: true,
  },
  {
    id: 3,
    title: 'Sephora orders',
    imageUrl: '/placeholder.svg?height=600&width=338',
    isFree: false,
  },
  {
    id: 4,
    title: 'Adidas orders',
    imageUrl: '/placeholder.svg?height=600&width=338',
    isFree: true,
  },
  {
    id: 5,
    title: 'Activity feed',
    imageUrl: '/placeholder.svg?height=600&width=338',
    isFree: false,
  },
  {
    id: 6,
    title: 'Transaction history',
    imageUrl: '/placeholder.svg?height=600&width=338',
    isFree: false,
  },
  {
    id: 7,
    title: 'Transactions list',
    imageUrl: '/placeholder.svg?height=600&width=338',
    isFree: false,
  },
  {
    id: 8,
    title: 'Payment methods',
    imageUrl: '/placeholder.svg?height=600&width=338',
    isFree: false,
  },
]

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <div className={styles.breadcrumb}>
        <span>Home</span>
        <FiChevronRight />
        <span>Templates</span>
      </div>

      <h1 className={styles.title}>orders templates</h1>
      <p className={styles.description}>
        Explore orders templates optimized for seamless integration.
      </p>

      <div className={styles.counter}>
        Total Templates: <span>{templates.length}</span>
      </div>

      <div className={styles.grid}>
        {templates.map((template) => (
          <TemplateCard
            key={template.id}
            title={template.title}
            imageUrl={template.imageUrl}
            isFree={template.isFree}
          />
        ))}
      </div>
    </div>
  )
}
