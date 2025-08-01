import type { BootstrapVariantType } from '@/types/component-props'
import type { ProjectType } from '@/types/data'

export const getProjectStatusVariant = (status: ProjectType['status']) => {
  let statusVariant: BootstrapVariantType = 'success'
  if (status === 'Pending') statusVariant = 'danger'
  else if (status === 'Work in Progress') statusVariant = 'info'
  else if (status === 'Coming soon') statusVariant = 'warning'
  return statusVariant
}
