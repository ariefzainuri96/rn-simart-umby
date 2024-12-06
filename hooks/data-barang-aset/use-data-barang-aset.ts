import { delay } from '@/helper/utils';
import { RequestState } from '@/model/common-enum';
import { DataBarangAsetModel } from '@/model/data-barang-aset/data-barang-aset-model';
import { useEffect, useState } from 'react';

export default function useDataBarangAset() {
  const [dataBarangAsetList, setDataBarangAsetList] = useState<DataBarangAsetModel[]>([]);
  const [dataBarangAsetState, setDataBarangAsetState] = useState(RequestState.IDLE);

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
      {
        namaBarang: 'Nama Barang 2',
        noBarang: 'No Barang 2',
        jumlah: '100',
        ruang: 'Ruang 2',
        deskripsi: 'Deskripsi Barang 2',
        spesifikasi: 'Spesifikasi Barang 2',
      },
      {
        namaBarang: 'Nama Barang 3',
        noBarang: 'No Barang 3',
        jumlah: '100',
        ruang: 'Ruang 3',
        deskripsi: 'Deskripsi Barang 3',
        spesifikasi: 'Spesifikasi Barang 3',
      },
      {
        namaBarang: 'Nama Barang 4',
        noBarang: 'No Barang 4',
        jumlah: '100',
        ruang: 'Ruang 4',
        deskripsi: 'Deskripsi Barang 4',
        spesifikasi: 'Spesifikasi Barang 4',
      },
    ]);
  }

  // fetch data
  useEffect(() => {
    fetchData();
  }, []);

  return { dataBarangAsetList, fetchData, dataBarangAsetState } as const;
}
