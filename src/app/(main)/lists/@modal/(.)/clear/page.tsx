'use client';

import { useState } from 'react';

import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Modal,
  ModalClose,
  ModalDialog,
} from '@mui/joy';

import { ButtonOutlined, ButtonSolid } from '@/components/buttons';
import { Paragraph } from '@/components/texts';
import { useLists } from '@/hooks/lists';

export default function ListsClearModal() {
  const t = useTranslations('Components.Lists.Modals.ClearList');

  const { clearListItems } = useLists();

  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const closeModal = () => router.back();

  const confirmAction = async () => {
    try {
      await clearListItems();

      closeModal();
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <Paragraph>{t('Message')}</Paragraph>
        </DialogContent>

        <DialogActions orientation="horizontal">
          <ButtonOutlined onClick={() => closeModal()} disabled={isSubmitting}>
            {t('Cancel')}
          </ButtonOutlined>

          <ButtonSolid
            color="danger"
            onClick={() => confirmAction()}
            disabled={isSubmitting}
          >
            {t('Confirm')}
          </ButtonSolid>
        </DialogActions>
      </ModalDialog>
    </Modal>
  );
}
