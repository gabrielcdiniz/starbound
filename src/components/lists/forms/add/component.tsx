'use client';

import { useCallback, useId, useState, type ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';

import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

import { Stack } from '@mui/joy';

import { zodResolver } from '@hookform/resolvers/zod';
import { CurrencyDollar, Hash, TextT } from '@phosphor-icons/react/dist/ssr';

import { ButtonOutlined, ButtonSolid } from '@/components/buttons';
import { IconBase } from '@/components/icons';
import { InputOutlined } from '@/components/inputs';
import { useLists } from '@/hooks/lists';
import {
  ListItemsAddSchema,
  ListItemsAddSchemaType,
} from '@/schemas/list-items';
import type { CreateListItemType } from '@/shared/types';
import {
  formatCurrency,
  formatCurrencyString,
  sanitizeCurrencyToFloat,
} from '@/utils/currency';

export function ListsFormAdd() {
  const tv = useTranslations('Validations');
  const t = useTranslations('Components.Lists.Forms.AddItem');

  const router = useRouter();

  const { currentList, addListItem } = useLists();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<ListItemsAddSchemaType>({
    mode: 'all',
    resolver: zodResolver(ListItemsAddSchema),
    defaultValues: {
      name: '',
      price: formatCurrency(0),
      quantity: 0,
    },
  });

  const formatPrice = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      const formatted = formatCurrencyString(value);

      setValue('price', formatted ?? '');
    },
    [setValue],
  );

  const iconDecorator = new Map([
    ['name', <IconBase key={useId()} icon={TextT} size={24} />],
    ['price', <IconBase key={useId()} icon={CurrencyDollar} size={24} />],
    ['quantity', <IconBase key={useId()} icon={Hash} size={24} />],
  ]);

  const castToNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const serialized = Number(value.replace(/\D/gi, ''));

    const quantity = serialized > 100 ? 100 : serialized;

    setValue('quantity', quantity);
  };

  const onSubmit = async (data: ListItemsAddSchemaType) => {
    if (!currentList?.id) return;

    setIsSubmitting(true);

    const payload: CreateListItemType = {
      ...data,

      price: sanitizeCurrencyToFloat(data.price),
      listId: currentList.id,
    };

    try {
      await addListItem(payload);

      closeModal();
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => router.back();

  const disableActions = isSubmitting;

  return (
    <Stack
      component="form"
      gap={5}
      width="100%"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack gap={3} alignItems="stretch">
        <InputOutlined
          name="name"
          control={control}
          error={errors.name && tv(errors.name.message)}
          placeholder={t('Name.Placeholder')}
          startDecorator={iconDecorator.get('name')}
          disabled={disableActions}
        />

        <InputOutlined
          name="price"
          control={control}
          onChange={formatPrice}
          error={errors.price && tv(errors.price.message, { value: '0' })}
          placeholder={t('UnitPrice.Placeholder')}
          startDecorator={iconDecorator.get('price')}
          disabled={disableActions}
        />

        <InputOutlined
          name="quantity"
          control={control}
          error={errors.quantity && tv(errors.quantity.message)}
          onChange={castToNumber}
          placeholder={t('Quantity.Placeholder')}
          startDecorator={iconDecorator.get('quantity')}
          disabled={disableActions}
        />
      </Stack>

      <Stack gap={2} direction="row" justifyContent="flex-end">
        <ButtonOutlined
          type="button"
          onClick={closeModal}
          variant="soft"
          color="danger"
          disabled={disableActions}
        >
          {t('Cancel')}
        </ButtonOutlined>

        <ButtonSolid
          type="submit"
          variant="soft"
          color="primary"
          disabled={disableActions}
          loading={disableActions}
        >
          {t('Save')}
        </ButtonSolid>
      </Stack>
    </Stack>
  );
}
