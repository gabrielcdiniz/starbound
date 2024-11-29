'use client';

import { use } from 'react';

import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

import {
  DialogContent,
  DialogTitle,
  Divider,
  Modal,
  ModalClose,
  ModalDialog,
} from '@mui/joy';

import { ListsFormEdit } from '@/components/lists';

type ListsAddModalProps = Readonly<{
  params: Promise<{
    id: string;
  }>;
}>;

export default function ListsEditModal({ params }: ListsAddModalProps) {
  const { id } = use(params);

  const t = useTranslations('Components.Lists.Modals.AddItem');

  const router = useRouter();

  const closeModal = () => router.back();

  return (
    <Modal open onClose={() => closeModal()}>
      <ModalDialog color="primary" layout="center" size="md" variant="outlined">
        <ModalClose
          color="danger"
          variant="soft"
          sx={{ '--ModalClose-inset': '1.1rem' }}
        />

        <DialogTitle level="h3" sx={{ textTransform: 'capitalize' }}>
          {t('Title')}
        </DialogTitle>

        <Divider sx={{ mb: 2, mt: 0.5 }} />

        <DialogContent>
          <ListsFormEdit id={id} />
        </DialogContent>
      </ModalDialog>
    </Modal>
  );
}
