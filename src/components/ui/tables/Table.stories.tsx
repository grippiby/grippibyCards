import { Meta, StoryObj } from '@storybook/react'

import { Table } from '@/components/ui/tables/Table.tsx'
import { TableBody } from '@/components/ui/tables/TableBody'
import { TableCell } from '@/components/ui/tables/TableCell'
import { TableHead } from '@/components/ui/tables/TableHead'
import { TableHeadCell } from '@/components/ui/tables/TableHeadCell'
import { TableRow } from '@/components/ui/tables/TableRow'
import { Column } from '@/components/ui/tables/TableColumn'

const meta = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const CompleteTable: Story = {
  render: () => (
    <div style={{ width: '50vw' }}>
      <Table>
        <Column style={{ width: '25%' }} />
        <Column style={{ width: '25%' }} />
        <Column style={{ width: '25%' }} />
        <Column style={{ width: '25%' }} />
        <TableHead>
          <TableRow>
            <TableHeadCell>ISBN</TableHeadCell>
            <TableHeadCell>Title</TableHeadCell>
            <TableHeadCell>Price</TableHeadCell>
            <TableHeadCell></TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>3476896</TableCell>
            <TableCell>My first HTML</TableCell>
            <TableCell>$53</TableCell>
            <TableCell>🌭🌭🌭</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>5869207</TableCell>
            <TableCell>My first CSS</TableCell>
            <TableCell>$49</TableCell>
            <TableCell>🍩🍩🍩</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>58784985</TableCell>
            <TableCell>My first React</TableCell>
            <TableCell>$1600</TableCell>
            <TableCell>🍅🍅🍅</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
}
