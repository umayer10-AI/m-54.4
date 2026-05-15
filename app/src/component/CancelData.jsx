"use client"
import { deleteData } from '@/lib/action';
import { authClient } from '@/lib/auth-client';
import { AlertDialog, Button } from '@heroui/react';
import React from 'react';

const CancelData = ({p,a}) => {

    const b = async () => {

        const token = await authClient.token()
        const t = token?.data
        console.log(t)

        await deleteData(p,t)
    }

    return (
        <AlertDialog>
      <Button variant="danger" className={'w-full py-5'}>Cancel Booking</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete destination permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{a.destinationName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={b} slot="close" variant="danger">
                Confirm Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
    );
};

export default CancelData;