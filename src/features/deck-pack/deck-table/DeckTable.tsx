import { Table } from '@/components/ui/tables'
import { TableRow } from '@/components/ui/tables/TableRow'
import { TableBody } from '@/components/ui/tables/TableBody'
import { TableCell } from '@/components/ui/tables/TableCell'
import { TableHeadCellWithSort } from '@/components/ui/tables/SortTableHeader'
import { PlayCardIcon } from '@/assets/icons/components/PlayCardIcon.tsx'
import { TableHead } from '@/components/ui/tables/TableHead'
import { EditIcon } from '@/assets/icons/components/EditIcon.tsx'
import { DeleteIcon } from '@/assets/icons/components/DeleteIcon.tsx'
import { TableHeadCell } from '@/components/ui/tables/TableHeadCell'
import { DeckModals } from '@/features/deck-pack/types'
import { Deck, Sort } from '@/services/deck-service'
import { useNavigate } from 'react-router-dom'
import { deckTableColumnsEN, deckTableColumnsRU } from '@/options'
import { Icon } from '@/components/ui/icon'
import { useAppSelector } from '@/services/store.ts'
import { getCurrentLanguage } from '@/selectors'
import s from './DeckTable.module.scss'

type Props = {
  onIconClick: (value: DeckModals | null, item: Deck) => void
  className?: string
  data: Deck[]
  sort?: Sort
  setSort?: (value: any) => void
  currentUserId?: string
}

export const DeckTable = (props: Props) => {
  const { data, className, onIconClick, sort, setSort, currentUserId } = props

  const currentLanguage = useAppSelector(getCurrentLanguage)

  const navigate = useNavigate()

  return (
    <div className={s.tableContainer}>
      <Table className={className}>
        <TableHead>
          <TableRow>
            <TableHeadCellWithSort
              columns={currentLanguage === 'en' ? deckTableColumnsEN : deckTableColumnsRU}
              sort={sort}
              onSort={setSort}
            />
            <TableHeadCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(deck => {
            return (
              <TableRow key={deck.id}>
                <TableCell className={s.deckName} onClick={() => navigate(`${deck.id}/cards`)}>
                  {deck.cover && <Icon className={s.deckImg} srcIcon={deck.cover} />}
                  {deck.name}
                </TableCell>
                <TableCell>{deck.cardsCount}</TableCell>
                <TableCell>{new Date(deck.updated).toLocaleDateString()}</TableCell>
                <TableCell>{deck.author.name}</TableCell>
                <TableCell className={s.iconsCell}>
                  <div className={s.iconsWrapper}>
                    <PlayCardIcon
                      className={s.icon}
                      onClick={() => navigate(`${deck.id}/learn`, { state: { name: deck.name } })}
                    />
                    <EditIcon
                      onClick={() => onIconClick(DeckModals.UPDATE, deck)}
                      className={currentUserId === deck.author.id ? s.icon : s.disableIcon}
                    />
                    <DeleteIcon
                      onClick={() => onIconClick(DeckModals.DELETE, deck)}
                      className={currentUserId === deck.author.id ? s.icon : s.disableIcon}
                    />
                  </div>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
