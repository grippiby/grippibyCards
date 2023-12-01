import { Selector } from '@/components/ui/select'
import { Typography } from '@/components/ui/typography'
import { useI18N, usePagination } from '@/hooks'
import { clsx } from 'clsx'
import s from './Pagination.module.scss'

type Props = {
  options: string[]
  siblingCount?: number
  totalCount: number
  currentPage: number
  pageSize: number
  className?: string
  setItemsPerPageFn?: (quantity: number) => void
  setCurrentPageFn?: (page: number) => void
}
export const Pagination = (props: Props) => {
  const {
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
    className,
    options,
    setCurrentPageFn,
    setItemsPerPageFn,
  } = props

  const paginationRange = usePagination(totalCount, pageSize, currentPage, siblingCount)
  const { t } = useI18N()

  if (currentPage === 0 || paginationRange.length < 1) {
    return null
  }

  const nextPageHandler = () => {
    setCurrentPageFn?.(currentPage + 1)
  }

  const previousPageHandler = () => {
    setCurrentPageFn?.(currentPage - 1)
  }

  const currentPageHandler = (page: number) => {
    setCurrentPageFn?.(page)
  }

  const changeSelectFilterHandler = (value: string) => {
    setItemsPerPageFn?.(Number(value))
  }

  const lastPage = paginationRange[paginationRange.length - 1]

  const containerClassName = clsx(s.paginationContainer, className)

  const leftArrowClassName = clsx(s.paginationArrow, currentPage === 1 && s.disabled)

  const rightArrowClassName = clsx(s.paginationArrow, currentPage === lastPage && s.disabled)

  const mappedPages = paginationRange.map((page, index) => {
    const itemClassName = clsx(s.paginationItem, page === currentPage && s.selected)

    const typographyClassName = page === currentPage ? s.textColorDark : s.textColorLight

    if (page === 'DOTS') {
      return (
        <li key={index} className={s.dots}>
          &#8230;
        </li>
      )
    }

    return (
      <li
        key={index}
        className={itemClassName}
        onClick={() => currentPageHandler(Number(page))}
        role={'button'}
        aria-label={`page ${page}`}
      >
        <Typography variant={'body2'} className={typographyClassName}>
          {page}
        </Typography>
      </li>
    )
  })

  return (
    <ul className={containerClassName} role={'navigation'} aria-label={'pagination'}>
      <div className={s.pages}>
        <li
          className={leftArrowClassName}
          onClick={previousPageHandler}
          role={'button'}
          aria-label={'previous page'}
        >
          <div className={`${s.arrow} ${s.leftArrow}`} />
        </li>
        {mappedPages}
        <li
          className={rightArrowClassName}
          onClick={nextPageHandler}
          role={'button'}
          aria-label={'next page'}
        >
          <div className={`${s.arrow} ${s.rightArrow}`} />
        </li>
      </div>
      <div className={s.settings} role={'settings'} aria-label={'pagination page filter'}>
        <Typography variant={'body2'} className={s.textColorLight}>
          {t('show')}
        </Typography>
        <Selector
          className={s.trigger}
          value={String(pageSize)}
          setSelectedValue={changeSelectFilterHandler}
          selectData={options}
        />
        <Typography variant={'body2'} className={s.textColorLight}>
          {t('itemsPerPage')}
        </Typography>
      </div>
    </ul>
  )
}
