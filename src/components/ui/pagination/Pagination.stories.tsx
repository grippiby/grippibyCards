import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Pagination } from '@/components/ui/pagination'

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    currentPage: {
      description: 'Represents the current active page.',
    },
    totalCount: {
      description: 'Represents the total count of data available from the source.',
    },
    pageSize: {
      description: 'Represents the maximum data that is visible in a single page.',
    },
    siblingCount: {
      description:
        'Represents the min number of page buttons to be shown on each side of the current page button (default = 1)',
    },
  },
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

// @ts-ignore
export const CustomPaginationWithState: Story = {
  render: () => <RenderPagination />,
}

const RenderPagination = () => {
  const [page, setPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(10)

  const options = ['10', '20', '30', '50', '100']

  const totalCount = 100

  return (
    <Pagination
      options={options}
      totalCount={totalCount}
      currentPage={page}
      pageSize={pageSize}
      setItemsPerPageFn={setPageSize}
      setCurrentPageFn={setPage}
    />
  )
}
