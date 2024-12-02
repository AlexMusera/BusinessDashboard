import Link from 'next/link'
import { Nav, NavItem, NavLink } from 'react-bootstrap'
import { getDictionary } from '@/locales/dictionary'

export default async function HeaderFeaturedNav() {
  const dict = await getDictionary()
  return (
    <Nav>
      
    </Nav>
  )
}
