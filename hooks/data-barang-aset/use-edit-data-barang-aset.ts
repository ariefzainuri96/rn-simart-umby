import { generateStringArray } from '@/helper/utils';
import { DetailDataBarangAsetModel } from '@/model/data-barang-aset/detail-data-barang-aset-model';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useRef, useState } from 'react';
import useAxios from '../networking/use-axios';

export default function useEditDataBarangAset(id: string) {
  const axios = useAxios();

  const [form, setForm] = useState<DetailDataBarangAsetModel>({});
  const [vendor, setVendor] = useState<string[]>([]);
  const [kategoriAset, setKategoriAset] = useState<string[]>([]);
  const [subKategoriAset, setSubKategoriAset] = useState<string[]>([]);
  const vendorMaxPage = 3;
  const kategoriAsetMaxPage = 3;
  const subKategoriAsetMaxPage = 3;

  function handleChange(key: keyof DetailDataBarangAsetModel, value: any) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  const queryVendor = useInfiniteQuery({
    queryKey: ['vendor'],
    queryFn: async ({ pageParam }) => {
      // return await axios.get<string[]>(`/vendor?page=${pageParam}`);
      console.log('pageParam', pageParam);
      setVendor((prev) => [...prev, ...generateStringArray()]);
      return generateStringArray();
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPageParam === vendorMaxPage) return undefined;

      return lastPageParam + 1;
    },
  });

  const queryKategoriAset = useInfiniteQuery({
    queryKey: ['kategoriAset'],
    queryFn: async ({ pageParam }) => {
      // return await axios.get<string[]>(`/vendor?page=${pageParam}`);
      console.log('pageParam', pageParam);
      setKategoriAset((prev) => [...prev, ...generateStringArray()]);
      return generateStringArray();
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPageParam === kategoriAsetMaxPage) return undefined;

      return lastPageParam + 1;
    },
  });

  const querySubKategoriAset = useInfiniteQuery({
    queryKey: ['subKategoriAset'],
    queryFn: async ({ pageParam }) => {
      // return await axios.get<string[]>(`/vendor?page=${pageParam}`);
      console.log('pageParam', pageParam);
      setSubKategoriAset((prev) => [...prev, ...generateStringArray()]);
      return generateStringArray();
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPageParam === subKategoriAsetMaxPage) return undefined;

      return lastPageParam + 1;
    },
  });

  const queryDetailData = useQuery({
    queryKey: ['detail-data-barang-aset', id],
    queryFn: async () => {
      // const data = (await axios.get<DetailDataBarangAsetModel>(`/data-barang-aset/${id}`)).data;
      const data = {
        noInventaris: '123',
        namaAset: 'Nama aset',
        deskripsiAset:
          'Lorem ipsum dolor sit amet consectetur. Dignissim lacus gravida porttitor potenti justo. ',
        spesifikasiAset: `Apple MacBook Air M1
  Layar : 13,3 inci IPS (2560 x 1600 piksel) 227 ppi
  Prosesor : chip Apple M1
  Kartu grafik :-
  RAM : 8 GB (dapat diperluas hingga 16 GB)
  Penyimpanan : SSD 256 GB atau 512 GB (dapat diperluas hingga 2 TB)
  Optik : Tidak
  Konektivitas : Wi-Fi 6 802.11ax, Bluetooth versi 5.0
  Port : 2x Thunderbolt/USB 4 (Thunderbolt 3 hingga 40 Gb/s dan USB 3.1 Gen hingga 10 Gb/s)
  Baterai : Li-Polimer, 49,9 Wh`,
        isAsetSPK: false,
        noSPK: '1234',
        vendor: '',
        tipeAset: '',
        kategoriAset: '',
        subKategoriAset: '',
        location: '',
        convidentality: '',
        integrity: '',
        availability: '',
        tanggalAkuisisi: '10/12/2024',
        tanggalDepresiasi: '20/12/2024',
        asetTerdepresiasi: '',
        sumberAset: '',
        jumlahAset: '',
        nvb: '',
        statusAset: '',
      };

      setForm(data);

      return data;
    },
  });

  return {
    form,
    queryDetailData,
    queryKategoriAset,
    querySubKategoriAset,
    handleChange,
    queryVendor,
    vendor,
    kategoriAset,
    subKategoriAset,
  } as const;
}
