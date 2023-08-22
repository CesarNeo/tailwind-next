'use client'

import {
  Item,
  ItemIndicator,
  ItemText,
  SelectItemProps as RadixSelectItemProps,
} from '@radix-ui/react-select'
import { Check } from 'lucide-react'

type SelectItemProps = RadixSelectItemProps & {
  text: string
}

function SelectItem({ text, ...props }: SelectItemProps) {
  return (
    <Item
      className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50 dark:data-[highlighted]:bg-zinc-700"
      {...props}
    >
      <ItemText asChild>
        <span className="text-black dark:text-zinc-100">{text}</span>
      </ItemText>

      <ItemIndicator>
        <Check className="h-4 w-4 text-violet-500 dark:text-violet-300" />
      </ItemIndicator>
    </Item>
  )
}

export default SelectItem
