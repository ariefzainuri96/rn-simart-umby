import { delay } from '@/helper/utils';
import { RequestState } from '@/model/common-enum';
import { DataBarangAsetModel } from '@/model/data-barang-aset/data-barang-aset-model';
import { useEffect, useState } from 'react';

export function useDataBarangAset() {
  const [dataBarangAsetList, setDataBarangAsetList] = useState<DataBarangAsetModel[]>([]);
  const [dataBarangAsetState, setDataBarangAsetState] = useState(RequestState.IDLE);

  // fetch data
  useEffect(() => {
    async function fetchData() {
      setDataBarangAsetState(RequestState.LOADING);
      await delay(1500);
      setDataBarangAsetState(RequestState.SUCCESS);
      setDataBarangAsetList([
        {
          namaBarang: 'Nama Barang 1',
          noBarang: 'No Barang 1',
          jumlah: '100',
          ruang: 'Ruang 1',
          deskripsi: 'Deskripsi Barang 1',
          spesifikasi: 'Spesifikasi Barang 1',
        },
      ]);
    }

    fetchData();
  }, []);

  return { dataBarangAsetList, dataBarangAsetState } as const;
}
