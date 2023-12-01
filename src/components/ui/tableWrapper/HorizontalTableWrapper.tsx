import { ReactNode, useEffect } from 'react'
import './HorizontalTableWrapper.scss'

type Props = {
  children: ReactNode
}

export const HorizontalTableWrapper = ({ children }: Props) => {
  useEffect(() => {
    const resizeTableBox = () => {
      const bigTables = document.querySelectorAll('.tableContainer')

      bigTables.forEach(element => {
        const bigTable = element as HTMLElement
        const boxWidth = bigTable.offsetWidth

        const tableWidth = bigTable.querySelector('table')!.scrollWidth

        bigTable.classList.remove('scroll-left')

        if (tableWidth > boxWidth) {
          bigTable.classList.add('scroll-right')
        } else {
          bigTable.classList.remove('scroll-right')
        }
      })
    }

    resizeTableBox()
    window.addEventListener('resize', resizeTableBox)

    return () => {
      window.removeEventListener('resize', resizeTableBox)
    }
  }, [])

  const handleTableScroll = (event: any) => {
    const container = event.target
    const table = container.querySelector('table')

    console.log(container)
    console.log(table)

    container.classList.add('scroll-right')
    container.classList.add('scroll-left')

    // if (table.scrollLeft + table.offsetWidth >= table.scrollWidth) {
    //   if (container.classList.contains('scroll-right')) {
    //     container.classList.remove('scroll-right')
    //   }
    // } else if (table.scrollLeft === 0) {
    //   if (container.classList.contains('scroll-left')) {
    //     container.classList.remove('scroll-left')
    //   }
    // } else {
    //   if (!container.classList.contains('scroll-right')) {
    //     container.classList.add('scroll-right')
    //   }
    //   if (!container.classList.contains('scroll-left')) {
    //     container.classList.add('scroll-left')
    //   }
    // }
  }

  return (
    <div className={'tableContainer'} onScroll={handleTableScroll}>
      {children}
    </div>
  )
}
